<script setup lang="ts">
defineOptions({
  name: 'AboutMe',
})
const { t } = useI18n()
</script>


<template>
<div class="text-center">

<div class="text-justify">
    <p>
    {{ t('about_me.p1') }}
    </p>

    <p>
    {{ t('about_me.p2') }}
    </p>

    <p>
    {{ t('about_me.p3') }}
    </p>

    <p>
    {{ t('about_me.p4') }}
    </p>
</div>

</div>
</template>
