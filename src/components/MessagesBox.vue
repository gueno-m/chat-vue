<template>
  <div>
        <form @submit.prevent="onSubmit">
            <input v-model='message' type="text" placeholder="Type a message">
            <button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22.786 22.786">
  <g id="bxs-send" transform="translate(0 11.701) rotate(-45)">
    <path id="Tracé_72" data-name="Tracé 72" d="M16.047,7.049,1.242.083a.871.871,0,0,0-1.215,1L1.307,6.2,7.838,7.838,1.307,9.47.027,14.594a.869.869,0,0,0,1.215,1l14.8-6.967a.871.871,0,0,0,0-1.577Z" transform="translate(0 0)" fill="#fff"/>
  </g>
</svg>
</button>
        </form>
  </div>

</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    onSubmit () {
      this.$emit('sendMessage', this.message)
      this.message = ''
    }
  }
}
</script>

<style scoped>

div {
  /* margin: auto; */
  margin-top: 10px;
  height: 10%;
}

form {
  width: 100%;
  display: flex;
}

input {
  margin: auto;
  margin-right: 5px;
border-radius: 15px;
border: none;
color: #E8EEEF;
padding: 16px;
background: #242A32;
width: 85%;
font-size: 1rem;
font-weight: 400;
}

input:focus, button:focus {
     outline:  none;
}

button {
  margin: auto;
  /* margin-left: 0; */
     background: linear-gradient(to right,#EC5F65, #F39669);
    border: none;
    border-radius: 50%;
    color:white;
    cursor: pointer;
    font-size: 1.6rem;
    display: flex;
    height: 36px;
     width: 36px;
}

button svg {
  margin: auto;
}

</style>

