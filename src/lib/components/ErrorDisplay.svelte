<script lang="ts">
    import { page } from '$app/stores';

    export let
        buttonHref = "/",
        buttonTitle = "Zurück zur Startseite";

    let message : string | undefined;

    switch ($page.status) {
        case 404:
            message = "Page not found";
            break;
        case 500:
            message = "An internal error occured";
            break;
        default:
            message = $page?.error?.message;
            break;
    }
</script>

<svelte:options immutable="{true}"/>

<div class="relative max-w-2xl w-full px-2 pb-4 mt-6">
    <div class="flex flex-col px-6 py-4 h-full text-gray-200 items-center glass-bg rounded-2xl">
        <h1 class="text-center text-element items-center tracking-wide font-semibold text-2xl py-1">{$page.status}</h1>
        <h1 class="text-center tracking-wide text-lg py-1 px-6">{message}</h1>

        <a class="bg-blue-600 mt-4 px-4 py-2 rounded-lg text-gray-200 hover:bg-blue-700 hover:no-underline" href="{buttonHref}">{buttonTitle}</a>
    </div>
</div>

