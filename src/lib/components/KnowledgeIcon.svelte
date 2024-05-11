<script lang="ts">
    import GridItem from "$lib/components/GridItem.svelte";

    export let src : string,
        title : string;
</script>

<GridItem>
    <img {title} class="w-full aspect-square" loading="lazy" alt={title} {src}>
</GridItem>