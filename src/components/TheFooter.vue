<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav text-xl mt-6 flex items-center justify-center>
    <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
      <div i-carbon-home class="text-2xl m-auto" />
    <!-- <LogoSVG /> -->
    </RouterLink>

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
  <Credits />
</template>
