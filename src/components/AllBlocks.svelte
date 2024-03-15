<script>
	import Header from '../components/Header.svelte';
	import Footer from './Footer.svelte';
	import Block1 from '../components/Block1.svelte';
	import Block2 from '../components/Block2.svelte';
	import Block3 from '../components/Block3.svelte';
	import Block4 from '../components/Block4.svelte';
	import Block5 from '../components/Block5.svelte';

	export let content, lang;
</script>

<div class="non-reg">
	<Header {lang} />
	<Block1 content={content.block1} btn={content.btn} {lang} />
	<Block2 content={content.block2} />
	<Block3 content={content.block3} />
	<Block4 content={content.block4} />
	<Block5 content={content.block5} btn={content.btn} />
	<Footer {lang} />
</div>
