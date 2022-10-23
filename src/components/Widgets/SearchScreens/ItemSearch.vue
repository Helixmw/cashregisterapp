<template>
<div>
    <div class="notify" v-show="stockmsg">
          <div class="popup">   
                  <center>List is out of stock</center>   
          </div>
      </div>
  <div id="result">
       
      <!--Cards Output-->
      <div id="card" v-for="item in items" :key="item.id">
          <div class="container-1">
              <div class="box1 itemname">{{item.name}}</div>
              <div class="box2">{{item.price}}</div>
              <div class="box3">
    <b-form-spinbutton id="sb-inline"  v-model="item.quant" style="height:2em;border:0px;" inline></b-form-spinbutton></div>
              <div class="box4"><div class="bttn" @click="addToCart(item.id,item.name,item.price,item.quant,item.category,item.brand)" ><center>Add</center></div></div>
          </div>
      </div>
      <!------>
    
      
     
      
      
  </div>
</div>
</template>

<script>
export default {
 data(){
     return{
         val: 0,
         items: [],
         category: '',
         test:'',
         stockmsg: false
     }
 },
 mounted(){
     this.$root.$on('searchForByCategory', (cat) => {
      this.category = cat;
      this.loadResults();
     }); 
 },
 methods: {
        loadResults(){
        try{
        let xhr = new XMLHttpRequest();
        xhr.open('GET','https://fakestoreapi.com/products');
        xhr.onload = () => {
            let res = JSON.parse(xhr.response);
            this.filterResults(res);
            }
        xhr.send();
        }catch(e){
            console.log('Error: ' + e);
        }
        },
        filterResults(res){
            if(this.items.length != 0){
                this.items = [];
            }
            for(let i = 0; i<=res.length; i++){
                if(res[i].category == this.category){
                    let id_ = res[i].id;
                    let name = res[i].title;
                    let cat = res[i].category;
                    let price = res[i].price;
                    let data = {
                        'id': id_,
                        'name': name,
                        'category': cat,
                        'price': price,
                        'quant': 0
                    }
                     this.items.push(data);  
                }   
            }
            
           
        },
     addToCart(id,name,price,quant,category,brand){
         if(quant==0){
             let qua = quant+1;
             let product = 
            {
                id:id,
                name:name,
                quant:qua,
                price:price,
                category:category,
                brand:brand
            };
        this.$root.$emit('addingToCart', product);
         }else{
             let product = 
            {
                id:id,
                name:name,
                quant:quant,
                price:price,
                 category:category,
                brand:brand
            };
            this.$root.$emit('addingToCart', product);
         }
        
           
 },
 increaseQuant(val){
     console.log(val);
 },

 getRequest(){
    
    
 }
 }
 
}
</script>

<style scoped>

.itemname{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.bttn-2{
    
    display: flex;
    flex-direction: row;
    justify-content: right;
    font-weight:bold;
    margin-right:0.3rem;
  
}

.thebtn{
    color:#f1550d;
    cursor: pointer;
    
}

.notify{
    
    height:30vh;
    width:34rem;
    
    position:absolute;
    display:flex;
    justify-content: center;
    align-items:center;
}

.popup{
    text-align: center;
    height:9rem;
    width:20rem;
   color:rgb(139, 139, 139);
    padding:0.5rem;
    font-size:1.5rem;
    margin-top:1.5rem;
    font-weight:bold;
}


.bttn{
    border:1px #f1550d solid;
    color:#f1550d;
    height:2em;
    padding-top:0.1em;
    cursor:pointer;
}

.container-1{
    display: flex;
    flex-direction: row;
}

#result{
    
    overflow-x:auto;
    height:20em;
    margin-top:3%;
    width:34em;
    padding-top:1.5%;
    padding-left:1.5%;
    padding-right:1.5%;
}

#card{
    background-color:white;
    padding:1%;
    margin-bottom:0.5em;
}

.box1{
    flex:3;
    padding-top:0.2em;
}
.box2{
    flex:2;
    padding-left:1%;
    font-weight: bold;
    padding-top:0.2em;
}
.box3{
    flex:1;
}
.box4{
    flex:1;
    padding-left:3%;
}
</style>