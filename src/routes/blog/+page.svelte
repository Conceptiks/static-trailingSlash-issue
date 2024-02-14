<script lang="ts">
  import ArticleTeaser from "$lib/components/ArticleTeaser.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div
  id="blog"
  class="relative dark:bg-neutral-950 bg-transparent !pt-20 sm:!py-0 sm:!pb-20 sm:!pt-40 py-0"
>
  <div>From our blog</div>
  <div class="z-10">
    <div>
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        {#each data.posts as { slug, title, author, authorProfile, authorImage, description, date }}
          <ArticleTeaser
            {slug}
            {date}
            author="{{
              name: author,
              github: authorProfile,
              avatar: authorImage,
            }}"
            {title}
            {description}
          />
        {/each}
      </div>
    </div>
  </div>
</div>
