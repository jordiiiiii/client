<template>
  <div class="blog">
    <CustomHeroSlots>
      <template #title> Blog </template>
      <template #links>
        <NuxtLink :to="{ name: 'post-create' }" class="button--green">
          Create Post
        </NuxtLink>
        <NuxtLink :to="{ name: 'contactUs' }" class="button--grey">
          Contact Us
        </NuxtLink>
      </template>
    </CustomHeroSlots>
    <div class="containerIndex">
      <div>
        <PostCard
          v-for="(post, index) in posts"
          :key="index"
          :post="post"
          :data-index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import PostService from '~/services/PostService'

export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch('posts/fetchPosts')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch posts at this time. Please try again.',
      })
    }
  },

  // async asyncData({ error }) {
  //   try {
  //     const { data } = await PostService.getPosts()
  //     return {
  //       posts: data.data,
  //     }
  //   } catch (e) {
  //     error({
  //       statusCode: 503,
  //       message: 'Unable to fetch posts at this time. Please try again.',
  //     })
  //   }
  // },

  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Join us on the journey to Automated Penetration Testing, seamlessly assess and reduce corporate cyberSecurity risks',
        },
      ],
    }
  },

  computed: mapState({
    posts: (state) => state.posts.posts,
  }),
}
</script>
