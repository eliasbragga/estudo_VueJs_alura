import GenericoComp from './components/GenericoComp.vue'
import HomeComp from './components/HomeComp.vue'

export const routes = [

    { path:'',name:'home', component : HomeComp, titulo:'Home', menu: true},
    { path:'/generico', name:'cadastro', component: GenericoComp, titulo:'Genérico', menu:true},
    {path: '*', component:HomeComp, menu:false}
    

]