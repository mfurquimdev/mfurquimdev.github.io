<script setup lang="ts">
defineOptions({
  name: 'AboutMe',
})
const { t } = useI18n()
</script>

<template>
<div class="text-center">
    <h2>{{ t('about_me.title') }}</h2>
</div>
</template>
