import Vue from "vue";

Vue.filter("uppercase", (v) => v.toUpperCase());
Vue.filter("reverse", (v) => v.split("").reverse().join(""));
Vue.filter(
  "shorten",
  (text, length, suffix) => text.substring(0, length) + suffix
);

// Usage:  | filter-name
