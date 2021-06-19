<template>
  <button
    class="btnNavigation"
    @click="setScreen()"
    :id="'navButton' + screen"
    :style="buttonStyle"
  >
    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
      "
    >
      <!--img :src="img_url(imgName)" /-->
      {{ this.name }}
    </div>
  </button>
</template>

<script>
//import Home from "../assets/home"

export default {
  data() {
    return {};
  },
  props: {
    imgName: String,
    screen: String,
    name: String,
    basiccolor: {
      type: String,
      default: "rgb(255, 255, 255)",
    },
    activatedcolor: {
      type: String,
      default: "rgb(163, 163, 163)",
    },
  },
  computed: {
    buttonStyle() {
      if (this.$store.state.screen == this.screen) {
        return {
          "background-color": this.activatedcolor,
          border: "5px solid",
          "border-color": this.activatedcolor,
          color: "white",
        };
      } else {
        return {
          "background-color": this.basiccolor,
          border: "5px solid",
          "border-color": this.activatedcolor,
        };
      }
    },
  },
  methods: {
    img_url: function (path) {
      let images = require.context("../assets/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    },
    setScreen() {
      this.$store.state.screen = this.screen;
    },
  },
};
</script>

<style>
#buttondiv img {
  max-height: 100%;
  max-width: 100%;
}
.btnNavigation {
  width: 100%;
  height: 33%;
  border-radius: 13px;
  display: inline-block;
  cursor: pointer;
  background-color: white;
  color: black;
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  overflow: hidden;
}
button:active {
  /*background-color: rgb(104, 104, 104);*/
  position: relative;
  top: 2px;
  color: white;
}
</style>