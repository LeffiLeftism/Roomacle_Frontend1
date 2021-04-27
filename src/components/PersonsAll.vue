<template>
  <div class="content PersonsAll">
    <PersonSingle
      v-for="(item, index) in this.$store.state.persons"
      :key="index"
      :num="index + 1"
      :person="item"
    />
  </div>
</template>
<script>
import PersonSingle from "./PersonSingle.vue";

export default {
  components: {
    PersonSingle,
  },
  data() {
    return {};
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