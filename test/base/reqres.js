"use strict";
/* globals describe, it, expect, beforeEach, sinon */

// Test: RequestResponse implementation

define(["base"], function(Base) {

  describe("RequestResponse", function() {
    var reqres;

    beforeEach(function() {
      reqres = new Base.Reqres();
    });

    it("should register handlers to named requests", function() {
      expect(reqres.setHandler).to.be.a("function");
    });

    it("should call the hadler when a request is fired", function() {
      var spy = sinon.spy();
      reqres.setHandler("test", spy);
      reqres.request("test", function() {});
      expect(spy).to.have.beenCalled();
    });

  });


});
