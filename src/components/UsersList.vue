<template>
    <ul>
        <UsersListUser
        v-for="(user, i) in users"
        :key="i"
        :user="user"/>
    </ul>
</template>

<script>

import UsersListUser from './UsersListUser'

export default {
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
  /* margin: auto; */
  padding: 0;
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  list-style:none;
  text-align: left;
}

</style>
