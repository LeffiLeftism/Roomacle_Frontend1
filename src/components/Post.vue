<template>
  <div @click="openModal()">
    <div
      class="lfpost"
      :class="[this.postContent.announcement === true ? 'announcement' : '']"
    >
      <span class="textline"
        >{{ this.postContent.date }}
        <span v-if="this.postContent.time"
          >| {{ this.postContent.time }}</span
        > </span
      ><br />
      {{ this.postContent.content }}
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
        });
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
  border: black dotted 5px;
  max-width: 100%;
  padding: 7px;
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