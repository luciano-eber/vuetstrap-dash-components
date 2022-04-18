<script setup>
import 'bootstrap/js/dist/dropdown'
import { useRouter } from 'vue-router'

defineProps({
  sidebarIsActive: Boolean
})

const emit = defineEmits([
  'toggleSidebar'
])

const router = useRouter()


function toggleSidebar() {
  emit('toggleSidebar')
}

function logout() {
  router.push({ path: '/pages/login' })
}

</script>

<template>
  <div>
    <header class="header">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-6">
            <router-link to="/">
              <img alt="Vue logo" src="@/assets/logo.png" class="logo"/>
            </router-link>
          </div>
          <div class="col-6 d-flex justify-content-end">
            <div class="d-none d-xxl-flex align-items-center">
              <div
                class="avatar"
                :style="`background-image: url(${require('@/assets/kayo-smoke.jpg')})`"
              ></div>
              <div class="dropdown">
                <a
                  class="btn dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  John Doe
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><router-link class="dropdown-item" to="/pages/profile">Profile</router-link></li>
                  <li>
                    <a class="dropdown-item" href="#" @click.prevent="logout"
                      >Logout</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <a class="header-btn-mobile d-xxl-none me-2" href="#" @click.prevent="logout">
              <i class="fas fa-sign-out"></i>
            </a>
            <router-link to="/pages/profile" class="header-btn-mobile d-xxl-none me-2">
              <i class="fas fa-user-circle"></i>
            </router-link>
            <button
              type="button"
              class="header-btn-mobile d-xxl-none"
              @click.prevent="toggleSidebar()"
            >
              <div v-show="!sidebarIsActive">
                <i class="fas fa-bars"></i>
              </div>
              <div v-show="sidebarIsActive">
                <i class="fas fa-times"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
@import '~bootstrap/scss/dropdown';

.header {
  height: 5rem;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: $white;
  box-shadow: $box-shadow-sm;

  @media (min-width: map-get($grid-breakpoints,"xxl")) {
    width: calc(100% - $sidebar-width-xxl);
    left: $sidebar-width-xxl;
  }

  .logo {
    width: 3rem;
  }

  .header-btn-mobile {
    border: 0;
    background-color: transparent;
    color: $dark;
    font-size: 120%;
    width: 2rem;
    text-align: center;
  }
}
.avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>