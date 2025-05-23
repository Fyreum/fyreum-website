<script lang="ts">
    import image1 from "$lib/images/nw-website.png";
    import image2 from "$lib/images/erethon-preview.png";
    import image3 from "$lib/images/fycloud_preview.png";
    import {ChevronLeft, ChevronRight} from "lucide-svelte";
    import {writable} from "svelte/store";

    const projects = [
        {
            title: "Portfolio Website",
            description: "This is my portfolio website where I showcase my projects and skills.",
            image: image1,
            link: "",
            tags: {
                "Svelte": "/svelte.png",
                "Tailwind CSS": "/tailwind.png",
            },
        },
        {
            title: "Erethon",
            description: "A medieval minecraft server with factions, skills and more.",
            image: image2,
            link: "",
            tags: {
                "Java": "/java.png",
                "Svelte": "/svelte.png",
                "Tailwind CSS": "/tailwind.png",
            },
        },
        {
            title: "File Cloud",
            description: "A cloud storage solution with a focus on simplicity and ease of setup.",
            image: image3,
            link: "",
            tags: {
                "Svelte": "/svelte.png",
                "JS": "/javascript.png",
                "Tailwind CSS": "/tailwind.png",
            },
        },
    ];

    let currentProjectIndex = writable(0);
    let currentProject = writable(projects[$currentProjectIndex]);

    let image: HTMLImageElement;
    let backdrop: HTMLImageElement;

    currentProjectIndex.subscribe(index => {
        currentProject.set(projects[index]);
    });

    currentProject.subscribe(project => {
        const keyframes1 = [
            { opacity: 0 },
            { opacity: 1 },
        ];
        const keyframes2 = [
            { opacity: 0 },
            { opacity: 0.6 },
        ];
        const animation = {
            duration: 300,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            fill: "forwards",
        };
        /* @ts-ignore */
        image?.animate(keyframes1, animation);
        /* @ts-ignore */
        backdrop?.animate(keyframes2, animation);
    });

    function nextPage(next: boolean) {
        currentProjectIndex.update(index => {
            if (next) {
                return (index + 1) % projects.length;
            } else {
                return (index - 1 + projects.length) % projects.length;
            }
        });
    }
</script>

<section class="w-full bg-black/50 border-t border-gray-600/60 px-4 overflow-hidden pb-20">
    <div class="text-center py-12 flex flex-col items-center gap-6">
        <h2 class="text-blue-100 text-4xl font-bold">
            Project Spotlights
        </h2>
        <p class="text-slate-400 text-xl max-w-[40rem] px-4">
            Here are some of my recent projects that I am currently working on or have recently completed.
        </p>
    </div>

    <div class="max-content relative w-full flex flex-col md:flex-row gap-2 sm:gap-3 md:aspect-[2.1/1]">
        <div class="relative w-full">
            <img class="z-0 absolute left-1/2 -translate-x-1/2 top-0 blur-2xl size-full rounded-xl sm:rounded-2xl opacity-60 object-top object-cover"
                 alt="{$currentProject.title}"
                 src="{$currentProject.image}"
                 bind:this={backdrop}>
            <img class="z-10 relative rounded-xl sm:rounded-2xl size-full object-top object-cover aspect-video md:aspect-auto"
                 alt="{$currentProject.title}"
                 src="{$currentProject.image}"
                 bind:this={image}>

            <button class="z-10 absolute left-3 top-1/2 -translate-y-1/2 size-10 p-2 rounded-full bg-black/50 opacity-50 transition-opacity hover:opacity-100"
                    on:click={() => nextPage(false)}>
                <ChevronLeft class="size-full text-white" />
            </button>

            <button class="z-10 absolute right-3 top-1/2 -translate-y-1/2 size-10 p-2 rounded-full bg-black/50 opacity-50 transition-opacity hover:opacity-100"
                    on:click={() => nextPage(true)}>
                <ChevronRight class="size-full text-white" />
            </button>

            <div class="absolute left-1 sm:left-2 bottom-1 sm:bottom-2 flex gap-2 items-end z-20 w-full pr-2 sm:pr-4">
                <h3 class="text-blue-100 sm:text-lg font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-black/75">
                    {$currentProject.title}
                </h3>

                <div class="flex gap-1 sm:gap-2 h-9 sm:h-11 ml-auto">
                    {#each Object.entries($currentProject.tags) as [tag, icon]}
                        <img class="h-full aspect-square p-2 rounded-lg object-contain bg-black/75" alt="{tag}" src="{icon}">
                    {/each}
                </div>
            </div>
        </div>

        <div class="grid grid-cols-4 md:grid-cols-none md:grid-rows-4 gap-2 sm:gap-3 h-full md:order-first">
            {#each projects as project}
                <button class="w-full md:h-full border-2 aspect-video rounded-md sm:rounded-lg transition overflow-hidden {$currentProject.title === project.title ? 'border-blue-500' : 'border-gray-600/60 brightness-50 hover:brightness-100'}"
                        on:click={() => currentProject.set(project)}>
                    <img class="size-full object-cover" alt="{project.title}" src="{project.image}">
                </button>
            {/each}
        </div>
    </div>
</section>