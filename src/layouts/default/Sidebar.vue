<script setup>
import SidebarMenu from './SidebarMenu'

defineProps({
  isActive: Boolean
})

</script>

<template>
  <div class="sidebar" :class="{ isActive:isActive }">
    <SidebarMenu />
  </div>
</template>

<style lang="scss">

.sidebar.isActive {
  transform: translateX(0px);
}

.sidebar {
  position: fixed;
  overflow-y: auto;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  width: $sidebar-width;
  height: 100%;
  padding: 1rem 0;
  background-color: $gray-900;
  transform: translateX(-999px);
  transition: all 0.5s linear;

  @media (min-width: map-get($grid-breakpoints, "xxl")) {
    transform: translateX(0);
    width: $sidebar-width-xxl;
  }
}

</style>