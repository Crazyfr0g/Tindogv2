<template>
  <div id="Home">
    <!-- <img src="./assets/tindoglogov1.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default 
{
  name: 'App'
}
</script>

<style>

/* #app 
{
  font-family: 'Century Gothic';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
#app a
{
font-size: 30px;
} */

#Home
{
  font-family: 'Century Gothic';
  text-align: center;
  margin-top: 10px;
}

#Home span
{
text-align: center;
font-size: 20px;
}

/* #Home .navbar .navbar-item
{
  background-image: url('assets/tindoglogov1.png');
} */

 .navbar-menu  a#navbarstyle
    {
        font-size: 50px;
    
    }

  .box
  {
    border-radius: 10em;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
