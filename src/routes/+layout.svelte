<script>
	import Restricted from '../components/Restricted.svelte';
	import './styles.css';
</script>

<div class="app">
	<Restricted />
	<slot />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
