<template>
    <ParentLayout>
        <Comment />
    </ParentLayout>
</template>

<script>
import Layout from "@vuepress/theme-default/layouts/Layout.vue";
import Comment from "../components/Comment";
export default {
    components: {
        ParentLayout,
        Comment,
    },
};
</script>
