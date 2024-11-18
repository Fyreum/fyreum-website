<script lang="ts" context="module">
    export let messageBox: HTMLDivElement;
</script>

<script lang="ts">
    import { fade } from 'svelte/transition';
    import {writable} from "svelte/store";
    import {BatteryFull, SignalHigh, WifiHigh} from "lucide-svelte";

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
        }, 1000);
    }
</script>

<div class="flex flex-col items-center -mt-12 w-full h-screen justify-center">
    <!-- Text top left -->
    <div class="absolute left-14 top-1/3 -translate-y-1/2">
        <h1 class="text-6xl font-bold text-blue-100 tracking-tight">
            Hello, I'm <span class="gradient-text mr-0.5">Fyreum</span>.
        </h1>

        <p class="text-2xl mt-6 text-blue-100 tracking-wide">
            I'm a Java & Web developer
        </p>

        <button class="bg-blue-100 rounded-full px-4 py-1.5 text-neutral-800 mt-8 font-bold transition-all hover:brightness-[85%]">
            Click me
        </button>
    </div>

    <!-- Phone -->
    <div class="w-[22rem] h-[44rem] glowing-card rounded-3xl bg-black border-[9px] border-gray-700 outline outline-1 outline-gray-500/75 -outline-offset-2">
        <!-- Speaker -->
        <div class="absolute -top-[3px] left-1/2 -translate-x-1/2 rounded-full aspect-square h-2 w-16 bg-black border-t border-gray-500/70"></div>

        <!-- Display border -->
        <div class="absolute inset-0.5 rounded-xl border-x bg-black border-l-gray-800 border-r-gray-500"></div>

        <!-- Display -->
        <div id="display" class="absolute inset-2 rounded-lg bg-black overflow-hidden">

            <!-- Background image -->
            <div id="background" class="size-full bg-cover bg-center transition-[background-image]" style="background-image: url('https://w0.peakpx.com/wallpaper/648/308/HD-wallpaper-wood-path-to-forest-iphone-for-phone-ma-live-mobile-phone-background-beautiful-night-forest-thumbnail.jpg')"></div>

            <!-- top action bar (left) -->
            {#if !displayLockscreen}
                <div class="absolute h-4 flex items-center gap-1 left-4 top-1.5 fill-white">
                    <span class="text-sm">{currentTime}</span>
                </div>
            {/if}
            <!-- top action bar (right) -->
            <div class="absolute h-4 flex items-center gap-1 right-4 top-1.5 text-white fill-white">
                <WifiHigh class="h-full text-inherit" />
                <SignalHigh class="h-full text-inherit" />
                <BatteryFull class="h-full text-green-500" />
            </div>

            {#if displayLockscreen}
                <div in:fade={{duration: 100}} out:fade={{duration: 80}}>

                    <div id="lockscreen-info" class="absolute top-14 left-4 flex flex-col tracking-wide">
                        <span class="text-5xl">{currentTime}</span>
                        <span class="text-3xl">{currentDate}<span class="text-lg text-gray-300/75 align-text-top ml-1 uppercase">{currentDay.substring(0, 2)}</span></span>
                        <span class="text-3xl">19<span class="text-gray-300/75">°</span></span>
                    </div>
                </div>

                <!-- Fingerprint -->
                <button id="fingerprint" class="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full size-12 border-4 border-gray-300/70" on:mouseenter={unlock} on:mouseleave={() => clearTimeout(unlockTimeout)}>
                    <div id="fingerprint-prompt" class="absolute flex w-full flex-col items-center gap-2 -top-20 transition-colors pointer-events-none">
                        <div class="block rounded-full bg-gray-300/70 size-2"></div>
                        <div class="block rounded-full bg-gray-300/70 size-2"></div>
                        <div class="block rounded-full bg-gray-300/70 size-2"></div>
                    </div>
                </button>
            {/if}

            {#if displayAppscreen}
                <div in:fade={{duration: 100}}>
                    <div class="absolute bottom-6 w-full grid grid-cols-4 gap-4 text-black px-6">
                        <div class="aspect-square bg-gray-500 p-1 rounded-xl"></div>
                        <div class="aspect-square bg-gray-500 p-1 rounded-xl"></div>
                        <div class="aspect-square bg-gray-500 p-1 rounded-xl"></div>
                        <div class="aspect-square bg-gray-500 p-1 rounded-xl"></div>
                    </div>
                </div>
            {/if}
        </div>

        <!-- Iris -->
        <div class="absolute top-4 left-1/2 -translate-x-1/2 rounded-full aspect-square h-4 border bg-black border-t-gray-400 border-r-gray-500 border-l-gray-600 border-b-gray-900"></div>
    </div>

    <!-- Reminder top right -->
    <div class="absolute right-16 top-1/3 -translate-y-1/2 flex items-end flex-col gap-4" bind:this={messageBox}>
        {#each $messages as message}
            <div class="relative text-lg flex px-4 py-2 rounded-xl rounded-tr-none bg-gradient-to-r from-blue-700 to-blue-500 blue-message max-w-80 tracking-tight">
                {message}
            </div>
        {/each}
    </div>
</div>