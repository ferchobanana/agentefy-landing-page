<script lang="ts">
	import Header from "$lib/components/pre-landing/Header.svelte";
	import Hero from "$lib/components/pre-landing/Hero.svelte";
	import Footer from "$lib/components/pre-landing/Footer.svelte";
	import ImageShowing from "$lib/components/pre-landing/ImageShowing.svelte";
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
	<Header />
	<main>
		<Hero />
		<ImageShowing></ImageShowing>
	</main>
	<Footer />
</div>
