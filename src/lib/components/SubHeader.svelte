<script lang="ts">
    export let
        header : string = "Subheader",
        customId : string | undefined = undefined;
</script>

<div id="{customId ? customId : header.toLowerCase().replace(' ', '-')}" class="flex items-center w-full px-2 mt-4 mb-6 scroll-mt-20">
    <div class="border-b border-b-gray-200/70 w-full h-2"></div>
    <h1 class="shrink-0 text-4xl font-semibold px-4 tracking-wide">{header}</h1>
    <div class="border-b border-b-gray-200/70 w-full h-2"></div>
</div>