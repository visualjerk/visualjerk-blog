<script setup lang="ts">
import { data } from './articles.data'
import { useData } from 'vitepress'
import { unref } from 'vue'

const { site } = useData()

function addBaseToLink(link: string) {
  const fullBase = `${window.location.origin}${unref(site.value).base}`
  return new URL(link, fullBase).toString()
}
</script>

<template>
  <div>
    <a
      v-for="article in data"
      :key="article.link"
      :href="addBaseToLink(article.link)"
    >
      {{ article.text }}
    </a>
  </div>
</template>
