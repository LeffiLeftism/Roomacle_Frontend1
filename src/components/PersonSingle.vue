<template>
  <div class="personSingle" @click="openModal()">
    <div class="picture">
      <img
        class="profilePic"
        :src="img_url('Person' + num + '.jpg')"
        alt="profile picture"
      />
    </div>
    <div class="personName">
      {{this.person.name}}, {{this.person.titel}}
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
        this.$modal.show(PersonPopup, {
          num: this.num,
          person: this.person});
      } catch (err) {
        console.log("Error on person.");
      }
    },
    img_url: function (path) {
      let images = require.context(
        "../assets/ProfilPictures/",
        false,
        /\.png$|\.jpg$/
      );
      return images("./" + path);
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
  border: 1px solid black;
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
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: 80%;
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