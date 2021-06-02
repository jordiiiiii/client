import axios from 'axios'

export const state = () => ({
  counter: 0,
  history: [0],
})

export const mutations = {
  addToCounter(state, payload) {
    state.counter += payload
    state.history.push(state.counter)
  },
  subtractFromCounter(state, payload) {
    state.counter -= payload
    state.history.push(state.counter)
  },
}
export const actions = {
  async addRandomNumber(context) {
    const data = await axios.get(
      'https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new'
    )
    context.commit('addToCounter', data.data)
  },
}

export const getters = {
  activeIndexes: (state) => (payload) => {
    const indexes = []
    state.history.forEach((number, index) => {
      if (number === payload) {
        indexes.push(index)
      }
    })
    return indexes
  },
}
