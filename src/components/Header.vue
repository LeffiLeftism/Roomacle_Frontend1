<template>
  <div id="header">
    <img id="logo" src="../assets/logo.png" alt="Logo HSRM" style="" />
    <span class="headertext">{{ fachbereich }}</span>
    <span class="headertext">{{ studienbereich }}</span>
    <span class="headertext">{{ this.time }}<br />{{ this.date }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: "",
      month: "",
      day: "",
      hour: "",
      minute: "",
      second: "",
    };
  },
  computed: {
    time() {
      return `${this.hour}:${this.minute}:${this.second}`;
    },
    date() {
      return `${this.day}.${this.month}.${this.year}`;
    },
  },
  props: {
    fachbereich: String,
    studienbereich: String,
  },
  methods: {
    refreshTime: function () {
      var date = new Date();
      this.year = date.getFullYear();
      this.month = date.getMonth() + 1;
      this.day = date.getDate();
      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.second = date.getSeconds();
      this.month = this.checkTime(this.month);
      this.day = this.checkTime(this.day);
      this.minute = this.checkTime(this.minute);
      this.second = this.checkTime(this.second);
    },
    checkTime: function (i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
  },
  created() {
    setInterval(() => {
      this.refreshTime();
    }, 1000);
  },
};
</script>

<style scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 15%;
  /*background-color:aqua;*/
}

#logo {
  max-height: 60px;
  max-width: 25%;
}

.headertext {
  font-weight: bold;
  max-width: 20%;
}
</style>