// Counter.spec.js
import Counter from '@/components/Counter'
// 引入vue-test-utils
import {mount} from 'vue-test-utils'

describe('Counter.vue', () => {
  it('click event', () => {
    // 断言:count的值应该是数字1
    const wrapper = mount(Counter)
    const btn = wrapper.find('button')
    btn.trigger('click')
    btn.trigger('click')
    expect(wrapper.vm.count).to.equal(2)
  })
})
