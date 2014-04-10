"use strict";

// Module: Notes module

define(
  ["base", "app/views", "app/models"],
  function(Base, views, models) {
    return function() {
      var notes = new models.NoteCollection();
      var layout = new views.notes.Layout({collection: notes});

      notes.fetch();

      return layout.render();
    };
  });
