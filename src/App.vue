<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
:root{
  
  --light-grey:#f1f0f0;
  --dim-grey:#d1d1d1;
  --text-grey:#727171;
  --foreground:black;
  --white:white;
  --background:white;
  --color-one:#ec8530;
  --color-two:#1988aa;
  --color-three:#66e65b;
  --color-four:#4e4bfa;
  --color-five:#ff3434;
   
}

:root, .darkmode{
  --main-color:#ec8530;
}

.darkmode{
  --light-grey:rgba(255, 255, 255, 0.068);
  --dim-grey:rgba(0, 0, 0, 0.11);
  --text-grey:#ffffff;
  --foreground:rgb(255, 255, 255);
  --background:rgb(25, 27, 34);
  --white:white;
  --color-one:#ec8530;
  --color-two:#1988aa;
  --color-three:#66e65b;
  --color-four:#4e4bfa;
  --color-five:#ff3434;

}

body{
  color:var(--foreground)!important;
  background:var(--background)!important;
}

.slow{
  transition:0.3s;
}

</style>
