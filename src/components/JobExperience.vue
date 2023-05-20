<script setup lang="ts">
defineOptions({
  name: 'Job Experience',
})
const { t } = useI18n()
</script>


<template>
<div class="text-center">
    <h2>{{ t('experience.title') }}</h2>

    <div class="text-justify">
        <p>
        {{ t('experience.p1') }}
        </p>

        <p>
        {{ t('experience.p2') }}
        </p>

        <p>
        {{ t('experience.p3') }}
        </p>

        <p>
        {{ t('experience.p4') }}
        </p>
    </div>

</div>
</template>
