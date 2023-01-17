<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const { t } = useI18n()
</script>

<template>
  <p text-xs >
    <em opacity-75>{{ t('intro.template') }}</em>
      <a class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
  </p>
</template>

<style scoped>
.nord-termynal {
  --vt-color-bg: #2E3440;
  --vt-color-text: #ECEFF4;
  --vt-color-text-subtle: #66738e;
  --vt-color-btn: #5E81AC;
  --vt-color-btn-hover: #81A1C1;
}
</style>
