<template>
<div class="container-options">
    <div class="box sales"><Sales/></div>
    <div class="box inv"><Inventory/></div>
    <div class="box rep"><Report/></div>
    </div>  
</template>

<script>
import Inventory from './OptionsScreens/Inventory.vue'
import Sales from './OptionsScreens/Sales.vue'
import Report from './OptionsScreens/Report.vue'


export default {
 components: {
     Inventory,Sales,Report
 }
}
</script>

<style>
.container-options{
    display: flex;
    flex-direction:row;
    margin-left:1.5%;
}

.box{
    margin-right:1%;
    transform:translateX(-5rem);
}

.sales{
    opacity:0;
    animation-name:slide;
    animation-duration:0.3s;
    animation-delay:0.5s;
    animation-fill-mode:forwards;
}

.inv{
    opacity:0;
    animation-name:slide;
    animation-duration:0.4s;
    animation-delay:0.6s;
    animation-fill-mode:forwards;
}

.rep{
    opacity:0;
    animation-name:slide;
    animation-duration:0.5s;
    animation-delay:0.7s;
    animation-fill-mode:forwards;
}

@keyframes slide{
    from{
        opacity:0;
        transform:translateX(-5rem);
    }
    to{
        opacity:1;
        transform:translateX(0rem);
    }
}
</style>
