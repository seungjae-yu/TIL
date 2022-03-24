<template>
  <main class="page">
    <slot name="top" />

    <div class="hit">
      <img :src="hitUrl" alt="Hits bn" />
    </div>

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
    <Comment />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import Comment from '@theme/components/Comment.vue'

const baseURL = `https://seungjae-yu.github.io/TIL/`;

export default {
  components: { PageEdit, PageNav , Comment},
  props: ['sidebarItems'],
  data () {
    return {
      hitUrl: `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${baseURL}${this.$route.path}&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false`
    }
  },
  watch : {
    ['$route.path'] () {
      this.hitUrl = `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${baseURL}${this.$route.path}&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false`;
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
