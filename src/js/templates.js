define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["notas/aside"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header class=\"header bg-light lter bg-gradient clearfix b-b\">\n  <div class=\"input-group m-t-sm\">\n    <span class=\"input-group-addon input-sm\"><i class=\"icon-search\"></i></span>\n    <input type=\"text\" class=\"form-control input-sm\" id=\"search-note\" placeholder=\"buscar\">\n  </div>\n</header>\n<section class=\"scrollable\">\n  <div class=\"wrapper\">\n    <!-- note list -->\n    <ul id=\"note-list\" class=\"list-group js-container\">\n    </ul>\n    <!-- note list -->\n  </div>\n</section>\n";
  });

this["JST"]["notas/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<aside id=\"main\">\n</aside>\n<!-- .aside -->\n<aside class=\"aside-lg bg-light lter b-l\" id=\"aside\">\n</aside>\n<!-- /.aside -->\n";
  });

this["JST"]["notas/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header class=\"header bg-light lter bg-gradient b-b\">\n  <button class=\"btn btn-success pull-right btn-sm\" id=\"new-note\"><i class=\"icon-plus\"></i> NUEVA</button>\n  <p>Notas</p>\n</header>\n<section class=\"bg-light lter\">\n  <section class=\"hbox stretch\">\n    <!-- .aside -->\n    <aside>\n      <section class=\"vbox b-b\">\n        <section class=\"paper\" id=\"note-detail\">\n        <textarea type=\"text\" class=\"form-control scrollable\" placeholder=\"Escribe aquí tu nota\">";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n          </section>\n      </section>\n    </aside>\n    <!-- /.aside -->\n  </section>\n</section>\n";
  return buffer;
  });

this["JST"]["notas/notebox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"view\">\n  <button class=\"destroy close hover-action\">×</button>\n  <div class=\"note-name\">\n    <strong>\n      ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </strong>\n  </div>\n  <div class=\"note-desc\">\n    ";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </div>\n  <span class=\"text-xs text-muted\">";
  if (stack1 = helpers.dateStr) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dateStr; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n</div>\n";
  return buffer;
  });

this["JST"]["plan/box"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"col-lg-6 col-sm-6\">\n    <section class=\"panel\">\n    <div class=\"panel-body\">\n      <div class=\"clearfix m-b\">\n        <small class=\"text-muted pull-right\">5m ago</small>\n        <a href=\"#\" class=\"thumb-sm pull-left m-r\">\n          <img src=\"images/avatar.jpg\" class=\"img-circle\">\n        </a>\n        <div class=\"clear\">\n          <a href=\"#\"><strong>Jonathan Omish</strong></a>\n          <small class=\"block text-muted\">San Francisco, USA</small>\n        </div>\n      </div>\n      <p>\n        There are a few easy ways to quickly get started with Bootstrap...\n      </p>\n      <small class=\"\">\n        <a href=\"#\"><i class=\"icon-comment-alt\"></i> Comments (25)</a>\n      </small>\n    </div>\n    <footer class=\"panel-footer pos-rlt\">\n    <span class=\"arrow top\"></span>\n    <form class=\"pull-out\">\n      <input type=\"text\" class=\"form-control no-border input-lg text-sm\" placeholder=\"Write a comment...\">\n    </form>\n    </footer>\n    </section>\n  </div>\n  <div class=\"col-lg-6 col-sm-6\">\n    <section class=\"panel\">\n    <div class=\"panel-body\">\n      <div class=\"clearfix m-b\">\n        <small class=\"text-muted pull-right\">1hr ago</small>\n        <a href=\"#\" class=\"thumb-sm pull-left m-r\">\n          <img src=\"images/avatar_default.jpg\" class=\"img-circle\">\n        </a>\n        <div class=\"clear\">\n          <a href=\"#\"><strong>Mike Mcalidek</strong></a>\n          <small class=\"block text-muted\">Newyork, USA</small>\n        </div>\n      </div>\n      <div class=\"pull-in bg-light clearfix m-b-n\">\n        <p class=\"m-t-sm m-b text-center animated bounceInDown\">\n          <i class=\"icon-map-marker text-danger icon-4x\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"checked in at Newyork\"></i>\n        </p>\n      </div>\n    </div>\n    <footer class=\"panel-footer pos-rlt\">\n    <span class=\"arrow top\"></span>\n    <form class=\"pull-out\">\n      <input type=\"text\" class=\"form-control no-border input-lg text-sm\" placeholder=\"Write a comment...\">\n    </form>\n    </footer>\n    </section>\n  </div>\n</div>\n";
  });

this["JST"]["plan/column-box"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <header class=\"panel-heading bg-";
  if (stack1 = helpers.bgClass) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.bgClass; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " lter\">\n    <span class=\"h4\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<br>\n  </header>\n  ";
  return buffer;
  }

  buffer += "<section class=\"panel no-borders\">\n  ";
  stack1 = helpers['with'].call(depth0, depth0.info, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <div class=\"panel-body\">\n  </div>\n</section>\n";
  return buffer;
  });

this["JST"]["plan/columns"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"scrollable wrapper\">\n  <div class=\"row\">\n    <div class=\"col-md-3\" id=\"icebox\"> </div>\n    <div class=\"col-md-3\" id=\"todo\"></div>\n    <div class=\"col-md-3\" id=\"done\"></div>\n    <div class=\"col-md-3\" id=\"debt\"\"></div>\n  </div>\n</section>\n";
  });

this["JST"]["plan/item-box"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n<section class=\"panel bg-dark\">\n  <p></p>\n</section>\n";
  }

  stack1 = helpers['if'].call(depth0, depth0.dragged, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<section class=\"panel\">\n  <div class=\"panel-body\">\n    <div class=\"clearfix m-b\">\n      <small class=\"text-muted pull-right\">5m ago</small>\n      <a href=\"#\" class=\"thumb-sm pull-left m-r\">\n        <img src=\"assets/images/avatar.jpg\" class=\"img-circle\">\n      </a>\n      <div class=\"clear\">\n        <a href=\"#\"><strong>Jonathan Omish</strong></a>\n      </div>\n    </div>\n    <p>\n      There are a few easy ways\n    </p>\n    <small class=\"\">\n      <a href=\"#\"><i class=\"icon-comment-alt\"></i> Comments (25)</a>\n    </small>\n  </div>\n  <footer class=\"panel-footer pos-rlt\">\n  <span class=\"arrow top\"></span>\n    <form class=\"pull-out\">\n      <input type=\"text\" class=\"form-control no-border input-lg text-sm\" placeholder=\"Write a comment...\">\n    </form>\n  </footer>\n</section>\n";
  return buffer;
  });

this["JST"]["tareas/aside"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header class=\"header bg-light lt b-b\">\n  <p class=\"m-b\">\n    <span class=\"text-muted\">Creada:</span> ";
  if (stack1 = helpers.dateStr) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dateStr; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n  </p>\n  <div class=\"lter pull-in b-t m-t-xxs\">\n    <textarea type=\"text\" class=\"form-control form-control-trans scrollable\" placeholder=\"Descripción de la tarea\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n  </div>\n</header>\n<section>\n  <section>\n    <section>\n    <ul id=\"task-comment\" class=\"list-group no-radius no-border m-t-n-xxs js-container\">\n      </ul>\n    </section>\n  </section>\n</section>\n<footer class=\"footer bg-light lter clearfix b-t\">\n    <div class=\"input-group m-t-sm\">\n      <input type=\"text\" class=\"form-control input-sm\" id=\"task-c-input\" placeholder=\"Escribe un comentario\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-success btn-sm\" type=\"button\" id=\"task-c-btn\"><i class=\"icon-pencil\"></i></button>\n      </span>\n    </div>\n</footer>\n";
  return buffer;
  });

this["JST"]["tareas/commentbox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"view\">\n  <button class=\"destroy close hover-action\">×</button>\n  <div>\n    <span>";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <small class=\"text-muted block text-xs\">\n      <i class=\"icon-time\"></i>\n      ";
  if (stack1 = helpers.date) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.date; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </small>\n  </div>\n</div>\n";
  return buffer;
  });

this["JST"]["tareas/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<aside id=\"js-main\">\n</aside>\n<!-- .aside -->\n<aside class=\"col-lg-4 bg-white b-l\" id=\"js-aside\">\n</aside>\n<!-- /.aside -->\n";
  });

this["JST"]["tareas/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header class=\"header bg-light lter bg-gradient b-b\">\n  <button class=\"btn btn-success btn-sm pull-right btn-icon\" id=\"new-task\"><i class=\"icon-plus\"></i></button>\n  <p>Tareas</p>\n</header>\n<section class=\"bg-light lter w-f\">\n  <section class=\"hbox stretch\">\n    <!-- .aside -->\n    <aside>\n      <section class=\"vbox\">\n        <section class=\"scrollable wrapper\">\n          <!-- task list -->\n          <ul id=\"task-list\" class=\"list-group list-group-sp js-container\"></ul>\n          <!-- task list -->\n        </section>\n      </section>\n    </aside>\n    <!-- /.aside -->\n  </section>\n</section>\n<footer class=\"footer bg-white-only b-t\">\n  <p class=\"checkbox\"><label><input id=\"toggle-all\" type=\"checkbox\"> Marcar todas como completadas</label></p>\n</footer>\n";
  });

this["JST"]["tareas/taskbox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return " checked ";
  }

  buffer += "<div class=\"view\">\n  <button class=\"destroy close hover-action\">×</button>\n  <div class=\"checkbox\">\n    <input class=\"toggle\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, depth0.done, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">\n    <span class=\"task-name\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <input class=\"edit form-control\" type=\"text\" value=\"";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  </div>\n</div>\n";
  return buffer;
  });

this["JST"]["timeline/highlighted"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"panel bg-success lter no-borders\">\n  <div class=\"panel-body\">\n    <span class=\"timeline-icon\"><i class=\"icon-bell-alt time-icon bg-success\"></i></span>\n    <span class=\"timeline-date\">7:30 am</span>\n    <h5>\n      <span>Wake up</span>\n      Me\n    </h5>\n    <div class=\"m-t-sm timeline-action\">\n      <span class=\"h3 pull-left m-r-sm\">4:51</span>\n      <button class=\"btn btn-sm btn-white\"><i class=\"icon-pause\"></i> Pause</button>\n      <button class=\"btn btn-sm btn-white\"><i class=\"icon-ok\"></i> Confirm</button>\n    </div>\n  </div>\n</div>\n";
  });

this["JST"]["timeline/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"bg-light lter\">\n  <section class=\"hbox stretch\">\n    <!-- .aside -->\n    <aside id=\"main\"></aside>\n    <!-- /.aside -->\n    <!-- .aside -->\n    <aside class=\"aside-lg bg-light\" id=\"aside\">\n      <div class=\"wrapper\">\n        <h4 class=\"m-t-none\">Timeline(36)</h4>\n        <form>\n          <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" placeholder=\"Event name\" class=\"input-sm form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label>Date</label>\n            <input type=\"text\" placeholder=\"Event name\" class=\"datepicker input-sm form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label>Time</label>\n            <input type=\"text\" placeholder=\"eg. 3:00 pm\" class=\"input-sm form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label>Type</label>\n            <div>\n              <div class=\"btn-group\">\n                <button data-toggle=\"dropdown\" class=\"btn btn-sm btn-white dropdown-toggle\">\n                  <span class=\"dropdown-label\">Choose a type</span>\n                  <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu dropdown-select\">\n                    <li><a href=\"#\"><input type=\"radio\" name=\"d-s-r\">Travel</a></li>\n                    <li class=\"\"><a href=\"#\"><input type=\"radio\" name=\"d-s-r\">Phone</a></li>\n                    <li class=\"\"><a href=\"#\"><input type=\"radio\" name=\"d-s-r\">Meeting</a></li>\n                    <li class=\"\"><a href=\"#\"><input type=\"radio\" name=\"d-s-r\">Appointment</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"m-t-lg\"><button class=\"btn btn-sm btn-default\">Add an event</button></div>\n        </form>\n      </div>\n    </aside>\n    <!-- /.aside -->\n  </section>\n</section>\n<style></style>\n";
  });

this["JST"]["timeline/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"scrollable wrapper\">\n  <div class=\"timeline\">\n    <article class=\"timeline-item active js-highlighted\">\n    </article>\n    <div class=\"timeline-footer\">\n      <a href=\"#\">\n        <i class=\"icon-plus time-icon inline-block bg-dark\"></i>\n      </a>\n    </div>\n  </div>\n</section>\n";
  });

this["JST"]["timeline/timelinebox"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"timeline-caption\">\n  <div class=\"panel\">\n    <div class=\"panel-body\">\n      <span class=\"arrow left\"></span>\n      <span class=\"timeline-icon\"><i class=\"icon-plane time-icon bg-dark\"></i></span>\n      <span class=\"timeline-date\">8:00 am</span>\n      <h5>\n        <span>Fly to</span>\n        Newyork City\n      </h5>\n      <p>82°, Very hot with some sun</p>\n    </div>\n  </div>\n</div>\n";
  });

return this["JST"];

});