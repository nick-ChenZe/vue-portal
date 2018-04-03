import { mount, shallow } from 'avoriaz'
import PortalTestComponent from './portal.test.vue'

it('should render portal component correctly', () => {
  const wrapper = shallow(PortalTestComponent)
  expect(wrapper.html()).toMatchSnapshot()
})
