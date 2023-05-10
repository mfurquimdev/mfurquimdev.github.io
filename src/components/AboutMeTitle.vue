<script setup lang="ts">
defineOptions({
  name: 'AboutMe',
})
const { t } = useI18n()
</script>

<template>
<div class="text-center">
    <h1>{{ t('about_me.title') }}</h1>
</div>
</template>
