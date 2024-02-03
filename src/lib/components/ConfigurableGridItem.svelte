<script lang="ts">
    import GridItem from "$lib/components/GridItem.svelte";

    export let
        header : string = "Header",
        projectInfo : string = "Utility",
        href : string = "/",
        externalLink : boolean = false,
        large : boolean = false,
        flip : boolean = false,
        image : string = "https://via.placeholder.com/512",
        customClasses : string = "",
        disableButton : boolean = false,
        description : string = "Lorum ipsum";
</script>

<GridItem identifier="{header.toLowerCase().replace(' ', '-')}-grid-item" gridSpan={large ? 2 : 1}>
    <div class="relative h-full {large ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8' : ''} {customClasses}">
        {#if image}
            <img class="{large ? (flip ? 'order-last' : '') : 'grid-hover-card'} w-full aspect-square rounded-lg object-cover" src="{image}" alt=""/>
        {/if}
        <!-- Gap -->
        <div class="flex flex-col justify-between w-full {large ? '' : 'aspect-square'}">
            <div class="flex w-full pb-2 border-b border-dark-2/[0.5] mb-4 gap-6 items-center justify-center">
                <h1 class="text-xl text-center justify-center font-semibold tracking-wide">
                    {header}
                </h1>
                <div class="mono-tag-blue">{projectInfo}</div>
            </div>

            <!-- TODO Fix description height on smaller devices -->
            <p class="flex flex-[1_0_0] mx-1 mb-2 justify-start shrink text-wrap">
                {#each description.split("<br>") as line}
                    {line}<br>
                {/each}
            </p>

            {#if !disableButton}
                <a class="w-fit pt-2 mx-auto" href={href} target="{externalLink ? '_black' : '_self'}">
                    <button class="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg">
                        Learn more
                    </button>
                </a>
            {/if}
        </div>
    </div>
</GridItem>