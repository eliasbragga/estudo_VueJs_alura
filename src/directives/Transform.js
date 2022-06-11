import Vue from 'vue'

Vue.directive('meu-transform',{

    bind(el,binding){
        let rodar=0

        el.addEventListener('dblclick', function(){
            let incremento = 90
            let animate = false
            if(binding.value) {

                incremento = binding.value.incremento
                animate = binding.value.animate

            } 
            
            
                      
            rodar +=incremento            
            el.style.transform = `rotate(${rodar}deg)`
            if(animate){
                el.style.transition = 'transform .5s'
            } 
        })
        

    }


})