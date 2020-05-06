var title=new Vue({
    el:'#title',
    data:{
        name:"Pi"
    }
})

var time=new Vue({
    el:'#time',
    data:{
        message:"You loaded on this page on " + new Date
    }
})