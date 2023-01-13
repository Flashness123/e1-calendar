<template>
<div class="nav">
<a href="#">Home</a>
<a href="#">Add to calendar</a>
<a href="#">See calendar</a>
<a href="#">Logout</a>
<a v-on:click="logout" href="#">Logout</a>
</div>
</template>
<script>
export default {
    name:'Header-our',
    methods:{
        logout(){
            console.warn("logout")
            localStorage.clear();
            this.$router.push({name:'Login-our'})
        }
    }
}
</script>
<style>
.nav{
    background-color: #333;
    overflow:hidden
}
.nav a{
    float: left;
    color: #f2f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}
.nav a:hover{
    background:#ddd;
    color: #333
}
</style>