export default {
    props:{
        title:String
    },
    render(h){
        return h('div',null,this.title)
    }
}