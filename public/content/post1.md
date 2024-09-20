# How to Center a DIV?

**Date:** September 20, 2024  



## Introduction

In these examples, the parent class represents the outer container that defines the layout, while the child class is the inner element being centered within the parent. Different CSS methods are used to center the child both horizontally and vertically inside the parent.



```HTML & CSS
HTML
   <div class="parent">
    <div class="child">Centered with Flexbox</div>
   </div>

CSS
    .parent {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .child {
        width: 200px;
        height: 100px;
        background-color: lightblue;
    }
-----
HTML
   <div class="parent">
    <div class="child">Centered with Grid</div>
   </div>

CSS
    .parent {
    display: grid;
    place-items: center;
    height: 100vh;
    }

    .child {
    width: 200px;
    height: 100px;
    background-color: lightcoral;
    }
-----
HTML
   <div class="parent">
    <div class="child">Centered with Absolute Positioning</div>
   </div>
  
CSS
    .parent {
    position: relative;
    height: 100vh;
    }

    .child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 100px;
    background-color: lightgreen;
    }
-----
HTML 
   <div class="parent">
    <div class="child">Centered Horizontally with Margin Auto</div>
   </div>

CSS 
    .parent {
    width: 100%;
    height: 100vh;
    }

    .child {
    width: 200px;
    height: 100px;
    margin: 0 auto;
    background-color: lightyellow;
    }

