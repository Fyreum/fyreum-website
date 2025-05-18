<script lang="ts">
    import {Calendar, Clock, User} from "lucide-svelte";
    import BlogTagBadge from "$lib/components/blog/BlogTagBadge.svelte";
    import BlogsBanner from "$lib/components/blog/BlogsBanner.svelte";
    import {getBlogModule} from "$lib/blogs";

    export let data;

    $: blog = data.blog;

    let blogModule = getBlogModule(data.blog.id);
</script>

<svelte:head>
    <title>{blog.title} - Fyreum</title>
    <meta name="description" content="{blog.description}" />
</svelte:head>

<div class="flex flex-col px-6 sm:px-8 bg-black/50 -mt-[4.25rem] pt-[4.25rem]">
    <div class="max-content mb-9 sm:mb-12 mt-6 lg:mt-9">
        <div class="flex gap-2 items-center mb-3 justify-center">
            <BlogTagBadge name="CSS" color="purple" />
            <BlogTagBadge name="Dev" color="blue" />
        </div>

        <h1 class="font-extrabold text-5xl md:text-6xl lg:text-7xl text-blue-100 mb-3 text-center">
            {blog.title}
        </h1>

        <div class="pt-1 flex gap-6 items-center justify-center font-semibold">
            <span class="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center sm:text-xl text-slate-400">
                <User class="size-5 sm:size-6 text-blue-100" />
                {blog.author}
            </span>
            <span class="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center sm:text-xl text-slate-400">
                <Calendar class="size-5 sm:size-6 text-blue-100" />
                {blog.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}
            </span>
            <span class="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center sm:text-xl text-slate-400">
                <Clock class="size-5 sm:size-6 text-blue-100" />
                3 mins
            </span>
        </div>
    </div>

    <div class="max-content flex flex-col format-headers text-lg mb-12">
        <img class="w-full rounded-2xl sm:rounded-3xl mb-9" src={blog.previewImage} alt="Blog preview" />

        {#if blogModule}
            <svelte:component this={blogModule} />
        {:else}
            <div class="text-white p-4 rounded-lg bg-blue-500/15 border-2 border-blue-500 w-fit mx-auto my-6">
                Sorry, but the content for this blog is currently not available. Please check back later.
            </div>
        {/if}
    </div>
</div>
<BlogsBanner />