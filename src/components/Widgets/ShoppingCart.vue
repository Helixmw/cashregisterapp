<template>
    <div class="Cart">
        
        <div id="label">Shopping Cart</div>
        <div class="labelling" :style="labelling"><small>Purchase items will appear below.</small></div>
        
        <div class="cart-section" :style="cart">
        <div class="listing">

            <!--Cards Output-->
            <div class="cards" v-for="item in items" :key="item.id">
                <div class="box1 itemname">{{item.name}}</div>
                <div class="box2">{{item.price}}</div>
                <div class="box3">{{item.quant}}</div>
                <div class="box4"><div id="cancel" style="color:white;cursor:pointer;" @click="removeItem(item.id,item.price,item.quant)"><font-awesome-icon :icon="['fas', 'times']"/></div></div>
            </div>
            <!----->
           
            
        </div>
        <div class="bttns">
        <button class="bttn btn btn-default" style="border:1px solid white;background-color:rgba(0,0,0,0.2);color:white;border-radius:0px;" @click="checkOut()">Check Out</button>
        <div class="bttn" @click="clear()" style="margin-left:0.4em;padding-left:1em;padding-right:1em;">Reset</div>
        </div>
        </div>

        </div>
</template>
<script>
export default {
    data(){
        return{
            items: [],
            labelling:"opacity:1;",
            cart:"opacity:0;",
            received: 0,
            cummprice: 0
        }
    },
    mounted: function(){
        this.recieveItems();
        this.ifCartEmpty();
    },
    methods: {
        clear(){
            this.$root.$emit('clearChange', 0);
            this.$root.$emit('clearPaid', "0");
            this.$root.$emit('clearCumm', 0);
            this.$root.$emit('emptyTotal', "0");
            this.$root.$emit('emptySearch', "");
            this.cummprice = 0;
            this.items.splice(0,this.items.length);
            this.labelling="opacity:1;";
            this.cart="opacity:0;";
        },
        recieveItems(){
            this.$root.$on('addingToCart', (product) => {
            let result = product.price * product.quant;
            this.cummprice = this.cummprice + result;
            this.$root.$emit('addToTotal', this.cummprice);
            this.items.push(product);
            if(this.items.length > 0){
                this.labelling="opacity:0;";
                this.cart="opacity:1;";
            }
            });
        },
        removeItem(id,price,quant){
            let result = price * quant;
            this.cummprice = this.cummprice - result;
            this.$root.$emit('removeFromTotal', this.cummprice);
            this.$root.$emit('editChange', 0);
            const itemIndex = this.items.findIndex( item => item.id === id);
            this.items.splice(itemIndex,1);       
        },
        ifCartEmpty(){
            if(this.items==[]){
             this.$root.emit('ifCartHasNoItems', 0);
            }
        },
        checkOut(){
            this.$root.$emit('clearChange', 0);
            this.$root.$emit('clearPaid', "0");
            this.$root.$emit('clearCumm', 0);
            this.$root.$emit('emptyTotal', "0");
            this.$root.$emit('emptySearch', "");
            this.cummprice = 0;
            this.items.splice(0,this.items.length);
            this.labelling="opacity:1;";
            this.cart="opacity:0;"; 
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

.bttns{
    display:flex;
    flex-direction: row;
}

.bttn{
    background-color: white;padding:0.5em;
    cursor:pointer;
    color:#f1550d;
}

#cancel{
    margin-left:0.8em;
    color:#f1550d;

}

#label{
    color:white;
    font-size:1.4em;
}

.listing{
    height:21.5em;
    width:18.3em;
    margin-top:0.5em;
    overflow-x:auto;
}

.cards{
    /*background-color:white;*/
    display:flex;
    flex-direction:row;
    padding-top:0.5em;
    padding-bottom:0.5em;
    margin-bottom:0.4em;
    color:white;
}

.box1{
    flex:3;
    padding-left:1.6%;
}
.box2{
    flex:1;
    font-weight:bold;
    color:#ffffff;
}
.box3{
    flex:1;
    padding-left:9%;
    font-weight:bold;
}
.box4{
 flex:1;
 
}

</style>
