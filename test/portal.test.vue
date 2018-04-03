<template>
  <div class="parent">
    <Portal 
      v-if="isHide"
      ref="portal" 
      class="classA" 
      data-custom="any" 
      :onChildrenMount="onChildrenMount">
      <button>content button</button>
    </Portal>
  </div>
</template>

<script>
import Portal from '../index'
export default {
  components: { Portal },
  props: {
    onChildrenMount: {
      type: Function,
      default: () => {}
    },
    isHide: Boolean
  }
}
</script>