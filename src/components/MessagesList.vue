<template>
    <ul ref="list">
        <MessagesListMessage
        v-for="(message, i) in messages"
        :key="i"
        :message="message"/>
    </ul>
</template>

<script>

import MessagesListMessage from './MessagesListMessage'

export default {
  data () {
    return {
    userControlScroll: false
    }
  },
  props: {
    messages: {
      type: Array
    }
  },
  watch: {
    messages () {
      this.scrollDown();
    }
  },
  components: {
    MessagesListMessage
  },
  methods: {
    scrollDown() {
      const list = this.$refs.list
      this.$nextTick(() => {
          if (!this.userControlScroll) {
            list.scrollTop = list.scrollHeight;
          }
      })
    }
  }
}
</script>

<style scoped>

ul {
  margin: auto;
  padding: 10px;
  width: 85%;
  height: 550px;
  border: solid 2px red;
  list-style:none;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}

</style>
