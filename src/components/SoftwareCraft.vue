<script setup lang="ts">
defineOptions({
  name: 'Software Craft',
})
const { t } = useI18n()
</script>

<style scoped>
p {
    font-size: large;
    line-height: 161.8%; /* 4px +12px + 4px */
    text-indent: 6.1%;
}
</style>

<template>
<div class="text-justify">
    <p>
        <b>{{ t('software_craft.software_engineering.title') }}</b> -
        {{ t('software_craft.software_engineering.subtitle') }}
    </p>
</div>
</template>
