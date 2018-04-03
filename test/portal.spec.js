// there are two problems still existed
// 1. snapshot title eport incorrect
// 2. snapshot not invoke render after executing $forceUpdate in component

import { mount } from 'avoriaz'
import sinon from 'sinon'
import PortalTestComponent from './portal.test.vue'

it('should render portal component correctly', () => {
  const onChildrenMount = sinon.stub()
  const wrapper = mount(PortalTestComponent, {
    attachToDocument: true,
    propsData: { onChildrenMount }
  })
  
  expect(document.body.innerHTML).toMatchSnapshot()
  expect(expect(onChildrenMount).toBeCalled)

  wrapper.destroy()
})

it('should not render portal component correctly', () => {
  const wrapper = mount(PortalTestComponent, {
    attachToDocument: true,
    propsData: { isHide: true }
  })
  expect(document.body.innerHTML).toMatchSnapshot()
  wrapper.destroy()
})
