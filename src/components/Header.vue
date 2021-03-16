<template>
    <div id="header">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style scoped>
    #header {
        display: inline-block;
        width: 100%;
        height: 15%;
        /*background-color:aqua;*/
    }
</style>