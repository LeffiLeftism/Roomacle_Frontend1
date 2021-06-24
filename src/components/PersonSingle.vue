<template>
  <div class="personSingle" @click="openModal()">
    <div class="picture">
      <img
        class="profilePic"
        :src="this.person.base64Code"
        alt="Profilbild..."
      />
    </div>
    <div class="personName">
      <span>
        {{ this.person.name
        }}<span v-if="this.person.titel">, {{ this.person.titel }}</span></span
      >
    </div>
  </div>
</template>

<script>
import PersonPopup from "../components/PersonPopup.vue";

export default {
  props: {
    num: Number,
    person: Object,
  },
  methods: {
    openModal() {
      try {
        this.$modal.show(
          PersonPopup,
          {
            num: this.num,
            person: this.person,
          },
          {
            width: "700px",
          }
        );
      } catch (err) {
        console.log("Error on person.");
      }
    },
    printConsole(num) {
      console.log(num);
    },
  },
  created() {},
};
</script>

<style scoped>
.personSingle {
  /*padding: 25px;*/
  display: inline-flex;
  border: 2px solid rgb(75, 190, 255);
  margin: 2px;
  width: calc(50% - 4px);
  height: calc(50% - 4px);
}
.personSingle .picture {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
}
.personSingle .profilePic {
  padding: 5px;
  max-width: 100%;
  /*
  padding: 5px;
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;*/
}
.personSingle .personName {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 100%;
  padding: 10px;
  font-size: 1.5em;
}
</style>