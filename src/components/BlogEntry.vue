<!--
{
  "type_of": "article",
  "id": 106115,
  "title": "How I use Vue.js on GitHub Pages",
  "description": "How to properly deploy a Vue.js app on GitHub Pages",
  "cover_image": null,
  "published_at": "2019-05-04T16:38:45.893Z",
  "tag_list": [
    "github",
    "pages",
    "vue",
    "javascript"
  ],
  "slug": "how-i-use-vue-js-on-github-pages-45np",
  "path": "/tiim/how-i-use-vue-js-on-github-pages-45np",
  "url": "https://dev.to/tiim/how-i-use-vue-js-on-github-pages-45np",
  "canonical_url": "https://dev.to/tiim/how-i-use-vue-js-on-github-pages-45np",
  "comments_count": 13,
  "positive_reactions_count": 131,
  "published_timestamp": "2019-05-04T16:38:45Z",
  "user": {
    "name": "Tim Bachmann",
    "username": "tiim",
    "twitter_username": "TiimB",
    "github_username": "Tiim",
    "website_url": "https://tiimb.work",
    "profile_image": "https://res.cloudinary.com/practicaldev/image/fetch/s--dV9zvQQ---/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/129680/cebc60dd-f034-4b70-93e6-52bf1c2828d9.jpeg",
    "profile_image_90": "https://res.cloudinary.com/practicaldev/image/fetch/s--xdNiWxjl--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/129680/cebc60dd-f034-4b70-93e6-52bf1c2828d9.jpeg"
  }
}
-->

<template>
  <div class="card">
    <header class="card-header">
      <a
        target="_blank"
        :href="article.url"
        class="card-header-title is-centered"
      >
        {{ article.title }}
      </a>
    </header>
    <div class="card-content has-text-left">
      <p class="is-size-7	has-text-grey-light	">{{ timestamp }}</p>
      <a target="_blank" :href="article.url">
        <BlogImage :article="article" />
      </a>
      <p>{{ article.description }}</p>

      <p>
        <a class="is-italic" target="_blank" :href="article.url">
          Read more...
        </a>
      </p>
      <p class="tags">
        <span v-for="tag in article.tag_list" :key="tag" class="tag">
          <a target="_blank" :href="`https://dev.to/t/${tag}`">
            {{ tag }}
          </a>
        </span>
      </p>
    </div>
    <div class="card-footer">
      <span class="card-footer-item" target="_blank">
        ♥ {{ article.positive_reactions_count }}
      </span>
      <span class="card-footer-item" target="_blank">
        <a :href="`${article.url}#comments`" target="_blank">
          💬 {{ article.comments_count }}
        </a>
      </span>
    </div>
  </div>
</template>

<script>
import BlogImage from './BlogImage';
export default {
  name: 'BlogEntry',
  components: {
    BlogImage,
  },
  props: {
    article: Object,
  },
  computed: {
    timestamp() {
      return new Date(this.article.published_at).toLocaleString();
    },
  },
};
</script>
