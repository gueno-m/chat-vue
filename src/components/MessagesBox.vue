<template>
  <div class="container">
        <form @submit.prevent="onSubmit">
            <div>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#e8eeef" viewBox="0 0 20 20">
  <g id="bxs-smiley-happy" opacity="0.2">
    <path id="Tracé_77" data-name="Tracé 77" d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2ZM8.5,8c.828,0,1.5.9,1.5,2s-.672,2-1.5,2S7,11.1,7,10,7.672,8,8.5,8ZM12,18a5.954,5.954,0,0,1-4.8-2.4l1.6-1.2a4,4,0,0,0,6.4,0l1.6,1.2A5.955,5.955,0,0,1,12,18Zm3.5-6c-.828,0-1.5-.9-1.5-2s.672-2,1.5-2,1.5.9,1.5,2S16.328,12,15.5,12Z" transform="translate(-2 -2)"/>
  </g>
</svg> 
            <input v-model='message' type="text" placeholder="Type a message">
            </div>
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

.container {
  /* margin: auto; */
  margin-top: 10px;
  height: 10%;
  display: flex;
}

form {
  margin: auto;
  width: 100%;
  display: flex;
}

form div {
  width: 90%;
  margin: auto;
  margin-right: 0;
  display: flex;
  border-radius: 15px;
  background: #242A32;
}

form div svg {
    margin: auto;
    margin-left: 20px;
    fill: #e8eeef;
    transition: all .3s ease;
  }

  form div svg:hover {
    fill: #ec5f65;
  }

input {
  margin: auto;
  margin-right: 5px;
border-radius: 15px;
border: none;
color: #E8EEEF;
padding: 16px;
width: 90%;
background: #242A32;
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

