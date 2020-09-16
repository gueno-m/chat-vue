<template>
  <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="width" :height="height" viewBox="0 0 548.967 548.967" :aria-labelledby="iconName" role="presentation">
  <defs>
    <linearGradient id="a" data-name="Dégradé sans nom 6" x1="270.032" y1="428.626" x2="270.032" y2="102.78" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ec5f65"/>
      <stop offset="1" stop-color="#f39669"/>
    </linearGradient>
  </defs>
  <title  :id="iconName"
      lang="fr">{{ iconName }} icon</title>
  <g>
    <g>
      <circle cx="274.483" cy="274.483" r="244.483" fill="#e8eeef"/>
      <path ref="eye" d="M274.483,30c135.025,0,244.484,109.459,244.484,244.483S409.508,518.967,274.483,518.967,30,409.508,30,274.483,139.459,30,274.483,30m0-30a274.547,274.547,0,0,0-106.85,527.384,274.546,274.546,0,0,0,213.7-505.8A272.78,272.78,0,0,0,274.483,0Z" fill="#151a21"/>
    </g>
    <path d="M315.66,364.891a43.243,43.243,0,0,1,86.334-3.636A162.976,162.976,0,0,0,222.95,109.7,74.1,74.1,0,1,1,120.5,200.951,162.967,162.967,0,0,0,350.6,407.335,43.257,43.257,0,0,1,315.66,364.891Z" fill="url(#a)"/>
  </g>
</svg>
</template>

<script>
export default {
    data () {
      return {
        x: 0,
        y: 0
      }
    },
    props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 80
    },
    height: {
      type: [Number, String],
      default: 80
    },
  },
  methods: {
      mouveEye (e) {
        this.x  = e.clientX*100/window.innerWidth+"%";
        this.y  = e.clientY*100/window.innerHeight+"%";

        for(i=0; i<2; i++) {
          let p = this.$refs.eye;

          p[i].style.left=this.x/2;
          p[i].style.top=this.x/2;
          p[i].style.transform=`translate(${this.x}, ${this.y})`;
        }
          // console.log(this.$refs.eye);
      }
  }
}
</script>