---
layout: post
title: "CSS3 transition"
date: 2015-11-02 11:50:05 +0800
comments: true
categories: [web]

---

最近在练手用一些平时不太常用的工具做东西，纯CSS3的动画和渐变之前了解过但是没正儿八经写过，这一次以做一个常见的按钮状态渐变为目标。

<!-- more -->

### CSS3 Transitions

给页面元素的某些CSS属性加上一个transition之后，这个元素的属性变化时就会由浏览器自动完成补间的动画。

```scss
.some-element {
  transition: width 2s ease-in-out 0.5s;
}
```

所有.some-element的元素，当它的width变化时，这个变化过程会由一个2秒的动画来过渡完成。ease-in-out表示动画的速度是渐进渐出的，而且会延迟0.5秒触发。

这里是一个transition简写的例子，其实是把transition-property transition-duration transition-timing-fuction transition-delay融到了一起，详细的解释大家可以看看CSS3的官方文档。

除了常用的CSS属性，如width height background-color等等。我们还可以利用CSS3的transforms来灵活改变元素在页面上的显示。

在很多平台上我们都能利用一些坐标变换来完成图像的变形，现在CSS3推进它来到了web浏览器上。
常用的transform函数主要有下面几个

* translate() ： 坐标平移
* rotate()    ： 坐标旋转
* scale()     ： 缩放
* skew()      ： 倾斜
* matrix()    ： 矩阵变换

### Code：按钮动画

菜单按钮在未激活的状态下呈现「三明治」图案，激活状态下呈现「X」（叉）的图案。中间用CSS3的transform+transition来和谐过渡。

在页面添加一个简单的按钮，用来做练习。

``` html
<button class="menu-button" onclick="$(this).toggleClass('active')">
   <span></span>    
</button>
  
```

利用span和它的::before和::after selector来画三条线。
menu-button切换到active状态时，::before的线（上面的线）和::after的线(下面的线）做top与transform两种变换。

``` scss
.menu-button {
  border: none;
  width: 50px;
  height: 50px;
  background-color: orange;
  border-radius: 25px;
  position: relative;
  right: 0;
  bottom: 0;
  outline: none;
}
	
.menu-button span,
.menu-button span::before,
.menu-button span::after {
  background: white;
  height: 4px;
  position: absolute;
  display: block;
  border-radius: 2px;
}

.menu-button span {
  top: 23px;
  left: 10px;
  right: 10px;

  transition: background 0.3s 0s;
}

.menu-button span::before {
  top: -8px;
  width: 100%;
  content: "";

  transition: top 0.3s 0.3s, transform 0.3s 0s;
}

.menu-button span::after {
  top: 8px;
  content: "";
  width: 100%;

  transition: top 0.3s 0.3s, transform 0.3s 0s;
}

.menu-button.active {
  span {
    background: none;
    transition: background 0.3s 0.3s;
  }

  span::before {
    top: 0;
    transform: rotate(45deg);
    transition: top 0.3s 0s, transform 0.3s 0.3s;
  }

  span::after {
    top: 0;
    transform: rotate(-45deg);
    transition: top 0.3s 0s, transform 0.3s 0.3s;
  }
}
```

### 浏览器支持

想要在实际项目中使用CSS3的新技术还得考虑到浏览器的支持问题，想IE、Chrome、Firefox、Opera等常用浏览器最新的版本都支持大部分CSS3新特性，但是之前的版本或不完全支持，或需要特定的前缀来描述。

所以，像上面的例子，

``` scss
transform: rotate(45deg); 
```

只是个标准语句，要想支持各种浏览器内核的稍早版本，需要这样写

``` scss
-web-kit-transform: rotate(45deg);
-o-transform: rotate(45deg);
-moz-transform: rotate(45deg);
-ms-transform: rotate(45deg);
transform: rotate(45deg);
```

这未免有点麻烦，现在有很多第三方框架为我们更方便的使用CSS3的特性提供了工具，这里推荐一下Compass。

### Compass

像上面说的浏览器对新特性的支持问题，Compass利用SASS的mixin为我们提供了很多helper方法，让我们不用写一大堆冗余的语句，比如CSS3的border-radius属性，可以方便的设置圆角，但是很多早期浏览器并不支持这个标准属性，而是在当时暂时支持了自己内核的一个替代属性，如 -webkit-border-radius。

Compass则封装了一个border-radius($radius方法)，我们只需在自定义的样式里，@include border-radius(4px)即可。

border-raduis()源码
``` scss 
@mixin border-radius($radius: $default-border-radius, $vertical-radius: false) {
  @include with-each-prefix(border-radius, $border-radius-threshold) {
    @if $current-prefix == -webkit {
      // Legacy Webkit didn't understand the official shorthand syntax for specifying a vertical radius.
      $legacy-webkit-radius: first-value-of($radius);
      @if $vertical-radius {
        $legacy-webkit-radius: append($legacy-webkit-radius, first-value-of($vertical-radius));
      }
      @include prefix-prop(border-radius, $legacy-webkit-radius);
    }
    @else {
      // Official syntax for everyone else
      @include prefix-prop(border-radius, if($vertical-radius, #{$radius} / #{$vertical-radius}, $radius));
    }
  }
}
```

除了提供CSS3的helpers外，Compass还带来了很多实用的功能，这里提一下方便选择使用。

* Spirte: 提供多张图片就能完成一个简单的精灵对象。
* Verticle Rhythm帮助我们更好的布局
* Variables 提供很多Globle的CSS变量
* etc.