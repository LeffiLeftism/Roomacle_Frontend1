<template>
  <div id="personswitch">
    <button class="switchbutton" @click="switchPerson('-')">
      <span> &lt;</span>
    </button>
    <span class="textline"
      >{{
        this.$store.state.persons[this.$store.state.person_index_calendar].name
      }}
    </span>
    <!--<span class="textline"> {{ this.weekStart }} - {{ this.weekEnd }}</span>-->
    <button class="switchbutton" @click="switchPerson('+')">&gt;</button>
  </div>
</template>

<script>
export default {
  methods: {
    switchPerson(direction) {
      //Wechselt die angezeigte Person, indem der Index einer Person im lokalen Speicher hinterlegt wird
      //Die Personen können im Ring umgeschaltet werden
      if (direction == "+") {
        //console.log(direction);
        if (
          this.$store.state.person_index_calendar <
          this.$store.state.persons.length - 1
        ) {
          this.$store.state.person_index_calendar++;
        } else {
          this.$store.state.person_index_calendar = 0;
        }
      } else if (direction == "-") {
        //console.log(direction);
        if (this.$store.state.person_index_calendar > 0) {
          this.$store.state.person_index_calendar--;
        } else {
          this.$store.state.person_index_calendar = this.$store.state.persons.length - 1;

        }
      }
      //console.log(this.$store.state.person_index_calendar);
    },
  },
};
</script>

<style scoped>
#personswitch {
  display: inline-flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100%;
}
.textline {
  font-size: 3em;
  text-align: center;
  width: 70%;
}
.switchbutton {
  font-size: 40px;
  width: 10%;
  background-color: rgb(255, 255, 255);
  border-radius: 13px;
  border: 3px solid rgb(130, 20, 80);
  display: inline-block;
  cursor: pointer;
  font-family: Arial;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  overflow: hidden;
}
button:active {
  background-color: rgb(130, 20, 80);
}
</style>