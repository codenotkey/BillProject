<template>
  <div id="app">
    <router-view/>
    <NavTab class="nav_tab"></NavTab>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  //border: 1px solid red;
  height: 100vh;
}
a{
  text-decoration: none;
  color: rgb(138, 143, 144);
}
.nav_tab{
  display: flex;
  justify-content: space-around;
  position: absolute;
  border: 1px solid gray;
  bottom: 0;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
