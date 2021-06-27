<template>
  <div
    class="calendarPopup"
    :class="[this.termin.pinned === true ? 'pinnedTermin' : '']"
  >
    <header>{{ termin.num }} | {{ termin.name }}</header>
    <div id="body">
      <div class="description">Beginn:</div>
      <div class="content">
        {{ times[termin.std_start - 1].tStart }}
      </div>
      <div class="description">Ende:</div>
      <div class="content">
        {{ times[termin.std_start + termin.duration - 1 - 1].tEnd }}
      </div>
      <div class="description">Raum:</div>
      <div class="content">{{ termin.roomnumber }}</div>
      <div class="description">Wdh.:</div>
      <div class="content" v-if="termin.date.repeatedly == 0">einmalig</div>
      <div class="content" v-else-if="termin.date.repeatedly == 1">
        wöchentlich
      </div>
      <div class="content" v-else>alle {{ termin.date.repeatedly }} Wochen</div>
      <div class="description">Studiengänge:</div>
      <div class="content">{{ termin.studigang }}</div>
      <div class="description">Semester:</div>
      <div class="content">{{ termin.semester }}</div>
      <div class="description">Dozent:</div>
      <div class="content">{{ termin.dozent }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    termin: Object,
    times: Array,
  },
};
</script>

<style scoped>
.calendarPopup {
  border: 5px solid rgb(75, 190, 255);
  padding: 5px;
  height: 100%;
}
.pinnedTermin {
  border: 5px solid rgb(155, 195, 40);
}
#body {
  text-align: left;
  font-size: 1.3em;
  padding: 5px;
}
.description {
  display: inline-flex;
  width: 25%;
}
.content {
  display: inline-flex;
  width: 75%;
}
</style>