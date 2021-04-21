<template>
  <div style="overflow: scroll; width: 85%">
    <!--<v-dialog />-->
    <!--button @click="recieveData()" style="height: 40px">Recieve</button>
    <button @click="test()" style="height: 40px">Write</button-->
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
      <tr
        v-for="(item, hour_index) in this.$store.state.timings"
        :key="hour_index"
      >
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
            {{ item.tStart }}-{{ item.tEnd }}
          </div>
        </td>
        <td
          :id="10 * (hour_index + 1) + day_index + 1"
          v-for="(n, day_index) in 6"
          :key="day_index"
          @click="openModal(10 * (hour_index + 1) + day_index + 1)"
        ></td>
      </tr>
    </table>
    <!--<button @click="resetCalendar">Reset Calendar</button>-->
  </div>
</template>

<script>
//import db from "../assets/data.json";
import CalendarPopup from "./CalendarPopup.vue";

export default {
  components: {},
  data() {
    return {
      //db,
      button_db_connect: [],
    };
  },
  computed: {},
  methods: {
    writeCalendar() {
      this.resetCalendar();
      //console.log('write calendar');
      //console.log(this.button_data_connect);
      let connection = [];
      /*console.log("Connect-Array auf 0 gesetzt");
      console.log(connection);*/

      let weekStartDay = this.$store.state.calendar.weekStart.day;
      let weekStartMonth = this.$store.state.calendar.weekStart.month;
      let weekStartYear = this.$store.state.calendar.weekStart.year;

      let weekStartDate = new Date(
        weekStartYear,
        weekStartMonth - 1,
        weekStartDay
      );
      //console.log('WeekStartDate '+weekStartDate);

      let weekEndDay = this.$store.state.calendar.weekEnd.day;
      let weekEndMonth = this.$store.state.calendar.weekEnd.month;
      let weekEndYear = this.$store.state.calendar.weekEnd.year;

      let weekEndDate = new Date(weekEndYear, weekEndMonth - 1, weekEndDay);
      weekEndDate.setHours(23, 59, 59, 999);
      //console.log('WeekEndDate '+weekEndDate);

      //console.log("Comlete meetings: " + this.$store.state.meetings);
      for (const vIndex in this.$store.state.meetings) {
        const element = this.$store.state.meetings[vIndex];
        //let dateStart = new Date(element.date);
        let dateStart = new Date(element.date.start);
        let dateEnd = new Date(element.date.end);
        let WdateStart = this.ISOweek(dateStart);
        let WweekStartDate = this.ISOweek(weekStartDate);
        let weekDif = (WweekStartDate - WdateStart) % element.date.repeatedly;
        //console.log("dateStart " + dateStart);
        //console.log("dateEnd " + dateEnd);
        //console.log("WdateStart " + dateStart);
        //console.log("WweekStartDate " + weekStartDate);
        //console.log("weekDif " + weekDif);
        //console.log(dt);
        //console.log(weekEndDate);
        if (
          (element.date.infinity == true || weekStartDate < dateEnd) &&
          weekEndDate > dateStart &&
          weekDif == 0
        ) {
          //console.log(element);
          let day = new Date(element.date.start).getDay();
          //console.log(day);
          let cellID = element.std_start * 10 + day;
          let buttonName = element.name_short;
          let cell = document.getElementById(cellID);
          /*cell.firstChild.innerText = buttonName;
            cell.firstChild.style.background = "lightgrey";
            cell.firstChild.style.color = "black";
            cell.firstChild.disabled = false;*/

          cell.innerText = buttonName;
          cell.style.background = "lightgrey";
          cell.style.color = "black";
          //cell.disabled = false;

          let duration = element.duration;
          if (duration > 1) {
            //console.log("Duration " + _id + " " + duration);
            cell.rowSpan = duration;
            for (let index = 1; index < duration; index++) {
              let hiddenID = cellID + 10 * index;
              //console.log("CellID: " + cellID);
              //console.log("Duration: " + index);
              //console.log("Hidden: " + hiddenID);
              //console.log("Index: " + index);
              document.getElementById(hiddenID).style.display = "none";
            }
          }

          /*console.log(
            "Updated Button-text in cell with ID: " +
              cellID +
              " to " +
              buttonName
          );*/
          let combi = [cellID, vIndex];
          connection.push(combi);
        }
      }
      /*console.log("Connect-Array erstellt");
      console.log(connection);*/
      this.button_db_connect = connection;

      //document.getElementById("62").rowSpan = "2";
      //
    },
    resetCalendar() {
      //console.log("Reset Calendar");
      for (
        let hour_index = 0;
        hour_index < this.$store.state.timings.length;
        hour_index++
      ) {
        for (let day_index = 0; day_index < 6; day_index++) {
          let CellID = (hour_index + 1) * 10 + day_index + 1;
          let cell = document.getElementById(CellID);
          /*cell.firstChild.innerText = CellID;
          cell.firstChild.style.background = "white";
          cell.firstChild.style.color = "grey";
          cell.firstChild.disabled = true;*/
          cell.innerText = CellID;
          cell.style.background = "white";
          cell.style.color = "white";
          cell.rowSpan = "1";
          cell.style.display = "table-cell";
        }
      }
    },
    openModal(CellID) {
      try {
        let index = this.button_db_connect.findIndex((element) =>
          element.includes(CellID)
        );
        let vIndex = this.button_db_connect[index][1];
        this.$modal.show(CalendarPopup, {
          termin: this.$store.state.meetings[vIndex],
          times: this.$store.state.timings,
        });
      } catch (err) {
        console.log("Clicked on Non-Event cell in calendar.");
      }
    },
    getRandomRgb(index) {
      var num = Math.round(0xffffff * Math.random());
      var r = num >> 16;
      var g = (num >> 8) & 255;
      var b = num & 255;
      document.getElementById(index).style.backgroundColor =
        "rgb(" + r + ", " + g + ", " + b + ")";
    },

    ISOweek(dt) {
      //console.log("Date " + dt);
      //console.log("Date.day " + dt.getDay());
      var tdt = new Date(dt.valueOf());
      var dayn = (dt.getDay() + 6) % 7;
      tdt.setDate(tdt.getDate() - dayn + 3);
      var firstThursday = tdt.valueOf();
      tdt.setMonth(0, 1);
      if (tdt.getDay() !== 4) {
        tdt.setMonth(0, 1 + ((4 - tdt.getDay() + 7) % 7));
      }
      return 1 + Math.ceil((firstThursday - tdt) / 604800000);
    },

    //////////////////////////////////////////////////////////////////////////////////////////
    /*
    sendData: async function () {
      console.log("Send all Data");
      const data = {};
      data.timings = this.$store.state.timings;
      data.meetings = this.$store.state.meetings;
      data.persons = this.$store.state.persons;
      console.log(data);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await fetch("/send", options);
      const json = await response.json();
      console.log("Response:");
      console.log(json);
    },*/
    //////////////////////////////////////////////////////////////////////////////////////////
  },
  watch: {
    "$store.state.calendar.weekStart.day": {
      handler: function () {
        /*console.log("Changed weekStartDay");
        console.log(this.$store.state.calendar.weekStart.day);*/
        this.writeCalendar();
      },
    },
  },
  created() {},
  mounted() {
    this.writeCalendar();
  },
  updated() {
    this.writeCalendar();
  },
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
.termin:onclick {
  background: red;
}
</style>