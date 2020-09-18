<template>
<div :class="[isCurrentUser ? 'current-message' : 'other-message']">
  <img :src="isCurrentUser ? message.user.avatar : store.avatars[message.user.username] " alt="">
    <li :class="[isCurrentUser ? 'current-user': 'other-user']">
        <em v-if="isCurrentUser">{{ message.user.username }}</em>
        <strong v-else>{{ message.user.username }}</strong> <br>
        <span v-if="message.html" v-html="message.text"></span>
          <p v-else>{{ message.text }}</p>
    </li>
</div>
</template>

<script>

import store from '../store'

export default {
  data() {
      return {
        store,
      }
    },
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

div {
   margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
}

div img {
  margin: auto;
 margin-left: 0;
 margin-right: 40px;
 margin-top: 30px;
}

li {
  margin: auto;
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
  text-overflow: ellipsis;
  word-wrap: break-word;
}

.current-message {
  flex-direction: row-reverse;
  /* margin-right:0; */
}

.current-message img {
  /* margin-top: 30px; */
  margin-right:10px;
  margin-left:40px;
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