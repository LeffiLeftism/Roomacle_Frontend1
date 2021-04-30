<template>
  <div id="announcement">
    <Post
      v-for="(item, index) in this.$store.state.announcements"
      :key="index"
      :postContent="item"
      :index="index"
      @click="openModal()"
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
  methods: {},
  created() {},
};
</script>

<style scoped>
#announcement {
  justify-content: space-around;
  padding: 5px;
  width: auto;
  height: 100%;
  overflow: scroll;
  /*background-color: bisque;*/
}
</style>