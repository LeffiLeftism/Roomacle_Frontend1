<template>
  <div id="notifications">
    <span>{{ notification }}</span>
  </div>
</template>

<script>
export default {
  props: {
    notification: String,
  },
};
</script>

<style scoped>
#notifications {
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  /*background-color: bisque;*/
}
</style>