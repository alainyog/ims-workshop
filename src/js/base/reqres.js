"use strict";

// Module: RequestResponse

define(
  ["base/class"],
  function(Class) {

    var Reqres = Class.extend({
      initialize: function() {
        this._handlers = {};
      },
      setHandler: function(request, handler) {
        this._handlers[request] = handler;
      },
      request: function(request, cb) {
        var handler = this._handlers[request];
        if (handler) { return handler(cb); }
      }
    });

    return Reqres;

  });
