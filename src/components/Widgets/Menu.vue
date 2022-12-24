<template>
   <div>
    
                <div class="menu options">
                    <div class="track">
                        <div class="slider" @click="toggle()"></div>
                    </div>
                    <div class="color" @click="accentToggle()">
                        Accent
                    </div>
                    <div class="tray" v-show="acc">
                        <div class="col one" @click="one"></div>
                        <div class="col two" @click="two"></div>
                        <div class="col three" @click="three"></div>
                        <div class="col four" @click="four"></div>
                        <div class="col five" @click="five"></div>
                        
                    </div>
                </div>
                
   <router-link to="/user" style="text-decoration:none;"><div class="menu">
                    <div class="sel-img"><img src="./OptionsScreens/pictures/user.png" class="img-fluid" style="height:27px;"/></div>
                    <div class="sel"><h5>User</h5></div>
                </div></router-link>
                  
                <router-link to="/logout" style="text-decoration:none;"><div class="menu">
                    <div class="sel-img"><img src="./OptionsScreens/pictures/ilogout.png" class="img-fluid" style="height:27px;"/></div>
                    <div class="sel"><h5>Logout</h5></div>
                </div></router-link>
                
         </div>
            
</template>

<script>
export default {
    data(){
        return{
            int:0,
            acc: false
        }
    },
    mounted(){
        const c = console.log.bind();
        let slide = document.querySelector('.slider');
        this.int = num;
        switch(this.int){
            case 0:
            document.body.classList.remove('darkmode');
            slide.classList.remove('right'); 
            break;
            case 1:
            document.body.classList.add('darkmode');
            slide.classList.add('right');
            break;
        }
        
    },
    methods:{
        toggle(){
            let slide = document.querySelector('.slider');
            switch(this.int){
                case 0:
                    this.int = 1;
                document.body.classList.add('slow');
                document.body.classList.add('darkmode');
                slide.classList.add('right');
                break;
                case 1:
                this.int = 0;
                document.body.classList.add('slow');
                document.body.classList.remove('darkmode');
                slide.classList.remove('right');
                break;
            }
        },
        one(){
            let root = document.querySelector(':root');
            // let style = getComputedStyle(root);
            // let color = style.getPropertyValue
            root.style.setProperty('--main-color', '#ec8530');
            

        },
        two(){
            let root = document.querySelector(':root');
            root.style.setProperty('--main-color', '#1988aa');
        },
        three(){
            let root = document.querySelector(':root');
            root.style.setProperty('--main-color', '#66e65b');
        },
        four(){
            let root = document.querySelector(':root');
            root.style.setProperty('--main-color', '#4e4bfa');
        },
        five(){
            let root = document.querySelector(':root');
            root.style.setProperty('--main-color', '#ff3434');
        },
        accentToggle(){
            switch(this.acc){
                case true:
                this.acc = false;
                break;
                case false:
                this.acc = true;
                break;
            }
        }
    }
}
</script>

<style scoped>

.tray{
    min-width:12.3rem;
    min-height:1.4rem;
    background:rgba(0, 0, 0, 0.507);
    border-radius:100px;
    z-index:1;
    position:absolute;
    margin-right:1.1rem;
    margin-bottom:2.3rem;
    right:0;
    bottom:0;
    text-align: center;
    white-space:pre-wrap;
}

.col{
   background:white;
   height:2rem;
   width:2rem;
   border-radius:100px;
   display:inline-block;
   margin-top:0.4rem;
   margin-left:0.3rem;
   margin-right:0.3rem;
   transition: 0.5s;
}

.one{
    background:var(--color-one);
}
.two{
    background:var(--color-two);
}
.three{
    background:var(--color-three);
}
.four{
    background:var(--color-four);
}
.five{
    background:var(--color-five);
}

.color{
    margin-left:0.5rem;
    font-size:1rem;
    font-weight:bold;
    background:rgba(0, 0, 0, 0.507);
    text-align:center;
    width:5rem;
    padding:0.3rem;
    border-radius:100px;
    color:white;
}

.options{
    align-items:center;
    position:relative;
}

.slider{
    background:white;
    height:2rem;
    width:2rem;
    border-radius:100px;
    transition:0.3s;
    cursor:pointer;
}

.left{
    transform: translateX(0rem)!important;
}
.right{
    transform: translateX(2rem)!important;
}
.track{
    background:rgba(0, 0, 0, 0.507);
    height:2rem;
    min-width:4rem;
    border-radius:100px;
}
.sel-img{
    flex:1;
}

.menu{
    
    display:flex;
    flex-direction: row;
    margin-left:10px;
    margin-bottom:12px;
    cursor:pointer;
}

.sel{
    flex:8;
    color:white;
    padding-top:0.1rem;
    padding-left:0.4rem;
    margin-bottom:0.7rem;
    
}
</style>