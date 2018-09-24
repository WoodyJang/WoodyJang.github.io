# 移动端web页面开发适方案
在移动端开发过程中，面对各种分辨率的手机和各种尺寸的手机，如何让页面呈现相同的表现？


## 1. 先理解几个概念

- css像素
    
    > 故名思议，就是我们平时所写css时用到的像素，与设备无关
- 物理像素
    > 即设备像素，是自然存在的，与任何因素都没有关系的像素，是显示器能显示的最小单元
- 设备像素比(dpr，devicePixelRatio)
    > 设备像素比 = 设备像素 / css像素，

    - js中 通过window.devicePixelRatio获取当前设备的dpr，
    - css中 通过-webkit-device-pixel-ratio,-webkit-min-device-pixel-ratio和-webkit-max-device-pixel-ratio进行媒体查询，做一些样式适配。

<!-- more -->

- 设备独立像素（dip/dp）
    > device independent
    pixels，设备独立像素，与屏幕密度有关。dip可以用来辅助区分视网膜屏（retina）和非视网膜屏
    
- 屏幕像素密度（PPI）
    > 屏幕像素密度 = 对角线分辨率 / 屏幕尺寸 ，屏幕尺寸是屏幕对角线的长度



- viewport

    > 标准设置
    
    ```
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    ```
    > viewport 是严格的等于浏览器的窗口大小，\
    > visual viewport  可见视口 屏幕宽度 \
    > layout viewport 布局视口 DOM 宽度\
    > visual viewport = layout viewport * scale\
    > 获取屏幕宽度(visual viewport)的尺寸：window. innerWidth/Height\
    > 获取DOM宽度(layout viewport)的尺寸：document. documentElement. clientWidth/Height\
    >width=device-width 所设置的width即为layout viewport



## 2.视觉稿
   > 一般视觉稿为了达到高清效果都是按照iphone6 750 x 1334 dpr = 2 为基准，尺寸为4.7  其中 物理像素就是 750 x 1334 ，css像素为 375 x 667 
   
## 3.适配方案

1. 根据dpr进行屏幕的缩放

    > 根据屏幕的分辨率动态的设置html的文字大小，以及scale的值，达到等比缩放的功能。
    
    这里我们提取了一个公式
    
        rem = document.documentElement.clientWidth * dpr / 10
    > 1.乘以dpr，是因为页面有可能为了实现1px border页面会缩放(scale) 1/dpr 倍(如果没有，dpr=1)\
    > 2.除以10，是为了取整，方便计算
    
    
    
           <script>
            var dpr, rem, scale;
            var docEl = document.documentElement;
            var fontEl = document.createElement('style');
            var metaEl = document.querySelector('meta[name="viewport"]');
            dpr = window.devicePixelRatio || 1;
            rem = docEl.clientWidth * dpr / 10;
            scale = 1 / dpr;
            // 设置viewport，进行缩放，达到高清效果
            metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
            // 设置data-dpr属性，留作的css hack之用
            docEl.setAttribute('data-dpr', dpr);
            // 动态写入样式
            docEl.firstElementChild.appendChild(fontEl);
            fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
            // 给js调用的，某一dpr下rem和px之间的转换函数
            window.rem2px = function(v) {
                v = parseFloat(v);
                return v * rem;
            };
            window.px2rem = function(v) {
                v = parseFloat(v);
                return v / rem;
            };
            window.dpr = dpr;
            window.rem = rem;
    </script>
    
- css 
    
    使用less或sass的mixin定义：

        .px2rem(@name, @px){
            @{name}: @px / 75 * 1rem;
        }