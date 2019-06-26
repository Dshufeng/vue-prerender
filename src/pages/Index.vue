<template>
  <div>index page</div>
</template>

<script>
export default {
  name: "index",
  metaInfo: {
    title: "index page", // set a title
    meta: [
      {
        name: "keywords",
        content: "index keyword"
      },
      {
        name: "description",
        content: "index description"
      }
    ]
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
