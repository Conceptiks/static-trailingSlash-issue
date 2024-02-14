<script lang="ts">
  export let title: string;
  export let description: string;
  export let date: string;
  export let slug: string;
  export let author:
    | {
        name: string;
        github: string;
        avatar: string;
      }
    | undefined = undefined;
</script>

<article>
  <a
    class="bg-white/50 group dark:bg-neutral-900 border border-neutral-200 dark:border-white/5 filter backdrop-blur-xl rounded-lg block p-8 h-full"
    href="{'/blog/' + slug}"
  >
    <div class=" relative">
      <h3
        class="mt-0 text-lg font-semibold leading-6 text-neutral-900 group-hover:text-amber-500 !line-clamp-2 h-12"
      >
        {title}
      </h3>
      <hr class="mt-4 border-neutral-200 dark:border-neutral-800" />
      <p class="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600">
        {description}
      </p>
    </div>
    {#if author}
      <div class="relative mt-8 flex items-center gap-x-4">
        {#if author.avatar}
          <img
            src="{author.avatar}"
            alt=""
            class="h-10 w-10 rounded-full bg-neutral-50"
          />
        {/if}
        <div class="text-sm leading-tight">
          <p class="font-semibold !text-white">
            <span class="absolute inset-0"></span>
            {author.name}
          </p>
          <time datetime="{date}" class="text-neutral-500"
            >{new Date(date).toLocaleDateString()}</time
          >
        </div>
      </div>
    {/if}
  </a>
</article>
