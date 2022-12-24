<template>
  <router-link to="/inventory" style="text-decoration:none;"><div id="report">
         <center>
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="var(--main-color)" d="M184 448h48c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v368c0 4.4 3.6 8 8 8zM88 448h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zM280.1 448h47.8c4.5 0 8.1-3.6 8.1-8.1V232.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5 0-8.1 3.6-8.1 8.1v207.8c0 4.5 3.6 8.1 8.1 8.1zM368 136.1v303.8c0 4.5 3.6 8.1 8.1 8.1h47.8c4.5 0 8.1-3.6 8.1-8.1V136.1c0-4.5-3.6-8.1-8.1-8.1h-47.8c-4.5 0-8.1 3.6-8.1 8.1z"/></svg>
         </center>
      <center><h2 style="margin-top:0.7em;color:var(--main-color)">Sales</h2></center>
  </div></router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
#report{
    background-color:var(--light-grey);
    margin-left:2%;
    width:25.8em;
    height:14em;
    cursor:pointer;
}

.icon{
  margin-top:0.5rem;
  height:8rem!important;
}
</style>