"use strict";
/* globals window */

var allTestFiles = [];
var TEST_REGEXP = /^\/base\/test\/.*\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\/src\/js\//, "");
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

/* Expect matchers */

expect.Assertion.prototype.instanceOf = function(Klass) {
  this.assert(
    this.obj instanceof Klass,
    function() { return ["expected", this.obj, "to be an instance of", Klass].join(" "); },
    function() { return ["expected", this.obj, "not to be an instance of", Klass].join(" "); }
  );
};

expect.Assertion.prototype.ownProperty = function(prop) {
  this.assert(
    this.obj.hasOwnProperty(prop),
    function() { return "expected " + this.obj + " to have own property " + prop; },
    function() { return "expected " + this.obj + " to not have own property " + prop; }
  );
};

expect.Assertion.prototype.beenCalled = function() {
  this.assert(
    this.obj.called,
    function() { return "expected " + this.obj + " to have been called"; },
    function() { return "expected " + this.obj + " to not have been called"; }
  );
};

/* RequireJS config */

require.config({
  baseUrl: "/base/src/js",
  paths: {
    backbone: "../../bower_components/backbone/backbone",
    jquery: "../../bower_components/jquery/jquery",
    underscore: "../../bower_components/underscore/underscore",
    handlebars: "../../bower_components/handlebars/handlebars",
    "handlebars.runtime": "../../bower_components/handlebars/handlebars.runtime"
  },
  shim: {
    jquery: {
      exports: "jQuery"
    },
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: [
        "jquery",
        "underscore"
      ],
      exports: "Backbone"
    },
    handlebars: {
      exports: "Handlebars"
    }
  },
  deps: allTestFiles,
  callback: window.__karma__.start
});
