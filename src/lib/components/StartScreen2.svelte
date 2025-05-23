<script lang="ts">
    import heroBackground from "$lib/images/heroBackground.svg";
    import image1 from "$lib/images/revine_oppenheimer.png";
    import image2 from "$lib/images/fyboard_preview.png";
    import image3 from "$lib/images/mirado_preview.png";
    import {onMount} from "svelte";

    let heroHover: HTMLDivElement;

    onMount(() => {
        document.addEventListener('mousemove', (e) => {
            if (!heroHover) return;

            const x = e.clientX - heroHover.getBoundingClientRect().left;
            const y = e.clientY - heroHover.getBoundingClientRect().top;
            heroHover.style.setProperty('--x', (heroHover.getBoundingClientRect().width - x) + 'px');
            heroHover.style.setProperty('--y', (heroHover.getBoundingClientRect().height - y) + 'px');
        });
    });
</script>

<div class="relative flex flex-col -mt-[4.25rem] w-screen h-[110vh] md:h-[125vh] lg:h-[105vh] xl:h-screen overflow-hidden bg-gradient-to-r from-black/50 via-transparent">
    <div class="absolute bottom-0 left-0 w-full pointer-events-none -z-10 fade-out-sides">
        <img class="w-full rotate-180 scale-y-50 translate-y-[25%]" src={heroBackground} alt="Hero background lines">
        <div class="z-20 absolute bottom-0 size-full rotate-180 scale-y-50 mask-hero translate-y-[25%] before:scale-y-[200%] before:translate-y-1/2 before:absolute before:content-[''] before:text-white before:inset-0 before:[--size:100px] md:before:[--size:150px] lg:before:[--size:200px] before:[background:radial-gradient(var(--size)_circle_at_var(--x)_var(--y),currentColor,transparent)]" bind:this={heroHover}></div>
    </div>

    <!-- Text top left -->
    <div class="pl-10 pl:left-14 pt-20 xl:mt-[33vh] xl:-translate-y-1/2 z-20 pr-6 w-fit">
        <h1 class="text-6xl sm:text-7xl lg:text-8xl font-bold text-blue-100 tracking-tight">
            Hello, I'm <span class="gradient-text mr-0.5">Fyreum</span>.
        </h1>

        <p class="text-2xl lg:text-3xl mt-6 text-slate-400 tracking-tight">
            I'm a Full Stack developer
        </p>

        <button class="hidden bg-blue-100 rounded-full px-4 py-1.5 text-neutral-800 mt-8 font-bold transition-all hover:brightness-[85%]">
            Click me
        </button>

        <div class="mt-9 xs:mt-12 grid grid-cols-5 xs:flex items-center gap-3">
            <div class="group relative aspect-square xs:size-14 cursor-help bg-black/50 border-2 border-gray-700/60 border-b-blue-500 p-2 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/50 motion-reduce:animate-none animate-border-b [--language-color-2:#3b82f699] [--language-color:#3b82f6]">
                <div class="size-full language-mask bg-blue-100 [--lang-url:url(/java.png)] transition-colors group-hover:bg-blue-500"></div>

                <span class="absolute left-1/2 -translate-x-1/2 top-full translate-y-1/2 bg-black px-2 py-0.5 rounded-md border border-gray-700/60 opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
                    Java
                </span>
            </div>
            <div class="group relative aspect-square xs:size-14 cursor-help bg-black/50 border-2 border-gray-700/60 border-b-purple-500 p-2 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/50 motion-reduce:animate-none animate-border-b [--language-color-2:#a855f799] [--language-color:#a855f7]">
                <div class="size-full language-mask bg-blue-100 [--lang-url:url(/php-edited.png)] transition-colors group-hover:bg-[#777BB3]"></div>

                <span class="absolute left-1/2 -translate-x-1/2 top-full translate-y-1/2 bg-black px-2 py-0.5 rounded-md border border-gray-700/60 opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
                    PHP
                </span>
            </div>
            <div class="group relative aspect-square xs:size-14 cursor-help bg-black/50 border-2 border-gray-700/60 border-b-yellow-500 p-2 rounded-lg shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/50 motion-reduce:animate-none animate-border-b [--language-color-2:#FFD60099] [--language-color:#FFD600]">
                <div class="size-full language-mask bg-blue-100 [--lang-url:url(/javascript-edited.png)] transition-colors group-hover:bg-[#FFD600]"></div>

                <span class="absolute left-1/2 -translate-x-1/2 top-full translate-y-1/2 bg-black px-2 py-0.5 rounded-md border border-gray-700/60 opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
                    JavaScript
                </span>
            </div>
            <div class="group relative aspect-square xs:size-14 cursor-help bg-black/50 border-2 border-gray-700/60 border-b-orange-600 p-2 rounded-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/50 motion-reduce:animate-none animate-border-b [--language-color-2:#FF3E0099] [--language-color:#FF3E00]">
                <div class="size-full language-mask bg-blue-100 [--lang-url:url(/svelte-edited.png)] transition-colors group-hover:bg-[#FF3E00]"></div>

                <span class="absolute left-1/2 -translate-x-1/2 top-full translate-y-1/2 bg-black px-2 py-0.5 rounded-md border border-gray-700/60 opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
                    Svelte
                </span>
            </div>
            <div class="group relative aspect-square xs:size-14 cursor-help bg-black/50 border-2 border-gray-700/60 border-b-cyan-500 p-2 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/50 motion-reduce:animate-none animate-border-b [--language-color-2:#06b6d499] [--language-color:#06b6d4]">
                <div class="size-full language-mask bg-blue-100 [--lang-url:url(https://img.icons8.com/color/192/000000/tailwindcss.png)] transition-colors group-hover:bg-cyan-500"></div>

                <span class="absolute left-1/2 -translate-x-1/2 top-full translate-y-1/2 bg-black px-2 py-0.5 rounded-md border border-gray-700/60 opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
                    TailwindCSS
                </span>
            </div>
        </div>
    </div>


    <div class="relative ml-10 weird-md:ml-auto mt-40 lg:m-0 lg:absolute lg:h-full lg:top-[40%] xl:top-1/4 w-full max-w-2xl weird-md:max-w-3xl lg:-translate-x-24 xl:translate-x-0 lg:left-[55%]">
        <div class="absolute left-0 top-0 h-fit w-[34%] -translate-y-1/2 transition-transform duration-500 hover:scale-110 hover:z-20">
            <div class="relative z-10 rounded-2xl glowing-card after:inset-0 before:inset-0 after:blur-[4rem] animate-gravitate motion-reduce:animate-none">
                <div class="flex gap-3 items-center px-3 py-2 bg-neutral-800/25 rounded-t-2xl">
                    <span class="rounded-full size-2.5 bg-red-400 shadow-md"></span>
                    <span class="rounded-full size-2.5 bg-yellow-400 shadow-md"></span>
                    <span class="rounded-full size-2.5 bg-green-400 shadow-md"></span>
                </div>
                <img class="size-full object-cover aspect-video rounded-b-2xl" src={image1} alt="">
            </div>
        </div>
        <div class="absolute left-0 translate-x-[90%] top-0 translate-y-[20%] h-fit w-[37%] transition-transform duration-500 hover:scale-110 hover:z-20">
            <div class="relative z-10 rounded-2xl glowing-card after:inset-0 before:inset-0 after:blur-[4rem] animate-gravitate motion-reduce:animate-none" style="animation-delay: 0.6s">
                <div class="flex gap-3 items-center px-3 py-2 bg-neutral-800/25 rounded-t-2xl">
                    <span class="rounded-full size-2.5 bg-red-400 shadow-md"></span>
                    <span class="rounded-full size-2.5 bg-yellow-400 shadow-md"></span>
                    <span class="rounded-full size-2.5 bg-green-400 shadow-md"></span>
                </div>
                <img class="size-full object-cover aspect-video rounded-b-2xl" src={image2} alt="">
            </div>
        </div>
        <div class="absolute left-0 translate-x-[35%] top-0 translate-y-[125%] h-fit w-[41%] transition-transform duration-500 hover:scale-110 hover:z-20">
            <div class="relative z-10 rounded-2xl glowing-card after:inset-0 before:inset-0 after:blur-[4rem] animate-gravitate motion-reduce:animate-none" style="animation-delay: 0.4s">
                <div class="flex gap-3 items-center px-3 py-2 bg-neutral-800/25 rounded-t-2xl">
                    <span class="rounded-full size-2.5 bg-red-400 shadow-md"></span>
                    <span class="rounded-full size-2.5 bg-yellow-400 shadow-md"></span>
                    <span class="rounded-full size-2.5 bg-green-400 shadow-md"></span>
                </div>
                <img class="size-full object-cover aspect-video rounded-b-2xl" src={image3} alt="">
            </div>
        </div>
    </div>
</div>
