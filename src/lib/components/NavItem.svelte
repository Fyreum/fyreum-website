<script lang="ts">
    import { open } from "$lib/components/Navigation.svelte"

    export let
        href: string,
        text: string;

</script>

<a class="unstyled-link text-xl text-blue-100 hover:bg-gray-100 hover:text-black transition-colors rounded-full px-4 py-0.5" {href} on:click={() => $open = false}>
    {text}
</a>