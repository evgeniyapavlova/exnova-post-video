<script>
	import { slide } from 'svelte/transition'
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const options = {
		en: { key: 'en', name: 'Eng' },
		ar: { key: 'ar', name: 'العربية' }
	};
</script>

<div
	class="switch-lang__container"
	data-current={$page.url.pathname.indexOf('/ar') !== -1 ? 'ar' : 'en'}
>
	<a href="{base}/">{options.en.name}</a>
	<a href="{base}/ar">{options.ar.name}</a>
</div>

<style>
	.switch-lang__container {
		width: 160px;
		height: 40px;
		background-color: var(--color-switch);
		border-radius: 10px;
		padding: 4px;
		position: relative;
		display: flex;
		align-items: center;
		font-weight: bold;
		justify-content: space-around;
	}
	.switch-lang__container:before {
		position: absolute;
		content: '';
		background-color: #fff;
		border-radius: 8px;

		height: calc(100% - 8px);
		width: 50%;
		z-index: 0;
		transition: left 0.2s ease-in-out;
	}
	.switch-lang__container[data-current='en']:before {
		left: 4px;
	}

	.switch-lang__container[data-current='ar']:before {
		left: calc(50% - 4px);
	}
	a {
		position: relative;
		display: block;
		z-index: 1;
		width: 50%;
		text-align: center;
		cursor: pointer;
	}
</style>
