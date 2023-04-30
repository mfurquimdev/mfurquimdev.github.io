<script setup lang="ts">
defineOptions({
  name: 'Credits',
})
const { t } = useI18n()
</script>

<template>
  <p text-xs >
    <em opacity-75>{{ t('credits.madewith') }}&nbsp;</em>
    <a class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">Vitesse</a>
    <em opacity-75>&nbsp;{{ t('credits.and') }}&nbsp;</em>
    <a class="underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out" rel="noreferrer" href="https://icon-sets.iconify.design/carbon/" target="_blank">Carbon</a>
  </p>
</template>

<style scoped>
a {
  color: #5E81AC;
  text-decoration:none;

}
a:hover {
   text-decoration:underline;
}
</style>
