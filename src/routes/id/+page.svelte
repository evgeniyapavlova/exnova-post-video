<script>
	import AllBlocks from '../../components/AllBlocks.svelte';

	const id_content = {
		btn: 'Dapatkan $50',
		block1: {
			h1: 'Posting video<br />di&nbsp;sosmed,',
			h1_span: 'dapatkan&nbsp;$50',
			h2: 'Posting video di sosmed dengan hashtag <span>#InvestwithExnova</span> dan dapatkan reward di dalam akun trading kamu',
			income: 'Pendapatanmu'
		},
		block2: {
			title: 'Exnova bakalan bayar video kamu di sosmed!',
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
					text: 'Tag 3 teman di postingan kompetisi ini',
					additional: [{ text: 'Lihat Postingan', link: 'https://facebook.com/exnova.en/' }]
				},
				{ text: 'Siap ngonten dan tanda tangani perjanjiannya' },
				{
					text: 'Posting di sosmed dengan hashtag <span>#InvestwithExnova</span>'
				}
			]
		},
		block5: { text1: 'Dapatkan reward dari kontenmu', text2: 'Yuk ikutan!' }
	};
</script>

<svelte:head>
	<title>Exnova - Posting video di sosmed, dapatkan $50</title>
	<meta name="description" content="Exnova - Posting video di sosmed, dapatkan $50" />
</svelte:head>

<AllBlocks lang="id" content={id_content} />
