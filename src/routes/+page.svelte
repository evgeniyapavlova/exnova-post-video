<script>
	import Block1 from '../components/Block1.svelte';
	import Block2 from '../components/Block2.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Block1
	h1="Post a video <br/>
on social media,"
	h1_span="get $50"
	h2_1="Post a video to your social media with a hashtag"
	h2_2="#InvestwithIQ"
	h2_3="and get a reward on your trading account"
/>
<Block2
	title="IQ Option is paying for your social media videos"
	highlight="Are you active on social media and enjoy creating video content?<br /> Congrats, you’re in for our pay-per-video offer!"
	text="Make a 15-60 second video on trading with IQ Option according to our guidelines and share it throughout social networks. In return, we’ll credit a handsome reward to your account — use it for trading or withdraw!"
/>
