"use strict";
/* globals describe, it, expect, beforeEach, afterEach */

// Test: Notes Layout file

define(
  ["base", "app/views", "templates"],
  function(Base, views, JST) {

    describe("notes module layout", function() {
      var layout;

      beforeEach(function() {
        layout = new views.notes.Layout();
      });

      it("should be a instance of Base.View", function() {
        expect(layout).to.be.instanceOf(Base.View);
      });

      it("should use JST[\'notes/layout\'] as template", function() {
        expect(layout.template).to.equal(JST["notes/layout"]);
      });

      describe("subviews", function() {

        it("should have two subviews: a MainView and an AsideView", function() {
          expect(layout.subviews).to.have.ownProperty("aside");
          expect(layout.subviews).to.have.ownProperty("main");
          expect(layout.subviews.aside).to.be.instanceOf(views.notes.AsideView);
          expect(layout.subviews.main).to.be.instanceOf(views.notes.MainView);
        });

        it("should insert MainView into #main", function() {
          layout.render();
          var el = layout.$("#main").children().get(0);
          expect(el).to.equal(layout.subviews.main.el);
        });

        it("should insert AsideView into #aside", function() {
          layout.render();
          var el = layout.$("#aside").children().get(0);
          expect(el).to.equal(layout.subviews.aside.el);
        });

      });

    });

  });
