define(["marionette", "vent", "templates"], function(Marionette, vent, JST) {
  "use strict";

  var Layout = Marionette.Layout.extend({
    template: JST["tareas/layout"],
    tagName: "section",
    className: "hbox stretch",
    regions: {
      main: "#js-main",
      aside: "#js-aside"
    }
  });

  var Task = Backbone.Model.extend({
    defaults: {
      title: "Nueva Tarea",
      date: new Date()
    }
  });

  var Comment = Backbone.Model.extend({
  });

  var TaskCollection = Backbone.Collection.extend({
    url: "/tasks",
    model: Task,
    activate: function(task) {
      if (!task) { return; }
      this.each(function(t) { t.active = false; t.trigger("update", t); });
      task.active = true;
      task.trigger("update", task);
      this.trigger("task:activate", task);
    }
  });

  var CommentCollection = Backbone.Collection.extend({
    constructor: function(options) {
      this.task = options.task;
      delete options.task;
      Backbone.Collection.call(this, options);
      if (!this.task.id) { this.task.save(); }
      this.fetch();
    },
    model: Comment,
    url: function() {
      return "/comments/" + this.task.id;
    }
  });

  var TaskBoxView = Marionette.ItemView.extend({
    template: JST["tareas/taskbox"],
    tagName: "li",
    events: {
      "click .task-name": "edit",
      "keyup input.edit": "save",
      "change input.toggle": "toggle",
      "click .close": "delete",
      "click": "select"
    },
    modelEvents: { "change": "render", "update": "render" },
    ui: {
      "input": "input.edit",
      "check": "input.toggle"
    },
    className: "list-group-item",
    edit: function(e) {
      e.stopPropagation();
      this.select();
      this.$el.addClass("editing");
      this.ui.input.focus().select();
    },
    save: function(e) {
      if (e.which === 13 || e.which === 27) {
        var title = this.ui.input.val();
        this.$el.removeClass("editing");
        this.model.set({title: title});
      }
    },
    onBeforeRender: function() {
      var m = this.model.toJSON();
      this.$el = this.$el[m.done? "addClass" : "removeClass"]("done");
      this.$el = this.$el[this.model.active? "addClass" : "removeClass"]("active");
      if (!this.model.active) { this.$el.removeClass("editing"); }
    },
    toggle: function() {
      this.model.set({done: this.ui.check.prop("checked")});
      this.trigger("task:toggle");
    },
    select: function() {
      this.trigger("task:select", this, this.model);
    },
    delete: function() {
      this.model.destroy();
    }
  });

  var CommentBoxView = Marionette.ItemView.extend({
    template: JST["tareas/commentbox"],
    tagName: "li",
    className: "list-group-item",
    triggers: { "click .close": "comment:delete" }
  });

  var MainView = Marionette.CompositeView.extend({
    template: JST["tareas/main"],
    tagName: "section",
    className: "vbox",
    itemView: TaskBoxView,
    itemViewContainer: ".js-container",
    triggers: { "click #new-task": "task:new" },
    events: { "change #toggle-all": "toggleAll" },
    ui: { "toggleAll": "#toggle-all" },
    toggleAll: function() {
      this.trigger("task:toggle:all", this.ui.toggleAll.prop("checked"));
    }
  });

  var CommentsCollectionView = Marionette.CollectionView.extend({
    itemView: CommentBoxView
  });

  var AsideView = Marionette.ItemView.extend({
    initialize: function(options) {
      this.comments = options.comments;
    },
    template: JST["tareas/aside"],
    tagName: "section",
    className: "vbox flex",
    modelEvents: { },
    events: {
      "change textarea": "save",
      "click #task-c-btn": "newComment",
      "keyup #task-c-input": "onCommentKeyup"
    },
    ui: {
      desc: "textarea",
      comment: "#task-c-input"
    },
    templateHelpers: {
      dateStr: function() {
        return new Date(this.date).toDateString();
      }
    },
    onRender: function() {
      if (!this.region) {
        this.region = new Marionette.Region({el: this.$(".js-container") });
      }
      if (this.commentsView) { this.stopListening(this.commentsView); }
      this.commentsView = new CommentsCollectionView({collection: this.comments});
      this.listenTo(this.commentsView, "itemview:comment:delete", _.bind(this.trigger, this, "itemview:comment:delete"));
      this.region.show(this.commentsView);
    },
    save: function() {
      this.model.set({description: this.ui.desc.val()});
    },
    onCommentKeyup: function(e) {
      if (e.which === 13) { this.newComment(); }
    },
    newComment: function() {
      this.trigger("comment:new", this.ui.comment.val(), this.model);
      this.ui.comment.val("");
    }
  });

  vent.reqres.setHandler("tareas:start", function() {
    var layout = new Layout(),
        tasks = new TaskCollection(),
        comments,
        aside,
        main = new MainView({collection: tasks});
    layout.once("render", function() {
      layout.main.show(main);
      tasks.fetch();
      tasks.activate(tasks.at(0));
    });

    main.on("task:new", function() {
      tasks.add(new Task());
    });

    main.on("task:toggle:all", function(state) {
      tasks.invoke("set", {done: state});
    });

    main.on("itemview:task:toggle", function() {
      var allToggled = tasks.every(function(t) { return t.get("done"); });
      main.ui.toggleAll.prop("checked", allToggled);
    });

    main.on("itemview:task:select", function(v, args) {
      var task = args.model;
      tasks.activate(task);
    });

    tasks.on("task:activate", function(task) {
      if (aside) { aside.off(); }
      if (comments) { comments.off(); }
      comments = new CommentCollection({task: task});
      aside = new AsideView({comments: comments, model: task});
      layout.aside.show(aside);

      aside.on("comment:new", function(commentText) {
        var comment;
        if (comments) {
          comment = new Comment({text: commentText, date: new Date()});
          comments.add(comment);
          comment.save();
        }
      });

      aside.on("itemview:comment:delete", function(v, args) {
        var comment = args.model;
        comment.destroy();
      });
    });

    tasks.on("change", function(model) {
      model.save();
    });

    return layout;
  });

});
