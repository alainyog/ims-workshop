define(["app/modules"], function(modules) {
  "use strict";

  $(function() {
    var notes = modules.notes();
    notes.$el.appendTo("#content");
  });

});
