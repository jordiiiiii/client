import PostService from '~/services/PostService'

export const state = () => ({
  posts: [],
  post: {},
})

export const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_POST(state, post) {
    state.post = post
  },
}
export const actions = {
  fetchPosts({ commit }) {
    return PostService.getPosts().then((response) => {
      commit('SET_POSTS', response.data.data)
    })
  },
  fetchPost({ commit }, id) {
    return PostService.getPost(id).then((response) => {
      commit('SET_POST', response.data.data)
    })
  },
}

// export const getters = {
//   getPostById: (state) => (id) => {
//     return state.posts.find((post) => post._id === id)
//   },
//   relatedPosts: (state) => (id) => {
//     return state.posts.filter((post) => post._id !== id)
//   },
// }
