<script setup lang="ts">
import { type Post } from "~/types/Post";

// const query = groq`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`;
// const { data: posts } = await useSanityQuery<Post[]>(query);


const query = groq`*[_type == "menu"]{name, ingredients}`;
const menuItems = await useSanityQuery(query);
const menuItemsFinal = menuItems.data;
</script>

<template>
  <!-- <div>{{ menuItems }}</div> -->
<ul>
  <li class="bg-yellow-500" v-for="menuItem in menuItemsFinal">
    {{ menuItem.name }}:
      {{ menuItem.ingredients }}
    </li>
  </ul>
  <!-- <section>
                                                    <Card
                                                        v-if="posts"
                                                        v-for="post in posts"
                                                        :key="post._id"
                                                        :post="post"
                                                      />
                                                      <Welcome v-if="posts?.length === 0" />
                                                    </section> -->
</template>
