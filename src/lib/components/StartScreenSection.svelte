<script lang="ts" context="module">
    export let messageBox: HTMLDivElement;
</script>

<script lang="ts">
    import { fade } from 'svelte/transition';
    import {writable} from "svelte/store";

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

<div class="flex flex-col items-center -mt-12 w-full h-[100dvh] justify-center">
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
            <div class="absolute h-4 flex items-center gap-1 right-4 top-1.5 fill-white">
                <svg class="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-131.54q-33.92 0-57.35-23.42-23.42-23.42-23.42-57.35 0-33.92 23.42-57.34 23.43-23.42 57.35-23.42t57.35 23.42q23.42 23.42 23.42 57.34 0 33.93-23.42 57.35-23.43 23.42-57.35 23.42Zm0-397.69q72.69 0 137.5 24t117.11 66.39q15 11.53 15.5 29.88t-12.88 31.73q-12.77 12.77-31.42 12.88-18.66.12-33.66-10.8-39.53-30.23-88.61-47.54T480-440q-54.46 0-103.54 17.31-49.08 17.31-88.61 47.54-15 10.92-33.66 10.5-18.65-.43-31.42-13.2-12.77-13.38-12.58-31.73.2-18.34 15.2-29.88 52.3-42.38 117.11-66.08 64.81-23.69 137.5-23.69Zm0-240q123.46 0 231.27 41.58Q819.08-686.07 904-611.07q15 12.76 15.81 31.61.8 18.85-12.58 32.23-13.15 13.15-32 12.69-18.84-.46-34.23-13-73.15-62.84-165.35-97.65Q583.46-680 480-680q-103.46 0-195.65 34.81-92.2 34.81-165.35 97.65-15.39 12.54-34.23 13-18.85.46-32-12.69-13.38-13.38-12.58-32.23Q41-598.31 56-611.07q84.92-75 192.73-116.58Q356.54-769.23 480-769.23Z"/></svg>
                <svg class="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M266.15-180q-19.23 0-32.69-13.46Q220-206.92 220-226.15v-107.7q0-19.23 13.46-32.69Q246.92-380 266.15-380q19.23 0 32.7 13.46 13.46 13.46 13.46 32.69v107.7q0 19.23-13.46 32.69Q285.38-180 266.15-180Zm236.16 0q-19.23 0-32.69-13.46-13.46-13.46-13.46-32.69v-307.7q0-19.23 13.46-32.69Q483.08-580 502.31-580q19.23 0 32.69 13.46 13.46 13.46 13.46 32.69v307.7q0 19.23-13.46 32.69Q521.54-180 502.31-180Zm231.54 0q-19.23 0-32.7-13.46-13.46-13.46-13.46-32.69v-507.7q0-19.23 13.46-32.69Q714.62-780 733.85-780q19.23 0 32.69 13.46Q780-753.08 780-733.85v507.7q0 19.23-13.46 32.69Q753.08-180 733.85-180Z"/></svg>
                <svg class="h-full fill-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M205.77-297.69q-15.37 0-25.76-10.4-10.39-10.39-10.39-25.76v-72.3h-33.46q-15.37 0-25.76-10.4-10.4-10.39-10.4-25.76v-75.38q0-15.37 10.4-25.76 10.39-10.4 25.76-10.4h33.46v-72.38q0-15.38 10.39-25.73t25.76-10.35h618.07q15.37 0 25.76 10.4 10.4 10.39 10.4 25.76v292.24q0 15.52-10.4 25.87-10.39 10.35-25.76 10.35H205.77Zm23.46-60h170.39v-244.62H229.23v244.62Z"/></svg>
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