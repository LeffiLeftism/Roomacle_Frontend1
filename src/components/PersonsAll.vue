<template>
  <div class="content PersonsAll">
    <PersonSingle
      v-for="(item, index) in db.persons"
      :key="index"
      :num="index + 1"
      :person="db.persons[index]"
    />
  </div>
</template>
<script>
import PersonSingle from "./PersonSingle.vue";
import db from "../assets/data.json";

export default {
  components: {
    PersonSingle,
  },
  data() {
    return {
      db,
    };
  },
};
</script>

<style scoped>
.PersonsAll {
  display: block;
  padding: 0;
  overflow: scroll;
}
</style>