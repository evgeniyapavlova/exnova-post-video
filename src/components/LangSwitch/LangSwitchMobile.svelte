<script>
	import { onMount } from 'svelte';	
	import Links from './Links.svelte';
	import Globus from '../svg/Globus.svelte';

	export let options, lang;

	let isExpanded = false;

	onMount(() => {
		function handleClick(event) {
			const targetElement = event.target;
			const wrapElement = document.getElementById('wrap-lang-switch');
			const menuElement = document.getElementById('menu-lang-switch');

			if (!wrapElement.contains(targetElement) && !menuElement.contains(targetElement)) {
				isExpanded = false;
			}
		}

		document.body.addEventListener('click', handleClick);

		return () => {
			document.body.removeEventListener('click', handleClick);
		};
	});
</script>

<div class="wrap" id="wrap-lang-switch">
	<button on:click={() => (isExpanded = !isExpanded)} style="font-weight: bold;">
		{options[lang].key.toUpperCase()}
		<Globus />
	</button>
	{#if isExpanded}
		<menu id="menu-lang-switch">
			<div class="arrow-up"></div>
			<div class="menu-inner">
				<div class="arrow-up"></div>
				<Links {options} {lang} />
			</div>
		</menu>
	{/if}
</div>

<style>
	.wrap {
		position: relative;
	}

	button {
		display: flex;
		align-items: center;
		gap: 6px;
		color: #1e1e1e;
		font-size: 16px;
		cursor: pointer;
		padding: 4px 24px;
		height: 40px;
		border-radius: 10px;
		background-color: #fff;
	}

	menu {
		background: white;
		cursor: pointer;
		position: absolute;
		top: 52px;
		font-weight: 500;
		margin: 0;
		padding: 0;
		width: 100%;
		border-radius: 6px;
		width: 170px;
		right: 0;
	}

	.arrow-up {
		position: absolute;
		top: -6px;
		right: 32px;
		width: 0;
		height: 0;
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-bottom: 6px solid white;
		transform: translateX(-50%);
	}
</style>
