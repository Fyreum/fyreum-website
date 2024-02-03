<script>
    import DotSeperator from "$lib/components/DotSeperator.svelte";
</script>

<footer class="flex flex-col md:flex-row gap-y-3 w-full items-center glass-bg px-4 py-4">
    <div class="flex shrink-0 justify-center md:justify-start">
        <a class="footer-item" href="/imprint">© {new Date().getFullYear()} Fyreum</a>
    </div>
    <div class="flex items-center gap-1 justify-center w-full">
        <a class="footer-item" href="/imprint">Imprint</a>
        <DotSeperator></DotSeperator>
        <a class="footer-item" href="/cookies">Cookies</a>
        <DotSeperator></DotSeperator>
        <a class="footer-item" href="https://kit.svelte.dev" target="_blank">SvelteKit</a>
    </div>
    <div class="flex shrink-0 justify-center md:justify-end">
        <a class="footer-item" href="https://github.com/Fyreum" target="_blank">See on GitHub</a>
    </div>
</footer>