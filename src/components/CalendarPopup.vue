<template>
  <div class="calendarPopup">
    <header>{{ termin.num }} | {{ termin.name }}</header>
    <div id="body">
      <div class="spec">Beginn:</div>
      <div class="desc">
        {{ termin.date.start }} um {{ times[termin.std_start - 1].tStart }}
      </div>
      <div class="spec">Ende:</div>
      <div class="desc">
        {{ times[termin.std_start + termin.duration - 1 - 1].tEnd }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    termin: Object,
    times: Array,
  },
  methods: {
    writeContent() {},
  },
  created() {},
};
</script>

<style scoped>
.calendarPopup {
  border: 5px grey solid;
  padding: 5px;
  height: 100%;
}
header {
  font-weight: bolder;
  font-size: 2em;
  padding: 5px;
}
#body {
  text-align: left;
  font-size: 1.3em;
  padding: 5px;
}
.spec {
  display: inline-flex;
  width: 25%;
}
.desc {
  display: inline-flex;
  width: 75%;
}
</style>