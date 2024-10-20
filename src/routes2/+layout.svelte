<script>
	import '../app.css';
	import Header from "$lib/components/Header.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<div class="app">
	<Header></Header>

	<main class="flex flex-col items-center w-full min-h-[100vh]">
		<slot />
	</main>

	<Footer></Footer>
</div>
