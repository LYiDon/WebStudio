<template>
    <div id="container">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
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


