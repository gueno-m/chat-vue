<template>
    <div class="container">
        <div class="gauche">
       <form @submit.prevent="onSubmit">

           <h1>Welcome !</h1>
           <h3>Sign in by entering the information bellow</h3>

           <input type="text" v-model="username" required placeholder="Username">

           <Slider/>
           
           <button>Login</button>
            <div class="faq">
            <input type="checkbox" id="" name="" required>
           <p>J’ai lu et accepté les <span> Conditions d’Utilisation </span> et la <span> Politique de Confidentialité </span> de Mostr.</p>
           </div>
       </form>
       </div>
       <div class="droite">

       </div>
       <!-- <div class="error" v-if="error">
           {{error.message}}
       </div> -->
    </div>
</template>

<script>

import store from '../store'
import Slider from '../components/Slider'

export default {

  data () {
    return {
      username: '',
    }
  },

  methods: {
    onSubmit () {
        store.userRegister(this.username);
        this.username = '';
      }
  },
  components: {
    Slider
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
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

form h1, form h3 {
    font-weight: 400;
}

form h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

form h3 {
    margin-top: 10px;
    font-size: 1rem;
}
input {
  margin: auto;
  margin-top: 40px;
  width: 100%;
border-radius: 10px;
border: solid 1px #D0D0D0;
color: black;
padding: 15px;
background:transparent;
}

input:focus, button:focus {
     outline:  none;
}

button {
  margin: auto;
  margin-top: 40px;
  width: 50%;
   font-size: 1rem;
   font-weight: 400;
    background-image: linear-gradient(to right,#EC5F65, #F39669);
    border: none;
    color:white;
    cursor: pointer;
    padding: 12px;
    border-radius: 15px;
    transition: background-image .3s ease;
}

button:hover {
    background-image: linear-gradient(to right,#EC5F65, #EC5F65);
    border: none;
    transition: background-image .3s ease;
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

.gauche, .droite {
    width: 50%;
}

.gauche {
    background-color: white;
    display: flex;
}

.droite {
    background-color: black;
}

</style>