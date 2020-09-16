<template>
    <hooper :itemsToShow="1.25" :centerMode="true" :initialSlide="3">
  <slide>
    slide 1
  </slide>
  <slide>
    slide 2
  </slide>
  <slide>
    slide 3
  </slide>
  <slide>
    slide 4
  </slide>
  <slide>
    slide 5
  </slide>
  <slide>
    slide 6
  </slide>
  <slide>
    slide 7
  </slide>
</hooper>


</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
  } from 'hooper';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  }
}
</script>

<style scoped>

    .hooper-slide.is-current {
  transform: scale(1.2);
}

.hooper {
    margin: auto;
    margin-top: 20px;
    width: 350px;
    /* border-color: solid 2px #D0D0D0; */
}

</style>