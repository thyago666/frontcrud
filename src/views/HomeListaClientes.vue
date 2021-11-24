<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <ListaClientes />
  </div>
</template>

<script>
// @ is an alias to /src
import ListaClientes from '@/components/ListaClientes.vue'

export default {
  name: 'HomeListaClientes',
  components: {
    ListaClientes
  }
}
</script>