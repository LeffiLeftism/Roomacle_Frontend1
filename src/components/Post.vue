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
          v-if="this.postContent.timerActive"
        ></span>
      </span>
    </div>
  </div>
</template>

<script>
import AnnouncementsPopupVue from "./AnnouncementsPopup.vue";

export default {
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
    setTimer(date) {
      let index = this.index;
      // Set the date we're counting down to
      let countDownDate = new Date(date);

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate.getTime() - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      let text = "";
      if (days > 0) {
        text += days + "d ";
      }
      text += hours + "h " + minutes + "m " + seconds + "s ";

      try {
        document.getElementById(index + "timer").innerHTML = text;
      } catch (error) {
        //console.log(error);
      }

      // If the count down is finished, write some text
      if (distance < 0) {
        try {
          document.getElementById(index + "timer").innerHTML = "ABGELAUFEN";
        } catch (error) {
          //console.log(error);
        }
        this.postContent.timerActive = false;
      }
    },
  },
  mounted() {
    let x;
    if (this.postContent.timerActive) {
      this.$store.state.timer_running += 1;
      x = setInterval(() => {
        if (this.postContent.timerActive) {
          console.log("Update Timer");
          this.setTimer(this.postContent.countDownDate);
        } else {
          clearInterval(x);
          console.log("End Timer");
          this.$store.state.timer_running -= 1;
        }
      }, 1000);
    } else {
      //console.log("No CountDown on " + this.postContent.title);
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