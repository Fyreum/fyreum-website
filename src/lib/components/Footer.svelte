<script lang="ts">

</script>

<div class="relative overflow-hidden h-2 w-full bg-white/10 text-black/50 border-t border-neutral-600/60">
    <div class="absolute left-0 -top-1/3 z-[-1] bg-purple-500/30 w-1/2 aspect-square rounded-full blur-[15rem] -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute right-0 -bottom-1/3 z-[-1] bg-blue-500/35 w-1/2 aspect-square rounded-full blur-[15rem] translate-x-1/2 translate-y-1/2"></div>
</div>

<footer class="bg-black/90 border-t border-gray-600/60 text-lg">
    <div class="flex flex-col items-center mx-auto py-8">
        <img class="size-10" src="/favicon_v2_light.png" alt="Logo">
    </div>

    <div class="max-content px-6 py-8 flex flex-col md:flex-row gap-8 md:gap-3 w-full md:items-center md:justify-between border-y border-gray-600/60">
        <div class="flex flex-col gap-2 md:gap-3 items-center md:items-start">
            <h3 class="text-xl text-slate-500 font-bold mb-1 tracking-tight">Policies</h3>

            <a class="footer-item unstyled-link" href="/imprint">Imprint</a>
            <a class="footer-item unstyled-link" href="/datenschutz">Data protection</a>
            <a class="footer-item unstyled-link" href="/cookies">Cookies</a>
        </div>

        <div class="flex flex-col gap-2 md:gap-3 items-center md:items-start">
            <h3 class="text-xl text-slate-500 font-bold mb-1 tracking-tight">Socials</h3>

            <a class="footer-item unstyled-link" href="/imprint">Linkedin</a>
            <a class="footer-item unstyled-link" href="/data-protection">Discord</a>
            <a class="footer-item unstyled-link" href="mailto:mail@fyreum.de">E-Mail</a>
        </div>

        <div class="flex flex-col gap-2 md:gap-3 items-center md:items-start">
            <h3 class="text-xl text-slate-500 font-bold mb-1 tracking-tight">References</h3>

            <a class="footer-item unstyled-link" href="https://github.com/Fyreum/fyreum-website" target="_blank">See on GitHub</a>
            <a class="footer-item unstyled-link" href="https://kit.svelte.dev" target="_blank">SvelteKit</a>
            <a class="footer-item unstyled-link" href="https://tailwindcss.com" target="_blank">TailwindCSS</a>
        </div>
    </div>

    <div class="flex max-content py-4 px-6">
        <a class="footer-item unstyled-link tracking-tight !text-slate-500" href="/imprint">Copyright © {new Date().getFullYear()} Fyreum</a>
    </div>
</footer>