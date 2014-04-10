"use strict";

// Module: Notes aside view

define(
  ["backbone", "base", "templates"],
  function(Backbone, Base, JST) {

    var AsideView = Base.View.extend({
      template: JST["notes/aside"],
      tagName: "section",
      className: "vbox"
    });

    return AsideView;
  });
