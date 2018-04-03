<template>
  <div class="parent">
    <button @click="isShow = !isShow">{{ isShow ? 'hide' : 'show' }}</button>
    <Portal v-if="isShow" class="classA" data-custom="any">
      <button>content button<button>
    <Portal/>
  </div>
</template>

<script>
import Portal from '../index'
export default {
  components: { Portal },
  data() {
    return { isShow: true }
  }
}
</script>