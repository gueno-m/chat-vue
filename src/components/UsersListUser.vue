<template>
  <li>{{user.username}}</li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

li {
  margin-left: 0;
  text-align: left;
  padding-left: 10%;
  padding-top: 5%;
}

</style>
