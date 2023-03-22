<template>
  <nav class="active" ref="NavRef">
    <ul>
      <li v-for="(item, index) in NavList" :key="index" @click="item.fun">
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <button class="icon" @click="change">
      <div class="line line1"></div>
      <div class="line line2"></div>
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
  name: 'AnimatedNavigation'
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
  NavRef.value.classList.toggle('active')
}
onMounted(() => {
  switch (props.size) {
    case ('large'): NavRef.value.style.padding = '30px'; break;
    case ('middle'): NavRef.value.style.padding = '15px'; break;
    case ('mini'): NavRef.value.style.padding = '0px'; break;
  }
})

</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

nav {
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
}

.active {
  width: 500px;
  padding-right: 30px;
}

ul {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  width: 0;
  transition: width 0.6s linear;
}

.active ul {
  width: 100%;
}

li {
  transform: rotateY(0deg);
  opacity: 0;
  overflow: hidden;
  transition: transform 0.6s linear, opacity 0.6s linear;
}

.active li {
  opacity: 1;
  transform: rotateY(360deg);
}

span {
  position: relative;
  color: #000;
  text-decoration: none;
  margin: 0 10px;
  white-space: nowrap;
  cursor: pointer;
  padding: 5px;
}

span:hover {
  color: #5290f9;
}

.icon {
  background-color: #fff;
  border: 0;
  cursor: pointer;
  padding: 0;
  position: relative;
  height: 30px;
  width: 30px;
}

.icon:focus {
  outline: 0;
}

.line {
  background-color: #5290f9;
  height: 2px;
  width: 20px;
  position: absolute;
  top: 10px;
  left: 5px;
  transition: transform 0.6s linear;
}

.line2 {
  top: auto;
  bottom: 10px;
}

.active .line1 {
  transform: rotate(-765deg) translateY(5.5px);
}

.active .line2 {
  transform: rotate(765deg) translateY(-5.5px);
}
</style>
