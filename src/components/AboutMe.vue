<script setup lang="ts">
defineOptions({
  name: 'AboutMe',
})
const { t } = useI18n()
</script>


<template>
<div class="text-center">
    <h2>{{ t('about_me.software_engineering.title') }}</h2>
</div>
<div class="text-justify">
    <h4>
    {{ t('about_me.software_engineering.subtitle') }}
    </h4>

    <p>
    {{ t('about_me.software_engineering.description') }}:
    </p>
    <ul>
        <li>
            {{ t('about_me.software_engineering.item_1') }}
        </li>
        <li>
            {{ t('about_me.software_engineering.item_2') }}
        </li>
        <li>
            {{ t('about_me.software_engineering.item_3') }}
        </li>
        <li>
            {{ t('about_me.software_engineering.item_4') }}
        </li>
        <li>
            {{ t('about_me.software_engineering.item_5') }}
        </li>
    </ul>

</div>
</template>
