<script setup>
const searchQuery = ref('')
const gridColumns = ['name', 'power']
const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]
</script>

<template>
        <Grid
                :data="gridData"
                :columns="gridColumns"
                :filter-key="searchQuery">
        </Grid>

<div>
<div i-bi-aspect-ratio class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-aspect-ratio-fill class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-at class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-award class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-award-fill class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-bezier class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-bezier2 class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-briefcase class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-briefcase class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-briefcase-fill class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-brush class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-brush-fill class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-bug class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-bug-fill class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-calendar class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-calendar-check class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-calendar3 class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-calendar4 class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-card-checklist class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-cast class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-chat-left-text class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-chat-text class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-check class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-chevron-compact-right class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-chevron-right class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-clock class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-code class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-code-slash class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-code-square class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-controller class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-database class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-device-hdd class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-device-ssd class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-display class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-easel class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-easel2 class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-envelope-at class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-ethernet class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-geo-alt class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-git class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-github class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-globe2 class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-gpu-card class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-hammer class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-info class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-info-lg class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-instagram class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-journal-bookmark class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-journal-code class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-joystick class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-keyboard class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-laptop class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-link class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-link-45deg class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-linkedin class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-memory class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-modem class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-mortarboard class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-mortarboard-fill class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-motherboard class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-mouse class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-mouse2 class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-music-note class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-music-note-beamed class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-nut class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-paint-bucket class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-palette class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-palette2 class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-paragraph class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-patch-check class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-pencil class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-pencil-square class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-person class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-person-badge class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-person-badge-fill class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-person-circle class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-person-fill class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-person-square class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-person-vcard class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-person-vcard-fill class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-quote class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-regex class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-router class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-router-fill class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-screwdriver class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-server class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-slash class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-slash-lg class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-speedometer class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-speedometer2 class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-spotify class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-telegram class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-terminal class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-terminal-fill class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-tools class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-translate class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-trello class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-twitter class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-vector-pen class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-wrench class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-wrench-adjustable class="text-4xl -mb-6 m-auto" /><br>
<div i-bi-x-diamond-fill class="text-4xl -mb-6 m-auto" /><br>
</div>

<div>
<div i-carbon-branch class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-build-tool class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-calendar class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-certificate class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-chart-network class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-chart-scatter class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-chat class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-chevron-right class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-closed-caption-alt class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-cloud-data-ops class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-code class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-cognitive class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-collapse-categories class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-color-palette class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-commit class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-communication-unified class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-construction class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-covariate class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-credentials class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-crop-growth class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-data-blob class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-data-diode class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-data-quality-definition class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-debug class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-document-horizontal class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-education class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-function-math class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-game-console class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-gamification class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-keyboard class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-linux class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-logo-github class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-logo-instagram class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-logo-linkedin class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-logo-python class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-logo-r-script class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-logo-slack class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-logo-twitter class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-logo-vue class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-machine-learning-model class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-meter-alt class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-microservices-1 class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-music class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-notebook class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-policy class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-portfolio class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-qq-plot class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-qr-code class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-quotes class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-recommend class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-screen class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-sprout class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-terminal class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-time-plot class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-tool-box class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-tools-alt class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-user class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-user-avatar class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-user-avatar-filled class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-user-avatar-filled-alt class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-uv-index class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-uv-index-filled class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-value-variable class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-vmdk-disk class="text-4xl -mb-6 m-auto" /><br>
<div i-carbon-wikis class="text-4xl -mb-6 m-auto" /><br>
</div>

</template>
