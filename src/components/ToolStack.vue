<script setup lang="ts">
defineOptions({
  name: 'ToolStack',
})
const { t } = useI18n()
</script>

<style scoped>
p {
    font-size: large;
}
.mybadge {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    align-items: center;
    justify-content: center;
}
</style>


<template>
<div align='center'>
<h3>What I currently use to work</h3>

<div class="mybadge">
<a href="https://archlinux.org/">
    <img
        src="https://img.shields.io/static/v1?style=for-the-badge&logo=archlinux&logoColor=ECEFF4&label=Arch&labelColor=1793D1&message=Linux&color=1CA2E6"
        alt="Arch Linux"
    />
</a>
&nbsp;
<a href="https://neovim.io/">
    <img
        src="https://img.shields.io/static/v1?style=for-the-badge&logo=Neovim&logoColor=ECEFF4&label=NeoVim&labelColor=019733&message=editor&color=03AF3C"
        alt="NeoVim"
    />
</a>
&nbsp;
<a href="https://datasift.github.io/gitflow/IntroducingGitFlow.html">
    <img
        src="https://img.shields.io/static/v1?style=for-the-badge&logo=git&logoColor=ECEFF4&label=Git&labelColor=F05032&message=Flow&color=F1654A"
        alt="Git"
    />
</a>
</div>
<br>

<div class="mybadge">
<a href="https://www.python.org/">
    <img
        src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=eceff4"
        alt="Python 3"
    />
</a>
&nbsp;
<a href="https://docs.datastax.com/en/developer/python-driver/3.25/">
    <img
        src="https://img.shields.io/badge/Cassandra-1287B1?style=flat-square&logo=apache%20cassandra&logoColor=eceff4"
        alt="Apache Cassandra"
    />
</a>
&nbsp;
<a href="https://fastapi.tiangolo.com/">
    <img
        src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=ECEFF4"
        alt="FastAPI"
    />
</a>
&nbsp;
<a href="https://docs.celeryq.dev/en/stable/">
    <img
        src="https://img.shields.io/badge/Celery-37814A?style=flat-square&logo=celery&logoColor=ECEFF4"
        alt="Celery"
    />
</a>
&nbsp;
<a href="https://www.rabbitmq.com/">
    <img
        src="https://img.shields.io/badge/rabbitmq-%23FF6600.svg?&style=flat-square&logo=rabbitmq&logoColor=eceff4"
        alt="RabbitMQ"
    />
</a>
&nbsp;
<a href="https://redis.io/">
    <img
        src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=flat-square&logo=redis&logoColor=eceff4"
        alt="Redis"
    />
</a>
</div>

</div>

</template>

