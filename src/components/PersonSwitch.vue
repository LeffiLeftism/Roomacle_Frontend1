<template>
  <div id="personswitch">
    <button class="textbutton" @click="switchPerson('-')">&lt;</button>
    <span class="textline"
      >{{
        this.$store.state.persons[this.$store.state.person_index_calendar].name
      }}
    </span>
    <!--<span class="textline"> {{ this.weekStart }} - {{ this.weekEnd }}</span>-->
    <button class="textbutton" @click="switchPerson('+')">&gt;</button>
  </div>
</template>

<script>
export default {
  methods: {
    switchPerson(direction) {
      if (direction == "+") {
        console.log(direction);
        if (
          this.$store.state.person_index_calendar <
          this.$store.state.persons.length - 1
        ) {
          this.$store.state.person_index_calendar++;
        }
      } else if (direction == "-") {
        console.log(direction);
        if (this.$store.state.person_index_calendar > 0) {
          this.$store.state.person_index_calendar--;
        }
      }
      console.log(this.$store.state.person_index_calendar);
    },
  },
};
</script>

<style scoped>
#personswitch {
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  border: grey solid 2px;

  width: 100%;
  height: 100%;
}
.textline {
  font-size: 3em;
  text-align: center;
  width: 70%;
}
.textbutton {
  font-size: 40px;
  width: 10%;

  background-color: rgb(163, 163, 163);
  border-radius: 13px;
  border: 3px solid rgb(104, 104, 104);
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  overflow: hidden;
}
</style>