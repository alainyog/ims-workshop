define(["marionette", "vent", "templates"], function(Marionette, vent, JST) {
  "use strict";

  var localServices = new Backbone.Wreqr.RequestResponse();
  var localCommands = new Backbone.Wreqr.Commands();

  var Layout = Marionette.Layout.extend({
    template: JST["notas/layout"],
    tagName: "section",
    className: "hbox stretch",
    regions: {
      main: "#main",
      aside: "#aside"
    },
    onClose: function() {
      localServices.removeAllHandlers();
      localCommands.removeAllHandlers();
    }
  });

  var Note = Backbone.Model.extend({
    activate: function(v) {
      this.active = v;
    }
  });

  var NotesCollection = Backbone.Collection.extend({
    url: "/notes",
    model: Note,
    initialize: function() {
      localServices.setHandler("note", _.bind(this.dispatchNote, this));
    },
    dispatchNote: function(id) {
      var note;
      if (!id || this.length === 0) {
        note = new Note({date: new Date()});
        this.add(note);
      } else {
        note = this.get(id) || this.at(0);
      }
      this.activate(note);
      return note;
    },
    activate: function(note) {
      this.invoke("activate", false);
      note.activate(true);
      this.invoke("trigger", "change");
    }
  });

  var NoteBoxView = Marionette.ItemView.extend({
    template: JST["notas/notebox"],
    tagName: "li",
    className: "list-group-item hover",
    modelEvents: { "change": "render" },
    triggers: {
      "click .close": "note:remove",
      "click": "note:select"
    },
    templateHelpers: {
      title: function() {
        return (this.text||"").split("\n")[0].slice(0,20) || "Sin título";
      },
      dateStr: function() {
        var d = (new Date(this.date) || new Date());
        return (d.getDate()+"/"+(d.getMonth()+1)+", "+d.getHours()+":"+d.getMinutes());
      }
    },
    onBeforeRender: function() {
      var m = this.model.toJSON();
      this.$el[m.hidden? "hide" : "show"]();
      this.$el[this.model.active? "addClass":"removeClass"]("active");
    }
  });

  var MainView = Marionette.ItemView.extend({
    template: JST["notas/main"],
    tagName: "section",
    className: "vbox",
    events: { "keyup textarea": "updateNote", },
    triggers: { "click #new-note": "note:new" },
    ui: { pad: "textarea" },
    updateNote: _.throttle(function() {
      if (!this.model) {
        this.model = localServices.request("note", false);
      }
      this.model.set({
        "text": this.ui.pad.val(),
        "date": new Date()
      });
      this.trigger("note:changed", this, this.model);
    }, 100),
    reset: function(note) {
      if (note === this.model) {
        this.model = localServices.request("note", true);
        this.render();
      }
    }
  });

  var AsideView = Marionette.CompositeView.extend({
    template: JST["notas/aside"],
    tagName: "section",
    events: { "keyup #search-note": "search" },
    ui: { search: "#search-note" },
    className: "vbox",
    itemView: NoteBoxView,
    itemViewContainer: ".js-container",
    search: _.throttle(function() {
      this.trigger("note:search", this.ui.search.val());
    }, 200)
  });

  vent.reqres.setHandler("notas:start", function() {
    var layout = new Layout(),
        notes = new NotesCollection(),
        aside = new AsideView({collection: notes}),
        main = new MainView();

    layout.once("render", function() {
      layout.main.show(main);
      layout.aside.show(aside);
      notes.fetch();
    });

    aside.on("itemview:note:remove", function(v, args) {
      var nota = args.model;
      nota.destroy();
      main.reset(nota);
    });

    main.on("note:new", function() {
      main.model = notes.dispatchNote(false);
      main.render();
    });

    main.on("note:changed", function(v, note) {
      note.save();
    });

    aside.on("note:search", function(q) {
      if (q) {
        _.invoke(notes.filter(function(note) {
          var text = note.get("text") || "";
          return !~text.indexOf(q);
        }), "set", {hidden: true});
      } else {
        notes.invoke("set", {hidden: false});
      }
    });

    aside.on("itemview:note:select", function(v, args) {
      var note = args.model;
      notes.activate(note);
      main.model = note;
      main.render();
    });

    return layout;
  });

});
