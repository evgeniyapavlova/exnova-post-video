<script>
	import fb_meta_img_en from '$lib/images/fb_meta_img_en.jpg';
	import tw_meta_img_en from '$lib/images/tw_meta_img_en.jpg';
	import AllBlocks from '../components/AllBlocks.svelte';

	const en_content = {
		btn: 'Get 15$',
		block1: {
			h1: 'Post a video <br/>on social media,',
			h1_span: 'get $15',
			h2: 'Post a video to your social media with a hashtag <span>#InvestwithExnova</span> and get a reward on your trading account',
			income: 'Your income'
		},
		block2: {
			title: 'Exnova is paying for your social media videos',
			highlight:
				'Are you active on social media and enjoy creating video content?<br /> Congrats, you’re in for our pay-per-video offer!',
			text: 'Make a 15-60 second video on trading with Exnova according to our guidelines and share it throughout social networks. In return, we’ll credit a handsome reward to your account — use it for trading or withdraw!'
		},
		block3: {
			title: 'How to join',
			items: [
				'Make sure you are an Exnova trader. <span>Become a trader</span> if you are not',
				'<span>Apply</span> for participation and follow the instructions',
				'Create a video and post it on your social media according to <span>the rules</span>',
				'Get your reward!'
			]
		},
		block4: {
			title: 'Main rules',
			item3Title: 'Post by the rule book',
			item3Text: 'You have to follow the guidelines mentioned in the agreement letter',
			items1: [
				{
					title: 'Have an Exnova account',
					text: 'You should be an Exnova trader, the account has to be verified'
				},
				{
					title: 'Sign the agreement',
					text: 'After applying for participation, you need to sign the agreement letter and send it back to us from the email address linked to your account'
				}
			],
			items2: [
				{
					text: 'Follow Exnova',
					additional: [
						{ text: 'Facebook', link: 'https://facebook.com/exnova.en/' },
						{ text: 'Instagram', link: 'https://www.instagram.com/exnova_trading/' }
					]
				},
				{
					text: 'Tag 3 friends in our competition post',
					additional: [{ text: 'View post', link: 'https://facebook.com/exnova.en/' }]
				},
				{ text: 'Create a video and sign the agreement' },
				{
					text: 'Post the video on your social media with a hashtag <span>#InvestwithExnova</span>'
				}
			]
		},
		block5: { text1: 'Claim a reward for what you do best.', text2: 'Participate now!' }
	};
</script>

<svelte:head>
	<title>Exnova - Post a video on social media, get $15</title>
	<meta name="description" content="Exnova - Post a video on social media, get $15" />
	<meta property="og:title" content="Exnova - Post a video" />
	<meta property="og:description" content="Post a video on social media, get $15" />
	<meta property="og:image" content={fb_meta_img_en} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Exnova - Post a video" />
	<meta name="twitter:description" content="Post a video on social media, get $15" />
	<meta name="twitter:image" content={tw_meta_img_en} />
</svelte:head>

<AllBlocks lang="en" content={en_content} />
