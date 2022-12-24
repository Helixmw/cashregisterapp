<template>
    <div class="side">
        <div class="container-1">
            <div class="box1">
        <ShoppingCart/>
            </div>
            <div class="box2">
                <br>
              <Menu/>
        </div>
            <div class="box2">
                <div class="tag">
                    <div class="small-text">DEVELOPED BY</div>
                    <div class="tagname"><a href="https://www.linkedin.com/in/wongani-chipofya-896106221/" target="_blank">Wongani Helix Chipofya</a></div>
                </div>
               
        </div>
        </div>
    </div>
</template>
<script>
import ShoppingCart from './ShoppingCart.vue';
import Menu from './Menu.vue';

export default {
    name: 'SideNav',
    components: {
        ShoppingCart,Menu
    }
}
</script>
<style scoped>



.side{
    background-color: var(--main-color);
    height:100vh;
    opacity:0;
    transform:translateX(-20rem);
    animation-name:slide;
    animation-duration:0.4s;
    animation-delay:0.7s;
    animation-fill-mode:forwards;
}

@keyframes slide{
    from{
        opacity:0;
        transform:translateX(-20rem);
    }

    to{
        opacity:1;
        transform:translateX(0rem);
    }
}

.box1{
    padding-top:1.3em;
    padding-left:0.6em;
}
.box2{
    padding-top:0.7em;
    padding-left:0.6em;
}

.small-text{
    font-size:0.9rem;
    letter-spacing:2px;
}

.tagname a{
    text-decoration: none;
    font-weight: bold;
    font-size:1.1rem;
    color:#ffffff
    
}

.tag{
    margin-left:0.7em;
    color:white;
}
</style>