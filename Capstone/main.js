Vue.component('review', {
    template: `
    <form class="review-form" v-on:submit.prevent="onSubmit">
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      <input type="submit">
    </form>
      
    `,
    data() {
      return {
        name: null,
        review:null
      }
    },
    methods:{
        onSubmit:function(){
            let productReview={
                name:this.name,
                review:this.review
            }
            this.$emit('review-submitted',productReview)
            this.name=null,
            this.review=null
        }
    }
  })
Vue.component('product',{
    props:{
        premium:{
            type:Boolean,
            required:true
        }
    },
    template:`<div class ="product">
        <div>
            <img class ="product-image" v-bind:src="image" />
        </div>
    
        <div class ="product-info">
            <h3>{{title}}</h3>
            <h4 v-if="inStock">In Stock</h4>
            <h4 v-else="inStock">Out of Stock</h4>
            <p>User is premium account holder : {{premium}}</p>
            <p>Shipping : {{shipping}}</p>
        </div>
    
        <ul>
            <li v-for="(detail,index) in details" v-bind:key="index">{{detail}}</li>
        </ul>
        
        <div id="color-selector">
            <div v-for="(variant,index) in variants " 
                v-bind:key="variant.variantId"
                v-bind:style="{backgroundColor:variant.variantColor}"
                class="color-box"
                v-on:mouseover="updateProduct(index)">
            </div>
        </div>
    
        <button v-on:click="addToCart" 
                v-bind:disabled="!inStock"
                v-bind:class="{disabledButton:!inStock}">
                Add To Cart
        </button>

        <div>
            <h2>Reviews</h2>
            <p v-if="!reviews.length">There are no reviews yet.</p>
            <ul>
                <li v-for="review in reviews">
                    <p>{{ review.name }}</p>
                    <p>{{ review.review }}</p>
                </li>
            </ul>
       </div>

        <review v-on:review-submitted="addReview"></review>
    </div>`,
    data:function(){
        return{
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
                    variantQuantity:10
                },
                {
                    variantColor :"black",
                    variantId:29,
                    variantImage:"black.jpeg",
                    variantQuantity:0
                }
            ],
            reviews:[]
        }  
    },
    methods:{
        addToCart:function(){
            this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId)
        },
        updateProduct: function(index){
            this.selectedVariant=index
        },
        addReview:function(productReview){
            this.reviews.push(productReview)
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
        shipping:function(){
            if(this.premium)
                return "Free shipping"
            else
                return "167 INR"
        },
    }
})



var app=new Vue({
    el:'#app',
    data:{
        premium:true,
        cart:[]
    },
    methods:{
        updateCart:function(id){
            this.cart.push(id)
        }
    }
})