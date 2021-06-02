<template>
  <div class="containerSingle">
    <article>
      <h2 class="title">{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </article>
    <aside>
      <h3 class="subtitle">Posts you might enjoy</h3>
      <ul>
        <li v-for="related in relatedPosts" :key="related.title">
          <nuxt-link :to="{ name: 'post-id', params: { id: related._id } }">
            {{ related.title }}
          </nuxt-link>
        </li>
      </ul>
    </aside>
    <Reviews />
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import PostService from '~/services/PostService'

export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('posts/fetchPost', params.id)
    } catch (e) {
      error({
        statusCode: 503,
        message:
          'Unable to fetch post ' +
          params.id +
          ' at this time. Please try again.',
      })
    }
  },

  // async asyncData({ error, params }) {
  //   try {
  //     const { data } = await PostService.getPost(params.id)
  //     return {
  //       post: data.data,
  //     }
  //   } catch (e) {
  //     error({
  //       statusCode: 503,
  //       message:
  //         'Unable to fetch post ' +
  //         params.id +
  //         ' at this time. Please try again.',
  //     })
  //   }
  // },

  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about ' + this.post.title,
        },
        { name: 'twitter:title', content: this.post.title },
        { name: 'twitter:description', content: this.post.body },
        { name: 'twitter:image', content: this.post.imageurl },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },

  computed: {
    ...mapState({
      post: (state) => state.posts.post,
      posts: (state) => state.posts.posts,
    }),
    // after refresh lost the info
    relatedPosts() {
      return this.posts.filter((post) => post._id !== this.$route.params.id)
    },
  },
}
</script>

<style scoped>
.containerSingle {
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
}
article * {
  margin-bottom: 1rem;
}
aside {
  min-width: 280px;
  max-width: 480px;
  padding-left: 2rem;
}
.title {
  font-size: 2rem;
}
.subtitle {
  font-size: 2rem;
}
ul {
  margin-left: 16px;
}
</style>
