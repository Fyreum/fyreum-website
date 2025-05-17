<script lang="ts">
    import BlogPreviewCard from "$lib/components/blog/BlogPreviewCard.svelte";
    import {tailwindVsBootsrapBlog, nwBlog, statixBlog} from "$lib/blogs";
    import {Filter, Tag} from "lucide-svelte";
</script>

<svelte:head>
    <title>Blogs - Fyreum</title>
    <meta name="description" content="Check out my Blogs about me, tech and more.">
</svelte:head>

<div class="py-9 lg:py-12">
    <div class="absolute left-1/2 top-0 -translate-y-full -translate-x-1/2 w-full aspect-[3/1] rounded-[100%] bg-purple-500 blur-[10vw] -z-10"></div>

    <h1 class="text-6xl sm:text-7xl lg:text-8xl font-bold text-blue-100 tracking-tight max-content text-center">
        Blogs
    </h1>

    <p class="mt-6 px-6 mx-auto max-w-3xl tracking-tight text-center text-2xl lg:text-3xl text-slate-400">
        I write about me, tech and more. Check out my latest blogs below.
    </p>
</div>

<div class="max-content px-6">
    <div class="flex items-center gap-2 relative overflow-hidden p-2 rounded-2xl w-full bg-white/10 text-black/50 border-t border-neutral-600/60 z-10">
        <div class="absolute left-0 -top-1/3 z-[-1] bg-purple-500/30 w-1/2 aspect-square rounded-full blur-[15rem] -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute right-0 -bottom-1/3 z-[-1] bg-blue-500/35 w-1/2 aspect-square rounded-full blur-[15rem] translate-x-1/2 translate-y-1/2"></div>

        <select class="py-3 px-4 pe-7 text-blue-100 rounded-lg text-sm bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none">
            <option selected>Latest</option>
            <option>Oldest</option>
            <option>Most Popular</option>
        </select>

        <div class="relative max-w-sm">
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                    <svg class="shrink-0 size-4 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                </div>
                <input class="py-3 ps-10 pe-4 block w-full bg-black/50 rounded-lg text-sm text-blue-100 focus:outline focus:outline-2 focus:outline-blue-500 disabled:opacity-50 disabled:pointer-events-none" type="text" role="combobox" aria-expanded="false" placeholder="Type a name" value="" data-hs-combo-box-input="">
            </div>

            <!-- SearchBox Dropdown -->
            <div class="absolute z-50 w-full bg-white border border-gray-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700" style="display: none;" data-hs-combo-box-output="">
                <div class="max-h-72 rounded-b-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" data-hs-combo-box-output-items-wrapper=""></div>
            </div>
            <!-- End SearchBox Dropdown -->
        </div>

        <button class="flex gap-2 items-center h-8 rounded-full text-blue-100 bg-black px-3 py-2 opacity-50 transition-all shadow-sm hover:bg-blue-600 hover:opacity-100">
            <Filter class="size-full text-blue-100" />
            Author
        </button>

        <button class="flex gap-2 items-center h-8 rounded-full text-blue-100 bg-black px-3 py-2 opacity-50 transition-all shadow-sm hover:bg-blue-600 hover:opacity-100">
            <Tag class="size-full text-blue-100" />
            Tag
        </button>

        <span class="ms-auto text-blue-500 tracking-wide font-bold me-2">
            3 Posts
        </span>
    </div>
</div>

<div class="max-content px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
    <BlogPreviewCard blog={statixBlog} />
    <BlogPreviewCard blog={nwBlog} />
    <BlogPreviewCard blog={tailwindVsBootsrapBlog} />
</div>