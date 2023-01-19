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
      <div i-tabler-home class="text-3xl m-auto" />
    <!-- <LogoSVG /> -->
    </RouterLink>

    <button class="icon-btn mx-1 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="tabler-sun dark:tabler-moon" class="text-3xl m-auto" />
    </button>

    <a class="icon-btn mx-1" :title="t('button.toggle_langs')" @click="toggleLocales()">
      <div i-tabler-language-hiragana class="text-3xl m-auto" />
    </a>

    <RouterLink class="icon-btn mx-1" to="/about" :title="t('button.about')">
      <div i-tabler-id class="text-3xl m-auto" />
    </RouterLink>

    <a class="icon-btn mx-1" rel="noreferrer" href="https://github.com/mfurquimdev/" target="_blank" title="GitHub">
      <div i-tabler-brand-github class="text-3xl m-auto" />
    </a>
  </nav>
  <Credits />
</template>
