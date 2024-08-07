self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("store")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/scripts/index.js",
          "/scripts/alpine.js",
          "/scripts/resize.min.js",
          "/scripts/fflate@0.8.2.js",
          "/styles/styles.min.css",
          "/favicon.ico",
          "/data.json",
          "/fonts/29LT Kaff Black.ttf",
          "/fonts/29LT Kaff Semibold.ttf",
          "/fonts/29LT Kaff Ultralight.ttf",
          "/fonts/29LT Kaff.ttf",
          "/fonts/OpenSans-CondensedBoldItalic.ttf",
          "/fonts/OpenSans-CondensedBold.ttf",
          "/fonts/OpenSans-CondensedExtraBoldItalic.ttf",
          "/fonts/OpenSans-CondensedExtraBold.ttf",
          "/fonts/OpenSans-CondensedItalic.ttf",
          "/fonts/OpenSans-CondensedLightItalic.ttf",
          "/fonts/OpenSans-CondensedLight.ttf",
          "/fonts/OpenSans-CondensedRegular.ttf",
          "/fonts/OpenSans-CondensedSemiBoldItalic.ttf",
          "/fonts/OpenSans-CondensedSemiBold.ttf",
          "/fonts/open-sans-latin-300-italic.ttf",
          "/fonts/open-sans-latin-300-normal.ttf",
          "/fonts/open-sans-latin-400-italic.ttf",
          "/fonts/open-sans-latin-400-normal.ttf",
          "/fonts/open-sans-latin-500-italic.ttf",
          "/fonts/open-sans-latin-500-normal.ttf",
          "/fonts/open-sans-latin-600-italic.ttf",
          "/fonts/open-sans-latin-600-normal.ttf",
          "/fonts/open-sans-latin-700-italic.ttf",
          "/fonts/open-sans-latin-700-normal.ttf",
          "/fonts/open-sans-latin-800-italic.ttf",
          "/fonts/open-sans-latin-800-normal.ttf",
          "/images/000fbe8d81844dad032394ad8ff45429.png",
          "/images/002286d7b347094d3237dd1114200812.png",
          "/images/007c6611f64bf4b7011561cafe3a4b86.png",
          "/images/04b179f08060767b622c7002ad2891a2.png",
          "/images/04ed56a59add969cacc201d59b6dc78f.png",
          "/images/055c5b11ca9a782cddc31fea1c397558.png",
          "/images/05c0cfef387a4b06cf1aef404e986c14.png",
          "/images/07ce56deab08ac02a6536d059b40d100.png",
          "/images/07e8517a8115d43a64a4f2e0e3c32c96.png",
          "/images/083af8f779e753cc5368bd1e91efb3e4.png",
          "/images/0bcea61cf2375e6a7087518558d8d827.png",
          "/images/0d0c2f4d004e6c5cc60cd9b628022033.png",
          "/images/0d3e397e054e38d0f6e9aa9d192fae99.png",
          "/images/0db28d687475b4dd036b532a5c4c36d9.png",
          "/images/11a565411b4f6ab01580cf67a860b29d.png",
          "/images/1290a63e750c8237a730dff189602310.png",
          "/images/1349313c24880210460a25140c6511e2.png",
          "/images/142efea0625daf96a1830ed5cb41cd6a.png",
          "/images/14add959aa965ca6c56918aab1b5f5c5.png",
          "/images/15eb468d523a9f39f75c3c0a28469dce.png",
          "/images/16e6f2c713cd119d47920e80cc185b24.png",
          "/images/17a8c36fde4dfd91e89746bd39736051.png",
          "/images/17b4c4c8a2c53e5e429c838c15eab8c1.png",
          "/images/1858e928447d289dc0d843dfeacca0e0.png",
          "/images/18bebc220899454b4f4b43d5e49e75eb.png",
          "/images/1c4895223ff82710a9688edbb01778f4.png",
          "/images/1c9572ee0bd801bb347fe9ab8c2fede6.png",
          "/images/1d47af9f2b4da607db6b30f6f1a5db6b.png",
          "/images/1fd4a6c988876626fe177f18d25380da.png",
          "/images/2253182213478f56f60ec297c7ca7f67.png",
          "/images/26f88f7f2376ca6f9ded7bfee7ab09a3.png",
          "/images/2a39b93666cdba55a708b775dd154f32.png",
          "/images/2dcda9eeb4e250bb894b8c840ec04cb6.png",
          "/images/2e34b459f4e83d9356805657b0023b83.png",
          "/images/2e954dabea93b67d308883e18edb48cb.png",
          "/images/2eb784811b2f6a9596120067a4a96773.png",
          "/images/2f7141e4fb6f0eb51cd89900ef094466.png",
          "/images/2fa88be33524c8eb9f1b03f7ad86752b.png",
          "/images/2fb671bd8dab2589f18a7b161ffa2919.png",
          "/images/310b14771d2f27e6c46643327053d6a7.png",
          "/images/33d27130934e958cf54a3b70e29eda6f.png",
          "/images/36b2d5e2e89d9532e1f0d39f8df6197b.png",
          "/images/37d624438c854c50c7a5204a5ae30f73.png",
          "/images/3a7c9487e2c778d5f872b36f42c436b4.png",
          "/images/3c87a91cf82a18fcfc82acbda85f1aff.png",
          "/images/3d9cbbace3073251ce56d40505518305.png",
          "/images/3dda4ce937422d985a3a25d2731dc602.png",
          "/images/3e2db214a7cea4fb6666195b349bd1d3.png",
          "/images/3ec639826fcfdc46cb742e3f37917236.png",
          "/images/3f8dc9f375e698070e199c8a6fe5ef4c.png",
          "/images/4032a905713425d35484aa1c1d29b32f.png",
          "/images/421c0d6186400d3f9b7dcf5a1cc9a153.png",
          "/images/45175bb47500e3b5c0cbcee43e6c69a6.png",
          "/images/45d31970a0a3d8e17b4fdf674ff2b72b.png",
          "/images/46ac99043897ed839a7482ac9c1f4bd1.png",
          "/images/46cf66cf94954a998c445f11c52f056e.png",
          "/images/46ebcb4aa17921d9f94f8e109a929fba.png",
          "/images/47d3b6eb37e6cc9740ed7cdc24408703.png",
          "/images/4875b21b6750dde3c92fa8eaedd2c17e.png",
          "/images/4c6048c7738f58898865a0be52d1cabb.png",
          "/images/4cb21bbc50065d15f60580909bbfcb90.png",
          "/images/4d131d53125d51ff0814e61974c0f702.png",
          "/images/4d71649b1d70429642e274f68052ce5b.png",
          "/images/4e3f609e1a5836734e8ce06fb54e93be.png",
          "/images/51b2da1191527597f20cbc57495853ee.png",
          "/images/5277ebfe9d15690c5a9462be365c89ee.png",
          "/images/52fd0a70f58a5b4ccc6885f3240d6331.png",
          "/images/5511e5d019c6a513ef12697ec55ea386.png",
          "/images/55706e0928ff299e73c869cbb5e43958.png",
          "/images/5654e4bc795458cdfb88facfd93fd5ae.png",
          "/images/56cb9d9ad80041f6ef25d99d28d69915.png",
          "/images/575e43ce88d2472a4c6de99ec6c5b872.png",
          "/images/57d47f031742269c94f663cd28d1d76f.png",
          "/images/594cd49e506b18ffafa025d5b2ee8ebc.png",
          "/images/5b132cb9fd56c1eade722896c9a54724.png",
          "/images/5bc76c75727a37538fcd500b1867c7b2.png",
          "/images/5bfb9dd3ce6f76b3ee4a9b53461d82e2.png",
          "/images/5c45d4c478d0518126aea72197a7ca97.png",
          "/images/5c7d5c410c032e0395ab0cbabb1f853f.png",
          "/images/5e5a9216120fdee0c51243a6b7bd41b5.png",
          "/images/5e82242ba03dfcb260de45d51f97ef09.png",
          "/images/5f009f3024bc61b771a929fc6d481408.png",
          "/images/608b1bf30db01ee9a76eae5ed5e6c50c.png",
          "/images/6150b5961dddf7ba0168dd40d0df5ba9.png",
          "/images/61a7a31aa8baa72ca77ed3addf7fe09a.png",
          "/images/6288a3636425566eb23e8ea3acdddb01.png",
          "/images/62b931b806b3699d8a465966710788c4.png",
          "/images/638f68bbf456076980ff7986850c112b.png",
          "/images/64a4c873b81527647e9ddd979112475c.png",
          "/images/650a908c0e44e50f33cdb6ca4c9c5ce7.png",
          "/images/67fd721c1dbf1973f927e22902d67591.png",
          "/images/688e061c41c1e8eb7b4782de0da4729f.png",
          "/images/68d1ea926a93e608c4f9075e725c402e.png",
          "/images/690af251248e0701b1e605a77e33e8ce.png",
          "/images/698a5fac9f3a7eeb1d7a872f2a13ab57.png",
          "/images/6a46d92ca40980480b8a330fbb8d27bf.png",
          "/images/6a64e83378bd89b0169aaabffdd8265b.png",
          "/images/6a6f155ceee3d61d69492c6df850bfa4.png",
          "/images/6ab1a79b3887287367b9b139fb276de3.png",
          "/images/6b5362f5e1a7b9a3edfee9e6e8830cd4.png",
          "/images/6d69ee296ecba90c5a535796735786e2.png",
          "/images/6ea2f9b320f368d327424e3bbc81bf30.png",
          "/images/6eeaf37d8060190b99acd3622ba222eb.png",
          "/images/6ff7d6fad5d32c71d1b1bfda6042e572.png",
          "/images/728a3454aad4ed731cc4fb9867f24943.png",
          "/images/7397285ff862e07bcc954a1ebe889d18.png",
          "/images/741a540c71e60ce074841611b4a0a277.png",
          "/images/745241755500b07debad0aafd56bfb1a.png",
          "/images/745636a8ead6d3474c5d83614141d45c.png",
          "/images/74e20967fbb87bb3660750f07930df79.png",
          "/images/7660aaad5cafb4347a4a4bb2d0e25c9c.png",
          "/images/76e45894f2976e994fe0a01b02d4b16c.png",
          "/images/7a6f0c084475531fbc6e66df2409fb55.png",
          "/images/7b49d3a69b01e840a744c17720c79939.png",
          "/images/7c472926e9b63963ed2dbac17dc1b831.png",
          "/images/7dfd5084b10c6127def2d2808c266460.png",
          "/images/7e7a2c8e7bf16cc8bf42a2ea3185dade.png",
          "/images/7ed1435fb5a3b7236b11c25c39a8f482.png",
          "/images/803753e08b9460a03bec41a8d2fedcc5.png",
          "/images/8136e243be476069b6e526a7459f8a4b.png",
          "/images/81b6ecb0527607ec1e092181b6a598e3.png",
          "/images/8274f7d01b2b8746682aa7d8bae56d75.png",
          "/images/837472bb55ba88ac6cf9de72b40bbbf5.png",
          "/images/840aad8b2815c15d3ea0cbd6017e346b.png",
          "/images/84f0036322cb7887953310631f98aafd.png",
          "/images/85de322b22f7cb0d40fb321ed0ee9057.png",
          "/images/86f9f93ea71bb19581dec60ddbc967b6.png",
          "/images/8d554399debbab73708dafb81788d4b6.png",
          "/images/8d98e10bbc43983c61113559376abf8c.png",
          "/images/8d9940c1a590ac5ff3bc5a619b4df69c.png",
          "/images/8f3120c19cfc7a0d238aa09a6112726c.png",
          "/images/90a837126cbf058c1b4b6ab6dc85568b.png",
          "/images/932483488f285f04663f55ed082ca5a6.png",
          "/images/95b8491eb5eacad7277ef32255b91855.png",
          "/images/97de687fe4da7ddf21ee4e9bb37f9825.png",
          "/images/99f7a07dadd2f71c756072eaa6f38756.png",
          "/images/9c02f7622e56d9426858bd8a1efa94a3.png",
          "/images/9c8416b71b3817ddcd7a471c0d5821b6.png",
          "/images/9ce65eabfedc9dc93157dc1e4e78297d.png",
          "/images/9eb9c55cd2a1e670aff14a70fed65f6d.png",
          "/images/9f243d447234ad350aeeb843b440c9b1.png",
          "/images/9f3eb75344ddeb10b72a48e0e730be44.png",
          "/images/9fab0350c5d6a53a47ad284f044ec795.png",
          "/images/a0c36cbc37336787b1e32e2cee4e6c7a.png",
          "/images/a155d6feebbb43c284482d9d1a654f3f.png",
          "/images/a54832979b26bbe48db903eda151aba4.png",
          "/images/a5565249114e33b97d9ed2682ea11d97.png",
          "/images/a614135a1c76c6796b65e58cd4edfc2c.png",
          "/images/ab9142695bbeb1ba54f4487c96dad9e2.png",
          "/images/abccfda60407063dfdd833cb5c79eaa6.png",
          "/images/ac2ebf8b9cf3964642140d92382ebda1.png",
          "/images/ace61fe8590a6d228f7cc2a306f6c83e.png",
          "/images/ae69b1ed40bccef28207685dc51bf8f3.png",
          "/images/af1d6f4416b00a1121faa880a4b61fa6.png",
          "/images/afcfdd352a8067c8b3d4a7e0d148e838.png",
          "/images/b0bab2b238b5d613f29e0b8ea735d181.png",
          "/images/b112bcd9d720704f7c7dcfdd28315334.png",
          "/images/b3782c7450b4dd0cdc1018131e3631c7.png",
          "/images/b5e2c7cfb17925756ae3a4547dc1d837.png",
          "/images/b7829afda2686139c06e20b98db9ba3a.png",
          "/images/b8fa9d33bed0c18d40b184fb1edfdb42.png",
          "/images/b9ade6fb4c25e26cd3f3f3a31047b0ca.png",
          "/images/bbdd770263969793540c1623fb1562ac.png",
          "/images/bbeecca110e28b9be4daf11fa6a0b8d5.png",
          "/images/bcba7d3cc900824c8f0d58ff0f51897e.png",
          "/images/bd1aab43211be105d50be20e872f2892.png",
          "/images/be24b66fd166a0cfef4d7a952b602197.png",
          "/images/bf5e4a1cb42f7644f9d8e6545b005c83.png",
          "/images/bfa02d229e0074fa2f56da30a4078055.png",
          "/images/c05da31ccf5c0cf5a98f1d61068d7bdf.png",
          "/images/c0f163d065694dfe067d166ca77b904d.png",
          "/images/c2ce9150a1f9a1d87bced6127f353fac.png",
          "/images/c4e007eca1d75a1260a3466e5099c31a.png",
          "/images/c6f8e0de4c0ab9f8875c570bf192b044.png",
          "/images/cabac5f461315e4b0c8612388547e66c.png",
          "/images/cdb0949a08a0ec8447eabf228dcf7019.png",
          "/images/ceee0d2b4be2c79f2fac81fbf2207357.png",
          "/images/cf6efbb7d297c73839d839109d80052d.png",
          "/images/d150de760655c68dacf9834eee5727ff.png",
          "/images/d24f2183774b2c5b29dcf3e2c26e3e2d.png",
          "/images/d4c9a87f3a9c77eecc86ad14fa5b249c.png",
          "/images/d7a9f3bfb8223fe48196bef29521aa71.png",
          "/images/d8df65ecaa0f8e6401e106dd30f32992.png",
          "/images/d991069adf063cb97f7f5e6654aa2cfa.png",
          "/images/da2cddd7dc4091d836b1c90d021905e6.png",
          "/images/dadac8868179dc8804249da72456aa9b.png",
          "/images/dbc66f73306f5412e28c2cc2631ceae1.png",
          "/images/dbf42989c36ab50792d40b9c89b514fd.png",
          "/images/de3ee67af2d068947907b06acee86fbd.png",
          "/images/df15a9958b0264ca68e1cca4c722c40d.png",
          "/images/e086136993f638fa84f06b8689c566c3.png",
          "/images/e0f26e73214a1c8dc854bd814e9a1b36.png",
          "/images/e226d8586922665ba69eb9f2847b7c10.png",
          "/images/e374ebe9e50e9edf2b0bda76611a5d6d.png",
          "/images/e56f608b82a24ca178d276e691d0efb6.png",
          "/images/e606535f5d964b296308dbb2e5e48fe6.png",
          "/images/e675d9b7a8643cb20279fa3098bc260a.png",
          "/images/e7b8fdb1b2937368cc7fd6a7da922eb8.png",
          "/images/e9fbe831db48b58621cc9ce44391c4c4.png",
          "/images/ea14e537ebd6dc01e2da785942ef1abf.png",
          "/images/ea8c613110507c1ba679324962392318.png",
          "/images/ebcb3ef68322feca659ffd2ae9f1cba8.png",
          "/images/ec5f5d0e1483b2c9cc39d5010a9c200d.png",
          "/images/ed30812dbb02884657ffb4d85876feec.png",
          "/images/f059065e528bbbf9f240c884995bea2f.png",
          "/images/f0913763261d91fb7088a90a734e9c1c.png",
          "/images/f1fd9acb5022310b2fd601343a8c3ae4.png",
          "/images/f3883c207bed6c9242158def99f4608f.png",
          "/images/f3f332f7a6f54621f9aabd5f56e8c98d.png",
          "/images/f454df038450e5a9e7600546b5ab73b2.png",
          "/images/f4ae85f069c570c1c8faabefe0f704ed.png",
          "/images/f5185a7d979a7e9b604679089008d3e9.png",
          "/images/f76a4b25f88f260a837960da75251b72.png",
          "/images/f78930b0f34e2f2ae33521e896e4a27a.png",
          "/images/fa185e15312dcaa675d9e6f7de8afafc.png",
          "/images/fe402944aacf61e295cf04fe1a378199.png",
          "/images/feae2d26a28228ceeaaa58c63940dd90.png",
          "/images/feaf42f4aa2cff8b6258239e5c5cb5ff.png",
          "/images/ff183cefa77293525696a276f58eb0cb.png",
          "/images/ffa8e3c04ebd5c65775f4219c311c1b3.png",
          "/images/RoknShadeed WebDsgn-Dark.svg",
          "/images/RoknShadeed WebDsgn-Light.svg",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
