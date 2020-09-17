<template>
    <ul>
        <UsersListUser
        v-for="(user, i) in users"
        :key="i"
        :user="user" :avatar="avatars[user.username]"/>
    </ul>
</template>

<script>
import store from '../store'

import UsersListUser from './UsersListUser'

export default {

  data () {
return {
  avatars: store.avatars
}
  },
  props: {
    users: {
      type: Array
    }
  },

  components: {
    UsersListUser
  }
}
</script>

<style scoped>

ul {
  padding: 0;
  width: 100%;
  height: 580px;
  display: flex;
  flex-direction: column;
  list-style:none;
  text-align: left;
  overflow-y: scroll;
  scrollbar-width: none;
}

</style>
