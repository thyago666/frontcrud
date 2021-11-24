<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="100">
     <img alt="Vue logo" src="../assets/logo-laravel.png" width="100">
     <img alt="Vue logo" src="../assets/logo-mysql.png" width="100">
     <img alt="Vue logo" src="../assets/logo-bootstrap.png" width="100">
    <HelloWorld msg="Olá seja bem vindo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
