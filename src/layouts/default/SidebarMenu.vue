<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Navigation from '@/navigation'

const route = useRoute()

const currentPageName = computed(() => route.name)
const currentDropdownMenu = ref(null)

function toggleDropdown (string) {
  currentDropdownMenu.value = (string === currentDropdownMenu.value) ? null : string
}

const navigation = ref(Navigation)

</script>

<template>
  <div class="w-100">
    <ul class="sidebar-menu">
      <li
        class="sidebar-item" 
        v-for="(nav,n) in navigation"
        :key="n"
        :class="{ 
          isActive: (!nav.childs && currentPageName == nav.name) || (nav.childs && currentDropdownMenu == nav.name),
          dropdown: nav.childs
        }
      ">

        <router-link 
          v-if="!nav.childs"
          class="item-a" 
          :to="{ name: nav.name }"
        >
          <i class="fas icon" :class="[ nav.icon ]"></i>
          {{ nav.title ?? nav.name }}
        </router-link>

        <div v-else>
          <a href="#" class="item-a" @click.prevent="toggleDropdown(nav.name)">
            <i class="fas fa-cubes icon"></i>
              {{ nav.title ?? nav.name }}
              <i class="fas fa-chevron-right dropdown-arrow"></i>
          </a>

          <ul class="dropdown-menu">
            <li 
              class="item-dropdown" 
              :class="{ isActive: currentPageName == child.name }"
              v-for="(child,c) in nav.childs"
              :key="c"
            >
              <router-link :to="{ name: child.name }" class="dropdown-a">
                {{ child.title ?? child.name }}
              </router-link>
            </li>
          </ul>
        </div>

      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

$color: $gray-500;
$item-active-bg: rgba($gray-800, .5);

ul, li {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
  color: $color;
}

a:hover {
  color: $color;
}

.sidebar-menu {
  width: 100%;
}

.sidebar-item {
  margin: .5rem 0;
  transition: all .3s ease;

  .item-a, .dropdown-menu {
    transition: all .3s ease;
  }

  .item-a {
    display: flex;
    align-items: center;
    font-size: 105%;
    padding: .65rem 1.5rem .65rem .7rem;

    .icon {
      width: 1.5rem;
      margin-right: .8rem;
      color: $gray-600;
    }

    &:hover {
      color: $gray-100;
    }
  }
}

.sidebar-item.dropdown {

  .dropdown-arrow {
    position: absolute;
    right: 1.5rem;
    font-size: .8em;
    transition: all .2s linear !important;
  }

  .dropdown-menu {
    overflow-y: scroll;
    max-height: 0px;
    padding: 0 1rem;
  }

  .item-dropdown {
    padding: .4rem 0;
    .dropdown-a {
      font-size: 98%;
      transition: all .3s ease;
      &:hover {
        color: $gray-100;
      }
    }
  }
  .item-dropdown:first-of-type {
    padding-top: 0;
  }
}

.sidebar-item.isActive {
  background-color: $item-active-bg;

  .dropdown-menu {
    max-height: 600px;
    padding: 1.2rem 1rem;
  }
  .dropdown-arrow {
    transform: rotate(90deg);
  }

  .item-dropdown.isActive {
    .dropdown-a {
      color: $primary;
    }
  }

  &:not(.dropdown) {
    .item-a {
      color: $primary;
    }
  }
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: $item-active-bg; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: $dark; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $gray-800;
}
</style>