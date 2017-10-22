<template>
  <div id="myapp">
    Parent
    <hellom-y-world/>
  </div>
</template>

<script>
  import HellomYWorld from './components/HelloWorld'

  export default {
    name: 'myapp',
    components: {
      HellomYWorld
    }
  }
</script>
<style>
  #app {
    color: #00ff00;
  }
</style>

