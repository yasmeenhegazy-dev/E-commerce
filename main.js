const app = Vue.createApp({
  data() {
    return {
      products:products,
      isCartActive :false,
      cart:[]
    }
  }, 
  methods:{
    addToCart(pro){

      var check=this.cart.some(function(item){
         return pro.id==item.product.id;
      })
      if(!check){
        this.cart.push({product:pro,quantity:1});
      }else{
        var product=this.cart.find(function(item){
          return pro.id==item.product.id;
        })
        product.quantity++;
      }
      pro.stock--;

    }
    ,
    deleteCart(item){
      var num=this.cart.findIndex(function(s){
        return item.product.id==s.product.id;

      })
      this.cart.splice(num,1)

      var back=this.products.find(function(b){
        return item.product.id==b.id;

      })
      back.stock+=item.quantity;
    }
  }
  
});

app.mount('#app');