<template>
  <div id="app"> 
    <ul>
      <li v-for="(route, i) in routes" :key="i"><router-link :to="route.path ? route.path: '/'">{{route.titulo}}</router-link></li>      
    </ul>  
    <router-view></router-view>
  </div>
</template>


<script>
import { routes } from './routes'

export default {
  name:"app",
  data(){
    return{
      routes: routes.filter(route => route.menu)
      
      
    }
  },
  components:{
   
  }
  

}
</script>

<style>

</style>