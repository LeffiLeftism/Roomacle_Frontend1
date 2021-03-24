<template>
  <div id="button">
    <button class="btnNavigation" @click="setScreen()">
      <img :src="resolve_img_url(imgName)" />
    </button>
  </div>
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
  },
  methods: {
    resolve_img_url: function (path) {
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
#button {
  padding: 1px;
  display: flex;
  justify-content: space-around;
  height: 100%;
}

.btnNavigation {
  width: 100%;
  background-color: rgb(163, 163, 163);
  border-radius: 13px;
  border: 3px solid rgb(104, 104, 104);
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  overflow: hidden;
}
button:active {
  background-color: rgb(104, 104, 104);
  position: relative;
  top: 2px;
}

img {
  max-height: 85px;
}
</style>