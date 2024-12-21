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

            document.getElementById('phone-wrapper')?.classList.add('unlocked');
        }, 1000);
    }
</script>

<div class="relative flex flex-col lg:items-center -mt-12 w-full h-screen justify-end 2xl:justify-center">
    <!-- Text top left -->
    <div class="absolute left-14 top-20 lg:top-1/3 lg:-translate-y-1/2 z-20 pr-6">
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

    <div id="phone-wrapper" class="phone-wrapper">
        <!-- Phone -->
        <div id="phone" class="mb-20 ml-20 mt-12 lg:ml-0 phone aspect-[1/2] h-[calc(44rem*var(--scale))] w-fit glowing-card rounded-[calc(1.5rem*var(--scale))] bg-black border-[calc(9px*var(--scale))] border-gray-700 outline outline-[calc(1px*var(--scale))] outline-gray-500/75 -outline-offset-[calc(2px*var(--scale))] [--scale:0.5] md:[--scale:0.65] xl:[--scale:0.75] 2xl:[--scale:1]">
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
                    <div in:fade={{duration: 100}}>
                        <div class="absolute bottom-[calc(1.5rem*var(--scale))] w-full grid grid-cols-4 gap-[calc(1rem*var(--scale))] text-black px-[calc(1.5rem*var(--scale))]">
                            <div class="aspect-square bg-gray-500 p-[calc(0.25rem*var(--scale))] rounded-[calc(0.75rem*var(--scale))]"></div>
                            <div class="aspect-square bg-gray-500 p-[calc(0.25rem*var(--scale))] rounded-[calc(0.75rem*var(--scale))]"></div>
                            <div class="aspect-square bg-gray-500 p-[calc(0.25rem*var(--scale))] rounded-[calc(0.75rem*var(--scale))]"></div>
                            <div class="aspect-square bg-gray-500 p-[calc(0.25rem*var(--scale))] rounded-[calc(0.75rem*var(--scale))]"></div>
                        </div>
                    </div>
                {/if}
            </div>

            <!-- Iris -->
            <div class="absolute top-[calc(1rem*var(--scale))] left-1/2 -translate-x-1/2 rounded-full aspect-square h-[calc(1rem*var(--scale))] border-[calc(1px*var(--scale))] bg-black border-t-gray-400 border-r-gray-500 border-l-gray-600 border-b-gray-900"></div>
        </div>
    </div>

    <!-- Reminder top right -->
    <div class="absolute right-[calc(4rem*var(--scale))] top-[42%] lg:top-1/3 -translate-y-1/2 flex items-end flex-col gap-[calc(1rem*var(--scale))] z-20" bind:this={messageBox}>
        {#each $messages as message}
            <div class="relative text-lg flex px-[calc(1rem*var(--scale))] py-[calc(0.5rem*var(--scale))] rounded-xl rounded-tr-none bg-gradient-to-r from-blue-700 to-blue-500 blue-message max-w-80 tracking-tight">
                {message}
            </div>
        {/each}
    </div>
</div>