"use strict";

// Module: Base Library

define(
  ["base/view",
   "base/class",
   "base/reqres"],
  function(View, Class, Reqres) {
    return {
      View: View,
      Class: Class,
      Reqres: Reqres
    };
  });
