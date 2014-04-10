"use strict";

// Module: Notes main view

define(
  ["backbone", "base", "templates"],
  function(Backbone, Base, JST) {

    var MainView = Base.View.extend({
      template: JST["notes/main"],
      tagName: "section",
      className: "vbox"
    });

    return MainView;
  });
