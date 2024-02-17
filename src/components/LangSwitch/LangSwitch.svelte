<script>
	import { onMount } from 'svelte';
	import LangSwitchDesktop from './LangSwitchDesktop.svelte';
	import LangSwitchMobile from './LangSwitchMobile.svelte';

	export let lang;

	const options = {
		en: { key: 'en', name: 'English' },
		id: { key: 'id', name: 'Bahasa Indonesia' },
		es: { key: 'es', name: 'Español' },
		pt: { key: 'pt', name: 'Português' }
	};

	let isMobile = false;

	onMount(() => {
		isMobile = window.matchMedia('(pointer: coarse)').matches;
	});
</script>

{#if isMobile}
	<LangSwitchMobile {options} {lang} />
{:else}
	<LangSwitchDesktop {options} {lang} />
{/if}
