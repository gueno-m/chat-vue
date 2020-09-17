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
  margin-top: 18px;
  margin-bottom: 18px;
  display: flex;
}

li {
  margin: auto;
  margin-left: 0px;
  color: #D0D0D0;
  font-size: .8rem;
  font-weight: 300;
}

img {
 margin: auto;
 margin-left: 45px;
 margin-right: 20px;
 width: 36px;
}

</style>
