<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'MFurquim Dev',
  meta: [
    { name: 'description', content: 'A personal portifolio' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#2E3440' : '#ECEFF4'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
