<template>
  <div id="person" @click="printConsole(num)">
    <div class="picture">
      <img
        class="profilePic"
        :src="img_url('Person' + num + '.jpg')"
        alt="profile picture"
      />
    </div>
    <div class="test1">Visar Januzaj, M.Sc.</div>
  </div>
</template>

<script>
export default {
  props: {
    num: String,
  },
  methods: {
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
#person {
  /*padding: 25px;*/
  display: inline-flex;
  border: 1px solid black;
  width: 50%;
  height: 50%;
}
.picture {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
  background: red;
}
.profilePic {
  padding: 5px;
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: 80%;
}
.test1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 100%;
  padding: 10px;
  background: chartreuse;
  font-size: 1.5em;
}
</style>