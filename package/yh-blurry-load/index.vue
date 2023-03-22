<template>
    <div class="yh-blurry-load">
        <div v-show="props.onLoad" ref="progressRef" class="yh-progress">{{ progress }}%</div>
        <img v-if="props.src" :src="props.src" class="yh-img" ref="bgRef" :style="fitStyle" :alt="props.alt">
    </div>
</template>

<script setup lang='ts'>
import { computed, onMounted, ref } from 'vue'
defineOptions({
    name: 'YhBlurryLoad'
})
const props = defineProps({
    src: {
        type: String,
    },
    onLoad: {
        type: Boolean,
        default: false
    },
    speed: {
        type: Number,
        default: 5
    },
    fit: {
        type: String,
        default: 'contain',
        validater: (value: string) => {
            return ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(value)
        }
    },
    alt: {
        type: String,
        default: ''
    }
})

let fitStyle = computed(() => {
    let obj: any = {}
    obj['object-fit'] = props.fit
    return obj
})
let bgRef: any = ref(null)
let progress = ref(0)
let progressRef: any = ref(null)
let timer: any = null

function blurring() {
    progress.value++

    if (progress.value > 99) {
        clearInterval(timer)
        emit('finished')
    }

    if (progressRef.value != null && bgRef.value != null) {
        progressRef.value.style.opacity = scale(progress.value, 0, 100, 1, 0)
        bgRef.value.style.filter = `blur(${scale(progress.value, 0, 100, 30, 0)}px)`
    }
}

const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

onMounted(() => {
    let delay = Math.round(props.speed)
    delay = delay < 0 ? (-delay) : delay
    timer = setInterval(blurring, 150 / delay)
})

const emit = defineEmits(['finished'])
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.yh-blurry-load {
    position: relative;
}

.yh-blurry-load .yh-img {
    width: 100%;
    height: 100%;
    filter: blur(30px);
}

.yh-blurry-load .yh-progress {
    position: absolute;
    width: 42px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    text-shadow: 0 0 5px #fff;
}
</style>
