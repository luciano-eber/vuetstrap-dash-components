<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/pages/login">Pages / Login</router-link>
    <router-link to="/pages/profile">Pages / Profile</router-link>
    <router-link to="/components">Components / Index</router-link>
    <router-link to="/components/toasts">Components / Toasts</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
