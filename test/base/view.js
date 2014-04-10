"use strict";
/* globals describe, it, expect, beforeEach, afterEach */

// Test: Base.View funcitonality

define(["base", "backbone"], function(Base, Backbone) {

  describe("Base.View interface", function() {

    it("should exist", function() {
      expect(Base).to.have.property("View");
    });

    it("should provide a default render method", function() {
      expect(Base.View.prototype).to.have.ownProperty("render");
    });

    it("should provide a serializeData method", function() {
      expect(Base.View.prototype).to.have.ownProperty('serializeData');
    });

    it("should provide a serializeModel method", function() {
      expect(Base.View.prototype).to.have.ownProperty('serializeModel');
    });

  });

  describe("Base.View#serializeModel", function() {

    it("should provide a default implementation with .toJSON()", function() {
      var m = new Backbone.Model({some: "data"}),
          v = new Base.View({model: m});
      expect(v.serializeModel()).to.eql(m.toJSON());
    });

    it("should return an empty object in there is no model", function() {
      var v = new Base.View();
      expect(v.serializeModel()).to.eql({});
    });

  });


  describe("Base.View#serializeData", function() {
    var m, v;

    beforeEach(function() {
      m = new Backbone.Model({some: "data"});
      v = new Base.View({model: m});
    });

    it("should return the serialized model", function() {
      expect(v.serializeData()).to.eql(m.toJSON());
    });

    it("should use #serializeModel to serialize the model", function() {
      sinon.spy(v, "serializeModel");
      v.serializeData();
      expect(v.serializeModel).to.have.beenCalled();
    });


    it("should mix the helpers proeprty, if present", function() {
      v.helpers = {
        testHelper: function() { }
      };
      var data = v.serializeData();
      expect(data).to.have.ownProperty("testHelper");
      expect(data.testHelper).to.equal(v.helpers.testHelper);
    });


  });


  describe("Base.View#render", function() {
    var m, v;

    beforeEach(function() {
      m = new Backbone.Model({a: "1"});
      v = _.extend(new Base.View({model: m}), {
        template: _.template("a: <%= a %>, b: <%= b() %>"),
        helpers: {
          b: function() { return "2"; }
        }
      });
    });

    it("should serialize the model with #serializeData", function() {
      sinon.spy(v, "serializeData");
      v.render();
      expect(v.serializeData).to.have.beenCalled();
    });

    it("should render the template and put it in this.$el", function() {
      v.render();
      expect(v.$el.html()).to.equal("a: 1, b: 2");
    });

    it("should return this", function() {
      expect(v.render()).to.equal(v);
    });

  });

});
