<template>
  <div style="overflow: scroll; width: 100%">
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
  props: {
    meetings: Array,
  },
  methods: {
    writeCalendar() {
      //Schreibt die Veranstaltungsdaten aus dem lokalen Speicher in die Kalenderzellen
      console.log("Write calendar");
      this.resetCalendar();
      //Speichert Verbindung zwischen Veranstaltungsindex und Zellenindex
      let connection = [];

      //Erstellt Startdatum der Woche aus hinterlegtem Datum des Kalenderwechslers
      let weekStartDate = new Date(
        this.$store.state.calendar.weekStart.year,
        this.$store.state.calendar.weekStart.month - 1,
        this.$store.state.calendar.weekStart.day
      );

      let weekEndDay = this.$store.state.calendar.weekEnd.day;
      let weekEndMonth = this.$store.state.calendar.weekEnd.month;
      let weekEndYear = this.$store.state.calendar.weekEnd.year;

      //Erstellt Enddatum der Woche aus hinterlegtem Datum des Kalenderwechslers
      let weekEndDate = new Date(weekEndYear, weekEndMonth - 1, weekEndDay);
      weekEndDate.setHours(23, 59, 59, 999);

      for (const vIndex in this.meetings) {
        const element = this.meetings[vIndex];
        let dateStart = new Date(element.date.start);
        let dateEnd = new Date(element.date.end);
        let W_dateStart = this.ISOweek(dateStart);
        let W_weekStartDate = this.ISOweek(weekStartDate);
        let weekDif;
        //Überprüft die Kalenderwoche, ob eine Veranstaltung in der ausgewählten Woche stattfindet und hinterlegt diese als Wochendifferenz
        if (element.date.repeatedly == 0) {
          weekDif = 0;
        } else {
          weekDif = (W_weekStartDate - W_dateStart) % element.date.repeatedly;
        }

        console.log(element);
        //Überprüft folgende Eigenschaften:
        //Veranstaltung entwender dauerhaft stattfindet oder Startdatum der Woch vor dem Enddatum der Veranstaltung liegt
        //UND Enddatum der Woche hinter dem Startdatum der Veranstaltung liegt
        //UND die Wochendifferenz gleich 0 ist und Veranstaltung in der Woche stattfindet
        if (
          (element.date.infinity == true || weekStartDate <= dateEnd) &&
          weekEndDate > dateStart &&
          weekDif == 0
        ) {
          let day = new Date(element.date.start).getDay();
          let cellID = element.std_start * 10 + day;
          let buttonName = element.name_short;
          let cell = document.getElementById(cellID);

          cell.innerText = buttonName;
          //Setzt die Farbe für angepinnte, nicht gepinnte Veranstaltungen
          if (element.pinned) {
            cell.style.background = "rgb(155, 195, 40)";
          } else {
            cell.style.background = "rgb(75, 190, 225)";
          }
          cell.style.color = "black";

          let duration = element.duration;
          //Vergrößert die Zelle für die Länge der Veranstaltung
          if (duration > 1) {
            cell.rowSpan = duration;
            for (let index = 1; index < duration; index++) {
              //Versteckt die Zellen, welche von einer Langen Veranstaltung überschrieben wurden, damit das Layout bleibt
              let hiddenID = cellID + 10 * index;
              document.getElementById(hiddenID).style.display = "none";
            }
          }
          let combi = [cellID, vIndex];
          connection.push(combi);
        }
      }
      //Schreibt das Verbindungsarray in eine Variable, welche in der gesamten Komponente verfügbar ist
      this.button_db_connect = connection;
    },
    resetCalendar() {
      //Stellt den standardmäßigen Kalender ohne Veranstaltungen wieder her (Zellengrößen, -farben, etc.)
      console.log("Reset Calendar");
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
      //Öffnet das Popup der Veranstaltungen im Kalender über den betätigten Zellenindex und das Verbindungsarray zu den Veranstaltungen
      try {
        let index = this.button_db_connect.findIndex((element) =>
          element.includes(CellID)
        );
        let vIndex = this.button_db_connect[index][1];
        this.$modal.show(CalendarPopup, {
          termin: this.meetings[vIndex],
          times: this.$store.state.timings,
        });
      } catch (err) {
        console.log("Clicked on Non-Event cell in calendar.");
      }
    },

    ISOweek(dt) {
      //Bestimmt die Kalenderwoche eines Datums und gibt diese zurück
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
  watch: {
    "$store.state.calendar.weekStart.day": {
      //Überwacht den Starttag der Woche und schreibt den Kalender bei einer Änderung neu
      handler: function () {
        this.writeCalendar();
      },
    },

    "$store.state.person_index_calendar": {
      //Überwacht den Index der Ausgewählten Person bei Büroräumen und schreibt den Kalender bei einer Änderung neu
      handler: function () {
        this.writeCalendar();
      },
    },
  },
  mounted() {
    this.setWeek(new Date());
    this.writeCalendar();
  },
  beforeUpdate() {
    console.log("Before Update");
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