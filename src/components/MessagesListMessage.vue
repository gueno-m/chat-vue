<template>
    <li :class="[isCurrentUser ? 'current-user': 'other-user']">
        <em v-if="isCurrentUser">{{ message.user.username }}</em>
        <strong v-else>{{ message.user.username }}</strong> <br>
        <p> {{ message.text }} </p>
    </li>
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
    }
  }
}
</script>

<style scoped>

li {
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  /* padding: 20px 0px; */
  max-width: 45%;
  text-align: left;
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
 background: linear-gradient(to right,#151A21, #242A32);
}

em {
  opacity: 0;
  pointer-events: none;
}



</style>