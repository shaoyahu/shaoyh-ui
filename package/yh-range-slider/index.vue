<template>
    <div class="yh-range-slider">
        <input ref="yhrangeRef" type="range" class="yh-range-input" :min="props.min" :max="props.max" @input="change">
        <div v-if="!props.write" class="yh-range-label">{{ range }}</div>
        <input v-if="props.write" class="yh-range-label-input" type="text" v-model="range" @input="changeValue">
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
defineOptions({
    name: 'YhRangeSlider'
})
const props = defineProps({
    min: {
        type: [Number, String],
        default: 0
    },
    max: {
        type: [Number, String],
        default: 100
    },
    value: {
        type: [Number, String],
        default: 50
    },
    write: {
        type: Boolean,
        default: false
    },
    width: {
        type: [Number, String],
        default: 300
    }
})

let yhrangeRef: any = ref(null)
let range: any = ref(+props.value)

const change = (e: any) => {
    range.value = e?.target?.value
}

const changeValue = () => {
    changeTo(range.value)
}

function changeTo(value: number | Event = range.value) {
    if (value < +props.min || value > +props.max) {
        console.error(`滑动条设定的值不在最小和最大的范围之内`)
    }
    yhrangeRef.value.value = value ? value : value
    range.value = value ? value : value
}

onMounted(() => {
    yhrangeRef.value.style.width = `${+props.width}px`
    changeTo()
})

defineExpose({
    range,
    changeTo
})
</script>

<style scoped>
.yh-range-slider {
    display: flex;
    align-items: center;
}

.yh-range-slider:hover .yh-range-label,

.yh-range-slider:hover .yh-range-label-input {
    opacity: 1;
}

.yh-range-slider .yh-range-input {
    margin: 18px 0;
    -webkit-appearance: none;
}

.yh-range-slider .yh-range-input:focus {
    outline: none;
}

.yh-range-slider .yh-range-label {
    background-color: #fff;
    width: 40px;
    height: 20px;
    line-height: 20px;
    padding: 5px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: all .1s linear;
}

/* Chrome & Safari */
.yh-range-slider .yh-range-input::-webkit-slider-runnable-track {
    background: linear-gradient(to left, red, blue);
    border-radius: 4px;
    width: 100%;
    height: 10px;
    cursor: pointer;
}

.yh-range-slider .yh-range-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid purple;
    margin-top: -7px;
    cursor: pointer;
}

/* Firefox */
.yh-range-slider .yh-range-input::-moz-range-track {
    background: purple;
    border-radius: 4px;
    width: 100%;
    height: 13px;
    cursor: pointer;
}

.yh-range-slider .yh-range-input::-moz-range-thumb {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid purple;
    margin-top: -7px;
    cursor: pointer;
}

/* IE */
.yh-range-slider .yh-range-input::-ms-track {
    background: purple;
    border-radius: 4px;
    width: 100%;
    height: 13px;
    cursor: pointer;
}

.yh-range-slider .yh-range-input::-ms-thumb {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background: #fff;
    border-radius: 50%;
    border: 1px solid purple;
    margin-top: -7px;
    cursor: pointer;
}

.yh-range-slider .yh-range-label-input {
    outline: none;
    border: none;
    width: 40px;
    height: 20px;
    padding: 5px;
    margin: 10px;
    text-align: center;
    font-size: 16px;
    border-radius: 4px;
    color: #213547;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: all .1s linear;
}
</style>
