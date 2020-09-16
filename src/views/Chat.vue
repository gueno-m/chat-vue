<template>
    <div>
      <Logo/>
      <a href="logout">SE DECONNECTER</a>
      <div class="chat">
        <UsersList :users="store.users"/>
          <div class="discution">
            <MessagesList :messages="store.messages" />
            <MessagesBox @sendMessage="onSendMessage" />
        </div>
      </div>
    </div>
</template>

<script>

import MessagesBox from '../components/MessagesBox'
import MessagesList from '../components/MessagesList'
import UsersList from '../components/UsersList'
import Logo from '../components/icons/Logo'

import store from '../store'

export default {

  data () {
    return {
      store
    }
  },

  methods: {
    onSendMessage (text) {
      store.messageNew(text);
      }
  },

  components: {
    MessagesBox,
    MessagesList,
    UsersList,
    Logo
  }
}
</script>

<style scoped>

.chat {
  width: 100%;
  height: 620px;
  display: flex;
  flex-direction: row;
}

.discution {
  margin: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

a {
  text-decoration: none;
  padding: 10px;
}

</style>
