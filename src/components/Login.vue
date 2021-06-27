<template>
  <div style="height: 100%; display: block; overflow: scroll">
    <iframe src="http://localhost:3001" class="maxSize"></iframe>
    <br />
    <button id="closeButton" @click="closeModal()">Schließen</button>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      //Schließt das Popup der Dateneingabeseite
      this.$modal.hide("InputModal");
    },
  },
};
</script>

<style scoped>
#closeButton {
  font-size: 15px;
  color: black;
}
</style>