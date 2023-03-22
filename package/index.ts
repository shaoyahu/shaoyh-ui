import YhFlipCard from './yh-flip-card/index.vue'
import YhAnimateNavigation from './yh-animate-navigation/index.vue'
import YhBlurryLoad from './yh-blurry-load/index.vue'
import YhBoxesBackground from './yh-boxes-background/index.vue'
import YhClickAppear from './yh-click-appear/index.vue'
import YhRangeSlider from './yh-range-slider/index.vue'

const coms = [YhFlipCard, YhAnimateNavigation, YhBlurryLoad, YhBoxesBackground, YhClickAppear, YhRangeSlider]

const ShaoyhUI = {
    // 批量注册组件
    install(App: any) {
        coms.forEach((com: any) => {
            App.component(com.name, com)
        })
    }
}


export default ShaoyhUI