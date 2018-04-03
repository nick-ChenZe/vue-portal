let Portal = {
  name: 'v-portal',

  props: {
    onChildrenMount: {
      type: Function,
      default: () => {}
    }
  },

  destroy() {
    const { portalElement } = this.$refs
    portalElement && portalElement.remove()
  },

  mounted() {
    const { portalElement } = this.$refs
    const parent = document.body
    parent.append(portalElement)
    this.$forceUpdate()
    this.$nextTick(e => this.onChildrenMount(this.$slots.default))
  },

  render(h) {
    const { portalElement } = this.$refs
    const data = {
      attrs: {
        role: 'portal'
      },
      style: {
        display: portalElement ? undefined : 'none'
      },
      ref: 'portalElement'
    }
    if (typeof document === 'undefined') {
      return null
    } else {
      return h('div', data, this.$slots.default)
    }
  }
}

Portal.install = function install(Vue) {
  Vue.component(Portal.name, Portal)
}

export default Portal
