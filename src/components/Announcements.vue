<template>
  <div id="announcement">
    <Post
      v-for="(item, index) in this.$store.state.announcements"
      :key="index"
      :postContent="item"
    />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  data() {
    return {};
  },
  components: {
    Post,
  },
};
</script>

<style scoped>
#announcement {
  justify-content: space-around;
  padding: 5px;
  /*background-color: bisque;*/
}
</style>