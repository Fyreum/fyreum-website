<script lang="ts">
    /*import blogsPreview from '$lib/images/home/blogs-preview.webp';*/
    import BlogPreviewCard from "$lib/components/BlogPreviewCard.svelte";
    import VisitBlogsCard from "$lib/components/VisitBlogsCard.svelte";
</script>


<div id="blogs" class="z-10 relative flex flex-col w-full bg-black/50 border-t border-gray-600/60 px-8 gap-6 py-16 overflow-clip scroll-mt-16">
    <h1 class="text-blue-100 text-4xl font-bold text-center">Blogs</h1>

    <p class="text-gray-400 text-xl text-center">
        You can find all the blogs I have published so far, here.
    </p>

    <!--<img class="absolute z-[-1] right-[21%] -bottom-32 rotate-6 flex w-56 aspect-[3/4] object-cover object-[25%] rounded-lg overflow-hidden shadow-md fade-out-bottom" src={blogsPreview} alt="Blogs preview">-->

    <div class="max-content grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        <BlogPreviewCard />
        <BlogPreviewCard />
        <BlogPreviewCard />

        <VisitBlogsCard />
    </div>
</div>