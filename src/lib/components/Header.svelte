<script lang="ts">
    import {onMount} from "svelte";
    import HeaderNavItem from "$lib/components/HeaderNavItem.svelte";
    import {FolderCode, Mail, NotebookPen, User} from "lucide-svelte";

    onMount(() => {
        // @ts-ignore
        const navBar: HTMLElement = document.getElementById("navigation-bar");
        const scrollWatcher: HTMLElement = document.createElement("div");

        scrollWatcher.setAttribute("data-scroll-watcher", "");
        navBar.before(scrollWatcher);

        const observer = new IntersectionObserver((entries) => {
            navBar.classList.toggle("sticking", !entries[0].isIntersecting);
        });
        observer.observe(scrollWatcher);
    });
</script>

<nav id="navigation-bar" class="group flex z-30 justify-center w-full sticky top-0 left-0 transition-[background-color,top] ease-linear overflow-x-hidden">
    <div id="nav-wrapper" class="flex w-full justify-center items-center gap-4 px-2.5 py-4 transition-[transform,border-radius,background-color] ease-linear backdrop-blur-sm">
        <a class="absolute left-10 sm:left-14 flex gap-3 items-center unstyled-link" href="/">
            <img src="/favicon.png" alt="Logo" class="size-8">
            <span class="text-xl font-bold text-blue-100">Fyreum</span>
        </a>

        <HeaderNavItem header="About" href="/#about">
            <User class="text-inherit h-5" />
        </HeaderNavItem>

        <HeaderNavItem header="Projects" href="/#projects">
            <FolderCode class="text-inherit h-5" />
        </HeaderNavItem>

        <HeaderNavItem header="Blogs" href="/#blogs">
            <NotebookPen class="text-inherit h-5" />
        </HeaderNavItem>

        <HeaderNavItem header="Contact" href="mailto:mail@fyreum.de">
            <Mail class="text-inherit h-5" />
        </HeaderNavItem>
    </div>
</nav>