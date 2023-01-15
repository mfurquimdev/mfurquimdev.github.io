<template>
  <v-termynal class="nord-termynal" restartButton=true forwardButton=true lazy=true progressChar=. progressLength=36 typeDelay=75>
    <vt-input>pip install spaCy</vt-input>
    <vt-progress />
    <vt-text>Successfully installed spacy</vt-text>
  </v-termynal>
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
