<script lang="ts">
    import blogsPreview from '$lib/images/home/blogs-preview.webp';
</script>


<div id="blogs" class="z-10 relative flex flex-col w-full bg-black/50 border-t border-gray-600/60 p-4 gap-6 py-16 overflow-clip scroll-mt-16">
    <h1 class="text-blue-100 text-4xl font-bold text-center">Blogs</h1>

    <p class="text-gray-400 text-lg text-center">
        You can find all the blogs I have published so far, here.
    </p>

    <img class="absolute z-[-1] right-[21%] -bottom-32 rotate-6 flex w-56 aspect-[3/4] object-cover object-[25%] rounded-lg overflow-hidden shadow-md fade-out-bottom" src={blogsPreview} alt="Blogs preview">

    <a class="mt-2 bg-blue-100 text-black px-3.5 py-1 rounded-full transition-all hover:brightness-[85%] text-lg active:scale-[0.98] flex mx-auto unstyled-link" href="/blogs">
        Visit blogs
    </a>
</div>