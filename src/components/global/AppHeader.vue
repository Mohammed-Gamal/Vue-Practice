<template>
  <div class="header">
    <div class="container">
      <div class="logo">Logo</div>
      <ul>
        <router-link to="/" tag="li" exact>
          <a>Home</a>
        </router-link>
        <router-link to="/blog" tag="li">
          <a>Blog</a>
        </router-link>
        <router-link to="/help" tag="li">
          <a>Help</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #444;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    color: white;
    .logo {
      color: darkseagreen;
      font: {
        size: 25px;
        weight: bold;
      }
      letter-spacing: 2px;
    }
    ul {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      margin: 0;
      li.router-link-exact-active {
        color: darkseagreen;
      }
    }
  }
}
</style>
