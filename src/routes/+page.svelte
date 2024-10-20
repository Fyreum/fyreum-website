<script lang="ts">
    import StartScreenSection from "$lib/components/StartScreenSection.svelte";
    import LanguagesSection from "$lib/components/ProgrammingLanguagesSection.svelte";
    import BlogsBanner from "$lib/components/BlogsBanner.svelte";
    import WebsiteDesignsSection from "$lib/components/WebsiteDesignsSection.svelte";
</script>

<svelte:head>
    <title>Fyreum</title>
    <meta name="description" content="I'm a self-taught Java-Developer and semi noob at Webdesign. This page shows some
    of my projects and current work!">
</svelte:head>

<StartScreenSection />

<BlogsBanner />

<WebsiteDesignsSection />

<LanguagesSection />