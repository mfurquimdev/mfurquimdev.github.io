<script setup lang="ts">
defineOptions({
  name: 'Software Craft',
})
const { t } = useI18n()
</script>

<style>
p {
    font-size: large;
}
</style>

<template>
<div class="text-center">
    <h2>{{ t('software_craft.software_engineering.title') }}</h2>
</div>
<div class="text-justify">
    <h4>
    {{ t('software_craft.software_engineering.subtitle') }}
    </h4>
</div>
</template>
