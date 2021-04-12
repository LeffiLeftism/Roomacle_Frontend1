<template>
  <div style="overflow: scroll; width: 85%">
    <!--<v-dialog />-->
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
          @click="openModal(10 * (hour_index + 1) + day_index + 1)"
        ></td>
      </tr>
    </table>
    <!--<button @click="resetCalendar">Reset Calendar</button>-->
  </div>
</template>

<script>
import db from "../assets/data.json";
import CalendarPopup from "./CalendarPopup.vue";

export default {
  components: {},
  data() {
    return {
      db,
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
      //console.log(weekStartDate);

      let weekEndDay = this.$store.state.calendar.weekEnd.day;
      let weekEndMonth = this.$store.state.calendar.weekEnd.month;
      let weekEndYear = this.$store.state.calendar.weekEnd.year;

      let weekEndDate = new Date(weekEndYear, weekEndMonth - 1, weekEndDay);
      weekEndDate.setHours(23, 59, 59, 999);
      //console.log(weekEndDate);

      for (const vIndex in this.db.veranstaltungen) {
        if (Object.hasOwnProperty.call(this.db.veranstaltungen, vIndex)) {
          const element = this.db.veranstaltungen[vIndex];
          let dt = new Date(element.date);
          //console.log(dt);
          //console.log(weekEndDate);
          if (dt >= weekStartDate && dt <= weekEndDate) {
            //console.log(element);
            let day = new Date(element.date).getDay();
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
      }
      /*console.log("Connect-Array erstellt");
      console.log(connection);*/
      this.button_db_connect = connection;

      //document.getElementById("62").rowSpan = "2";
      //
    },
    resetCalendar() {
      for (let hour_index = 0; hour_index < db.time.length; hour_index++) {
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
          termin: db.veranstaltungen[vIndex],
          times: db.time,
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

    //////////////////////////////////////////////////////////////////////////////////////////

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
    },
    recieveData: async function () {
      let response;
      console.log("Recieve all Data");
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      let data = {
        type: "",
      };
      let json = [];

      data.type = "timings";
      options.body = JSON.stringify(data);
      response = await fetch("/recieve", options);
      json.timings = await response.json();

      data.type = "meetings";
      options.body = JSON.stringify(data);
      response = await fetch("/recieve", options);
      json.meetings = await response.json();

      data.type = "persons";
      options.body = JSON.stringify(data);
      response = await fetch("/recieve", options);
      json.persons = await response.json();

      this.$store.commit("importTimings", {
        data: json.timings,
      });
      this.$store.commit("importMeetings", {
        data: json.meetings,
      });
      this.$store.commit("importPersons", {
        data: json.persons,
      });

      console.log("Response:");
      console.log(json);
    },

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
    //console.log("Calendar is mounted");
    this.recieveData();
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