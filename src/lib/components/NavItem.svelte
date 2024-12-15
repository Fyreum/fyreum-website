<script lang="ts">
    import { open } from "$lib/components/Navigation.svelte"

    export let
        href: string,
        text: string;

</script>

<a class="flex items-center gap-3 unstyled-link text-xl text-blue-100 hover:bg-gray-100 hover:text-black transition-colors rounded-full px-4 py-1" {href} on:click={() => $open = false}>
    <slot />
    {text}
</a>