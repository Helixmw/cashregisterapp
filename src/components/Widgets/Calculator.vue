<template>
    <div class="side">

<div class="container-2">
    <div class="left">
        <div class="container-1">
            <div class="button" @click="one()"><h1>1</h1></div>
            <div class="button" @click="two()"><h1>2</h1></div>
            <div class="button"  @click="three()"><h1>3</h1></div>
            
        </div>
        <div class="container-1">
            <div class="button"  @click="four()"><h1>4</h1></div>
            <div class="button"  @click="five()"><h1>5</h1></div>
            <div class="button"  @click="six()"><h1>6</h1></div>
            
        </div>
        <div class="container-1">
            <div class="button"  @click="seven()"><h1>7</h1></div>
            <div class="button"  @click="eight()"><h1>8</h1></div>
            <div class="button"  @click="nine()"><h1>9</h1></div>      
        </div>
        <div class="container-1">
            <div class="button" style="width:12em;"  @click="zero()"><h1>0</h1></div>
            <div class="button" style="background-color:#d1d1d1;color:#727171;" @click="clear()"><h1>C</h1></div>      
        </div>

        </div>
    <div class="right"><div class="fields"><input type="text" class="form-control" v-model="paid" @keyup="filterValues(paid)"></div>
    <div class="set">
        <div class="set1">Total:</div>
        <div class="set2">{{cum.toLocaleString("en-US")}}</div>
    </div>
    <div class="set">
        <div class="set1">Paid:</div>
        <div class="set2">{{total.toLocaleString("en-US")}}</div>
    </div>
    <div class="set">
        <div class="set1">Change:</div>
        <div class="set2">{{change.toLocaleString("en-US")}}</div>
    </div>
    <div class="set" >
        <div class="set1" style="padding-top:0em"></div>
        <div class="set1"><div class="cal" @click="calculate()">Calculate</div></div>
    </div>
    
    </div>
    <div class="far-right">
        <div class="searcharea">
            <div class="container-3">
           
    <b-dropdown id="dropdown-dropright" dropright text="Item Categories" variant="default" class="m-2" style="background-color:#fa8d5b;color:white;height:2.9em;">
    <b-dropdown-item @click="itemsSearch(men)">Men's clothes</b-dropdown-item>
    <b-dropdown-item @click="itemsSearch(women)">Momen's clothes</b-dropdown-item>
    <b-dropdown-item @click="itemsSearch(jewelery)">Jewelery</b-dropdown-item>
    <b-dropdown-item @click="itemsSearch(electronics)">Electronics</b-dropdown-item>
   
    
  </b-dropdown></div>

        <div class="results">
            <NoSearch v-show="noSearch"/>
            <ActiveSearch  v-show="activeSearch"/>
            <ItemSearch v-show="itemSearch"/>
        </div>
        </div>
    </div>
</div>
        
    </div>
</template>
<script>
import NoSearch from './SearchScreens/NoSearch.vue'
import ActiveSearch from './SearchScreens/ActiveSearch.vue'
import ItemSearch from './SearchScreens/ItemSearch.vue'




export default {
    name: 'Calculator',
    components:{
        NoSearch, ActiveSearch, ItemSearch
    },
    data(){
        return{
            noSearch: true,
            activeSearch: false,
            itemSearch: false,
            cum: 0,
            total: 0,
            change: 0,
            paid: "0",
            search:"",
            categories:[],
            items:[],
            men:"men's clothing",
            women:"women's clothing",
            jewelery:"jewelery",
            electronics:"electronics"

        }
    },
     mounted: function(){
        this.$root.$on('clearChange', (zero) => {
        this.change = zero;
    });
        this.$root.$on('clearPaid', (zero) => {
        this.total = zero;
    });
        this.$root.$on('clearCumm', (zero) => {
        this.cum = zero;
    });
    this.$root.$on('emptyTotal', (zero) => {
        this.paid =zero;
    });
        this.$root.$on('addToTotal', (price) => {
        this.cum = price;
    });
    this.$root.$on('removeFromTotal', (res) => {
        this.cum = res;
    });
    this.$root.$on('editChange', (the_change) => {
        this.change = the_change;
    });
    this.$root.$on('ifCartHasNoItems', (zero) => {
        this.cum = zero;
    });  
    this.$root.$on('emptySearch', (empty) => {
        this.search=empty;
        this.noSearch=true;
        this.activeSearch=false;
        this.itemSearch=false;
    });
    
    },
    methods: {
        takingCummToSubtraction(){
           
        },
        itemsSearch(cat){
            this.noSearch=false;
            this.activeSearch=false;
            this.itemSearch=true;
            this.$root.$emit('searchForByCategory', cat);
        },
        activeSearching(){
            this.noSearch=false;
            this.activeSearch=true;
            this.itemSearch=false;
            let phrase = this.search.trim();
            if(phrase==""){
                this.noSearch=true;
                this.activeSearch=false;
                this.itemSearch=false;
            }
        try{
        let xhr = new XMLHttpRequest();
        xhr.open('GET','https://fakestoreapi.com/products');
        xhr.onload = () => {
            let res = JSON.parse(xhr.response);
            this.filterResults(res, phrase);
            }
        xhr.send();
        }catch(e){
            console.log('Error: ' + e);
        } 
        },
        filterResults(res, phrase){
            console.log(phrase);
            if(this.items.length != 0){
                this.items = [];
            }
            for(let i = 0; i<=res.length; i++){
                if(res.includes(phrase, i) == true){
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
            this.$root.$emit('activeSearchValues', this.items);
        },
        filterValues(paidval){
            let str = paidval.replace(/([a-zA-Z])/g,'');
            this.paid = str.trim();

        },


        calculate(){
            this.total = parseInt(this.paid);
            //this.change = this.total - this.cum;
            let thechange = this.total - this.cum;
            if(thechange < 0){
                this.change = 0;
            }else{
                this.change = thechange;
            }
        },
        /*Buttons */
        one(){
            if(this.paid=="0"){
                this.paid="1";
            }
            else if(this.paid!=null && this.paid!="0"){
                 this.paid = this.paid + "1";
            }
            
        },
        two(){
           if(this.paid=="0"){
                this.paid="2";
            }
            else if(this.paid!=null && this.paid!="0"){
                 this.paid = this.paid + "2";
            }
        },
        three(){
           if(this.paid=="0"){
                this.paid="3";
            }
            else if(this.paid!=null && this.paid!="0"){
                 this.paid = this.paid + "3";
            }
        },
        four(){
           if(this.paid=="0"){
                this.paid="4";
            }
            else if(this.paid!=null && this.paid!="0"){
                 this.paid = this.paid + "4";
            }
        },
        five(){
           if(this.paid=="0"){
                this.paid="5";
            }
            else if(this.paid!=null && this.paid!="0"){
                 this.paid = this.paid + "5";
            }
        },
        six(){
           if(this.paid=="0"){
                this.paid="6";
            }
            else if(this.paid!=null && this.paid!="0"){
                 this.paid = this.paid + "6";
            }
        },
        seven(){
             if(this.paid=="0"){
                this.paid="7";
            }
            else if(this.paid!=null && this.paid!="0"){
                 this.paid = this.paid + "7";
            }
        },
        eight(){
            if(this.paid=="0"){
                this.paid="8";
            }
            else if(this.paid!=null && this.paid!="0"){
                 this.paid = this.paid + "8";
            }
        },
        nine(){
            if(this.paid=="0"){
                this.paid="9";
            }
            else if(this.paid!=null && this.paid!="0"){
                 this.paid = this.paid + "9";
            }
        },
        zero(){
            if(this.paid=="0"){
                this.paid="0";
            }
            else if(this.paid!=null && this.paid!="0"){
                 this.paid = this.paid + "0";
            }
        },
        clear(){
            this.paid="0";
            this.total=0;
            this.change=0;
        },
        /*----*/
    }
}
</script>
<style scoped>

.cal{
    background-color: #d1d1d1;
    height:2.1em;
    cursor:pointer;
    text-align: center;
    align-items: center;
    font-size:1.4em;
    padding-top:4%;
    color:#727171;
}

.searcharea{
    margin-left:2em;
}

.right{
    margin-left:0.4%;
}


.set1{
    flex:1;
    padding-top:1.2em;
}
.set2{
    flex:1;
    font-weight: bold;
    font-size:3em;
}

.set{
    display:flex;
    flex-direction:row;
    margin-bottom:1em;
    padding-left:3em;
   
}


.fields input{
    
    height:70px;
    width:299px;
    border-radius:0px;
    border:0px;
    padding-left:0.2em;
    padding-top:0.0em;
    font-size:50px;
    font-weight:bold;
    
    
}

.container-1{
    display:flex;
    flex-direction:row;
   margin-bottom:2%;
   
}
.container-2{
    display:flex;
    flex-direction:row;
  
   
}
.container-3{
    display:flex;
    flex-direction:row;
  
   
}

.side{
    background-color: #f1f0f0;
    height:29.4em;
    margin:2%;
    padding:2%;
    
}

.button{
    background-color:#f1550d;
    height:6em;
    width:6em;
    text-align:center;
    justify-content: center;
    margin-right:2%;
    padding-top:7%;
    color:white;
    cursor:pointer;
    
}
</style>