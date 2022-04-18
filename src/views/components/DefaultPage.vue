<script setup>
import DefaultPage from '@/components/DefaultPage'

</script>

<template>
  <DefaultPage title="Default Page" :breadcrumbs="[{name: 'Components'}]">
    <template #content>
      <p class="mb-5">This page uses this same component and this section is a slot of <strong>#template</strong>, like below: </p>
      <DefaultPage title="Title Prop">
        <template #header>
          this as <strong>#header</strong> slot (optional)
        </template>
        <template #content>
           this a <strong>#content</strong> slot
        </template>
      </DefaultPage>
    </template>
  </DefaultPage>
</template>