<script>
    import {BookMarked, MessagesSquare, Scale, Siren} from "lucide-svelte";
</script>
<div class="relative overflow-hidden h-2 w-full bg-white/10 text-black/50 border-t border-neutral-600/60 z-10">
    <div class="absolute left-0 -top-1/3 z-[-1] bg-purple-500/30 w-1/2 aspect-square rounded-full blur-[15rem] -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute right-0 -bottom-1/3 z-[-1] bg-blue-500/35 w-1/2 aspect-square rounded-full blur-[15rem] translate-x-1/2 translate-y-1/2"></div>
</div>

<footer class="px-6 bg-black/90 border-t border-gray-600/60 text-lg">
    <div class="flex flex-col items-center mx-auto py-8">
        <a href="/">
            <img class="size-10" src="/favicon.png" alt="Logo">
        </a>
    </div>

    <div class="max-content py-8 px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-3 w-full justify- border-y border-gray-600/60">
        <div class="flex flex-col gap-2 md:gap-3">
            <h3 class="flex items-center gap-3 text-xl text-slate-500 font-bold mb-1 tracking-tight">
                <Scale class="size-5 text-inherit" />
                Legal
            </h3>

            <a class="footer-item unstyled-link" href="/imprint">Imprint</a>
            <a class="footer-item unstyled-link" href="/datenschutz">Data protection</a>
            <a class="footer-item unstyled-link" href="/cookies">Cookies</a>
        </div>

        <div class="flex flex-col gap-2 md:gap-3 md:justify-self-center">
            <h3 class="flex items-center gap-3 text-xl text-slate-500 font-bold mb-1 tracking-tight">
                <MessagesSquare class="size-5 text-inherit" />
                Socials
            </h3>

            <a class="footer-item unstyled-link" href="mailto:mail@fyreum.de">E-Mail</a>
            <a class="footer-item unstyled-link" href="https://discordapp.com/users/245927737586352128" target="_blank">Discord</a>
            <a class="footer-item unstyled-link" href="https://linkedin.com/in/jluka-vogel" target="_blank">Linkedin</a>
        </div>

        <div class="flex flex-col gap-2 md:gap-3 md:justify-self-end">
            <h3 class="flex items-center gap-3 text-xl text-slate-500 font-bold mb-1 tracking-tight">
                <BookMarked class="size-5 text-inherit" />
                References
            </h3>

            <a class="footer-item unstyled-link" href="https://github.com/Fyreum/fyreum-website" target="_blank">See on GitHub</a>
            <a class="footer-item unstyled-link" href="https://kit.svelte.dev" target="_blank">SvelteKit</a>
            <a class="footer-item unstyled-link" href="https://tailwindcss.com" target="_blank">TailwindCSS</a>
        </div>
    </div>

    <div class="flex max-content pt-4 pb-5 px-6">
        <a class="footer-item unstyled-link tracking-tight !text-slate-500" href="/imprint">Copyright © {new Date().getFullYear()} Fyreum</a>
    </div>
</footer>