<template>
  <div>

<div class="container">
         <form method="POST" action="" @submit.prevent="login($event)">
                                  <input type="hidden" name="_token" :value="csrf_token">
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-mail</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" required autocomplete="email" autofocus v-model="email">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Senha</label>
                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" required autocomplete="current-password" v-model="password">
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember">
                                        <label class="form-check-label" for="remember">
                                            Mantenha-me conectado
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                            <a class="btn btn-link" href="#">
                                        Esqueci a senha
                                    </a>
                                </div>
                            </div>
                        </form>
    </div>
  </div>
</template>

<script>
    export default {
         name:'Login',
        props: ['csrf_token'], //data (semelhante)
        data() {
            return {
                email: '',
                password: '',
                 url: 'http://127.0.0.1:8000/api/login',
                 
            }
        },
        methods: {

                   async login(){
    
    const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      email:this.email, 
      password:this.password, 
      })
  };
       const req = await fetch(this.url,requestOptions);
       const data = await req.json();
       localStorage.setItem("token",data.token);
       if(data.token){
            document.cookie = localStorage;
            this.$router.push({name: 'Home'})
       }else{
           console.log('senha invalida')
       }
          }
       }
    }
</script>


















