<template>
<div class="container-options">
    <div class="box"><Sales/></div>
    <div class="box"><Inventory/></div>
    <div class="box"><Report/></div>
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
}
</style>
