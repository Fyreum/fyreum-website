<script lang="ts">
    import { page } from '$app/stores';

    export let
        buttonHref = "/",
        buttonTitle = "Return to Homepage";

    let message : string | undefined;

    switch ($page.status) {
        case 404:
            message = "Page could not be found";
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

<div class="relative max-w-2xl w-full px-2 pb-4 mt-6">
    <div class="flex flex-col p-8 items-center text-center glass-bg rounded-2xl">
        <h1 class="text-blue-600 tracking-wide font-semibold text-2xl pb-1">{$page.status}</h1>
        <h2 class="tracking-wide text-lg py-1">{message}</h2>

        <a class="bg-blue-600 mt-4 px-4 py-2 rounded-lg text-gray-200 hover:bg-blue-700 hover:no-underline" href="{buttonHref}">{buttonTitle}</a>
    </div>
</div>

