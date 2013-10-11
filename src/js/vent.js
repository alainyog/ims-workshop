define(["marionette"], function() {
  "use strict";
  return _.extend(new Backbone.Wreqr.EventAggregator(), {
    commands: new Backbone.Wreqr.Commands(),
    reqres: new Backbone.Wreqr.RequestResponse()
  });
});
