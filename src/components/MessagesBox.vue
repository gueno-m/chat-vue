<template>
  <div>
        <form @submit.prevent="onSubmit">
            <input v-model="message" type="text">
            <button>SEND</button>
        </form>
  </div>

</template>

<script>
export default {
  data () {
    return {
      message: '',
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
