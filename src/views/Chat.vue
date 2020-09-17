<template>
  <div @mousemove="mouseMove">
    <div class="chat">
      <div class="utilisateurs">
        <div class="logDec">
          <Logo ref="logo" />
          <h1>Mostr <span>Chat</span></h1>
          <a href="logout"><svg xmlns="http://www.w3.org/2000/svg" width="14.423" height="17.127"
              viewBox="0 0 14.423 17.127">
              <g id="bx-power-off" transform="translate(-4 -2)" opacity="0.2">
                <path id="Tracé_75" data-name="Tracé 75"
                  d="M11.211,19.481a7.209,7.209,0,0,0,2.7-13.892v2a5.409,5.409,0,1,1-5.409,0v-2a7.209,7.209,0,0,0,2.7,13.892Z"
                  transform="translate(0 -0.354)" fill="#e8eeef" />
                <path id="Tracé_76" data-name="Tracé 76" d="M11,2h1.8v9.014H11Z" transform="translate(-0.69)"
                  fill="#e8eeef" />
              </g>
            </svg></a>
        </div>
        <UsersList :users="store.users" />
        <div class="my-user">
          <img :src="store.$data.user.avatar" alt="">
          <p>{{ store.$data.user.username }}</p>
        </div>
      </div>
      <div class="discution">
        <div class="haut">
          <h1>MostrPrivate BDDI Room</h1>
          <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
  <g id="ic_close_24px" opacity="0.2">
    <path id="Tracé_73" data-name="Tracé 73" d="M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z" transform="translate(-5 -5)" fill="#e8eeef"/>
  </g>
</svg>
</a>
        </div>
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
  import 'hooper/dist/hooper.css';

  import store from '../store'

  export default {

    data() {
      return {
        store,
        Logo
      }
    },

    methods: {
      onSendMessage(text) {
        store.messageNew(text);
      },

      mouseMove(e) {
        this.$refs.logo.moveEye(e);
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
    height: 100vh;
    display: flex;
    flex-direction: row;
  }

  .utilisateurs {
    margin: auto;
    width: 25%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: solid 1px #E8EEEF;
  }

  .discution {
    margin: auto;
    width: 75%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-top: solid 1px #D0D0D0;
  }

  .logDec {
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
    height: 9.8%;
    border-bottom: solid 1px #E8EEEF;
    display: flex;
    flex-direction: row;
  }

  .logDec svg {
    margin: auto;
    margin-left: 25px;
    margin-right: 0;
    cursor: pointer;
  }

  .logDec a {
    margin: auto;
    margin-right: 15px;
  }

  .logDec h1 {
    margin: auto;
    margin-left: 20px;
    font-weight: 500;
    font-size: 1.1rem;
    cursor: pointer;
  }

  .logDec h1 span {
   background-color: #F39669;
  }

  .haut {
    margin: auto;
    width: 100%;
    height: 10%;
    display: flex;
    /* border-bottom: solid 1px #E8EEEF; */
  }

  .haut h1{
    margin: auto;
    margin-right: 0;
    font-size: 1rem;
    font-weight: 500;
    color: #E8EEEF;
  }

  .haut a{
    margin: auto;
    margin-left: 60px;
    margin-right: 30px;
  }

  a {
    text-decoration: none;
    padding: 10px;
  }

  .my-user {
    margin: auto;
    width: 85%;
    height: 50px;
    margin-bottom: 23px;
    display: flex;
    background: #242A32;
    border-radius: 20px;
  }

  .my-user img {
    margin: auto;
    margin-left: 50px;
    margin-right: 0;
    width: 36px;
  }

  .my-user p {
    margin: auto;
    margin-left: 20px;
    font-size: 1rem;
    color: #E8EEEF;
    font-weight: 400;
  }

</style>
