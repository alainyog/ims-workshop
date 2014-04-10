"use strict";

// Module: Vent (dettached event aggregator)

define(
  ["underscore", "backbone", "base/class"],
  function(_, Backbone, Class) {

    var Vent = Class.extend({});
    _.extend(Vent.prototype, Backbone.Events);

    return Vent;
  });
