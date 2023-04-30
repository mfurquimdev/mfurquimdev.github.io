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
    <div class="flex-grow">
        <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
            <div i-carbon-home class="text-2xl m-auto" />
        </RouterLink>

        <RouterLink class="icon-btn mx-2" to="/experience" :title="t('button.experience')">
            <div i-carbon-portfolio class="text-2xl m-auto" />
        </RouterLink>

        <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
            <div i-carbon-user-avatar-filled-alt class="text-2xl m-auto" />
        </RouterLink>

        <RouterLink class="icon-btn mx-2" to="/contact" :title="t('button.contact')">
            <div i-carbon-at class="text-2xl m-auto" />
        </RouterLink>
    </div>

    <div class="flex-grow">
        <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
            <div i-carbon-ibm-watson-language-translator class="text-2xl m-auto" />
        </a>

        <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
            <div i="carbon-sun dark:carbon-moon" class="text-2xl m-auto" />
        </button>
    </div>

 </nav>
</template>
