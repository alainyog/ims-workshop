"use strict";

// Module: App models

define(
  ["backbone"],
  function(Backbone) {

    var Note = Backbone.Model.extend({
      defaults: {
        title: "",
        text: "",
        date: new Date()
      },
      initialize: function() {
        this.set({date: new Date()});
      }
    });

    var NoteCollection = Backbone.Collection.extend({
      model: Note,
      fetch: function() {
        this.add({title: "1", text: "prueba"});
        this.add({title: "2", text: "prueba"});
        this.add({title: "3", text: "prueba"});
        this.add({title: "4", text: "prueba"});
        this.trigger("sync");
      }
    });

    return {
      Note: Note,
      NoteCollection: NoteCollection
    };
  });
