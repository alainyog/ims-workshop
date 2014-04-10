"use strict";

// Module: Base.Class

define(
  ["backbone"],
  function(Backbone) {

    var Class = function() {
      if (this.initialize) {
        this.initialize.apply(this, arguments);
      }
    };
    Class.extend = Backbone.Model.extend;

    return Class;

  });
