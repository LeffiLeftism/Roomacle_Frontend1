<template>
  <div @click="openModal()" v-if="this.dateChecked" id="post">
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
      dateChecked: false,
    };
  },
  props: {
    postContent: Object,
    index: Number,
  },
  computed: {
    tomorrow: function () {
      let date = new Date(
        this.$store.state.calendar.today.year,
        this.$store.state.calendar.today.month,
        this.$store.state.calendar.today.day,
        0,
        0,
        0,
        0
      );
      date.setDate(date.getDate() + 1);
      return date;
    },
    postDate: function () {
      let postDate = new Date(this.postContent.date);
      let postHour = this.postContent.time;
      postHour = postHour.slice(0, 2);
      let postMinute = this.postContent.time;
      postMinute = postMinute.slice(3, 5);
      postHour = Number(postHour);
      postMinute = Number(postMinute);
      postDate.setHours(postHour, postMinute, 0, 0);
      return postDate;
    },
    postEndDate: function () {
      let postEndDate = new Date(this.postContent.countDownDate);
      return postEndDate;
    },
  },
  methods: {
    checkDate() {
      let now = new Date();
      console.log("PostDate");
      console.log(this.postDate);
      console.log("PostEndDate");
      console.log(this.postEndDate);
      console.log("Now");
      console.log(now);
      console.log(this.$store.state.announcements);

      if (
        !this.postContent.pinned ||
        (this.postContent.pinned && !this.postContent.timerActive) ||
        (this.postContent.pinned &&
          this.postContent.timerActive &&
          this.postDate < now &&
          this.postEndDate > now)
      ) {
        console.log("Wird angezeigt:");
        console.log(this.postContent.title);
        this.dateChecked = true;
        return true;
      } else {
        console.log(this.postContent.title);
        console.log("stop");
        this.dateChecked = false;
        return false;
      }
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
        //console.log("Clicked on Non-Event cell in calendar.");
      }
    },
    setTimer() {
      // Find the distance between now and the count down date
      var distance = this.postEndDate.getTime() - new Date();

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      hours = this.$parent.$parent.fillUpTens(hours);
      minutes = this.$parent.$parent.fillUpTens(minutes);
      seconds = this.$parent.$parent.fillUpTens(seconds);

      // Display the result in the element with id="demo"
      let text = "";
      if (days > 0) {
        text += days + "d ";
      }
      text += hours + "h " + minutes + "m " + seconds + "s ";

      this.postContent.timerCountdown = text;

      try {
        document.getElementById(this.index + "timer").innerHTML = text;
      } catch (error) {
        //console.log(error);
      }

      // If the count down is finished, write some text
      if (distance < 0) {
        this.postContent.timer_ended = true;
        this.checkDate();
        //this.postContent.timerActive = false;
      }
    },
  },
  mounted() {
    console.log("mounted Post.vue");

    this.checkDate();

    if (
      this.postContent.pinned &&
      /*this.postContent.timerActive &&*/
      this.postEndDate > new Date() &&
      this.dateChecked &&
      !this.postContent.timer_started
    ) {
      this.$store.state.timer_running++;
      this.postContent.timer_started = true;
      this.postContent.timer_ended = false;
      console.log(this.$store.state.timer_running);
      console.log("Hurra");

      let x = setInterval(() => {
        console.log(this.postContent.timer_ended);
        if (this.postContent.timer_started && !this.postContent.timer_ended) {
          this.setTimer();
        } else if (this.postContent.timer_ended) {
          clearInterval(x);
          console.log("End Timer");
          this.$store.state.timer_running--;
        }
      }, 1000);
    }
  },
  beforeDestroy() {
    console.log("Destroyed, Bye...");
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