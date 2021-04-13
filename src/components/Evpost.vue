<template>
  <div id="evpost">
    <span class="textline">{{ termin.num }} | {{ termin.name }}</span
    ><br />
    Von {{ time[termin.std_start - 1].tStart }} bis
    {{ time[termin.std_start - 1].tEnd }} Uhr
    <br />
    Studiengänge: {{ termin.studigang }}
    <br />
    Semester: {{ termin.semester }}
    <br />
    DozentIn: {{ termin.dozent }}
  </div>
</template>

<script>
export default {
  props: {
    termin: Object,
    time: Array,
  },
};
</script>

<style>
#evpost {
  padding: 7px;
  margin-bottom: 5px;
  text-align: left;
  background-color: rgb(75, 204, 243);
}
.textline {
  font-size: 1em;
  font-weight: bold;
}
</style>