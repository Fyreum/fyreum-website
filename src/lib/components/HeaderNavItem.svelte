<script lang="ts">
    export let
        href: string = "/",
        header: string = "Start";
</script>

<a class="invisible lg:visible flex items-center gap-2 text-blue-100 shrink-0 unstyled-link px-4 py-1 font-medium text-xl rounded-full transition-colors hover:bg-white hover:text-black"
   href="{href}">
    <slot />
    {header}
</a>