/*global localStorage*/
define(["backbone"], function(Backbone) {
  "use strict";

  Backbone.sync = function(method, model, options) {
    var url = _.result(model, "url"),
        id = model.id || (Date.now()+Math.random()).toString(36),
        modelUrl = url + "/" + id,
        collection;
    console.log(" ->", method, ":", url);
    model = model.toJSON();
    switch (method) {
    case "create":
      model.id = id;
      collection = JSON.parse(localStorage.getItem(url) || "[]");
      collection.push(id);
      localStorage.setItem(modelUrl, JSON.stringify(model));
      localStorage.setItem(url, JSON.stringify(collection));
      break;
    case "update":
      localStorage.setItem(url, JSON.stringify(model));
      break;
    case "read":
      if (model.id) {
        model = JSON.parse(localStorage.getItem(modelUrl) || "{}");
      } else {
        collection = JSON.parse(localStorage.getItem(url) || "[]");
        model = [];
        collection.forEach(function(id) {
          model.push(
           JSON.parse(localStorage.getItem(url+"/"+id) || "{}")
          );
        });
      }
      break;
    case "delete":
      localStorage.removeItem(url);
      url = url.replace("/"+id, "");
      collection = JSON.parse(localStorage.getItem(url) || "[]");
      collection = collection.filter(function(v) { return id !== v; });
      localStorage.setItem(url, JSON.stringify(collection));
      break;
    }
    console.log(" <~", model);
    options.success(model);
  };

});
