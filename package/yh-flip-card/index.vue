<template>
    <div class="yh-flip-card" ref="flipCardRef" :style="cardStyle">
        <div class="front" ref="frontRef" :style="cardStyle">
            <slot name="front"></slot>
        </div>
        <div class="back" ref="backRef" :style="cardStyle">
            <slot name="back"></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref, computed } from 'vue'
defineOptions({
    name: 'YhFlipCard'
})
const props = defineProps({
    speed: {
        type: String,
        default: 'middle',
        validator: (value: string) => {
            return ['fast', 'middle', 'slow'].indexOf(value) > -1
        }
    },
    shadow: {
        type: Array<number | string>,
        default: []
    },
    shadow2: {
        type: Array<number | string>,
        default: []
    },
    angle: {
        type: Number,
        default: 180
    },
    pers: {
        type: Number,
        default: 500
        // 数值越大翻转大小差异越小
    },
    reversal: {
        type: Boolean,
        default: false
    },
    hover: {
        type: Boolean,
        default: false
    },
    width: {
        type: [String, Number],
        default: 300
    },
    height: {
        type: [String, Number],
        default: 300
    },
    rounded: {
        type: Boolean,
        default: false
    }
})

let cardStyle = computed(() => {
    let obj: any = {}
    obj.width = `${props.width}px`
    obj.height = `${props.height}px`
    obj['border-radius'] = props.rounded ? `10px` : `0px`
    return obj
})

let flipCardRef: any = ref(null)
let frontRef: any = ref(null)
let backRef: any = ref(null)

let angle = 0
if (props.reversal) {
    angle = -props.angle
} else {
    angle = props.angle
}

const animate = () => {
    // 添加鼠标悬停动画
    flipCardRef.value.onmouseover = () => {
        frontRef.value.style.transform = `rotateY(${-angle}deg)`
        backRef.value.style.transform = `rotateY(${180 - angle}deg)`
    }
    flipCardRef.value.onmouseout = () => {
        frontRef.value.style.transform = `rotateY(0deg)`
        backRef.value.style.transform = `rotateY(180deg)`
    }
}

const noAnimate = () => {
    flipCardRef.value.onmouseover = null
    flipCardRef.value.onmouseout = null
}

// 开启鼠标悬停动画
const openAnimate = () => {
    animate()
}

// 关闭鼠标悬停动画
const closeAnimate = () => {
    noAnimate()
}

// 点击旋转
const rotate = () => {
    frontRef.value.style.transform = `rotateY(${-angle}deg)`
    backRef.value.style.transform = `rotateY(${180 - angle}deg)`
}

// 点击转回来
const noRotate = () => {
    frontRef.value.style.transform = `rotateY(0deg)`
    backRef.value.style.transform = `rotateY(180deg)`
}


onMounted(() => {
    let duration: number = 1.5
    switch (props.speed) {
        case ('fast'): duration = 0.5; break;
        case ('middle'): duration = 1.5; break;
        case ('slow'): duration = 3; break;
    }

    // 添加动画效果
    frontRef.value.style.cssText += `transition: all ${duration}s linear`;
    backRef.value.style.cssText += `transition: all ${duration}s linear`;

    // 添加卡片阴影
    if (props.shadow.length > 0) {
        frontRef.value.style.cssText += `box-shadow: ${props.shadow[0]}px ${props.shadow[1]}px ${props.shadow[2]}px ${props.shadow[3]}px ${props.shadow[4]}`;
        if (props.shadow2.length > 0) {
            backRef.value.style.cssText += `box-shadow: ${props.shadow2[0]}px ${props.shadow2[1]}px ${props.shadow2[2]}px ${props.shadow2[3]}px ${props.shadow2[4]}`;
        } else {
            backRef.value.style.cssText += `box-shadow: ${props.shadow[0]}px ${props.shadow[1]}px ${props.shadow[2]}px ${props.shadow[3]}px ${props.shadow[4]}`;
        }
    }

    if (props.hover) {
        animate()
    }


    // 添加视图距离
    flipCardRef.value.style.perspective = `${props.pers}px`
})

defineExpose({
    openAnimate,
    closeAnimate,
    rotate,
    noRotate
})
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.yh-flip-card {
    position: relative;
}

.yh-flip-card .front {
    width: 100%;
    height: 100%;
    background-color: white;
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(0deg);
}

.yh-flip-card .back {
    width: 100%;
    height: 100%;
    background-color: white;
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(180deg);
}
</style>
