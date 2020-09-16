<template>
    <li :class="[isCurrentUser ? 'current-user': 'other-user']">
        <strong v-if="isCurrentUser">{{ message.user.username }}</strong>
        <em v-else>{{ message.user.username }}</em>
        : {{ message.text }}
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
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 20px;
  max-width: 45%;
  border-radius: 15px;
  text-align: left;
}

.current-user {
  margin-right: 0;
  background: linear-gradient(to right,#EC5F65, #F39669);
}

.other-user {
  margin-left: 0;
  /* text-align: left; */
}



</style>