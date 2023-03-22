<template></template>

<script setup lang='ts'>
defineOptions({
    name: 'YhClickAppear'
})

const props = defineProps({
    animate: {
        type: String,
        default: 'enlarge',
        validator: (value: string) => {
            return ['enlarge', 'rise'].indexOf(value) > -1
        }
    },
    icon: {
        type: String,
        default: 'circle'
    },
    color: {
        type: [String, Array<string>],
        default: 'black'
    },
    blink: {
        type: Boolean,
        default: false
    },
    src: {
        type: String
    },
    width: {
        type: [String, Number],
        default: '16'
    },
    height: {
        type: [String, Number],
        default: '16'
    },
    duration: {
        type: [String, Number],
        default: 1
    }
})

// 添加样式库引入 支持 font-awesome 5 以上版本
let headHTML = document.getElementsByTagName('head')[0].innerHTML
headHTML += '<link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/6.2.1/css/all.min.css" rel="stylesheet">'
document.getElementsByTagName('head')[0].innerHTML = headHTML

// 设置点击飘出样式
const appear = (e: PointerEvent) => {
    const icon = document.createElement('i')
    icon.classList.add('yh-click-appear-basic')
    icon.classList.add('fas')

    // 选择出现的动画
    switch (props.animate) {
        case ('enlarge'): icon.classList.add('yh-click-appear-enlarge'); break
        case ('rise'): icon.classList.add('yh-click-appear-rise'); break
    }

    // 设置动画持续时间
    icon.style.animationDuration = `${props.duration}s`

    // 定位出现的位置
    const x = e.clientX
    const y = e.clientY
    icon.style.position = 'absolute'
    icon.style.top = `${y}px`
    icon.style.left = `${x}px`

    // 设置图标的颜色
    if (typeof props.color === 'string') {
        icon.style.color = props.color
    } else {
        // 闪烁
        if (props.blink) {
            setInterval(() => {
                icon.style.color = props.color[Math.floor(Math.random() * props.color.length)]
            })
        } else {
            // 每次按下变色
            icon.style.color = props.color[Math.floor(Math.random() * props.color.length)]
        }
    }

    // 设置点击出现的图标或者图片, 图片优先级大于图标
    if (props.src) {
        icon.style.background = `url(${props.src})`
        icon.style.width = `${+props.width}px`
        icon.style.height = `${+props.height}px`
    } else {
        icon.classList.add(`fa-${props.icon}`)
    }

    document.body.appendChild(icon)
    setTimeout(() => icon.remove(), 1000 * Number(props.duration))
}
const clickEvent = (e: MouseEvent) => {
    appear(e as PointerEvent)
}
const clickTo = () => {
    document.addEventListener('mouseup', clickEvent)
}
const removeClickTo = () => {
    document.removeEventListener('mouseup', clickEvent)
}

clickTo()

defineExpose({
    clickTo,
    removeClickTo
})
</script>

<style>
.yh-click-appear-basic {
    background-size: cover !important;
}

/* 变大 */
.yh-click-appear-enlarge {
    animation: yh-click-appear-enlarge 1s linear;
    transform: translate(-50%, -50%) scale(0);
}

@keyframes yh-click-appear-enlarge {
    to {
        transform: translate(-50%, -50%) scale(10);
        opacity: 0;
    }
}

/* 上升 */
.yh-click-appear-rise {
    animation: yh-click-appear-rise 1.1s linear;
    transform: translate(-50%, -50%);
}

@keyframes yh-click-appear-rise {
    0% {
        transform: translate(-50%, -50%);
        opacity: 1;
    }

    10% {
        transform: translate(-30%, -8px);
        opacity: 0.9;
    }

    20% {
        transform: translate(-50%, -16px);
        opacity: 0.8;
    }

    30% {
        transform: translate(-70%, -24px);
        opacity: 0.7;
    }

    40% {
        transform: translate(-50%, -32px);
        opacity: 0.6;
    }

    50% {
        transform: translate(-30%, -40px);
        opacity: 0.5;
    }

    60% {
        transform: translate(-50%, -48px);
        opacity: 0.4;
    }

    70% {
        transform: translate(-70%, -56px);
        opacity: 0.3;
    }

    80% {
        transform: translate(-50%, -64px);
        opacity: 0.2;
    }

    90% {
        transform: translate(-30%, -72px);
        opacity: 0.1;
    }

    100% {
        transform: translate(-70%, -80px);
        opacity: 0;
    }
}
</style>
