<template>
  <div style="overflow: scroll; width: 85%">
    <b-table
      small
      sticky-header
      striped
      hover
      :items="apple"
      style="width: 100%"
    ></b-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
          apple: [
            {num:"3333",name:"Termin",date:"2021-03-14",tStart:"00:00",tEnd:"13:45"},
            {num:"0815",name:"Discord Session",date:"2021-03-16",tStart:"08:15",tEnd:"13:30"},
            {num:"1444",name:"Microcomputertechnik",date:"2021-03-13",tStart:"15:15",tEnd:"16:45"},
            {num:"6543",name:"Lern to Play",date:"2021-03-14",tStart:"15:15",tEnd:"17:15"},
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
        }
    }
}
</script>