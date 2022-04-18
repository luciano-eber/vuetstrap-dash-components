<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from '@/layouts/Default'
import PublicLayout from '@/layouts/Public'

const route = useRoute()
const layout = computed(() => route.meta.public ? PublicLayout : DefaultLayout)

</script>

<template>
<transition name="fade" mode="out-in">
  <component :is="layout">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
  </component>
</transition>
</template>

<style lang="scss">
@import "~bootstrap/scss/root";
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/type";
@import "~bootstrap/scss/containers";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/buttons";
@import "~bootstrap/scss/card";
@import "~bootstrap/scss/transitions";
@import "~bootstrap/scss/close";
@import "~bootstrap/scss/helpers";
@import "~bootstrap/scss/utilities/api";

html {
  font-size: 16px;
}

body {
  font-size: 100%;
  background-color: $body-bg;
  color: $body-color;
  overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s;
}

.fade-slide-enter,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
