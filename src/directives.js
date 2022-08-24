import Vue from "vue";

Vue.directive("font", function (el, binding) {
  el.style.fontSize = binding.value + "px";

  if (binding.modifiers.bold) el.style.fontWeight = "bold";
});
