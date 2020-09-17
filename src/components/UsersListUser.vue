<template>
<div>
  <img :src="avatar" alt="">
  <li>{{user.username}}</li>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    avatar: {
      type: String,
    }
  }
}
</script>

<style scoped>

div {
  margin-left: 0;
  text-align: left;
  padding-left: 10%;
  padding-top: 5%;
  display: flex;
}

li {
  margin: auto;
}

li img {
 margin: auto;
 width: 36px;
}

</style>
