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
    <LogoSVG />
    </RouterLink>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="bi-sun dark:bi-moon" />
    </button>

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
      <div i-bi-translate />
    </a>

    <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <div i-bi-person-vcard class="text-2xl m-auto" />
    </RouterLink>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/mfurquimdev/" target="_blank" title="GitHub">
      <div i-bi-github />
    </a>
  </nav>
  <Credits />
</template>
