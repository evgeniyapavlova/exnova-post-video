<script>
	import fb_meta_img_id from '$lib/images/fb_meta_img_id.jpg';
	import tw_meta_img_id from '$lib/images/tw_meta_img_id.jpg';
	import AllBlocks from '../../components/AllBlocks.svelte';

	const id_content = {
		btn: 'Dapatkan $15',
		block1: {
			h1: 'Exnova menawarkan Anda kesempatan untuk',
			h1_span: 'memulai karir perdagangan Anda',
			h2: 'Jika Anda memiliki ponsel dan aktif di media sosial, kami akan mendukung perjalanan trading Anda.<br />Anda hanya perlu menyebut kami dengan hashtag <span>#ExnovaInvest</span>.',
			income: 'Pendapatanmu'
		},
		block2: {
			title: 'Exnova menawarkan Anda kesempatan untuk memulai karir perdagangan Anda',
			highlight:
				'Apakah kamu aktif di sosmed dan suka ngonten?<br />Berarti kamu bisa join tawaran pay-per-video kami!',
			text: 'Caranya, buat 15-60 detik video trading di Exnova sesuai guidelines yang ada dan post di sosmed kamu. Nanti kamu akan mendapatkan reward yang kece banget ke dalam akun trading kamu, yang bisa kamu pakai trading, ataupun langsung withdraw! '
		},
		block3: {
			title: 'Cara ikutan',
			items: [
				'Pastikan <span>kamu adalah trader Exnova ya</span>, join dulu kalau belum',
				'<span>Daftar</span> untuk berpartisipasi dan ikuti instruksinya!',
				'Buat video dan posting di sosmed sesuai peraturan yang <span>berlaku</span>',
				'Dapatkan reward kamu!'
			]
		},
		block4: {
			title: 'Peraturan',
			item3Title: 'Posting sesuai dengan peraturan',
			item3Text: 'Kamu harus mentaati peraturan di perjanjian',
			items1: [
				{
					title: 'Memiliki akun Exnova',
					text: 'Kamu harus jadi trader di Exnova, akunmu juga harus terverifikasi'
				},
				{
					title: 'Tanda tangani perjanjiannya',
					text: 'Setelah mendaftar untuk berpartisipasi kamu harus menandatangani perjanjiannya dan mengirimnya kembali via email yang sama dengan akun trading kamu!'
				}
			],
			items2: [
				{
					text: 'Ikuti Exnova',
					additional: [
						{ text: 'Facebook', link: 'https://facebook.com/exnova.en/' },
						{ text: 'Instagram', link: 'https://www.instagram.com/exnova_trading/' }
					]
				},
				{
					text: 'Tag 5 teman di postingan kompetisi ini',
					additional: [{ text: 'Lihat Postingan', link: 'https://facebook.com/exnova.en/' }]
				},
				{ text: 'Siap ngonten dan tanda tangani perjanjiannya' },
				{
					text: 'Posting di sosmed dengan hashtag <span>#ExnovaInvest</span>'
				}
			]
		},
		block5: { text1: 'Dapatkan reward dari kontenmu', text2: 'Yuk ikutan!' }
	};
</script>

<svelte:head>
	<title>Exnova - Posting video di sosmed, dapatkan $15</title>
	<meta name="description" content="Exnova - Posting video di sosmed, dapatkan $15" />
	<meta property="og:title" content="Exnova - Posting video" />
	<meta property="og:description" content="Posting video di sosmed, dapatkan $15" />
	<meta property="og:image" content={fb_meta_img_id} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Exnova - Posting video" />
	<meta name="twitter:description" content="Posting video di sosmed, dapatkan $15" />
	<meta name="twitter:image" content={tw_meta_img_id} />
</svelte:head>

<AllBlocks lang="id" content={id_content} />
