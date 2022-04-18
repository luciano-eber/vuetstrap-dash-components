<script setup>

defineProps({
  title: String,
  breadcrumbs: {
    type: Array,
    default () {
      return []
    }
  },
  hasCardContent: {
    type: Boolean,
    default( ) {
      return true
    }
  }
})

</script>

<template>
  <div>

    <div class="row align-items-lg-center">
      <div class="col-lg-6">
        <h3 class="mb-1"> {{ title }} </h3>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">
                <i class="fas fa-home"></i>
              </router-link>
            </li>
            <li v-for="(trail, t) in breadcrumbs" :key="t" class="breadcrumb-item">
              <router-link :to="{ name: trail.to ?? trail.name }">{{ trail.name }}</router-link>
            </li>
            <li class="breadcrumb-item active">
              {{ title }}
            </li>
          </ol>
        </nav>
      </div>
      <div class="col-lg-6 mt-2 mt-lg-0 text-lg-end">
        <slot name="header" />
      </div>
    </div>

    <div v-if="hasCardContent" class="row mt-4">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <slot name="content"/>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="mt-4">
      <slot name="content" />
    </div>

  </div>
</template>

<style lang="scss" scoped>
@import '~bootstrap/scss/breadcrumb';
@import "~bootstrap/scss/card";
</style>