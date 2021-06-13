<template>
  <div @click="openModal()" v-if="checkDate(this.postContent.date)" id="post">
    <div
      class="lfpost"
      :class="[
        this.postContent.pinned || this.postContent.timerActive === true
          ? 'pinned'
          : 'notpinned',
      ]"
    >
      <span class="textline">
        <!--span v-if="this.postContent.time">| {{ this.postContent.time }}</span-->
        <span v-if="this.postContent.title">{{ this.postContent.title }}</span>
        <span
          class="timer"
          :id="this.index + 'timer'"
          v-if="this.postContent.timerActive"
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
  computed: {
    today: function () {
      let date = new Date(
        this.$store.state.calendar.today.year,
        this.$store.state.calendar.today.month,
        this.$store.state.calendar.today.day,
        0,
        0,
        0,
        0
      );
      return date;
    },
  },
  props: {
    postContent: Object,
    index: Number,
  },
  methods: {
    checkDate(dt) {
      let date = new Date(dt);
      date.setHours(0, 0, 0, 0);
      if ((date.getTime() == this.today.getTime()) || (this.postContent.countDownDate && date.getTime() < this.today.getTime())) {
        return true;
      } else {
        return false;
      }
    },
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
    //console.log("Created Post.vue");
  },
  mounted() {
    //console.log("Mounted Post.vue");
    if (this.postContent.show) {
      this.postContent.show = false;
      let y = setInterval(() => {
        if (this.postContent.started && !this.postContent.ended) {
          try {
            document.getElementById(this.index + "timer").innerHTML =
              this.postContent.timerCountdown;
          } catch (error) {
            //console.log(error);
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
  max-width: 100%;
  padding: 0 7px;
  margin-bottom: 5px;
  text-align: left;
}
.textline {
  font-size: 1em;
  font-weight: bold;
}
.timer {
  float: right;
}
</style>