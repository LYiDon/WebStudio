<template>
    <div>
        <ul class="horizontalList">
            <li v-for="item in items" :key="item.path">
                <button class="btn">{{ item.name + " " + item.path }}</button>
            </li>
        </ul>
    </div>
</template>

<!-- <template>
    <div class="horizontalList">
        <p v-for="item in items" class="btn"></p>
    </div>
</template> -->
<script setup>
import { ref } from "vue";

const items = ref([
    { name: "首页", path: "/home" },
    { name: "公司", path: "/company" },
    { name: "产品", path: "/product" },
    { name: "关于", path: "/about" },
]);

</script>

<style>
@import "normalize.css/normalize.css";


.horizontalList {
    align-content: center;
    height: 75px;
    background-color: #57193f;
}

.horizontalList li {
    list-style: none;
    height: 100%;
    width: 100%;
}

.btn {
    background-color: wheat;
    height: 100%;
    width: 100%;
}
</style>