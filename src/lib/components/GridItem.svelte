<script lang="ts">
    export let
        identifier : string = "",
        gridSpan : number = 1;
</script>

<div id="{identifier}" class="motion-safe:md:hover:-translate-y-2 motion-safe:md:hover:shadow-glow transition-transform duration-200 glass-bg overflow-hidden p-2 group md:p-4 rounded-2xl sm-max:{gridSpan > 1 ? 'h-fit' : 'aspect-square'} sm:col-span-{gridSpan} sm:aspect-[{gridSpan}/1]">
    <slot />
</div>