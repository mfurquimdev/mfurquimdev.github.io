<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <nav text-xl mt-6 flex items-center justify-center>
    <!-- <LogoSVG /> -->

    <a class="icon-btn mx-1" rel="noreferrer" href="https://github.com/mfurquimdev/" target="_blank" title="GitHub">
      <div i-carbon-logo-github class="text-2xl m-auto" />
    </a>

    <a class="icon-btn mx-1" rel="noreferrer" href="https://www.linkedin.com/in/mfurquimdev/" target="_blank" title="GitHub">
      <div i-carbon-logo-linkedin class="text-2xl m-auto" />
    </a>

    <a class="icon-btn mx-1" rel="noreferrer" href="https://www.instagram.com/mfurquimdev/" target="_blank" title="GitHub">
      <div i-carbon-logo-instagram class="text-2xl m-auto" />
    </a>

  </nav>
  {{ t('footer.lets_connect') }}
</template>
