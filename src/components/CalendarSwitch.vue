<template>
  <div id="calendarswitch">
    <button class="textbutton" @click="setDateAdjust(-7)">&lt;</button>
    <span class="textline">{{ weekStart }} - {{ weekEnd }}</span>
    <!--<span class="textline"> {{ this.weekStart }} - {{ this.weekEnd }}</span>-->
    <button class="textbutton" @click="setDateAdjust(7)">&gt;</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dateAdjust: 0,
    };
  },
  computed: {
    weekStart() {
      return `${this.$store.state.calendar.weekStart.day}.${this.$store.state.calendar.weekStart.month}.${this.$store.state.calendar.weekStart.year}`;
    },
    weekEnd() {
      return `${this.$store.state.calendar.weekEnd.day}.${this.$store.state.calendar.weekEnd.month}.${this.$store.state.calendar.weekEnd.year}`;
    },
  },
  methods: {
    setDateAdjust(numb) {
      this.dateAdjust += numb;
      var dt = new Date();
      dt.setDate(dt.getDate() + this.dateAdjust);
      this.setWeek(dt);
    },
    setWeek(date) {
      this.startOfWeek(date);
      this.endOfWeek(date);
    },
    startOfWeek(date) {
      let diff =
        date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
      let nom = new Date(date.setDate(diff));
      this.$store.commit("changeWeekStart", {
        day: this.fillUpTens(nom.getDate()),
        month: this.fillUpTens(nom.getMonth() + 1),
        year: this.fillUpTens(nom.getFullYear()),
      });
      return this.shortDate(nom);
    },
    endOfWeek(date) {
      let diff =
        date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1) + 5;
      let nom = new Date(date.setDate(diff));
      this.$store.commit("changeWeekEnd", {
        day: this.fillUpTens(nom.getDate()),
        month: this.fillUpTens(nom.getMonth() + 1),
        year: this.fillUpTens(nom.getFullYear()),
      });
      return this.shortDate(nom);
    },
    shortDate(date) {
      let day = date.getDate();
      if (day < 10) {
        day = "0" + day;
      }
      let month = date.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }
      let year = date.getFullYear();
      return `${day}.${month}.${year}`;
    },
    fillUpTens(number) {
      if (number < 10) number = "0" + number;
      else number = String(number);
      return number;
    },
  },
  mounted() {
    this.setWeek(new Date());
  },
  created() {},
};
</script>

<style scoped>
#calendarswitch {
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  border: grey solid 2px;

  width: 100%;
  height: 100%;
}
.textline {
  font-size: 3em;
  text-align: center;
}
.textbutton {
  font-size: 40px;
  width: 10%;

  background-color: rgb(163, 163, 163);
  border-radius: 13px;
  border: 3px solid rgb(104, 104, 104);
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  overflow: hidden;
}
</style>