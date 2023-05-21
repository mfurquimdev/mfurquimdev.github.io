<script setup lang="ts">
defineOptions({
  name: 'IndexIntroduction',
})

const { t } = useI18n()
</script>

<style scoped>
.component-root {
    /* background-color: #2E3440; */
}
</style>

<template>
<div class="component-root text-center">
    <h1>{{ t('index.introduction.title') }}</h1>
</div>
</template>
