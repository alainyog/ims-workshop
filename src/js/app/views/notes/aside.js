"use strict";

// Module: Notes aside view

define(
  ["backbone",
   "base",
   "templates",
   "app/views/notes/notebox"],
  function(Backbone, Base, JST, NoteboxView) {

    var AsideView = Base.View.extend({
      template: JST["notes/aside"],
      tagName: "section",
      className: "vbox",

      initialize: function() {
        this.listenTo(this.collection,
                      "sync change add",
                      this.render);
      },
      render: function() {
        AsideView["__super__"].render.call(this);
        var container = this.$("#note-list");
        this.collection.each(function(m) {
          var itemView = new NoteboxView({model: m});
          itemView
            .render()
            .$el.appendTo(container);
        }, this);
        return this;
      }
    });

    return AsideView;
  });
