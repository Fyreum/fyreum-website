
<script lang="ts">
    import revine from '$lib/images/revine_oppenheimer.png';
    import erethon_icon from '$lib/images/home/erethon_icon.png';
    import erethon_homepage from '$lib/images/home/erethon_homepage.png';
    import statix_homepage from '$lib/images/home/statix_homepage.png';
    import statix_pricing from '$lib/images/home/statix_pricing.png';
</script>

<div class="relative w-full py-12 bg-white/10 border-t border-gray-600/60 overflow-hidden">
    <div class="absolute left-0 -top-1/3 z-[-1] bg-purple-500/30 w-1/2 aspect-square rounded-full blur-[15rem] -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute right-0 -bottom-1/3 z-[-1] bg-blue-500/35 w-1/2 aspect-square rounded-full blur-[15rem] translate-x-1/2 translate-y-1/2"></div>

    <div class="max-content">
        <h1 class="text-blue-100 text-4xl font-bold text-center mb-6">Website Designs</h1>

        <div class="relative grid grid-cols-2 gap-4 md:gap-6">
            <div class="relative mx-auto w-full aspect-[3/2] pb-8 pl-8">
                <img class="object-cover size-full rounded-xl bg-gray-900 shadow-lg shadow-black/30 rotate-3d-left-1" src={revine} alt="Revine film page">

                <div class="absolute w-1/2 aspect-[3/2] left-0 bottom-0">
                    <img class="object-cover size-full rounded-xl bg-gray-950 shadow-lg shadow-black/30 rotate-3d-left-2" src={erethon_homepage} alt="Erethon Homepage">
                </div>
            </div>

            <div class="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-32">
                <img src={erethon_icon} alt="Erethon Icon">
            </div>

            <div class="relative mx-auto w-full aspect-[3/2] pb-8 pr-8">
                <img class="object-cover size-full rounded-xl bg-gray-200 shadow-lg shadow-black/30 rotate-3d-right-1" src={statix_homepage} alt="Statix Homepage">

                <div class="absolute w-1/2 aspect-[3/2] right-0 bottom-0">
                    <img class="object-cover size-full rounded-xl bg-gray-300 shadow-lg shadow-black/30 rotate-3d-right-2" src={statix_pricing} alt="Statix pricing section">
                </div>
            </div>
        </div>
    </div>
</div>