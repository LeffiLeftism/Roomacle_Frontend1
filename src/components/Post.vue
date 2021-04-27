<template>
  <div @click="openModal()">
    <div
      class="lfpost"
      :class="[this.postContent.pinned === true ? 'announcement' : '']"
    >
      <span class="textline">
        {{ this.postContent.date }}
        <span v-if="this.postContent.time">| {{ this.postContent.time }}</span>
        <span v-if="this.postContent.title"> | {{ this.postContent.title }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import AnnouncementsPopupVue from "./AnnouncementsPopup.vue";

export default {
  props: {
    postContent: Object,
  },
  methods: {
    openModal() {
      try {
        this.$modal.show(AnnouncementsPopupVue, {
          postContent: this.postContent
        }, { height: 'auto'});
      } catch (err) {
        console.log("Clicked on Non-Event cell in calendar.");
      }
    },
  },
  created() {},
};
</script>

<style>
.lfpost {
  border: black dotted 2px;
  max-width: 100%;
  padding: 0 7px;
  margin-bottom: 5px;
  text-align: left;
}
.textline {
  font-size: 1em;
  font-weight: bold;
}
.announcement {
  background-color: rgba(255, 0, 0, 0.548);
}
</style>