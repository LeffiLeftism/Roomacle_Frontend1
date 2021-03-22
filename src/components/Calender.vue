<template>
  <div style="overflow: scroll; width: 85%">
    <v-dialog />
    <table id="table1" style="width: 100%; table-layout: fixed">
      <tr>
        <th style="width: 20%">Std</th>
        <th>Mo</th>
        <th>Di</th>
        <th>Mi</th>
        <th>Do</th>
        <th>Fr</th>
        <th>Sa</th>
      </tr>
      <tr v-for="(n, hour_index) in db.time" :key="hour_index">
        <td>
          <div
            style="
              display: inline-flex;
              flex-grow: 3;
              float: left;
              padding-left: 5px;
            "
          >
            {{ hour_index + 1 }}.
          </div>
          <div
            style="
              display: inline-flex;
              flex-grow: 1;
              float: right;
              padding-right: 5px;
            "
          >
            {{ db.time[hour_index].tStart }}-{{ db.time[hour_index].tEnd }}
          </div>
        </td>
        <td
          :id="10 * (hour_index + 1) + day_index + 1"
          v-for="(n, day_index) in 6"
          :key="day_index"
        >
          <button
            @click="openModal(10 * (hour_index + 1) + day_index + 1)"
            :disabled="true"
            style="color: white; background: white"
          >
            {{ hour_index + 1 }} - {{ day_index + 1 }}
          </button>
        </td>
      </tr>
    </table>
    <!--<button @click="resetCalender">Reset Calender</button>-->
  </div>
</template>

<script>
import db from "../assets/data.json";
export default {
  components: {},
  data() {
    return {
      db,
      button_db_connect: [],
    };
  },
  computed: {
    weekStartDay () {
      return this.$store.state.calender.weekStart.day;
    }
  },
  methods: {
    writeCalender() {
      this.resetCalender();
      //console.log('write calender');
      //console.log(this.button_data_connect);
      let connection = [];
      /*console.log("Connect-Array auf 0 gesetzt");
      console.log(connection);*/

      let weekStartDay = this.$store.state.calender.weekStart.day;
      let weekStartMonth = this.$store.state.calender.weekStart.month;
      let weekStartYear = this.$store.state.calender.weekStart.year;

      let weekStartDate = new Date(
        weekStartYear,
        weekStartMonth - 1,
        weekStartDay
      );
      //console.log(weekStartDate);

      let weekEndDay = this.$store.state.calender.weekEnd.day;
      let weekEndMonth = this.$store.state.calender.weekEnd.month;
      let weekEndYear = this.$store.state.calender.weekEnd.year;

      let weekEndDate = new Date(weekEndYear, weekEndMonth - 1, weekEndDay);
      //console.log(weekEndDate);

      for (const _id in this.db.veranstaltungen) {
        if (Object.hasOwnProperty.call(this.db.veranstaltungen, _id)) {
          const element = this.db.veranstaltungen[_id];
          let dt = new Date(element.date);
          if (dt >= weekStartDate && dt <= weekEndDate) {
            //console.log(element);
            let day = new Date(element.date).getDay();
            //console.log(day);
            let cellID = element.std * 10 + day;
            let buttonName = element.name_short;
            let cell = document.getElementById(cellID);
            cell.firstChild.innerText = buttonName;
            cell.firstChild.style.background = "lightgrey";
            cell.firstChild.style.color = "black";
            cell.firstChild.disabled = false;
            /*console.log(
            "Updated Button-text in cell with ID: " +
              cellID +
              " to " +
              buttonName
          );*/
            let combi = [cellID, element._id];
            connection.push(combi);
          }
        }
      }
      /*console.log("Connect-Array erstellt");
      console.log(connection);*/
      this.button_db_connect = connection;
    },
    resetCalender() {
      for (let hour_index = 0; hour_index < db.time.length; hour_index++) {
        for (let day_index = 0; day_index < 6; day_index++) {
          let CellID = (hour_index + 1) * 10 + day_index + 1;
          let cell = document.getElementById(CellID);
          cell.firstChild.innerText = '';
          cell.firstChild.style.background = "white";
          cell.firstChild.style.color = "white";
          cell.firstChild.disabled = true;
        }
      }
    },
    //error when cellID = buttonid ?!?
    openModal(CellID) {
      let index = this.button_db_connect.findIndex((element) =>
        element.includes(CellID)
      );
      let data = this.db.veranstaltungen[index];
      this.$modal.show("dialog", {
        title: data.name,
        text: `Veranstaltung: ${data.name} <br>
        Veranstaltungsnummer: ${data.num}<br>
        Datum: ${data.date}`,
      });
    },
    getRandomRgb(index) {
      var num = Math.round(0xffffff * Math.random());
      var r = num >> 16;
      var g = (num >> 8) & 255;
      var b = num & 255;
      document.getElementById(index).style.backgroundColor =
        "rgb(" + r + ", " + g + ", " + b + ")";
    },
  },
  watch: {
    weekStartDay: function() {
      //console.log('Changed weekStartDay');
      this.writeCalender();
    }
  },
  mounted() {
    this.writeCalender();
    //this.generate_table();
  },
  created() {},
};
</script>




<style scoped>
table,
td,
th {
  border: 1px solid black;
  padding: 0;
}
#table1 {
  border-spacing: 0;
}
button {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  border: 0;
}
</style>