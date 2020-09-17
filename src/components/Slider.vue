<template>
    <hooper :itemsToShow="1" :centerMode="true" :initialSlide="12">
  <slide>
    <img src="https://zupimages.net/up/20/38/4wwr.png" alt="">
  </slide>
  <slide>
   <img src="https://zupimages.net/up/20/38/cq6y.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/fi7l.png" alt="">
  </slide>
  <slide>
   <img src="https://zupimages.net/up/20/38/8t3m.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/s8fr.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/pmn6.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/lv78.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/frtf.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/fgve.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/ua22.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/wr1q.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/6vbh.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/ki2w.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/0m21.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/ft6j.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/lde1.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/wbfm.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/usi6.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/o9kf.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/7tjo.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/gcqc.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/neik.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/853z.png" alt="">
  </slide>
  <slide>
    <img src="https://zupimages.net/up/20/38/iez2.png" alt="">
  </slide>

  <hooper-navigation slot="hooper-addons"></hooper-navigation>
</hooper>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
  } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
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
    width: 90%;
    height: 150px;
    /* border-color: solid 2px #D0D0D0; */
}

.hooper:focus {
     outline-color: #D0D0D0;
}

.hooper-next:focus, .hooper-prev:focus {
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