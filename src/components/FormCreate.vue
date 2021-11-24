<template>
    <div>
       <form>
<div class="container">
    <Mensagem :msg="msg" v-show="msg" />
<div class="mb-3">
 <label for="nome" class="form-label">Nome do Cliente</label>
  <input type="text" class="form-control" id="nome" name="nome" v-model="nome">
</div>

<div class="mb-3">
 <label for="endereco" class="form-label">Endereço</label>
  <input type="text" class="form-control" id="endereco" name="endereco" v-model="endereco">
</div>

     <div class="mb-3">
  <label for="numero">Número</label>
    <input type="number" id="numero" name="numero" class="form-control" v-model="numero">
</div>

     <div class="mb-3">
  <label for="bairro">Bairro</label>
    <input type="text" id="bairro" name="bairro" class="form-control"  v-model="bairro">
   </div>

      <div class="mb-3">
  <label for="cidade">Cidade</label>
    <input type="text" id="cidade" name="cidade" class="form-control" v-model="cidade">
   </div>

       <div class="mb-3">
  <label for="uf">UF</label>
    <input type="text" id="uf" name="uf" class="form-control"  v-model="uf">
</div>

  <div class="mb-3">
  <label for="telefone">Telefone</label>
    <input type="text" id="telefone" name="telefone" class="form-control"  v-model="telefone">
    </div>

         <div class="mb-3">
  <label for="imagem">Imagem</label>
  <input type="file" id="imagem" name="imagem" class="form-control" @change="carregarImagem($event)">
      </div>
  <Mensagem :msg="msg" v-show="msg" />
  <div class="d-grid gap-2 col-6 mx-auto">
  <button type="button" class="btn btn-primary" @click="salvar">Salvar</button>
  </div>
 </div>
 </form>
 </div>
</template>

<script>

import axios from 'axios'
import Mensagem from '@/components/Mensagem.vue'
export default {
  name: 'FormCreate',
    data() {
            return {
                  token : 'Bearer ' +localStorage.token,
                url: 'http://localhost:8000/api/v1/cliente',
                 nome: null,
                endereco:null,
                numero:null,
                bairro:null,
                cidade:null,
                uf:null,
                telefone:null,
                imagem:null,
                msg:null
             }
         },

methods:{

   carregarImagem(e) {
                this.imagem = e.target.files[0];
             },
    salvar(){
             let config = {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': this.token
                    }
                }
               const fd = new FormData();
                fd.append('nome', this.nome)
                fd.append('endereco', this.endereco)
                fd.append('numero', this.numero)
                fd.append('bairro', this.bairro)
                fd.append('cidade', this.cidade)
                fd.append('uf', this.uf)
                fd.append('telefone', this.telefone)
                fd.append('imagem',this.imagem, this.imagem.name)
            axios.post(this.url,fd, config)
                .then(res=>{
                 
                    this.msg = "Cliente cadastrado com sucesso";
                    setTimeout(()=> this.msg = "", 3000 )
                    console.log(res);
                });
             }
   },
   components:{
       Mensagem
   }
  }
</script>

<style scoped>
label{
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
}
</style>