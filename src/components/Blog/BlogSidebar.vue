<template>
  <div v-font.bold="30" class="blog-sidebar">{{ title | print }}</div>
</template>

<script>
export default {
  name: "BlogSidebar",
  data: function () {
    return {
      title: "Blog Sidebar",
    };
  },
  filters: {
    print: (v) => v + " - Local Filter",
  },
};
</script>
