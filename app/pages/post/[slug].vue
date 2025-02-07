<script setup lang="ts">
import { type Post } from "~/types/Post";
import BlockContent from "~/components/BlockContent.vue";

const route = useRoute();

const query = groq`*[ _type == "post" && slug.current == $slug][0]`;
const { data: post } = await useSanityQuery<Post>(query, {
  slug: route.params.slug,
});
</script>
<script lang="ts">
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: { BlockContent },
};
</script>
<template>
  <section class="post">
    <img v-if="post.mainImage" class="post__cover" :src="$urlFor(post.mainImage).width(1920).url()" alt="Cover image" />
    <div v-else class="post__cover--none" />
    <div class="post__container">
      <h1 class="post__title">{{ post.title }}</h1>
      <p class="post__excerpt">{{ post.excerpt }}</p>
      <p class="post__date">{{ formatDate(post._createdAt) }}</p>
      <div v-if="post.body" class="post__content">
        <BlockContent :blocks="post.body" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.post {
  width: 100%;
  margin: var(--space-1) 0 var(--space-4);

  & .post__cover,
  & .post__cover--none {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  & .post__cover--none {
    background: var(--black);
  }

  & .post__container {
    padding: 0 var(--space-3);
  }

  & .post__content {
    font-family: var(--font-family-serif);
    font-weight: 400;
    font-size: var(--font-size-4);
    line-height: var(--line-height-5);
    letter-spacing: -0.02em;
    margin-top: var(--space-6);

    /* Targeting tags in PortableText */
    & blockquote {
      border-left: 5px solid var(--black);
      padding-left: var(--space-3);
      margin-left: var(--space-4);
    }

    & a {
      color: var(--blue-600);
      text-decoration: none;
    }
  }

  & .post__title {
    font-family: var(--font-family-sans);
    font-size: var(--font-size-7);
    line-height: var(--line-height-6);
    margin: var(--space-4) 0;
    font-weight: 800;
  }

  & .post__excerpt {
    font-family: var(--font-family-serif);
    font-size: var(--font-size-5);
    line-height: var(--line-height-4);
    margin-top: 0;
    font-weight: 400;
  }

  & .post__date {
    font-family: var(--font-family-sans);
    font-weight: 600;
    font-family: var(--font-family-sans);
    font-size: var(--font-size-1);
    line-height: var(--line-height-1);
    margin-top: var(--space-4);
  }
}

@media (min-width: 800px) {
  .post {

    & .post__cover,
    & .post__cover--none {
      width: 750px;
      height: 380px;
    }

    & .post__title {
      font-size: var(--font-size-10);
      line-height: var(--line-height-10);
      margin: var(--space-6) 0 0;
      letter-spacing: -0.025em;
    }

    & .post__excerpt {
      font-size: var(--font-size-5);
      line-height: var(--line-height-5);
      margin-top: var(--space-3);
      margin-bottom: var(--space-3);
    }

    & .post__date {
      font-size: var(--font-size-3);
      line-height: var(--line-height-2);
      margin-top: var(--space-0);
    }

    & .post__content {
      margin-top: var(--space-7);
    }
  }
}
</style>
