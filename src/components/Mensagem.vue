<template>
  <div class="alert alert-success" role="alert">
<p>{{ msg }}</p>
 </div>
</template>

<script>
export default {
name:"Mensagem",

props:{

msg: String
}
}
</script>

