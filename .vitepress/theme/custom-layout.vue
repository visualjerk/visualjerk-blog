<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Giscus from '@giscus/vue'
import { useData } from 'vitepress'
import { computed, unref } from 'vue'

const { Layout } = DefaultTheme
const { isDark, title } = useData()

const theme = computed(() => (unref(isDark) ? 'dark' : 'light'))
</script>

<template>
  <Layout>
    <template #doc-after>
      <div class="comments">
        <Giscus
          id="comments"
          repo="visualjerk/visualjerk-blog"
          repoId="R_kgDOI_5tJw"
          category="Announcements"
          categoryId="DIC_kwDOI_5tJ84CUV1m"
          mapping="specific"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          :theme="theme"
          :term="title"
          lang="en"
          loading="lazy"
        />
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.comments {
  margin-top: 2rem;
}
</style>
