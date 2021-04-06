<template>
  <div class="content AllPersons">
    <Person num="1" />
    <Person num="2" />
    <Person num="6" />
    <Person num="4" />
  </div>
</template>
<script>
import Person from "../components/Person.vue";

export default {
  components: {
    Person,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.AllPersons {
  display: block;
  text-align: left;
  padding: 0;
}
</style>