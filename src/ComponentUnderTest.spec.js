import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'

import ComponentUnderTest from './ComponentUnderTest'

const localVue = createLocalVue()
localVue.use(Vuex)

function createStore () {
  const store = {
    state () {
      return {
        flag: true
      }
    },
    mutations: {
      setFlag (state, value) {
        state.flag = value
      }
    }
  }
  return new Vuex.Store(store)
}

describe('ComponentUnderTest', () => {
  test('Test 1', () => {
    const store = createStore()
    const wrapper = mount(ComponentUnderTest, {
      localVue,
      store
    })
    expect(wrapper.exists()).toBe(true)
  })

  test('Test 2', () => {
    const store = createStore()
    const wrapper = mount(ComponentUnderTest, {
      localVue,
      store
    })
    expect(wrapper.exists()).toBe(true)
  })
})
