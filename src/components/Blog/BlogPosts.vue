<template>
  <div class="post-box text-">
    <span class="post-views">{{ views }}</span>
    <h3 class="post-title">{{ title }}</h3>
    <span class="post-date">{{ date }}</span>
    <p class="post-content">{{ content | shorten(50, "...") }}</p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author">{{ author }}</span>
      </div>
      <div class="col-sm-6 text-end">
        <span class="post-category">{{ category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["views", "title", "date", "content", "author", "category"],
  name: "BlogPosts",
};
</script>

<style lang="scss" scoped>
.post-box {
  text-align: initial;
  background-color: #ddd;
  border-radius: 5px;
  padding: 25px;
  margin-bottom: 30px;
  position: relative;
  .post-views {
    position: absolute;
    top: 25px;
    right: 25px;
    display: block;
    padding: 3px 7px;
    color: white;
    background-color: #636464;
    border-radius: 5px;
    font: {
      size: 13px;
      weight: bold;
    }
  }
  .post-date {
    display: block;
    margin-bottom: 10px;
    color: #777;
    font-size: 14px;
  }
  .post-content {
    text-align: justify;
    line-height: 1.7;
    color: #444;
  }
  .post-author,
  .post-category {
    background-color: #636464;
    color: white;
    padding: 4px 10px;
    border-radius: 5px;
    letter-spacing: 0.5px;
    font-size: 13px;
  }
}
</style>
