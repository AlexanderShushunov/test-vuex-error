import Vue from 'vue'
import Vuex from 'vuex'
import ComponentUnderTest from './ComponentUnderTest'

Vue.use(Vuex)

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
    let error = null

    Vue.config.async = false
    Vue.config.errorHandler = e => {
      error = e
    }

    new Vue({
      ...ComponentUnderTest,
      store: createStore()
    }).$mount()

    expect(error).toBe(null)
  })
})
