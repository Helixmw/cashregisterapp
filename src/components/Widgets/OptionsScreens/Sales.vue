<template>
  <router-link to="/sales" style="text-decoration:none;"><div id="sales">
    <center><img src="./pictures/stats.png" class="img-fluid" style="height:100px;margin-top:2.3rem;"/></center>
      <center><h2 style="margin-top:0.7em;color:#f1550d;">Sales</h2></center>
  </div></router-link>
</template>

<script>
export default {
}
</script>

<style scoped>
router-link{
  text-decoration:none;
}

#sales{
    background-color:#e9e9e9;
    margin-left:2%;
    width:25em;
    height:14em;
    cursor:pointer;
}

</style>