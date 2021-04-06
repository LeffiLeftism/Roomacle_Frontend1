<template>
  <div class="personPopup">
    <div class="picture">
      <img :src="img_url('Person' + num + '.jpg')" alt="profile picture" />
    </div>
    <div class="content">
      <h3>{{ this.person.name }}, {{ this.person.titel }}</h3>
      <br />
      E-Mail: {{ this.person.email }}
      <br />
      <span type="link"> Homepage: {{ this.person.homepage }} </span>
      <br />
      Telefon: {{ this.person.telefon }}
      <br />
      Sprechzeiten: {{ this.person.sprechzeit }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: Number,
    person: Object,
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
  },
};
</script>

<style scoped>
.personPopup {
  display: flex;
  border: 5px grey solid;
  padding: 5px;
  height: 100%;
}
.personPopup .picture {
  border-right: 1px grey solid;
  display: flex;
  justify-content: center;
  width: 40%;
  height: 100%;
}
.personPopup .picture img {
  width: 100%;
  height: auto;
}
.personPopup .content {
    padding: 5px;
  width: 50%;
}
</style>