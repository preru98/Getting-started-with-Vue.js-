var app=new Vue({
    el:'#app',
    data:{
        product:"Umbrella",
        image:"purple.jpg",
        inStock:true,
        details:["A1 Fabric","Gender Neutral", "Long Lasting"],
        variants:[
            {
                variantColor :"purple",
                variantId:234,
                variantImage:"purple.jpg"
            },
            {
                variantColor :"yellow",
                variantId:259,
                variantImage:"yellow.png"
            }
        ],
        cart:0
    },
    methods:{
        addToCart:function(){
            this.cart+=1
        },
        updateProduct: function(variantImage){
            this.image=variantImage
        }  
    }
})