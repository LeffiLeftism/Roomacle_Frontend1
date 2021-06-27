<template>
  <div class="personPopup">
    <div class="picture">
      <img :src="this.person.base64Code" alt="profile picture" />
    </div>
    <div class="content">
      <h3>
        {{ this.person.name }}
        <span v-if="this.person.title">, {{ this.person.titel }}</span
        >
      </h3>
      E-Mail: {{ this.person.email }}
      <br />
      Telefon: {{ this.person.telefon }}
      <br />
      Sprechzeiten: {{ this.person.visitTime }}
      <br />
    </div>
    <div v-if="this.person.homepage" class="QRcode">
      Homepage:
      <qr-code :size="128" :text="this.person.homepage"></qr-code>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: Number,
    person: Object,
  },
};
</script>

<style scoped>
.QRcode {
  height: 100%;
  margin-left: 10px;
}
.personPopup {
  display: flex;
  border: 5px solid rgb(75, 190, 255);
  padding: 5px;
  height: 100%;
}
.personPopup .picture {
  /*border-right: 1px grey solid;*/
  text-align: center;
  width: 40%;
  height: 100%;
}
.personPopup .picture img {
  max-width: 100%;
  max-height: 300px;
  min-width: 200px;
}
.personPopup .content {
  padding: 5px;
  width: 50%;
}
</style>