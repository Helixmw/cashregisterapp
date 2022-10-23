<template>
   <div>
       
   <router-link to="/user" style="text-decoration:none;"><div class="menu">
                    <div class="sel-img"><img src="./OptionsScreens/pictures/user.png" class="img-fluid" style="height:27px;"/></div>
                    <div class="sel"><h5>User</h5></div>
                </div></router-link>
                <router-link to="/help" style="text-decoration:none;">
                <div class="menu">
                    <div class="sel-img"><img src="./OptionsScreens/pictures/help.png" class="img-fluid" style="height:27px;"/></div>
                    <div class="sel"><h5>Help</h5></div>
                </div>
                </router-link>   
                <router-link to="/logout" style="text-decoration:none;"><div class="menu">
                    <div class="sel-img"><img src="./OptionsScreens/pictures/ilogout.png" class="img-fluid" style="height:27px;"/></div>
                    <div class="sel"><h5>Logout</h5></div>
                </div></router-link>
                
         </div>
            
</template>

<script>
export default {

}
</script>

<style scoped>
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