<script lang="ts">
    import LanguagesSection from "$lib/components/ProgrammingLanguagesSection.svelte";
    import BlogsBanner from "$lib/components/blog/BlogsBanner.svelte";
    import WebsiteDesignsSection from "$lib/components/WebsiteDesignsSection.svelte";
    import AboutSection from "$lib/components/AboutSection.svelte";
    import StartScreen from "$lib/components/StartScreen2.svelte";
</script>

<svelte:head>
    <title>Fyreum</title>
    <meta property="og:title" content="Fyreum" />
    <meta name="description" content="I'm a self-taught Java-Developer and semi noob at Webdesign. This page shows some of my projects and current work!">
    <meta property="og:description" content="I'm a self-taught Java-Developer and semi noob at Webdesign. This page shows some of my projects and current work!" />
    <meta name="keywords" content="Fyreum, Developer, UI, Projects, Hamburg" />
    <!--<meta name="robots" content="index, follow" />-->
</svelte:head>

<StartScreen />

<AboutSection />

<WebsiteDesignsSection />

<LanguagesSection />

<BlogsBanner />