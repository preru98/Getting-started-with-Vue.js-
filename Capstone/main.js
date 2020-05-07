var app=new Vue({
    el:'#app',
    data:{
        brand:"Pi",
        product:"Umbrella",
        // image:"purple.jpg",
        selectedVariant:0,
        // inStock:true,
        details:["A1 Fabric","Gender Neutral", "Long Lasting"],
        variants:[
            {
                variantColor :"purple",
                variantId:234,
                variantImage:"purple.jpg",
                variantQuantity:20
            },
            {
                variantColor :"yellow",
                variantId:259,
                variantImage:"yellow.png",
                variantQuantity:0
            }
        ],
        cart:0
    },
    methods:{
        addToCart:function(){
            this.cart+=1
        },
        updateProduct: function(index){
            this.selectedVariant=index
        }  
    },
    computed:{
        title:function(){
            return this.brand+' '+this.product
        },
        image:function(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock:function(){
            return this.variants[this.selectedVariant].variantQuantity
        },
    }
})