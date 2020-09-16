<template>
  <div>
        <form @submit.prevent="onSubmit">
            <input v-model='message' type="text" placeholder="Votre message...">
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

form {
  width: 100%;
}

input {
  margin: auto;
border-radius: 20px;
border: none;
color: black;
padding: 10px;
background: rgb(240, 240, 240);
width: 50%;
}

input:focus, button:focus {
     outline:  none;
}

button {
  margin: auto;
    background-color: transparent;
    border: none;
    color:white;
    cursor: pointer;
    font-size: 1.6rem;
}

</style>

