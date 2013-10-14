define(["marionette", "vent", "modules/notas", "modules/tareas", "localsync"], function(Marionette, vent) {
  "use strict";

  var App = new Marionette.Application();

  App.addRegions({
    main: "#content",
    sidebar: ".nav-primary"
  });

  App.on("initialize:after", function() {
    Backbone.history.start();
    console.log(" --> App ready");
  });

  var Sidebar = Marionette.ItemView.extend({
    el: "#nav",
    triggers: {
      "click #nav-notas": "load:notas",
      "click #nav-tareas": "load:tareas"
    },
    events: {
      "click li": "changeActive"
    },
    changeActive: function(e) {
      this.$(".active").removeClass("active");
      $(e.currentTarget).addClass("active");
    }
  });

  App.addInitializer(function() {
    var view = vent.reqres.request("notas:start"),
        sidebar = new Sidebar();
    sidebar.on({
      "load:notas": function() {
        App.main.show(vent.reqres.request("notas:start"));
      },
      "load:tareas": function() {
        App.main.show(vent.reqres.request("tareas:start"));
      }
    });
    App.main.show(view);
  });

  $(App.start.bind(App));

  return App;
});
