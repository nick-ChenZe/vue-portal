# Vue Portal Component

> This is a simple component for someone who wants render component outside the DOM structure

## Installation

```bash
npm i vue-portal
```

```js
import Portal from 'vue-portal'
Vue.use(Portal)
```

## Usage

```html
<template>
  <div class="parentA">
    <button @click="t = !t">{{ t ? 'hide' : 'show' }}</button>
    <Portal v-if="isShow" class="classA" data-custom="any">
      // template you what to render
      <button><button>
    <Portal/>
  </div>
</template>

<script>
export default {
  data() {
    return { t: true }
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