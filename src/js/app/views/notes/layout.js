"use strict";

// Module: Notes Layout view

define(
  ["backbone",
   "base",
   "templates",
   "app/views/notes/main",
   "app/views/notes/aside"],
  function(Backbone, Base, JST, MainView, AsideView) {

    var Layout = Base.View.extend({
      template: JST["notes/layout"],
      tagName: "section",
      className: "hbox stretch",
      initialize: function() {
        this.subviews = {
          aside: new AsideView({collection: this.collection}),
          main: new MainView({collection: this.collection})
        };
      },
      render: function () {
        Layout["__super__"].render.call(this);
        this.$("#main").append(this.subviews.main.render().$el);
        this.$("#aside").append(this.subviews.aside.render().$el);
        return this;
      }
    });

    return Layout;
  });
