<template>
<div>
  <img :src="avatar" alt="">
    <li :class="[isCurrentUser ? 'current-user': 'other-user']">
        <em v-if="isCurrentUser">{{ message.user.username }}</em>
        <strong v-else>{{ message.user.username }}</strong> <br>
        <p> {{ message.text }} </p>
    </li>
</div>
</template>

<script>

import store from '../store'

export default {
  computed: {
    isCurrentUser () {
      return this.message.user.username === store.$data.user.username;
}
  },
  props: {
    message: {
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

li {
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 50%;
  font-size: 1rem;
  font-weight: 400;
  max-width: max-content;
  text-align: left;
}

li strong {
  font-size: .8rem;
  font-weight: 300;
  color: #E8EEEF;
}

li p {
  margin: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 16px 20px 16px 20px;
  /* width: 100%; */
  text-align: left;
  border-radius: 15px;
}

.current-user {
  margin-right: 0;
  /* background: linear-gradient(to right,#EC5F65, #F39669); */
}

.current-user p {
  background: linear-gradient(to right,#EC5F65, #F39669);
}

.other-user {
  margin-left: 0;
  /* text-align: left; */
}

.other-user p {
 background: #242A32;
}

em {
  opacity: 0;
  pointer-events: none;
}

img {
 margin: auto;
 margin-left: 45px;
 margin-right: 20px;
 width: 36px;
}

</style>