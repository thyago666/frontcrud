<template>
    <div>
        <h1>ATUALIZAR CLIENTE</h1>
      <form>
 <div class="container">
    <Mensagem :msg="msg" v-show="msg" />
<div class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Nome do Cliente</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" v-model="clientesLista.nome">
</div>

<div class="mb-3">
 <label for="endereco" class="form-label">Endereço</label>
  <input type="text" class="form-control" id="endereco" v-model="clientesLista.endereco">
</div>

     <div class="mb-3">
  <label for="numero">Número</label>
    <input type="number" id="numero" class="form-control" v-model="clientesLista.numero">
</div>

     <div class="mb-3">
  <label for="bairro">Bairro</label>
    <input type="text" id="bairro" class="form-control"  v-model="clientesLista.bairro">
   </div>

      <div class="mb-3">
  <label for="cidade">Cidade</label>
    <input type="text" id="cidade" class="form-control" v-model="clientesLista.cidade">
   </div>

       <div class="mb-3">
  <label for="uf">UF</label>
    <input type="text" id="uf"  class="form-control"  v-model="clientesLista.uf">
</div>

  <div class="mb-3">
  <label for="telefone">Telefone</label>
    <input type="text" id="telefone" class="form-control"  v-model="clientesLista.telefone">
    </div>

         <div class="mb-3">
  <label for="imagem">Imagem</label>
  <input type="file" id="imagem" class="form-control" @change="carregarImagem($event)">
     <img :src="urlServe+'/storage/'+clientesLista.imagem">
    </div>
  <Mensagem :msg="msg" v-show="msg" />
 </div>
 </form>
    <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" @click="atualizar(clientesLista.id)">Salvar</button>
  </div>
 
   </div>
</template>

<script>
import axios from 'axios'
import Mensagem from '@/components/Mensagem.vue'
export default {
  
  name:'FormAtualiza',
     data(){
        return{
          token : 'Bearer ' +localStorage.token,
              urlBase: 'http://localhost:8000/api/v1/cliente/',
              urlServe:'http://127.0.0.1:8000',
             clientes: [],
             imagemPerfil:[],
             virificaImagem:false,
             msg:null,
             clientesLista:[]
            }
          },

  methods:{

      carregarImagem(e) {
                this.imagemPerfil = e.target.files[0];
                this.virificaImagem=true
                },
   async carregarLista() {
                          
                            let config = {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': this.token
                    }
                }
           axios.get(this.urlBase + this.$route.params.id, config)
                    .then(response => {
                        this.clientesLista = response.data
                        console.log(this.clientesLista)
                    })
                    .catch(errors => {
                        console.log(errors)
                    })

                          /*
                    const req = await fetch(this.urlBase + this.$route.params.id, this.token );
                    const data = await req.json();
                    this.clientes = data;
                    */
                    },

                 atualizar(id){

                   let config = {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': this.token
                    }
                }

         const dados = {
      nome: this.clientesLista.nome,
      endereco: this.clientesLista.endereco,
      numero: this.clientesLista.numero,
      bairro: this.clientesLista.bairro,
      cidade: this.clientesLista.cidade,
      uf: this.clientesLista.uf,
      telefone: this.clientesLista.telefone,
      imagem: this.clientesLista.imagem
    }
            const fd = new FormData();
              fd.append('_method', 'patch')
                fd.append('nome', dados.nome)
                fd.append('endereco', dados.endereco)
                fd.append('numero', dados.numero)
                fd.append('bairro', dados.bairro)
                fd.append('cidade', dados.cidade)
                fd.append('uf', dados.uf)
                fd.append('telefone', dados.telefone)
              
                 if (this.virificaImagem == true)  {
                fd.append('imagem',this.imagemPerfil, this.imagemPerfil.name)
               
                 }
              axios.post(`http://localhost:8000/api/v1/cliente/${id}`,fd, config)
                .then(res=>{
                     this.msg = "Cliente atualizado com sucesso";
                    setTimeout(()=> this.msg = "", 9000 )
                   // this.$router.push({name: 'HomeListaClientes'})
                           console.log(res)
                })
  },
  },
   mounted() {
        this.carregarLista()
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

.submit-btn{

    background-color: teal;
    color: wheat;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;

}
</style>