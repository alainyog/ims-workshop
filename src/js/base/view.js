"use strict";

// Module: Base View

define(
  ["backbone"],
  function(Backbone) {

    var View = Backbone.View.extend({
      serializeModel: function() {
        return this.model? this.model.toJSON() : {};
      },
      serializeData: function() {
        var data = this.serializeModel();
        _.extend(data, this.helpers);
        return data;
      },
      render: function() {
        var data = this.serializeData(),
            html = this.template? this.template(data) : "";
        this.$el.empty().append(html);
      },
    });

    return View;
  });
