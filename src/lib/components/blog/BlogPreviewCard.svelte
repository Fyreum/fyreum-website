<script lang="ts">
    import {Calendar, Users} from "lucide-svelte";
    import BlogTagBadge from "$lib/components/blog/BlogTagBadge.svelte";
    import type {Blog} from "$lib/types";

    export let blog: Blog;
</script>

<a id="card-{blog.id}"
   class="relative w-full group rounded-3xl bg-black overflow-hidden mx-auto max-w-96 sm:max-w-fit aspect-[3/4] border-2 border-gray-700/60 unstyled-link hover:cursor-pointer"
   href="/blogs/{blog.id}">
    <div class="absolute top-0 left-0 w-full h-[60%] fade-out-bottom-2">
        <img class="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105" alt="" src={blog.previewImage}>
    </div>

    <div class="absolute top-3 right-3 flex gap-2 items-center">
        {#if blog.tags}
            {#each blog.tags as tag}
                <BlogTagBadge name="{tag.name}" color="{tag.color}" />
            {/each}
        {/if}
        <!--<BlogTagBadge name="New" color="green" />-->
        <!--<BlogTagBadge name="CSS" color="purple" />-->
        <!--<BlogTagBadge name="JS" color="yellow" />
        <BlogTagBadge name="Svelte" color="red" />-->
        <!--<BlogTagBadge name="Java" color="blue" />-->
    </div>

    <div class="p-6 md:px-8 md:pb-8 pt-[50%] h-full z-10 relative flex flex-col gap-3 gradient-highlights before:bg-purple-600 after:bg-blue-600 before:top-0 before:-translate-y-full after:bottom-0 after:translate-y-0">
        <h3 class="text-3xl text-white font-bold">
            {blog.title}
        </h3>

        <p class="text-xl text-slate-400 line-clamp-4" title="{blog.description}">
            {#if blog.description}
                {blog.description}
            {:else}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et.
            {/if}
        </p>

        <div class="mt-auto flex gap-6 text-xl font-bold">
            <span class="flex items-center gap-2">
                <Calendar class="size-5" />
                <span>2 days ago</span>
            </span>

            <span class="flex items-center gap-2">
                <Users class="size-5" />
                <span>69</span>
            </span>
        </div>
    </div>
</a>