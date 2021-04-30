<template>
  <div
    @click="openModal()"
    v-if="!this.postContent.pinned || this.postContent.timerActive"
  >
    <div
      class="lfpost"
      :class="[this.postContent.pinned === true ? 'announcement' : '']"
    >
      <span class="textline">
        <!--span v-if="this.postContent.time">| {{ this.postContent.time }}</span-->
        <span v-if="this.postContent.title">{{ this.postContent.title }}</span>
        <span
          class="timer"
          :id="this.index + 'timer'"
          v-if="this.postContent.timerCountdown"
          >{{ this.postContent.timerCountdown }}</span
        >
      </span>
    </div>
  </div>
</template>

<script>
import AnnouncementsPopupVue from "./AnnouncementsPopup.vue";

export default {
  data() {
    return {
      timer_started: false,
      timer_end: false,
    };
  },
  props: {
    postContent: Object,
    index: Number,
  },
  methods: {
    test() {
      console.log("Hi");
    },
    openModal() {
      try {
        this.$modal.show(
          AnnouncementsPopupVue,
          {
            postContent: this.postContent,
          },
          { height: "auto" }
        );
      } catch (err) {
        console.log("Clicked on Non-Event cell in calendar.");
      }
    },
  },
  created() {
    console.log("Created Post.vue");
  },
  mounted() {
    console.log("Mounted Post.vue");
    if (this.postContent.show) {
      this.postContent.show = false;
      let y = setInterval(() => {
        if (this.postContent.started && !this.postContent.ended) {
          try {
            document.getElementById(
              this.index + "timer"
            ).innerHTML = this.postContent.timerCountdown;
          } catch (error) {
            console.log(error);
          }
        } else if (this.postContent.ended && !this.postContent.show) {
          clearInterval(y);
        }
      }, 1000);
    }
  },
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
.timer {
  float: right;
}
</style>