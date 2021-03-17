<template>
  <div id="lostandfound">
    <Post
      thing="USB-Stick"
      description="32GB blau mit roten Punkten"
      founddate="13-03-2021"
      founder="Januzaj, Visar"
    />
    <Post
      thing="Regenschirm"
      description="Violett, schwarzer Griff"
      founddate="16-03-2021"
      founder="Zinnen, Andreas"
    />
  </div>
</template>

<script>
import Post from "../components/Post.vue";
export default {
  components: {
    Post,
  },
};
</script>

<style scoped>
#lostandfound {
  justify-content: space-around;
  padding: 5px;
  /*background-color: indianred;*/
}
</style>