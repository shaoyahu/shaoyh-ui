<template>
    <div ref="boxRef" class="yh-boxes-background">
        <div v-for="(RowItem, RowIndex) in listRow" :key="RowIndex" name="yh-boxRow" class="yh-boxRow">
            <div v-for="(ColItem, ColIndex) in listCol" :key="ColIndex" class="yh-boxCol"
                 :id="`yh-${RowItem.id}_${ColItem.id}`">
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
let boxRef: any = ref(null)
defineOptions({
    name: 'YhBoxesBackground'
})
const props = defineProps({
    row: {
        type: Number,
        default: 4
    },
    col: {
        type: Number,
        default: 4
    },
    src: {
        type: String,
        default: 'https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif'
    },
    rotate: {
        type: Boolean,
        default: false
    },
    // 分割后开启3D墙
    solid: {
        type: Boolean,
        default: false
    },
})
interface ListItem {
    id?: string
}

let src = `url(${props.src})`

// 行列有多少个块
let listRow: Array<ListItem> = []
let listCol: Array<ListItem> = []
for (let i = 0; i < props.row; i++) {
    let obj = { id: `${i + 1}` }
    listRow.push(obj)
}
for (let i = 0; i < props.col; i++) {
    let obj = { id: `${i + 1}` }
    listCol.push(obj)
}

// 点击进行切割动画
const change = () => {
    if (props.solid) {
        boxRef.value.classList.toggle('yh-split')

    } else {
        boxRef.value.classList.toggle('yh-split-3D')
    }
    let boxRowArr: any = document.getElementsByName('yh-boxRow')
    for (let i = 0; i < boxRowArr.length; i++) {
        boxRowArr[i].classList.toggle('yh-long')
    }
    for (let i = 0; i < listRow.length; i++) {
        for (let j = 0; j < listCol.length; j++) {
            let box = document.getElementById(`yh-${i + 1}_${j + 1}`)
            if (props.rotate)
                box?.classList.toggle('yh-rotate')
        }
    }
}

// 精灵图定位距离
let positionX = 100
let positionY = 100

positionX = 400 / props.col
positionY = 400 / props.row

// 对每一个小方块进行精灵图定位
onMounted(() => {
    positionX = 400 / props.row
    positionY = 400 / props.col
    for (let i = 0; i < listRow.length; i++) {
        for (let j = 0; j < listCol.length; j++) {
            let box: HTMLElement | null = document.getElementById(`yh-${i + 1}_${j + 1}`)
            if (box) {
                box.style.backgroundImage = src
                box.style.height = `${positionX}px`
                box.style.width = `${positionY}px`
                box.style.backgroundPosition = `${-j * positionY}px ${-i * positionX}px`
            }
        }
    }
})
defineExpose({
    change
})

</script>

<style scoped>
.yh-boxes-background {
    width: 400px;
    height: 400px;
    /* width: 100%;
    height: 100%; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: 1.4s ease;
    /* background-repeat: no-repeat; */
}

.yh-boxes-background .yh-boxRow {
    width: 400px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    transition: 1.4s ease;
}

.yh-boxes-background .yh-boxRow .yh-boxCol {
    background-size: 400px 400px;
    transition: 1.4s ease;
}

.yh-split {
    width: 600px;
    height: 600px;
}

.yh-split-3D {
    width: 600px;
    height: 600px;
}

.yh-boxes-background .yh-long {
    width: 700px;
}

.yh-boxes-background .yh-boxRow .yh-rotate {
    transform: rotateZ(360deg);
}


.yh-split .yh-boxCol::before {
    content: '';
    background-color: #f9ca24;
    position: absolute;
    bottom: -15px;
    left: 8px;
    height: 15px;
    width: 100%;
    transform: skewX(45deg);
}

.yh-split .yh-boxCol::after {
    content: '';
    background-color: #f6e58d;
    position: absolute;
    top: 8px;
    right: -15px;
    height: 100%;
    width: 15px;
    transform: skewY(45deg);
}
</style>
