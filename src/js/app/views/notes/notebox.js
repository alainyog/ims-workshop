"use strict";

// Module: Notes notebox view

define(
  ["backbone", "base", "templates"],
  function(Backbone, Base, JST) {

    var NoteboxView = Base.View.extend({
      template: JST["notes/notebox"],
      tagName: "li",
      className: "list-group-item",
      helpers: {
        dateStr: function() {
          return this.date.toString().slice(0, 10);
        }
      }
    });

    return NoteboxView;
  });
