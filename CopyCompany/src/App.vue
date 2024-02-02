<template>
    <keep-alive>
        <router-view class="App-root"></router-view>
    </keep-alive>
</template>

<script>
import { useRouter } from "vue-router";
export default {
    name: "App",
    watch: {
        $route(to, from) {
            console.log(to, from);
        }
    },
};

</script>


