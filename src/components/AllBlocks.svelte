<script>
	import Block1 from '../components/Block1.svelte';
	import Block2 from '../components/Block2.svelte';
	import Block3 from '../components/Block3.svelte';
	import Block4 from '../components/Block4.svelte';
	import Block5 from '../components/Block5.svelte';

	export let content;
</script>


<Block1
	h1={content.h1}
	h1_span={content.h1_span}
	h2_1={content.h2_1}
	h2_2={content.h2_2}
	h2_3={content.h2_3}
/>
<Block2
	title={content.block2_title}
	highlight={content.block2_highlight}
	text={content.block2_text}
/>
<Block3 title={content.block3_title} items={content.itemsBlock3Array} />
<Block4
	title={content.block4_title}
	items={content.itemsBlock4Array}
	item3Title={content.block4_item3Title}
	item3Text={content.block4_item3Text}
	item3Points={content.item3Points}
/>

<Block5 text1={content.block5_text1} text2={content.block5_text2} />
