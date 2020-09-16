<template>
  <div>
        <form @submit.prevent="onSubmit">
            <input v-model='message' type="text" placeholder="Type a message">
            <button>&#x27A4;</button>
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
  margin-top: 20px;
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
color: black;
padding: 12px;
background: rgb(240, 240, 240);
width: 80%;
}

input:focus, button:focus {
     outline:  none;
}

button {
  margin: auto;
  margin-left: 0;
     background: linear-gradient(to right,#EC5F65, #F39669);
    border: none;
    border-radius: 50%;
    color:white;
    cursor: pointer;
    font-size: 1.6rem;
}

</style>

