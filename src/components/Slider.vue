<template>
  <hooper @slide="onSlide" :itemsToShow="1"     :centerMode="true" :initialSlide="Math.floor(AVATARS.length / 2)">
    <slide v-for="(url, i) in AVATARS" :key="i">
    <img :src="url" alt="">
    </slide>
  <hooper-navigation slot="hooper-addons">
  </hooper-navigation>
</hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
  } from 'hooper';
  import store from "../store"
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  computed: {
    AVATARS() {
      return store.AVATARS
    }
  },
  methods: {
    onSlide ({ currentSlide }) {
      this.$emit('updateAvatar', this.AVATARS[currentSlide])
    }
  }
}
</script>

<style>

.hooper-slide.is-current {
  transform: scale(1.1);
}

.hooper-slide {
  display: flex;

} 

.hooper {
    margin: auto;
    margin-top: 0px;
    margin-bottom: 0px;
    width: 100%;
    height: 150px;
    /* border-color: solid 2px #D0D0D0; */
}

.hooper:focus, .hooper-next:focus, .hooper-prev:focus {
  outline: none;
}

.hooper-next svg, .hooper-prev svg {
  fill: #D0D0D0;
  height: 40px;
  width: 40px;
}

img {
  margin: auto;
  width: 120px;
}

</style>