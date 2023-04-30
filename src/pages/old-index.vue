<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-construction class="text-4xl m-auto" inline-block />
    </div>

    <SoftwareCraft />

    <p>
      <p>{{ t('intro.title') }}</p>
    </p>

    <div py-4 />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
