<template>
    <div class="contain">
        <div class="message">
        <div class="large-text">Whoops!</div>
        <div class="notfound">It seems this page is unavailable.</div>
        <div class="main-app"><router-link to="/cashregisterapp" class="link">Back to Main App</router-link></div>
        </div>
    </div>
</template>
<style scoped>
.contain{
    display: flex;
    justify-content: center;
    align-items: center;
    height:80vh;
}
.main-app{
    margin-top:2rem;
}
.link{
    text-decoration:none;
    color:var(--main-color);
    border:2px solid var(--main-color);
    border-radius:3px;
    padding:0.5rem;
    font-size:1.1rem;
    cursor:pointer;
}

.link:hover{
    background-color:var(--main-color);
    color:white;
}
.large-text{
    font-size:5rem;
    font-weight:bold;
    color:rgb(190, 189, 189);
}

.notfound{
    color:var(--main-color);
    font-weight:bold;
    font-size:2rem;
}
.message{
    text-align:center;
}
</style>