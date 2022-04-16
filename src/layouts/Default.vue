<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/pages/login">Pages / Login</router-link>
      <router-link to="/pages/profile">Pages / Profile</router-link>
      <router-link to="/components">Components / Index</router-link>
      <router-link to="/components/toasts">Components / Toasts</router-link>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
}
</style>