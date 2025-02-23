<script lang="ts">
    export let
        href: string = "/",
        header: string = "Start",
        highlight: boolean = false;
</script>

<a class="invisible lg:visible flex items-center gap-2 text-blue-100 shrink-0 unstyled-link px-4 py-1 font-medium text-xl rounded-full transition-colors hover:bg-blue-100 hover:text-black {highlight ? 'bg-blue-100 text-black hover:!bg-blue-200' : ''}"
   href="{href}">
    <slot />
    {header}
</a>