<script>
	import Header from './Header.svelte';
	import Footer from '../components/Footer.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<slot />

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
