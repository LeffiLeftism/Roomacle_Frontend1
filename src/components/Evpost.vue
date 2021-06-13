<template>
  <div
    id="evpost"
    @click="openModal()"
    :class="[termin.pinned == true ? 'pinned' : 'notpinned']"
  >
    <span class="textline">{{ termin.num }} | {{ termin.name }}</span
    >
    <span v-show="termin.pinned" style="float: right">ANGEPINNT</span>
    <br />
    Von {{ time[termin.std_start - 1].tStart }} bis
    {{ time[termin.std_start + termin.duration - 1 - 1].tEnd }} Uhr
    <br />
    Studiengänge: {{ termin.studigang }}
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
  mounted() {
    console.log(this.termin);
  },
};
</script>

<style>
#evpost {
  padding: 7px;
  margin-bottom: 5px;
  text-align: left;
}
.textline {
  font-size: 1em;
  font-weight: bold;
}
.pinned {
  background-color: rgb(155, 195, 40);
}
.notpinned {
  background-color: rgb(75, 190, 225);
}
</style>