<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.postcss';
</script>

<Header />

<main class="flex flex-1 flex-col p-4 w-full max-w-5xl my-0 mx-auto box-border">
	<slot />
</main>

<footer class="flex flex-col justify-center items-center p-10">
	<p>visit <a class="font-bold" href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
