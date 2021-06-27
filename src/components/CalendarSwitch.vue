<template>
  <div id="calendarswitch">
    <button class="switchbutton" @click="setDateAdjust(-7)">&lt;</button>
    <span class="textline">{{ weekStart }} - {{ weekEnd }}</span>
    <!--<span class="textline"> {{ this.weekStart }} - {{ this.weekEnd }}</span>-->
    <button class="switchbutton" @click="setDateAdjust(7)">&gt;</button>
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
      //Formt das hinterlegte Datum von Wochenstart in das Format DD.MM.YY
      return `${this.$store.state.calendar.weekStart.day}.${this.$store.state.calendar.weekStart.month}.${this.$store.state.calendar.weekStart.year}`;
    },
    weekEnd() {
      //Formt das hinterlegte Datum von Wochenende in das Format DD.MM.YY
      return `${this.$store.state.calendar.weekEnd.day}.${this.$store.state.calendar.weekEnd.month}.${this.$store.state.calendar.weekEnd.year}`;
    },
  },
  methods: {
    setDateAdjust(numb) {
      //Aktualisiert das hinterlegte Datum von Wochenstart- und ende abhängig vom gedrückten Button
      this.dateAdjust += numb;
      var dt = new Date();
      dt.setDate(dt.getDate() + this.dateAdjust);
      this.setWeek(dt);
    },
    setWeek(date) {
      //Hinterlegt Start und Enddatum der Woche des übergebenen Datums
      this.startOfWeek(date);
      this.endOfWeek(date);
    },
    startOfWeek(date) {
      //Hinterlegt das Startdatum der Woche in lokalen Speicher
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
      //Hinterlegt das Enddatum der Woche in lokalen Speicher
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
      //Formt das übergebene Datum zum Format DD.MM.YY und gibt dieses als Text zurück
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
      //Gibt übergebene Zahl als Text zurück und fügt vorn eine "0" hinzu, sollte sie unter 10 sein
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

  width: 100%;
  height: 100%;
}
.textline {
  font-size: 3em;
  text-align: center;
  width: 70%;
}
.switchbutton {
  font-size: 40px;
  width: 10%;
  background-color: rgb(255, 255, 255);
  border-radius: 13px;
  border: 3px solid rgb(130, 20, 80);
  display: inline-block;
  cursor: pointer;
  font-family: Arial;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  overflow: hidden;
}
button:active {
  background-color: rgb(130, 20, 80);
}
</style>