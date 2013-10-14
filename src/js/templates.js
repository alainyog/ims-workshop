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

return this["JST"];

});