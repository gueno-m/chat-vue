<template>
    <div>
        <UsersList :users="users"/>
       <MessagesList :messages="messages" />
       <MessagesBox @sendMessage="onSendMessage" />
    </div>
</template>

<script>

import MessagesBox from '../components/MessagesBox'
import MessagesList from '../components/MessagesList'
import UsersList from '../components/UsersList'
export default {

  data () {
    return {
      users: [
        { name: 'Pierre' },
        { name: 'Paul' },
        { name: 'Jack' }
      ],
      messages: [
        { user: { name: 'Pierre' }, text: 'Message de Pierre' },
        { user: { name: 'Paul' }, text: 'Message de Paul' }
      ]
    }
  },

  methods: {
    onSendMessage (text) {
      this.messages.push({
        user: { name: 'Gueno' },
        text
      })
    }
  },

  components: {
    MessagesBox,
    MessagesList,
    UsersList
  }
}
</script>
