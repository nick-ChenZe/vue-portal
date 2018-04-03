# Vue Portal Component

[![Build Status](https://travis-ci.org/nick-ChenZe/vue-portal.svg?branch=master)](https://travis-ci.org/nick-ChenZe/vue-portal)

> This is a simple component for someone who wants render component outside the DOM structure

## Installation

```bash
npm i v-portal
```

```js
import Portal from 'v-portal'
Vue.use(Portal)
```

## Usage

```html
<template>
  <div class="parent">
    <button @click="isShow = !isShow">{{ isShow ? 'hide' : 'show' }}</button>
    <Portal v-if="isShow" class="classA" data-custom="any">
      <button>content button<button>
    <Portal/>
  </div>
</template>

<script>
export default {
  data() {
    return { isShow: true }
  }
}
</script>
```

The template above will render as below, and you can control the condition render by toggling the button

```html
<div class="parentA">
  <button>hide</button>
</div>
<div role="portal" class="classA" data-custom="any">
  <button>content button</button>
</div>
```