"use strict";
/* globals describe, it, expect, beforeEach, afterEach */

// Test: Base.Class implementation


define(["base"], function(Base) {

  describe("Base.Class", function() {

    it("should exist", function() {
      expect(Base).to.have.property("Class");
    });

    it("should be instantiable", function() {
      expect(new Base.Class).to.be.ok();
    });

    it("should be able to subclass", function() {
      var Sub = Base.Class.extend({});
      expect(new Sub).to.be.instanceOf(Base.Class);
    });

    it("should call #initialize, if defined", function() {
      var Sub = Base.Class.extend({
        initialize: sinon.spy()
      });
      var s = new Sub;
      expect(s.initialize).to.have.beenCalled();
    });

  });

});
