<template>
  <div>
    <div id="comment"></div>
  </div>
</template>
<script>
export default {
    watch: {
    '$route.path': function () {
      this.$el.innerHTML = '<div id="comment"></div>';
      this.init();
    }
  },
    methods:{
        init() {
            const utterances = document.createElement("script");
            utterances.setAttribute("issue-term", "pathname"); // pathname|url|title|og:title 중 택 1
            utterances.setAttribute("theme", "github-light"); // theme 설정 (github-light, github-dark, preferred-color-scheme, github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light) 중 하나 선택
            utterances.setAttribute("repo", `seungjae-yu/TIL-comments`); // 주의!! 사용할 repository
            utterances.type = "text/javascript";
            utterances.async = true;
            utterances.crossorigin = "anonymous";
            utterances.src = "https://utteranc.es/client.js";
            window.document.getElementById('comment').appendChild(utterances);
        }
    },

    mounted() {
        this.init();       
    },
};
</script>
