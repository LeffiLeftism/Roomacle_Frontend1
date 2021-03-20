<template>
  <div style="overflow: scroll; width: 85%">
    <v-dialog />
    <table id="table1" style="width: 100%; table-layout: fixed">
      <tr>
        <th style="width: 15%">Std</th>
        <th>Montag</th>
        <th>Dienstag</th>
        <th>Mittwoch</th>
        <th>Donnerstag</th>
        <th>Freitag</th>
        <th>Samstag</th>
      </tr>
      <tr v-for="(n, hour_index) in 12" :key="hour_index">
        <td>{{ hour_index + 1 }}. 8:15-9:45</td>
        <td v-for="(n, day_index) in 6" :key="day_index">
          <button
            :id="10 * (hour_index + 1) + day_index"
            @click="openModal(10 * (hour_index + 1) + day_index+1)"
            :disabled="false"
          >
            {{ hour_index+1 }} - {{ day_index+1 }}
          </button>
        </td>
      </tr>
    </table>
    <div id="neueTab"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      apple: [
        {
          num: "3333",
          name: "Termin",
          date: "2021-03-14",
          tStart: "00:00",
          tEnd: "13:45",
          std: "1",
        },
        {
          num: "0815",
          name: "Discord Session",
          date: "2021-03-16",
          tStart: "08:15",
          tEnd: "13:30",
          std: "1",
        },
        {
          num: "1444",
          name: "Microcomputertechnik",
          date: "2021-03-13",
          tStart: "15:15",
          tEnd: "16:45",
          std: "1",
        },
        {
          num: "6543",
          name: "Lern to Play",
          date: "2021-03-14",
          tStart: "15:15",
          tEnd: "17:15",
          std: "1",
        },
      ],

      items: [
        {
          Stunde: 1,
          Montag: "ET1",
          Dienstag: "GrPH",
          Mittwoch: "",
          Donnerstag: "Algebra VL",
          Freitag: "MK-Prak",
          Samstag: "Frei",
        },
        {
          Stunde: 2,
          Montag: "ET1",
          Dienstag: "GrPH",
          Mittwoch: "",
          Donnerstag: "Algebra VL",
          Freitag: "MK-Prak",
          Samstag: "Frei",
        },
        {
          Stunde: 3,
          Montag: "MK-VL",
          Dienstag: "TM1-Statik",
          Mittwoch: "BWL",
          Donnerstag: "GrPh",
          Freitag: "CAD",
          Samstag: "Frei",
        },
        {
          Stunde: 4,
          Montag: "MK-VL",
          Dienstag: "TM1-Statik",
          Mittwoch: "BWL",
          Donnerstag: "GrPh",
          Freitag: "CAD",
          Samstag: "Frei",
        },
        {
          Stunde: 5,
          Montag: "KIT",
          Dienstag: "BuT",
          Mittwoch: "ET1",
          Donnerstag: "Analysis-Prak",
          Freitag: "Ana-VL",
          Samstag: "Frei",
        },
        {
          Stunde: 6,
          Montag: "KIT",
          Dienstag: "BuT",
          Mittwoch: "ET1",
          Donnerstag: "Analysis-Prak",
          Freitag: "Ana-VL",
          Samstag: "Mensa",
        },
        {
          Stunde: 7,
          Montag: "",
          Dienstag: "",
          Mittwoch: "",
          Donnerstag: "Algebra-Prak",
          Freitag: "CAD-A",
          Samstag: "Mensa",
        },
        {
          Stunde: 8,
          Montag: "",
          Dienstag: "",
          Mittwoch: "GDK",
          Donnerstag: "Algebra-Prak",
          Freitag: "CAD-A",
          Samstag: "Frei",
        },
        {
          Stunde: 9,
          Montag: "",
          Dienstag: "",
          Mittwoch: "GDK",
          Donnerstag: "",
          Freitag: "CAD-D",
          Samstag: "Frei",
        },
        {
          Stunde: 10,
          Montag: "",
          Dienstag: "",
          Mittwoch: "GDK-Prak",
          Donnerstag: "",
          Freitag: "",
          Samstag: "Frei",
        },
        {
          Stunde: 11,
          Montag: "",
          Dienstag: "",
          Mittwoch: "GDK-Prak",
          Donnerstag: "",
          Freitag: "",
          Samstag: "Frei",
        },
        {
          Stunde: 12,
          Montag: "",
          Dienstag: "",
          Mittwoch: "",
          Donnerstag: "",
          Freitag: "",
          Samstag: "Frei",
        },
      ],
    };
  },
  methods: {
    print2console(content) {
      console.log(content);
    },
    openModal(buttonID) {
      this.$modal.show("dialog", {
        title: "Button with ID: " + buttonID,
        text: "Lorem ipsum dolor sit amet, ...",
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
  mounted() {
    //this.generate_table();
  },
};
</script>

<style scoped>
table,
td,
th {
  border: 1px solid black;
}
#table1 {
  border-spacing: 0;
  padding: 0;
}
td {
  padding: 0;
}
button {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  border: 0;
}
</style>