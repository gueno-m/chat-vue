<template>
    <div class="container" @mousemove="mouseMove">
        <div class="gauche">
       <form @submit.prevent="onSubmit">

           <h1>Welcome !</h1>
           <h3>Sign in to chat with other Mostr</h3>

           <input type="text" v-model="username" required placeholder="Username">

           <p class="indication">Choose your Mostr</p>

           <Slider @updateAvatar="onUpdateAvatar"/>
           
           <button>Login</button>
            <div class="faq">
            <input type="checkbox" id="" name="" required>
           <p>I have read and accepted the <span>Terms of Use</span> and <span>Privacy Policy</span> of the Mostr chatbox.</p>
           </div>
       </form>
       </div>
       <div class="droite">
           <Eyes ref="eye" />
       </div>
       <!-- <div class="error" v-if="error">
           {{error.message}}
       </div> -->
    </div>
</template>

<script>

import store from '../store'
import Slider from '../components/Slider'
import Eyes from '../components/icons/Eyes'

export default {

  data () {
    return {
      username: '',
      avatar:'',
      Eyes
    }
  },

  methods: {
    onSubmit () {
        store.userRegister(this.username, this.avatar);
        this.username = '';
    },
    onUpdateAvatar (url) {
        this.avatar = url
    },
     mouseMove(e) {
        this.$refs.eye.moveEye(e, this.$refs.eye.$refs.eyeUn,1300, 300);
        this.$refs.eye.moveEye(e, this.$refs.eye.$refs.eyeDeux,1350, 300);
      }
  },
  components: {
    Slider,
    Eyes
  }
}
</script>

<style scoped>

.container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
}

form {
    margin: auto;
    width: 60%;
    height: 100%;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

form h1, form h3 {
    font-weight: 400;
    margin-bottom: 0;
}

form h1 {
    font-size: 3rem;
    margin-top: 80px;
}

form h3 {
    margin-top: 20px;
    font-size: 1rem;
}
input {
  margin: auto;
  margin-top: 50px;
  margin-bottom: 0;
  width: 93%;
border-radius: 10px;
border: solid 1px #D0D0D0;
color: black;
padding: 15px;
background:transparent;
}

input:focus, button:focus {
     outline:  none;
}

.indication {
    margin: auto;
    color: #D0D0D0;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 55px;
    margin-bottom: 10px;
}

button {
  margin: auto;
  margin-top: 35px;
  margin-bottom: 0px;
  width: 50%;
   font-size: 1rem;
   font-weight: 400;
    background-color: #F39669;
    background-image: linear-gradient(to right,#EC5F65,  rgba(255,255,255,0));
    border: none;
    color:white;
    cursor: pointer;
    padding: 16px;
    border-radius: 15px;
    transition: background-color .5s ease;
}

button:hover {
    background-color:#EC5F65;
}

.faq {
    margin: auto;
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.faq input {
    margin: auto;
    width: 5%;
}

.faq p {
    margin: auto;
    width: 90%;
    font-weight: 300;
    font-size: .8rem;
    text-align: left;
}

.faq p span {
    border-bottom: solid 1px black;
    cursor: pointer;
    line-height: 150%;
}

.gauche {
    width: 55%;
    background-color: white;
    display: flex;
}

.droite {
    position: relative;
    width: 45%;
    background-image: url('../assets/mostr-without-eye.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;

}

</style>