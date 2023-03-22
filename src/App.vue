<script setup lang="ts">
import { ref } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import AnimatedNavigation from './components/HelloWorld.vue'
let list = [
  {
    title: '首页',
    fun: () => { alert('点击了首页') }
  },
  {
    title: '工作',
    fun: () => { alert('点击了工作') }
  },
  {
    title: '关于',
    fun: () => { alert('点击了关于') }
  },
  {
    title: '联系',
    fun: () => { alert('点击了联系') }
  },
]
let BoxesBackgroundRef: any = ref(null)
let asdRef: any = ref(null)
const change = () => {
  // BoxesBackgroundRef.value.change()
  asdRef.value.removeClickTo()
}

let RangeSliderRef:any = ref(null)

const changeTo = (v: number) => {
    console.log(RangeSliderRef.value.range)
    RangeSliderRef.value.changeTo(v)
}

</script>

<template>
  <div class="test">
    <!-- 翻转卡片 -->
    <yhFlipCard speed="slow" :angle="180" :shadow="[0, 0, 5, 1, '#777']" :pers="800" rounded hover width="200"
                height="400">
      <template #front>
        <div class="front">正面</div>
      </template>
      <template #back>
        <div class="back">背面</div>
      </template>
    </yhFlipCard>

    <!-- 动画导航栏 -->
    <yh-animate-navigation :NavList='list' size="large" />

    <!-- 图片加载效果 -->
    <!-- <yh-blurry-load :src="'https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif'" onLoad :speed="10"></yh-blurry-load> -->

    <!-- 切割墙 -->
    <button @click="changeTo(20)">触发方法change</button>
    <!-- <yh-boxes-background ref="BoxesBackgroundRef" :row="5" :col="6" rotate src="'https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif'"></yh-boxes-background> -->
    <!-- src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" -->
    <yh-click-appear ref="asdRef" animate="enlarge" :color="['red', 'blue', 'yellow', 'green']" duration="3" />

    <yh-range-slider ref="RangeSliderRef" width="500" min="-20" max="80" value="40" write />
  </div>
</template>

<style scoped>
.test {
  width: 500px;
  height: 300px;
  margin: 30px auto;
  border: 1px solid skyblue;
}
</style>
