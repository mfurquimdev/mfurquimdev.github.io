<script setup lang="ts">
defineOptions({
  name: 'IndexIntroduction',
})

const { t } = useI18n()
</script>

<style>
.component-root {
    /* background-color: #2E3440; */
}
</style>

<template>
<div class="component-root">
    <h1>{{ t('index.introduction.title') }}</h1>
    <div class="text-center">
        <h2>{{ t('index.introduction.title') }}</h2>
    </div>
</div>
</template>
