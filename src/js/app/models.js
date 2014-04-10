"use strict";

// Module: App models

define(
  ["backbone"],
  function(Backbone) {

    var Note = Backbone.Model.extend({
    });

    var NoteCollection = Backbone.Collection.extend({
      model: Note
    });

    return {
      Note: Note,
      NoteCollection: NoteCollection
    };
  });
