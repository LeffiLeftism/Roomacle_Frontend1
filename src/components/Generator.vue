<template>
  <div style="width: 100%; height: 100%; overflow: scroll">
    <div
      v-for="(element, ind) in db.veranstaltungen"
      :key="ind"
      style="padding: 5px; border: 1px black solid"
      class="eintrag"
    >
      <div class="eintrag_left">
        <span class="description">Name:</span>
        <input
          class="inputcells"
          type="text"
          :value="db.veranstaltungen[ind].name"
          :id="ind + 'inputName'"
        />
        <br />
        <span class="description">Kurzbez.:</span>
        <input
          class="inputcells"
          type="text"
          :value="db.veranstaltungen[ind].name_short"
          :id="ind + 'inputNameShort'"
        />
        <br />
        <span class="description">Nummer.:</span>
        <input
          class="inputcells"
          type="text"
          :value="db.veranstaltungen[ind].num"
          :id="ind + 'inputNum'"
        />
        <br />
        <span class="description">Datum.:</span>
        <input
          class="inputcells"
          type="date"
          :value="db.veranstaltungen[ind].date"
          :id="ind + 'inputDate'"
        />
        <br />
        <span class="description">Von - bis:</span>
        <div class="inputcells">
          <select name="tStart" :id="ind + 'inputtStart'">
            <option
              v-for="(item, index) in db.time"
              v-bind:key="index"
              :value="index + 1"
            >
              {{ index + 1 }}.Std. {{ db.time[index].tStart }}
            </option>
          </select>
          -
          <select name="tEnd" :id="ind + 'inputtEnd'">
            <option
              v-for="(item, index) in db.time"
              v-bind:key="index"
              :value="index + 1"
            >
              {{ index + 1 }}. Std. {{ db.time[index].tEnd }}
            </option>
          </select>
        </div>
        <br />
        <span class="description">Dozent:</span>
        <input
          class="inputcells"
          type="text"
          :value="db.veranstaltungen[ind].dozent"
          :id="ind + 'inputDozent'"
        />
      </div>
      <div class="eintrag_right">
        <button class="eintrag_button" @click="reset_eintrag(ind)">
          Reset
        </button>
        <button class="eintrag_button" @click="save_eintrag(ind)">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../assets/data.json";

export default {
  data() {
    return {
      db,
    };
  },
  methods: {
    reset_eintrag(index) {
      var data = db.veranstaltungen[index];
      document.getElementById(index + "inputNum").value = data.num;
      document.getElementById(index + "inputName").value = data.name;
      document.getElementById(index + "inputNameShort").value = data.name_short;
      document.getElementById(index + "inputtStart").value = data.std_start;
      document.getElementById(index + "inputtEnd").value =
        data.std_start + data.duration - 1;
      document.getElementById(index + "inputDate").value = data.date;
      document.getElementById(index + "inputDozent").value = data.dozent;
      console.log("Reset Index: " + index);
    },
    save_eintrag(index) {
      console.log("Save Index: " + index + " to File. DISABLED");
    },
  },
  mounted() {
    for (const index in db.veranstaltungen) {
      document.getElementById(index + "inputtStart").value =
        db.veranstaltungen[index].std_start;
      document.getElementById(index + "inputtEnd").value =
        db.veranstaltungen[index].std_start +
        db.veranstaltungen[index].duration -
        1;
    }
  },
};
</script>

<style scoped>
.eintrag {
  display: flex;
  margin: 0;
  padding: 1px;
  margin: 0;
  border: 1px grey solid;
  text-align: left;
}
.eintrag_left {
  padding: 0 3px;
  width: 75%;
  height: 100%;
}
.eintrag_right {
  padding: 0 3px;
  width: 25%;
}
.description {
  width: 25%;
}
.inputcells {
  width: 75%;
  float: right;
}
.eintrag_button {
  height: 100%;
  width: 50%;
}
input {
  height: 24px;
  width: 100%;
}
select {
  width: 47%;
}
</style>