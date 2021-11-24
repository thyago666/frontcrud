<template>
<div>
<div class="container">






  <div class="input-group mb-3">
  <input type="text" class="form-control" v-model="busca" placeholder="Informe aqui o nome do cliente para sua busca" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="pesquisa">Pesquisar</button>
</div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Endereço</th>
      <th scope="col">Telefone</th>
      <th scope="col">Opções</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="lista in clientesLista" :key="lista.id">
      <th scope="row">{{ lista.id }}</th>
      <td>{{ lista.nome }}</td>
      <td>{{ lista.endereco }}</td>
      <td>{{ lista.telefone }}</td>
 
  <td><router-link :to="{ name: 'HomeAtualizaCliente', params: { id: lista.id} }"><button type="button" class="btn btn-primary">Atualizar</button></router-link>
 <button type="button" @click="excluir(lista.id)" class="btn btn-danger">Excluir</button></td>
 <router-view/>
    </tr>
  </tbody>
</table>
<router-link :to="{ name: 'HomeCreateClientes'}"><button type="button" class="btn btn-success">+ Inserir Clientes</button></router-link>

</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
   name: 'ListaClientes',
     data() {
            return {
              
             //redirecionar apos login this.$router.push({name: 'home'})
               token : 'Bearer ' +localStorage.token,
                url: 'http://localhost:8000/api/v1/cliente',
                urlBusca:'',
                clientes: null,
                nome: null,
                endereco:null,
                numero:null,
                bairro:null,
                cidade:null,
                uf:null,
                telefone:null,
                imagem:null,
                busca:'',
                resultBusca:[],
                clientesLista:[]
             }
         },
         

methods:{

  pesquisa(){
       this.urlBusca = '?filtro=nome:LIKE:' + '%'+this.busca+'%'
        this.carregarLista();
    },

   excluir(id){
      
          let confirmacao = confirm('Tem certeza que deseja remover esse registro?')
                if(!confirmacao) {
                    return false;
                }
                let formData = new FormData();
                formData.append('_method', 'delete')
                let config = {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': this.token
                    }
                }
                let url = this.url + '/' + id
               axios.post(url, formData, config)
                    .then(response => {                        
                      console.log(response)
                        this.carregarLista()
                    })
                    .catch(errors => {
                       console.log(errors)
                    })
    },
   async carregarLista() {
       let config = {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': this.token
                    }
                }
    axios.get(this.url + this.urlBusca, config)
                    .then(response => {
                        this.clientesLista = response.data
                        console.log(this.clientesLista)
                    })
                    .catch(errors => {
                        console.log(errors)
                    })
          },

   async salvar(e){
     let config = {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': this.token
                    }
                }
    e.preventDefault();
   const dados = {
      nome: this.nome,
      endereco: this.endereco,
      numero: this.numero,
      bairro: this.bairro,
      cidade: this.cidade,
      uf: this.uf,
      telefone: this.telefone,
      imagem: this.imagem
    }

    const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      nome:dados.nome, 
      endereco:dados.endereco, 
      numero:dados.numero,
      bairro: dados.bairro,
      cidade: dados.cidade,
      uf: dados.uf,
      telefone: dados.telefone,
      imagem: dados.imagem
      })
  };
  const response = await fetch(this.url, requestOptions,config);
  const data = await response.json();
  console.log(data);
  this.postId = data.id;
  this.carregarLista();

  },
   },
   mounted() {
            this.carregarLista()
        },
  
}
</script>

