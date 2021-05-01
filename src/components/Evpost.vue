<template>
  <div id="evpost" @click="openModal()">
    <span class="textline">{{ termin.num }} | {{ termin.name }}</span
    ><br />
    Von {{ time[termin.std_start - 1].tStart }} bis
    {{ time[termin.std_start + termin.duration - 1 - 1].tEnd }} Uhr
    <br />
    Studiengänge: {{ termin.studigang }}
    <br />
    Semester: {{ termin.semester }}
    <br />
    DozentIn: {{ termin.dozent }}
  </div>
</template>

<script>
import CalendarPopup from "./CalendarPopup.vue";

export default {
  components: {},
  props: {
    termin: Object,
    time: Array,
  },
  methods: {
    openModal() {
      try {
        this.$modal.show(CalendarPopup, {
          termin: this.termin,
          times: this.$store.state.timings,
        });
      } catch (err) {
        console.log("Error in Evpost running Popup.");
      }
    },
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