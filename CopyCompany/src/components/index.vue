<template>
    <div class="container">
        <TitleBar :title="router.currentRoute.value.meta.title" @go-back="handleGoBack" @open-menu="handleOpenMenu" />
        <div class="page">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <NavigationBar />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from "vue-router";
import TitleBar from "../view/TitleBar.vue";
import NavigationBar from "../view/NavigationBar.vue";

const router = useRouter();
console.log("title" + router.currentRoute.value.meta.title);
router.beforeEach((to, from, next) => {
    console.log(to, from);
    next();
});
</script>

<script>
export default {
    name: "App",
    watch: {
        $route(to, from) {
            console.log(to, from);
        }
    },
    methods: {
        handleGoBack(data) {
            console.log('执行返回操作' + data.name + " " + data.age);
        },
        handleOpenMenu(data) {
            console.log('执行打开菜单操作' + data.name + " " + data.age);
        }
    },

};
</script>


<style >
.container {
    display: flex;
    flex-direction: column;
    width: 750px;
    height: 100vh;
    background-color: rebeccapurple;
}

.page {
    flex: 1;
}
</style>