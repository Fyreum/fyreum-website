<script lang="ts">
    import { page } from '$app/stores';

    export let
        buttonHref = "/",
        buttonTitle = "Return to Homepage";

    let message : string | undefined;

    switch ($page.status) {
        case 404:
            message = "Page not be found";
            break;
        case 500:
            message = "An internal error occurred";
            break;
        default:
            message = $page?.error?.message;
            break;
    }
</script>

<svelte:options immutable="{true}"/>

<div class="relative grid w-screen h-[90vh] place-items-center">
    <div class="flex flex-col gap-6 p-8 items-center text-center bg-black/50 border border-neutral-800/60 rounded-2xl max-w-xl w-full">
        <h1 class="gradient-text tracking-wide font-bold text-6xl">Error {$page.status}</h1>
        <h2 class="tracking-wide text-xl text-blue-100">{message}</h2>

        <a class="bg-blue-100 px-4 py-2 text-neutral-800 transition-all rounded-full font-bold unstyled-link hover:bg-blue-200" href="{buttonHref}">{buttonTitle}</a>
    </div>
</div>

