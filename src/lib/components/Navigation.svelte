<script lang="ts" context="module">
    import { writable } from "svelte/store";

    export const open = writable(false);
</script>

<script lang="ts">
    import NavItem from "$lib/components/NavItem.svelte";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import {FolderCode, Mail, NotebookPen, User} from "lucide-svelte";

    onMount(() => {
        open.subscribe((value) => {
            document.body.classList.toggle("overflow-y-hidden", value);
        });
    });

    function toggleOpen() {
        $open = !$open;
    }
</script>

<div class="lg:hidden fixed right-10 bottom-10 z-50">
    <button class="fill-blue-50 size-16 p-3 bg-gray-900 shadow-lg shadow-black/30 border border-gray-600/60 rounded-full transition-all active:scale-95" on:click={toggleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/></svg>
    </button>
</div>

{#if $open}
    <div class="fixed top-0 left-0 w-screen h-screen flex items-center bg-black/80 backdrop-blur-md z-40" in:fade={{duration: 120}} out:fade={{duration: 120}}>
        <div class="relative flex flex-col gap-3 w-fit mx-auto p-4">
            <NavItem href="/#about" text="About">
                <User class="text-inherit h-5" />
            </NavItem>

            <NavItem href="/#projects" text="Projects">
                <FolderCode class="text-inherit h-5" />
            </NavItem>

            <NavItem href="/#blogs" text="Blogs">
                <NotebookPen class="text-inherit h-5" />
            </NavItem>

            <NavItem href="/#contact" text="Contact">
                <Mail class="text-inherit h-5" />
            </NavItem>
        </div>
    </div>
{/if}
