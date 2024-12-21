<script lang="ts">
    import preview from '$lib/images/mirado_preview.png';
    import {Lightbulb, NotebookPen, Users} from "lucide-svelte";
</script>

<div class="relative flex flex-col lg:flex-row gap-3 lg:col-span-3 aspect-[3/4] sm:aspect-auto lg:aspect-[6/1] w-full mx-auto max-w-96 md:max-w-fit rounded-3xl bg-black/60 border-2 border-gray-700/60 overflow-hidden gradient-highlights before:z-0 after:z-0">
    <a class="group [mask-image:linear-gradient(to_bottom,#000,transparent_100%)] lg:[mask-image:linear-gradient(to_right,#000,transparent_100%)] h-1/2 shrink-0 lg:h-auto lg:w-1/3" href="/blogs">
        <img class="size-full object-cover transition-transform group-hover:scale-105" src={preview} alt="Blogs page preview">
    </a>

    <div class="absolute flex gap-2 items-center text-gray-400 left-1/2 lg:left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <div class="relative group size-8 md:size-10 p-1.5 md:p-2 rounded-lg bg-black/30 border-2 border-gray-700/60 cursor-help">
            <Users class="size-full" />

            <span class="absolute left-1/2 -translate-x-1/2 bottom-full -translate-y-1/2 bg-black px-2 py-0.5 rounded-md border border-gray-700/60 opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
                People
            </span>
        </div>
        <div class="relative group size-10 md:size-12 p-2 md:p-2.5 rounded-lg bg-black/30 border-2 border-blue-600 cursor-help">
            <Lightbulb class="size-full" />

            <span class="absolute left-1/2 -translate-x-1/2 bottom-full -translate-y-1/2 bg-black px-2 py-0.5 rounded-md border border-gray-700/60 opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
                Ideas
            </span>
        </div>
        <div class="relative group size-12 md:size-14 p-2 md:p-2.5 rounded-lg bg-black/30 border-2 border-purple-600 cursor-help">
            <NotebookPen class="size-full" />

            <span class="absolute left-1/2 -translate-x-1/2 bottom-full -translate-y-1/2 bg-black px-2 py-0.5 rounded-md border border-gray-700/60 opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
                Stories
            </span>
        </div>
    </div>

    <div class="flex flex-col justify-center gap-6 items-center px-8 pb-8 lg:pt-8 grow">
        <h3 class="text-3xl text-white text-center font-bold">Visit Blogs page</h3>

        <a class="h-fit bg-blue-600 border-2 border-blue-600 hover:bg-blue-800 transition-colors text-white rounded-lg px-4 py-2 text-lg unstyled-link" href="/blogs">
            Show me more!
        </a>
    </div>
</div>