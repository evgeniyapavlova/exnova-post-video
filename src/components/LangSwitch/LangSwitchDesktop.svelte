<script>
	import { slide } from 'svelte/transition';
	import Globus from '../svg/Globus.svelte';
	import Links from './Links.svelte';

	export let options, lang;

	let isExpanded = false;
</script>

<div class="switch-lang__container">
	<button on:click={() => (isExpanded = !isExpanded)} on:mouseenter={() => (isExpanded = true)}
		>{options[lang].name}
		<Globus />
	</button>
	{#if isExpanded}
		<menu transition:slide on:mouseleave={() => (isExpanded = false)}>
			<div class="menu-inner">
				<div class="arrow-up"></div>
				<Links {options} {lang} />
			</div>
		</menu>
	{/if}
</div>

<style>
	.arrow-up {
		position: absolute;
		top: -6px;
		left: 50%;
		width: 0;
		height: 0;
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-bottom: 6px solid white;
		transform: translateX(-50%);
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
		cursor: pointer;
		position: absolute;
		top: 0;
		font-weight: 500;
		margin: 0;
		padding: 0;
		width: 100%;
	}

	.menu-inner {
		background: white;
		border-radius: 6px;
		margin-top: 52px;
		position: relative;
	}

	.switch-lang__container {
		position: relative;
		display: flex;
		align-items: center;
		font-weight: bold;
		justify-content: space-around;
	}

	a {
		position: relative;
		display: block;
		z-index: 1;
		width: 50%;
		text-align: center;
		cursor: pointer;
	}

	@media only screen and (max-width: 600px) {
		button {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			width: 80px;
			display: inline-block;
			padding: 4px 12px;
		}
	}
</style>
