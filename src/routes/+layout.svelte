<script lang="ts">
    import '../app.css';
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import Navigation from "$lib/components/Navigation.svelte";
</script>

<Header />

<Navigation />

<main class="w-full min-h-[95dvh]">
    <slot />
</main>

<Footer />