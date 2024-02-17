<script>
	import { base } from '$app/paths';
	export let options, lang;
</script>

{#each Object.values(options) as { key, name }, i}
	<div class={lang === key ? 'active' : ''}>
		{#if key === 'en'}<a href="{base}/">{name}</a>
		{:else}
			<a href="{base}/{key}">{name}</a>
		{/if}
	</div>
{/each}

<style>
	a {
		display: block;
		width: 100%;
		padding: 16px;
		box-sizing: border-box;
		border-radius: 6px;
		font-size: 16px;
	}

	.active a {
		color: white;
		background-color: var(--color-bg-0);
	}

	a:hover {
		color: white;
		background-color: var(--color-bg-0);
	}
</style>
