<template>
  <div id="result">
     
      <!--Cards Output-->
      <div id="card" v-for="item in items" :key="item.id">
          <div class="container-1">
              <div class="box1 itemname">{{item.name}}</div>
              <div class="box2">{{item.price}}</div>
              <div class="box3">
    <b-form-spinbutton id="sb-inline"  v-model="item.quant" style="height:2em;border:0px;" inline></b-form-spinbutton></div>
              <div class="box4"><div class="bttn" @click="addToCart(item.id,item.name,item.price,item.quant)" ><center>Add</center></div></div>
          </div>
      </div>
      <!------>
   
     
  </div>
</template>

<script>
export default {
 data(){
     return{
         val: 0,
         items:[]
     }
 },
 mounted(){
    this.$root.$on('activeSearchValues', (vals) => {
        if(this.items.length != 0){
            this.items = [];
        }
        for(let i = 0; i <= vals.length; i++){
            this.items.push(vals);
        }
    });
 },
 methods: {
     addToCart(id,name,price,quant){
         if(quant==0){
             let qua = quant+1;
             let product = {
                id:id,
                name:name,
                quant:qua,
                price:price
            };
        this.$root.$emit('addingToCart', product);
         }else{
            let product = {
                id:id,
                name:name,
                quant:quant,
                price:price
            };
            this.$root.$emit('addingToCart', product);
         }        
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
.bttn{
    border:1px var(--main-color) solid;
    color:var(--main-color);
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