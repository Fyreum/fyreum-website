<script>
    import StackedCard from "$lib/components/StackedCard.svelte";
    import {Cake, User} from "lucide-svelte";
</script>

<div id="about" class="z-10 w-full bg-black/50 border-t border-gray-600/60 py-8 lg:py-12 overflow-clip scroll-mt-16 backdrop-blur-xl">
    <div class="relative max-content gradient-highlights before:!bg-purple-500/25 after:!bg-blue-500/30">
        <div class="relative grid sm:grid-cols-3 gap-8 rounded-3xl p-8 overflow-hidden">
            <StackedCard />

            <div class="sm:col-span-2 flex flex-col justify-center text-center items-center sm:items-start sm:text-start">
                <h3 class="text-4xl text-blue-100 font-bold mb-4">About me</h3>

                <div class="flex gap-2 items-center">
                    <span class="flex gap-2 items-center px-2 rounded-md text-blue-400 border border-blue-700">
                        <User class="text-inherit size-4" />
                        Male
                    </span>
                    <span class="flex gap-2 items-center px-2 rounded-md text-purple-400 border border-purple-700">
                        <Cake class="text-inherit size-4" />
                        {new Date(Date.now() - new Date(2003, 8, 26).getTime()).getFullYear() - 1970}
                    </span>
                </div>

                <p class="mt-6 text-xl text-slate-400">
                    I'm from Hamburg, Germany, and a Full Stack Developer in the field of E-Commerce.
                    I love working on projects and learning new things! And thus, I'm always looking
                    for new ideas.
                </p>
            </div>
        </div>
    </div>
</div>