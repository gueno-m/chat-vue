<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="417.233" height="228.048" viewBox="0 0 417.233 228.048">
  <defs>
    <linearGradient id="a" data-name="Dégradé sans nom 2" x1="-163.349" y1="402.514" x2="-163.349" y2="483.257" gradientTransform="matrix(0.902, -0.201, -0.048, -1.098, 228.817, 603.421)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ec5f65"/>
      <stop offset="1" stop-color="#f39669"/>
    </linearGradient>
    <linearGradient id="b" x1="154.088" y1="402.537" x2="154.088" y2="491.615" xlink:href="#a"/>
  </defs>
  <title>Yeux</title>
  <g>
    <g>
      <g>
        <ellipse cx="61.402" cy="152.095" rx="68.604" ry="53.499" transform="translate(-101.552 170.769) rotate(-74.553)" fill="#e8eeef"/>
        <path d="M58.5,85.561c30.172-6.74,55.931,17.586,57.534,54.331s-21.557,72-51.729,78.737S8.374,201.043,6.771,164.3,28.328,92.3,58.5,85.561M58.144,77.4C24.262,84.987-1.729,124.589.09,165.849c1.322,29.993,17.246,53.779,40.439,60.4,31.928,9.027,67.118-16.867,78.6-57.837,11.456-40.883-5.025-81.347-36.852-90.478A48.513,48.513,0,0,0,58.144,77.4Z" fill="#151a21"/>
      </g>
      <path ref="eyeUn" d="M71.677,174.643c-.285-6.5,3.81-12.735,9.146-13.929,5.024-1.124,9.416,2.628,10.1,8.631,10.919-22.482,6.051-49.392-10.874-60.1-9.55-6.045-21.427-5.83-32.121.581,8.426,3.064,12.351,14.384,8.765,25.285S43.373,152.361,34.947,149.3c-4-1.452-7.164-4.873-8.826-9.528-7,24.264,2.625,48.475,21.508,54.077,10.736,3.185,22.719-.294,32.36-9.4C75.406,184.381,71.923,180.271,71.677,174.643Z" fill="url(#a)"/>
    </g>
    <g>
      <g>
        <ellipse cx="347.604" cy="83.779" rx="75.835" ry="60.567" transform="translate(164.023 390.61) rotate(-72.658)" fill="#e8eeef"/>
        <path d="M344.31,10.4c34.236-7.433,63.463,19.4,65.282,59.923S385.133,149.727,350.9,157.16s-63.463-19.4-65.282-59.924S310.076,17.83,344.31,10.4m-.4-9c-38.443,8.372-67.935,52.049-65.871,97.555,1.5,33.08,19.569,59.313,45.885,66.62,36.228,9.956,76.156-18.6,89.183-63.789,13-45.091-5.7-89.719-41.815-99.789A56.562,56.562,0,0,0,343.906,1.393Z" fill="#151a21"/>
      </g>
      <path ref="eyeDeux" d="M359.262,108.648c-.323-7.168,4.323-14.047,10.378-15.363,5.7-1.24,10.684,2.9,11.463,9.519,12.39-24.8,6.866-54.474-12.338-66.289-10.836-6.667-24.313-6.43-36.447.641,9.561,3.379,14.014,15.864,9.946,27.887s-15.117,19.029-24.678,15.65c-4.533-1.6-8.128-5.375-10.014-10.509-7.948,26.761,2.978,53.464,24.4,59.643,12.182,3.512,25.778-.325,36.717-10.363C363.493,119.387,359.542,114.855,359.262,108.648Z" fill="url(#b)"/>
    </g>
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
  methods: {
      moveEye (e, p, startX, startY) {
        this.x  = e.clientX;
        this.y  = e.clientY;
        
        //const p = this.$refs.eye;
        var transformAttr = ' translate(' + startX + ',' + startY + ')';
        p.setAttribute('transform', transformAttr);

        let eyePos = p.getAttribute('transform');
        let eyePosFinal = eyePos ? eyePos.split('(')[1].split(')')[0].split(',') : [];
        let eyeX = eyePosFinal[0];
        let eyeY = eyePosFinal[1];

       if (p) {
         let xx = this.x - eyeX;
         let yy = this.y - eyeY;

        let length = Math.sqrt(xx*xx+yy*yy); 
        let size = 15;

        if (length >= size){
          xx = xx/length*size; 
          yy= yy/length*size;
          }

        var transformAttr = ' translate(' + xx + ',' + yy + ')';
        p.setAttribute('transform', transformAttr);
    }
      }
  }
}
</script>

<style scoped>

svg {
    position: absolute;
    top: 30%; 
    left: 25.5%;
    transform: scale(.3);
}

</style>
