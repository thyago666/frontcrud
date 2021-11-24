<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Esse sisteminha é so uma demonstração de um crud de cadastro de clientes.
      </p>
    <h3>Tecnologias usadas</h3>
    <ul>
      <li><b>back-end</b> Laravel</li>
      <li><b>front-end</b> VueJs</li>
      <li><b>Banco de dados</b> Mysql</li>
      <li><b>Layout</b> Bootstrap</li>
      
    </ul>
    
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
