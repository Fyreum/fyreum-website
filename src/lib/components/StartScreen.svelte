<script lang="ts" context="module">
    export let messageBox: HTMLDivElement;
</script>

<script lang="ts">
    import { fade } from 'svelte/transition';
    import {writable} from "svelte/store";
    import {BatteryFull, Camera, Contact, Phone, Settings, SignalHigh, WifiHigh} from "lucide-svelte";
    import heroBackground from "$lib/images/heroBackground.svg";

    let displayLockscreen: boolean = true; // todo: true
    let displayAppscreen: boolean = false; // todo: false
    let unlockTimeout: number;

    let currentDate: string = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: '2-digit' });
    let currentDay: string = new Date().toLocaleDateString('en-GB', { weekday: 'long' });
    let currentTime: string = getCurrentTime();

    let messages = writable(["Welcome on my website!"]);

    setTimeout(() => {
        messages.update(m => [...m, "You can unlock the phone by using the fingerprint sensor."]);
    }, 5000);

    setInterval(() => {
        currentTime = getCurrentTime();
    }, 1000);

    function getCurrentTime() {
        return new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
    }

    function unlock() {
        unlockTimeout = setTimeout(() => {
            displayLockscreen = false;
            displayAppscreen = true;

            document.getElementById('phone-wrapper')?.classList.add('unlocked');
        }, 1000);
    }
</script>

<div class="relative flex flex-col lg:items-center -mt-12 w-full h-screen justify-end 2xl:justify-center">
    <div class="absolute bottom-0 left-0 w-full">
        <img class="w-full rotate-180 scale-y-50 translate-y-[25%]" src={heroBackground}>
    </div>

    <!-- Text top left -->
    <div class="absolute left-10 sm:left-14 top-20 lg:top-1/3 lg:-translate-y-1/2 z-20 pr-6">
        <h1 class="text-6xl sm:text-7xl lg:text-8xl font-bold text-blue-100 tracking-tight">
            Hello, I'm <span class="gradient-text mr-0.5">Fyreum</span>.
        </h1>

        <p class="text-2xl lg:text-3xl mt-6 text-slate-400">
            I'm a Java & Web developer
        </p>

        <button class="hidden bg-blue-100 rounded-full px-4 py-1.5 text-neutral-800 mt-8 font-bold transition-all hover:brightness-[85%]">
            Click me
        </button>

        <div class="mt-12 grid grid-cols-5 xs:flex items-center gap-3">
            <div class="group relative aspect-square xs:size-14 cursor-help bg-black/50 border-2 border-gray-700/60 border-b-blue-500 p-2 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/50 motion-reduce:animate-none animate-border-b [--language-color-2:#3b82f699] [--language-color:#3b82f6]">
                <div class="size-full language-mask bg-blue-100 [--lang-url:url(/java.png)] transition-colors group-hover:bg-blue-500"></div>

                <span class="absolute left-1/2 -translate-x-1/2 top-full translate-y-1/2 bg-black px-2 py-0.5 rounded-md border border-gray-700/60 opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
                    Java
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
            <div class="group relative aspect-square xs:size-14 cursor-help bg-black/50 border-2 border-gray-700/60 border-b-purple-500 p-2 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/50 motion-reduce:animate-none animate-border-b [--language-color-2:#a855f799] [--language-color:#a855f7]">
                <div class="size-full language-mask bg-blue-100 [--lang-url:url(/php-edited.png)] transition-colors group-hover:bg-[#777BB3]"></div>

                <span class="absolute left-1/2 -translate-x-1/2 top-full translate-y-1/2 bg-black px-2 py-0.5 rounded-md border border-gray-700/60 opacity-0 transition-opacity pointer-events-none group-hover:opacity-100">
                    PHP
                </span>
            </div>
        </div>
    </div>


    <div id="phone-wrapper" class="absolute -translate-x-1/2 md:[--translate:-50%] left-1/2 md:right-1/3 lg:[--translate:50%] phone-wrapper">
        <!-- Phone -->
        <div id="phone" class="phone aspect-[1/2] mb-20 mt-12 h-[calc(44rem*var(--scale))] w-fit glowing-card rounded-[calc(1.5rem*var(--scale))] bg-black border-[calc(9px*var(--scale))] border-gray-700 outline outline-[calc(1px*var(--scale))] outline-gray-500/75 -outline-offset-[calc(2px*var(--scale))] [--scale:0.45] xs:[--scale:0.55] sm:![--scale:0.6] md:![--scale:0.65] xl:![--scale:0.75] 2xl:![--scale:0.9]">
            <!-- Speaker -->
            <div class="absolute -top-[calc(3px*var(--scale))] left-1/2 -translate-x-1/2 rounded-full aspect-square h-[calc(0.5rem*var(--scale))] w-[calc(4rem*var(--scale))] bg-black border-t border-gray-500/70"></div>

            <!-- Display border -->
            <div class="absolute inset-[calc(2px*var(--scale))] rounded-[calc(0.75rem*var(--scale))] border-x-[calc(1px*var(--scale))] bg-black border-l-gray-800 border-r-gray-500"></div>

            <!-- Display -->
            <div id="display" class="absolute inset-[calc(0.5rem*var(--scale))] rounded-[calc(0.5rem*var(--scale))] bg-black overflow-hidden z-10">

                <!-- Background image -->
                <div id="background" class="size-full bg-cover bg-center transition-[background-image]" style="background-image: url('https://w0.peakpx.com/wallpaper/648/308/HD-wallpaper-wood-path-to-forest-iphone-for-phone-ma-live-mobile-phone-background-beautiful-night-forest-thumbnail.jpg')"></div>

                <!-- top action bar (left) -->
                {#if !displayLockscreen}
                    <div class="absolute h-[calc(1rem*var(--scale))] flex items-center gap-[calc(0.25rem*var(--scale))] left-[calc(1rem*var(--scale))] top-[calc(0.375rem*var(--scale))]">
                        <span class="text-sm">{currentTime}</span>
                    </div>
                {/if}
                <!-- top action bar (right) -->
                <div class="absolute h-[calc(1rem*var(--scale))] flex items-center gap-[calc(0.25rem*var(--scale))] right-[calc(1rem*var(--scale))] top-[calc(0.375rem*var(--scale))] text-gray-300 fill-gray-300">
                    <WifiHigh class="h-full text-inherit" />
                    <SignalHigh class="h-full text-inherit" />
                    <BatteryFull class="h-full text-inherit" />
                </div>

                {#if displayLockscreen}
                    <div in:fade={{duration: 100}} out:fade={{duration: 80}}>

                        <div id="lockscreen-info" class="absolute top-[calc(3.5rem*var(--scale))] left-[calc(1rem*var(--scale))] flex flex-col tracking-wide">
                            <span class="text-[calc(3rem*var(--scale))] leading-none">{currentTime}</span>
                            <span class="text-[calc(1.875rem*var(--scale))] leading-[calc(2.25rem*var(--scale))]">{currentDate}<span class="text-[calc(1.125rem*var(--scale))] leading-[calc(1.75rem*var(--scale))] text-gray-300/75 align-text-top ml-[calc(0.25rem*var(--scale))] uppercase">{currentDay.substring(0, 2)}</span></span>
                            <span class="text-[calc(1.875rem*var(--scale))] leading-[calc(2.25rem*var(--scale))]">19<span class="text-gray-300/75">°</span></span>
                        </div>
                    </div>

                    <div in:fade={{duration: 100}} out:fade={{duration: 80}}>

                        <div id="lockscreen-messages" class="absolute top-[calc(14rem*var(--scale))] left-[calc(1rem*var(--scale))] flex flex-col gap-[calc(0.5rem*var(--scale))] pr-[calc(1rem*var(--scale))]">
                            {#each $messages as message}
                                <div class="relative w-fit text-[calc(1.25rem*var(--scale))] flex px-[calc(1rem*var(--scale))] py-[calc(0.5rem*var(--scale))] rounded-[calc(0.75rem*var(--scale))] bg-gradient-to-r from-blue-700 to-blue-500 max-w-80 tracking-tight">
                                    {message}
                                </div>
                            {/each}
                        </div>
                    </div>

                    <!-- Fingerprint -->
                    <button id="fingerprint" class="absolute bottom-[calc(2rem*var(--scale))] left-1/2 -translate-x-1/2 rounded-full size-[calc(3rem*var(--scale))] border-[calc(0.25rem*var(--scale))] border-gray-300/70" on:mouseenter={unlock} on:mouseleave={() => clearTimeout(unlockTimeout)}>
                        <div id="fingerprint-prompt" class="absolute flex w-full flex-col items-center gap-[calc(0.5rem*var(--scale))] -top-[calc(5rem*var(--scale))] transition-colors pointer-events-none">
                            <div class="block rounded-full bg-gray-300/70 size-[calc(0.5rem*var(--scale))]"></div>
                            <div class="block rounded-full bg-gray-300/70 size-[calc(0.5rem*var(--scale))]"></div>
                            <div class="block rounded-full bg-gray-300/70 size-[calc(0.5rem*var(--scale))]"></div>
                        </div>
                    </button>
                {/if}

                {#if displayAppscreen}
                    <div>
                        <div class="absolute bottom-[calc(1.5rem*var(--scale))] w-full grid grid-cols-4 gap-[calc(1rem*var(--scale))]  px-[calc(1.5rem*var(--scale))] text-blue-100">
                            <div class="aspect-square bg-gradient-to-br from-gray-600 to-gray-800 -outline-offset-2 outline outline-2 outline-black/50 p-[calc(0.75rem*var(--scale))] rounded-[calc(0.75rem*var(--scale))]" in:fade={{delay: 100}}>
                                <Settings class="size-full text-inherit" />
                            </div>
                            <div class="aspect-square bg-gradient-to-br from-stone-600 to-stone-800 -outline-offset-2 outline outline-2 outline-black/50 p-[calc(0.75rem*var(--scale))] rounded-[calc(0.75rem*var(--scale))]" in:fade={{delay: 200}}>
                                <Phone class="size-full text-inherit" />
                            </div>
                            <div class="aspect-square bg-gradient-to-br from-slate-600 to-slate-800 -outline-offset-2 outline outline-2 outline-black/50 p-[calc(0.75rem*var(--scale))] rounded-[calc(0.75rem*var(--scale))]" in:fade={{delay: 300}}>
                                <Contact class="size-full text-inherit" />
                            </div>
                            <div class="aspect-square bg-gradient-to-br from-zinc-600 to-zinc-800 -outline-offset-2 outline outline-2 outline-black/50 p-[calc(0.75rem*var(--scale))] rounded-[calc(0.75rem*var(--scale))]" in:fade={{delay: 400}}>
                                <Camera class="size-full text-inherit" />
                            </div>
                        </div>
                    </div>
                {/if}
            </div>

            <!-- Iris -->
            <div class="absolute z-10 top-[calc(1rem*var(--scale))] left-1/2 -translate-x-1/2 rounded-full aspect-square h-[calc(1rem*var(--scale))] border-[calc(1px*var(--scale))] bg-black border-t-gray-400 border-r-gray-500 border-l-gray-600 border-b-gray-900"></div>
        </div>
    </div>

    <!-- Reminder top right -->
    <!--<div class="absolute right-[calc(4rem*var(&#45;&#45;scale))] top-1/2 lg:top-1/3 -translate-y-1/2 flex items-end flex-col gap-[calc(1rem*var(&#45;&#45;scale))] z-20 pl-4" bind:this={messageBox}>
        {#each $messages as message}
            <div class="relative text-lg flex px-[calc(1rem*var(&#45;&#45;scale))] py-[calc(0.5rem*var(&#45;&#45;scale))] rounded-xl rounded-tr-none bg-gradient-to-r from-blue-700 to-blue-500 blue-message max-w-80 tracking-tight">
                {message}
            </div>
        {/each}
    </div>-->
</div>