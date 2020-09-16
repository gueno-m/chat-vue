<template>
  <div id="app" >
    <router-view/>
  </div>
</template>

<style lang="scss">

HTML, BODY {
  padding: 0 !important;
  margin: 0;
}

BODY { 
  background: linear-gradient(#242A32, #151A21);
  background-repeat: no-repeat;
  }

#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
}
</style>
