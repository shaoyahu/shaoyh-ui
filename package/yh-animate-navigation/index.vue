<template>
    <nav class="yh-animate-navigation yh-active" ref="NavRef">
        <ul class="ul">
            <li class="li" v-for="(item, index) in NavList" :key="index" @click="item.fun">
                <span class="yh-title">{{ item.title }}</span>
            </li>
        </ul>
        <button class="yh-icon" @click="change">
            <div class="yh-line yh-line1"></div>
            <div class="yh-line yh-line2"></div>
        </button>
    </nav>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
export interface INav {
    title: string,
    fun?: Function,
}
defineOptions({
    name: 'YhAnimateNavigation'
})
const props = defineProps({
    NavList: {
        type: Array<INav>,
        required: true
    },
    size: {
        type: String,
        default: 'middle',
        validator(value: string) {
            return ['large', 'middle', 'mini'].includes(value)
        }
    }
})

let NavRef: any = ref(null)

const change = () => {
    NavRef.value.classList.toggle('yh-active')
}
onMounted(() => {
    switch (props.size) {
        case ('large'): NavRef.value.style.padding = '30px'; break;
        case ('middle'): NavRef.value.style.padding = '15px'; break;
        case ('mini'): NavRef.value.style.padding = '0px'; break;
    }
})
defineExpose({
    change
})

</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

.yh-animate-navigation {
    background-color: #fff;
    padding: 0px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: width 0.6s linear;
    overflow-x: hidden;
    font-family: 'Muli', sans-serif;
    /* box-sizing: border-box; */
}

.yh-active {
    width: 600px;
    padding-right: 30px;
}

.yh-animate-navigation .ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    width: 0;
    transition: width 0.6s linear;
}

.yh-active .ul {
    width: 100%;
}

.yh-animate-navigation .ul .li {
    transform: rotateY(0deg);
    opacity: 0;
    overflow: hidden;
    transition: transform 0.6s linear, opacity 0.6s linear;
}

.yh-active .ul .li {
    opacity: 1;
    transform: rotateY(360deg);
}

.yh-animate-navigation .ul .li .yh-title {
    position: relative;
    color: #000;
    font-size: 20px;
    text-decoration: none;
    margin: 0 10px;
    white-space: nowrap;
    cursor: pointer;
    padding: 5px;
}

.yh-animate-navigation .ul .li .yh-title:hover {
    color: #5290f9;
}

.yh-animate-navigation .yh-icon {
    background-color: #fff;
    border: 0;
    cursor: pointer;
    padding: 0;
    position: relative;
    height: 30px;
    width: 30px;
}

.yh-animate-navigation .yh-icon:focus {
    outline: 0;
}

.yh-animate-navigation .yh-icon .yh-line {
    background-color: #5290f9;
    height: 2px;
    width: 20px;
    position: absolute;
    top: 10px;
    left: 5px;
    transition: transform 0.6s linear;
}

.yh-animate-navigation .yh-icon .yh-line2 {
    top: auto;
    bottom: 10px;
}

.yh-active .yh-icon .yh-line1 {
    transform: rotate(-765deg) translateY(5.5px);
}

.yh-active .yh-icon .yh-line2 {
    transform: rotate(765deg) translateY(-5.5px);
}
</style>
