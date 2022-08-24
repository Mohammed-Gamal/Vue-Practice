<template>
  <div class="help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="alert alert-primary alert-dismissible fade show" role="alert">
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
        <strong>Alert Heading</strong> Alert Content
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      pageName: "Help Page",
      pageDescription: "This is help page!",
    };
  },
  name: "HelpView",
};
</script>
