<script setup lang="ts">
const searchQuery = ref('')
const gridColumns = ['type', 'name', 'icon']
const gridData = [

{name: 'branch',
type: 'branch',
icon: '<div i-carbon-branch class="text-4xl m-auto" />'},

{name: 'build-tool',
type: 'diagram',
icon: '<div i-carbon-build-tool class="text-4xl m-auto" />'},

{name: 'calendar',
type: 'calendar',
icon: '<div i-carbon-calendar class="text-4xl m-auto" />'},

{name: 'certificate',
type: 'certificate',
icon: '<div i-carbon-certificate class="text-4xl m-auto" />'},

{name: 'chart-network',
type: 'diagram',
icon: '<div i-carbon-chart-network class="text-4xl m-auto" />'},

{name: 'chart-scatter',
type: 'diagram',
icon: '<div i-carbon-chart-scatter class="text-4xl m-auto" />'},

{name: 'chat',
type: 'chat',
icon: '<div i-carbon-chat class="text-4xl m-auto" />'},

{name: 'chevron-right',
type: 'chevron',
icon: '<div i-carbon-chevron-right class="text-4xl m-auto" />'},

{name: 'closed-caption-alt',
type: 'chat',
icon: '<div i-carbon-closed-caption-alt class="text-4xl m-auto" />'},

{name: 'cloud-data-ops',
type: 'cloud',
icon: '<div i-carbon-cloud-data-ops class="text-4xl m-auto" />'},

{name: 'code',
type: 'code',
icon: '<div i-carbon-code class="text-4xl m-auto" />'},

{name: 'cognitive',
type: 'cognitive',
icon: '<div i-carbon-cognitive class="text-4xl m-auto" />'},

{name: 'collapse-categories',
type: 'list',
icon: '<div i-carbon-collapse-categories class="text-4xl m-auto" />'},

{name: 'color-palette',
type: 'color-palette',
icon: '<div i-carbon-color-palette class="text-4xl m-auto" />'},

{name: 'commit',
type: 'commit',
icon: '<div i-carbon-commit class="text-4xl m-auto" />'},

{name: 'communication-unified',
type: 'social',
icon: '<div i-carbon-communication-unified class="text-4xl m-auto" />'},

{name: 'construction',
type: 'construction',
icon: '<div i-carbon-construction class="text-4xl m-auto" />'},

{name: 'covariate',
type: 'machine-learning',
icon: '<div i-carbon-covariate class="text-4xl m-auto" />'},

{name: 'credentials',
type: 'credentials',
icon: '<div i-carbon-credentials class="text-4xl m-auto" />'},

{name: 'crop-growth',
type: 'growing',
icon: '<div i-carbon-crop-growth class="text-4xl m-auto" />'},

{name: 'data-blob',
type: 'data',
icon: '<div i-carbon-data-blob class="text-4xl m-auto" />'},

{name: 'data-diode',
type: 'diode',
icon: '<div i-carbon-data-diode class="text-4xl m-auto" />'},

{name: 'data-quality-definition',
type: 'code',
icon: '<div i-carbon-data-quality-definition class="text-4xl m-auto" />'},

{name: 'debug',
type: 'bug',
icon: '<div i-carbon-debug class="text-4xl m-auto" />'},

{name: 'document-horizontal',
type: 'person',
icon: '<div i-carbon-document-horizontal class="text-4xl m-auto" />'},

{name: 'education',
type: 'education',
icon: '<div i-carbon-education class="text-4xl m-auto" />'},

{name: 'function-math',
type: 'function',
icon: '<div i-carbon-function-math class="text-4xl m-auto" />'},

{name: 'game-console',
type: 'device-controller',
icon: '<div i-carbon-game-console class="text-4xl m-auto" />'},

{name: 'gamification',
type: 'game',
icon: '<div i-carbon-gamification class="text-4xl m-auto" />'},

{name: 'keyboard',
type: 'device-keyboard',
icon: '<div i-carbon-keyboard class="text-4xl m-auto" />'},

{name: 'linux',
type: 'linux',
icon: '<div i-carbon-linux class="text-4xl m-auto" />'},

{name: 'logo-github',
type: 'social',
icon: '<div i-carbon-logo-github class="text-4xl m-auto" />'},

{name: 'logo-instagram',
type: 'social',
icon: '<div i-carbon-logo-instagram class="text-4xl m-auto" />'},

{name: 'logo-linkedin',
type: 'social',
icon: '<div i-carbon-logo-linkedin class="text-4xl m-auto" />'},

{name: 'logo-python',
type: 'social',
icon: '<div i-carbon-logo-python class="text-4xl m-auto" />'},

{name: 'logo-r-script',
type: 'social',
icon: '<div i-carbon-logo-r-script class="text-4xl m-auto" />'},

{name: 'logo-slack',
type: 'social',
icon: '<div i-carbon-logo-slack class="text-4xl m-auto" />'},

{name: 'logo-twitter',
type: 'social',
icon: '<div i-carbon-logo-twitter class="text-4xl m-auto" />'},

{name: 'logo-vue',
type: 'social',
icon: '<div i-carbon-logo-vue class="text-4xl m-auto" />'},

{name: 'machine-learning-model',
type: 'machine-learning',
icon: '<div i-carbon-machine-learning-model class="text-4xl m-auto" />'},

{name: 'meter-alt',
type: 'monitoring',
icon: '<div i-carbon-meter-alt class="text-4xl m-auto" />'},

{name: 'microservices-1',
type: 'microservices',
icon: '<div i-carbon-microservices-1 class="text-4xl m-auto" />'},

{name: 'music',
type: 'music',
icon: '<div i-carbon-music class="text-4xl m-auto" />'},

{name: 'notebook',
type: 'notebook',
icon: '<div i-carbon-notebook class="text-4xl m-auto" />'},

{name: 'policy',
type: 'education',
icon: '<div i-carbon-policy class="text-4xl m-auto" />'},

{name: 'portfolio',
type: 'briefcase',
icon: '<div i-carbon-portfolio class="text-4xl m-auto" />'},

{name: 'qq-plot',
type: 'machine-learning',
icon: '<div i-carbon-qq-plot class="text-4xl m-auto" />'},

{name: 'qr-code',
type: 'qr-code',
icon: '<div i-carbon-qr-code class="text-4xl m-auto" />'},

{name: 'quotes',
type: 'quotes',
icon: '<div i-carbon-quotes class="text-4xl m-auto" />'},

{name: 'recommend',
type: 'certification',
icon: '<div i-carbon-recommend class="text-4xl m-auto" />'},

{name: 'screen',
type: 'device-screen',
icon: '<div i-carbon-screen class="text-4xl m-auto" />'},

{name: 'sprout',
type: 'growing',
icon: '<div i-carbon-sprout class="text-4xl m-auto" />'},

{name: 'terminal',
type: 'terminal',
icon: '<div i-carbon-terminal class="text-4xl m-auto" />'},

{name: 'time-plot',
type: 'clock',
icon: '<div i-carbon-time-plot class="text-4xl m-auto" />'},

{name: 'tool-box',
type: 'tool',
icon: '<div i-carbon-tool-box class="text-4xl m-auto" />'},

{name: 'tools-alt',
type: 'tool',
icon: '<div i-carbon-tools-alt class="text-4xl m-auto" />'},

{name: 'user',
type: 'person',
icon: '<div i-carbon-user class="text-4xl m-auto" />'},

{name: 'user-avatar',
type: 'person',
icon: '<div i-carbon-user-avatar class="text-4xl m-auto" />'},

{name: 'user-avatar-filled',
type: 'person',
icon: '<div i-carbon-user-avatar-filled class="text-4xl m-auto" />'},

{name: 'user-avatar-filled-alt',
type: 'person',
icon: '<div i-carbon-user-avatar-filled-alt class="text-4xl m-auto" />'},

{name: 'uv-index',
type: 'certification',
icon: '<div i-carbon-uv-index class="text-4xl m-auto" />'},

{name: 'uv-index-filled',
type: 'certification',
icon: '<div i-carbon-uv-index-filled class="text-4xl m-auto" />'},

{name: 'value-variable',
type: 'value-variable',
icon: '<div i-carbon-value-variable class="text-4xl m-auto" />'},

{name: 'vmdk-disk',
type: 'device-hdd',
icon: '<div i-carbon-vmdk-disk class="text-4xl m-auto" />'},

{name: 'wikis',
type: 'globe',
icon: '<div i-carbon-wikis class="text-4xl m-auto" />'},

]
</script>

<template>
        <Grid
                :data="gridData"
                :columns="gridColumns"
                :filter-key="searchQuery">
        </Grid>


</template>
