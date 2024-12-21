<script lang="ts">
    import preview from '$lib/images/mirado_preview.png';
    import {Calendar, Users} from "lucide-svelte";
</script>

<div class="relative w-full group rounded-3xl bg-black overflow-hidden mx-auto max-w-96 sm:max-w-fit aspect-[3/4] border-2 border-gray-700/60 hover:cursor-pointer">
    <div class="absolute top-0 left-0 w-full h-[60%] fade-out-bottom-2">
        <img class="size-full object-cover object-top transition-transform group-hover:scale-105" alt="" src={preview}>
    </div>

    <div class="absolute top-3 right-3 flex gap-2 items-center">
        <span class="rounded-md border border-green-600 px-2 text-green-100 bg-green-600/30 backdrop-brightness-50">
            New
        </span>
        <span class="rounded-md border border-blue-600 px-2 text-blue-100 bg-blue-600/30 backdrop-brightness-50">
            Java
        </span>
    </div>

    <div class="p-6 md:px-8 md:pb-8 pt-[50%] h-full z-10 relative flex flex-col gap-3 gradient-highlights before:bg-purple-600 after:bg-blue-600 before:top-0 before:-translate-y-full after:bottom-0 after:translate-y-0">
        <h3 class="text-3xl text-white font-bold">Blog Title</h3>

        <p class="text-xl text-gray-400 line-clamp-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et.
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
</div>