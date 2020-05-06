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
                variantId:234
            },
            {
                variantColor :"yellow",
                variantId:259
            }
        ]
    }
})