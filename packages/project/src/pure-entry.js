import Vue from 'vue';
import child from './components/child'
new Vue({
  render(h){
        return h('div',null,[
            h('ul',null,['todo1','todo2'].map(item=>{
                return h(child,{
                    props:{
                        title:item
                    }
                })
            }))
            
        ])
  }
}).$mount('#app');

