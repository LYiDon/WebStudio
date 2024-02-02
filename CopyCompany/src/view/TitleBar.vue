<template>
    <div class="titleBar">
        <button @click="goBack">返回</button>
        <h1>{{ title }} </h1>
        <button @click="openMenu">菜单</button>
    </div>
</template>

<script setup>
import { ref, defineProps,defineEmits } from "vue";

const props = defineProps({
    title:String
});

const emit = defineEmits(["go-back", "open-menu"]);


const goBack = () => {
    console.log("goBack");
    const data = {
        name: "zhangsanAA",
        age: 18,
    };
    emit("go-back", data);
};
const openMenu = () => {
    console.log("openMenu");
    const data = {
        name: "zhangsanBB",
        age: 32,
    };
    emit("open-menu", data);
};
</script>

<style>
.titleBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #f2f2f2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
