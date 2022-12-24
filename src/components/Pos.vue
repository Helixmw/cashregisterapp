<template>
<div>
    <div class="container-1">
        <div class="box1"><SideNav/></div>
        <div class="box2"><Calculator/>
        <div id="options">
            <Options/>
        </div>
        </div>
    </div>
    </div>
</template>
<style scoped>
.container-1{
    display:flex;
    flex-direction:row;
    width:100%;
    height:100vh;
   
}
.box1{flex:1;}
.box2{flex:4;}
</style>
<script scoped>
 import SideNav from './Widgets/SideNav.vue'
 import Calculator from './Widgets/Calculator.vue'
 import Options from './Widgets/Options.vue'

export default
{
   components:{
       SideNav,Calculator,
       Options
   }
}
</script>