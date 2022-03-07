<template>
    <ParentLayout>
        <Comment />
    </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import Comment from "../components/Comment";
export default {
    components: {
        ParentLayout,
        Comment,
    },
};
</script>
