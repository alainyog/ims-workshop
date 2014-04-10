"use strict";

// Module: Notes main view

define(
  ["backbone", "base", "templates"],
  function(Backbone, Base, JST) {

    var MainView = Base.View.extend({
      template: JST["notes/main"],
      tagName: "section",
      className: "vbox",
      events: {
        "click #new-note": "addNote"
      },
      addNote: function() {
        this.collection.add({});
      }
    });

    return MainView;
  });
