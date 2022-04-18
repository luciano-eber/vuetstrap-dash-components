<script setup>
import { computed } from 'vue'
import Sidebar from './default/Sidebar.vue'
import Header from './default/Header.vue'
import { useStore } from 'vuex'

const store = useStore()

const sidebarIsActive = computed(() => store.getters['defaultLayout/sidebarIsActive'])

function toggleSidebar () {
  store.dispatch('defaultLayout/toggleSidebar')
}

</script>

<template>
  <div>
    <Sidebar :isActive="sidebarIsActive" />
    <div class="page pb-5">
      <Header :isActive="sidebarIsActive" @toggleSidebar="toggleSidebar"/>
      <main class="main pt-5 pb-5">
        <div class="container-fluid">
          <slot></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
#nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
}
.logo {
  width: 30px;
}
.main {
  position: relative;
  top: 5rem;
}
.page {
  @media(min-width: map-get($grid-breakpoints, 'xxl')) {
    padding-left: $sidebar-width-xxl;
  }
}
</style>