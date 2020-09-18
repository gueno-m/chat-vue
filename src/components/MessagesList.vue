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
  margin-bottom: 20px;
  padding: 9px 25px;
  width: 98%;
  height: calc(100vh - 20%);
  list-style:none;
  border-top: solid 1px rgba(232, 238, 239, 0.2);
  overflow-y: scroll;
  /* scrollbar-width: thin; */
}

</style>
