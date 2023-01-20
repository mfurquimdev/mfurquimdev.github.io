<script setup lang="ts">
defineOptions({
  name: 'about2',
})
const { t } = useI18n()
</script>


<template>
  <p>
    {{ t('intro.hi') }}
  </p>
  <p>
```js
// syntax highlighting example
function vitesse() {
  const foo = '{{ t('intro.title') }}'
  if foo == 1 {
    console.log(foo)
  }
}
```
  </p>
</template>
