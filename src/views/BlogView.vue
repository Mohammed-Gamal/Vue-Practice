<template>
  <div class="blog">
    <div class="container">
      <div class="intro my-5">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
      </div>
      <div class="row">
        <div class="col-8">
          <BlogPosts
            v-for="post in posts"
            :key="post.id"
            :views="post.views"
            :title="post.title"
            :date="post.date"
            :content="post.content"
            :author="post.author"
            :category="post.category"
          />
        </div>
        <div class="col-4">
          <BlogSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";
import PostsJson from "../json/blog_posts.json";

export default {
  data: function () {
    return {
      pageName: "Blog Page",
      pageDescription: "Welcome to blog page!",
      posts: PostsJson,
    };
  },
  name: "BlogView",
  components: {
    BlogPosts,
    BlogSidebar,
  },
};
</script>
