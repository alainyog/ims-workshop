"use strict";

// Module: Notes module view index

define(
  ["app/views/notes/layout",
   "app/views/notes/aside",
   "app/views/notes/main",
   "app/views/notes/notebox"],
  function(Layout, AsideView, MainView, NoteboxView) {
    return {
      Layout: Layout,
      AsideView: AsideView,
      MainView: MainView,
      NoteboxView: NoteboxView
    };
  });
