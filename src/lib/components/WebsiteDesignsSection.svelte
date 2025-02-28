
<script lang="ts">
    import revine from '$lib/images/revine_oppenheimer.png';
    import erethon_homepage from '$lib/images/home/erethon_homepage-2.png';
    import statix_homepage from '$lib/images/home/statix_homepage-2.png';
    import statix_pricing from '$lib/images/home/statix_pricing.png';
</script>

<div id="projects" class="relative w-full py-12 bg-white/10 border-t border-gray-600/60 overflow-clip scroll-mt-16 gradient-highlights">
    <div class="max-content">
        <h1 class="text-blue-100 text-4xl font-bold text-center mb-6">Website Designs</h1>

        <div class="relative grid grid-cols-2 gap-4 md:gap-6">
            <div class="relative mx-auto w-full aspect-[3/2] pb-8 pl-8 md:pl-12">
                <img class="object-cover size-full rounded-xl bg-gray-900 shadow-lg shadow-black/30 rotate-3d-left-1" src={revine} alt="Revine film page">

                <div class="absolute w-1/2 aspect-[3/2] left-4 bottom-0">
                    <img class="object-cover size-full rounded-xl bg-gray-950 shadow-lg shadow-black/30 rotate-3d-left-2" src={erethon_homepage} alt="Erethon Homepage">
                </div>
            </div>

            <div class="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[10.75%] border-2 border-blue-500 shadow-lg bg-neutral-950/80 backdrop-blur-md p-[0.75%] rounded-[20%]">
                <img src="/favicon.png" alt="Fyreum Icon">
            </div>

            <div class="relative mx-auto w-full aspect-[3/2] pb-8 pr-8 md:pr-12">
                <img class="object-cover size-full rounded-xl bg-gray-200 shadow-lg shadow-black/30 rotate-3d-right-1" src={statix_homepage} alt="Statix Homepage">

                <div class="absolute w-1/2 aspect-[3/2] right-4 bottom-0">
                    <img class="object-cover size-full rounded-xl bg-gray-300 shadow-lg shadow-black/30 rotate-3d-right-2" src={statix_pricing} alt="Statix pricing section">
                </div>
            </div>
        </div>
    </div>
</div>