'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e02654d7983fb8da3bf6889f88c41309",
"splash/img/light-2x.png": "637e8cd3f9fbb92ac114728b42283b75",
"splash/img/dark-4x.png": "56ef1d15b143e5373cae788d04dae45d",
"splash/img/light-3x.png": "bc5187e79aa3a74613b464f60ea5c1b4",
"splash/img/dark-3x.png": "bc5187e79aa3a74613b464f60ea5c1b4",
"splash/img/light-4x.png": "56ef1d15b143e5373cae788d04dae45d",
"splash/img/dark-2x.png": "637e8cd3f9fbb92ac114728b42283b75",
"splash/img/dark-1x.png": "ab8a13130efdaed958c3bd9e31e93a04",
"splash/img/light-1x.png": "ab8a13130efdaed958c3bd9e31e93a04",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "431cc28dc41c04d8be4413234333e68d",
"index.html": "9fd25b0e9da79895fb1fc3639714f4a4",
"/": "9fd25b0e9da79895fb1fc3639714f4a4",
"main.dart.js": "c1258c64978dc0306bf838deb1109de9",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2218d8f489587ecd72ba266c9411deb6",
".git/config": "9ef62f7040453298078468b2c1b775c3",
".git/objects/61/a3d299d8b9729ab61a8a9cd2e206f99817b376": "ba2783b136bb874db1c32834e510c478",
".git/objects/0d/cb7b19423b83e648fb2c8fce990842dacd9cc8": "9d277e963ce040e5cd582e5d23a94ab1",
".git/objects/95/9c6ad7effec0831203993d2ad1da8b629dbfe1": "51e51f5f47504fe539e364d513c793e3",
".git/objects/66/782870fcd177af9a5da00cbf1c7dfe07ea6544": "22ff1c66e3a04bd1a31e395af419ddf5",
".git/objects/66/c4accda42c1fc156b944f9ae694b2596fd70b3": "3bb88e7da938c900dd3db3363e2f8652",
".git/objects/3e/d2963825da0d17032e1cbe37e2d6d898b972da": "64074413afd8bb58f9e7873f01628d07",
".git/objects/50/d465e7a953258e6920911363cb33e52ed1db10": "75f1aed2a6e11432081ff220e9480069",
".git/objects/50/71b4d8ddecc556952497e3e654246adcdec34c": "b3d3f59c61e3c91a43178bf0650441e2",
".git/objects/50/f77d1bc446137b490b53f80a47503bc701fc82": "cbf831612e17166de807fc834d6a59f9",
".git/objects/50/6202a68fcdceea4d720432e13c3b03b5331937": "d435824e432a6e482fa6c440ac65920c",
".git/objects/68/0041a5948a7aaff5786a26c40c4674b1f105ff": "a3a7c853a8c6e10efd8cbfd4ba34bcff",
".git/objects/68/2845fbb400e7ac8e65d68d77931ffcfdb41e24": "a9077c42866a8621f42ade27c185147e",
".git/objects/68/9bbd47fc96111853fed3bdbc9b85481c180c70": "8c6ebc99dfa1bdeaaf2c88214866aa4c",
".git/objects/68/742fa5ca1b863b1728aa090fe6014604f8319e": "c33fa62791fad90b61bf008ad24dbd3c",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/03/05978250099a3c30419da8aaf7b81bb8274217": "658f0bc8d226021e056a46be28239ac6",
".git/objects/9e/48ebf31cdeeb016e801f9cf115579e89f82faa": "f3dc97967d2940c9564048ec22f675d8",
".git/objects/9e/315e0214a91c91bef793963b65c9ba3259948d": "9ec3d759ba109d81c7be3e8e750a06c1",
".git/objects/9e/f064b13252fe8dcab6bca01673c6d26490178f": "738aa9a9df80769eff2abaeb85299977",
".git/objects/9e/6f998250e0f7da02547cbf62625cbdf8324ca2": "5dfc8bf7220705d30307f15aa4b88c52",
".git/objects/04/063c14300a7ba97d4df23c93207fdbdf9f0748": "92ce984198bb4576a6445a3a44097b77",
".git/objects/6a/f5382f59b27d7d8ef7d8c738ecfa25f7a060bd": "d24afb4718bffb583f84b2f7585ff6dc",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/9ac693237798c862e7ed7b47fd2afeb72ec9da": "57601057da08f0a48c6882f071148a6a",
".git/objects/35/c6613dfef76b5778b44943cbe3863043a52906": "cdf9eaa6489db930bb49381e393e0781",
".git/objects/35/976d4b3877b92bf7fd9a89a260a0261ab17cfd": "589552d4c34e31ff66b9bbcc97464dd7",
".git/objects/69/277c491ae5543cd0c68758954d6cbd4ae1c30b": "ebbb5618fad798ae55458e26903ddfa3",
".git/objects/3c/a8b5bcd66686d332a939160ecdb778ad3a8e22": "527a924d0b41c933340851058a314f38",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3c/4213f39c5760507fc40315a648ea6ef9a92819": "a31823078c4a889b8d78ed02fba889cf",
".git/objects/56/f45b82d0882bb278cc848978132fd0d0a51f10": "e346909a2563f4c04aa2f86858f84423",
".git/objects/51/67af3b7bc59458cb0fa1e65fd815c91452a23f": "01b5881ffcb8dde4085fdb0d5e0016dc",
".git/objects/51/356e2ac94c32c96298ddc254c5e6d6cfd99a4f": "8d73d5a0efd2f0302030b95b593f2cf5",
".git/objects/3d/6451cf2b5c4777c36cec759fd187db021bcc1d": "b6f0549b76b41c9d96e4009a4fa996ac",
".git/objects/58/9170e4858de19a2728639d8c46f96c64b8d869": "1bb0c8486431f5621e97e86537371a01",
".git/objects/67/f995e4478d2ea04d1034212799e24c90ff9dba": "b89394115cb621993006c020f493c793",
".git/objects/0b/e6138bfd1d389d4a7d6e27988b572850e888a2": "95e333856b1385e92593e84b41ec09e5",
".git/objects/94/60d7c04907c5f079a45ae34d60fac58df7af4a": "0592b13a1519fba65a20ad5fc351ccf6",
".git/objects/0e/78118a502f189cfdc27fa07dda01bf9ef289d8": "9af1865c875e8ccaad808bd2064dde41",
".git/objects/60/881fba80fba8afd2bf96f10293bf7a631e4499": "90ceef812a1c1ca7b12c82743d23f164",
".git/objects/34/8757e92b0ba022e41a02a23be7959df7cf313f": "4d55e967d2f47af9686d543e14b4c0fc",
".git/objects/5a/80c14279f3356c8a2185f133abf3641119d73b": "76622b9f17ffc6dfe2c8212c6c3720fa",
".git/objects/5f/7d3fd6d320567bdbd89d9d12640d0cf869f623": "2b8442f414ead43e01c532a4b5d14eae",
".git/objects/33/310b6763c927bce15a4d3cb25cb60a47c0d137": "b7c1e4b5f4255d355dc86f00cd22babc",
".git/objects/33/f741abd48049e61ba23a764bf2ce0293458567": "17ee541be3c4e991cd780bb3892b7313",
".git/objects/05/d7ddee5afe70ca4c96d2b423a6ce32303d5fc3": "f74d5776b53adf17a883b705a1390838",
".git/objects/9d/7371a65242542fb4807835895f9d92fb39ebd0": "74eece3d581d9e589d315a342149baab",
".git/objects/9d/65315c3dd3eee1599d81b2c5dadd08049ad3e8": "c52c110552dbc2a628b2ab6778c7eb1b",
".git/objects/9c/705f21381f49224219c3ea15f02f8377097b1f": "5f5dca546243897e0a97d5fa23d7034f",
".git/objects/9c/755fe9bb813252e1ecb92a634c8e2cddfbe81c": "322cf45dea239f98033cbd8fdcdb5f17",
".git/objects/02/f7c48ede6b540dbde62c45f7ddde09ee709d68": "0bc94e53008a108d0c2d5b68559b5458",
".git/objects/a4/8a951592bc38c85de44ca2e84bd15a0e4369e9": "2e6805f87e67033cfa255ce2b196a80c",
".git/objects/a4/d70df3b677fa26406eb0a467332ddddd3f4766": "f2f6b70096b8bf6fb56c51affc1426b6",
".git/objects/a4/ca39a0e07436a29caf364eb9837699ff58afa6": "bcd2c057bec22d3df7f5d3a92dddc1a6",
".git/objects/b5/b4ac0da67d6d8b2d6e04867eb318cdac911b40": "d5d496985bf1772d1fe74c713163d209",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ac/20032881cf197172a8f0f10f125c8ed57700b7": "e7d2041a4063defb00d82da2432c4b86",
".git/objects/ac/cc4d156099ddd4f63bb02f6f2ba56902db8ca8": "4c1c590819ef8314e3620d2cc85e2487",
".git/objects/ad/fb24f74cff1f28ef367d97c32069362f8a9ca6": "914bb6297ecd26330d730ef0d8add3cb",
".git/objects/ad/93874dc46312b7bcfc8841a555a3354826dea7": "703d0aa5d8cbb0fdd1fde0a15c24e935",
".git/objects/bb/302f22a7856204e664af47989982d460e21eca": "27b66db4d2cb08a4b82fe0b49d8ef4bb",
".git/objects/bb/1655c7e6ab1ede859ba5463401dd3f96ee1ec6": "e7de9c7933ad0b822cda89e4a255a31a",
".git/objects/d7/c7747f41cb8f4ca999d793b21e19bc85a3d1c0": "1213eb0a9b1a8456871c74a39f7a8095",
".git/objects/d7/d6a80b723cda071de208690cc3fa248fca6617": "b554e58bf48b4b263c81c2523775cf26",
".git/objects/be/feba73ffb53cae022cc2f37dd256035455312c": "953da8af9e30f1b5e5f0f9ce43c1fed4",
".git/objects/b3/5589d371383ee6164a231c561836b212eb3db7": "7b8dcba13ce4ec6dd9995c7a88295e44",
".git/objects/da/8fabb0cf32ded1671933b4be77cb5ad11069b5": "72884799fdfd966fd8b2537aea538156",
".git/objects/b4/a7e858703d4c94e71948ab98c15d9f3a338d1e": "fbfc68fd855bebad66ab06b1d8b34a39",
".git/objects/b4/13af646bec051038a948fce4c5bc301c34ce88": "851ad43ba5840237d7935b39b36fd2ee",
".git/objects/b4/34c65da2bd9f8e756224287e24f1fd5b6a7fca": "6f1e54ab59245c10327e5c6ab067346c",
".git/objects/a2/0dbcd6255391e85c80456b89eadaa64ad5c51c": "6b8d9834dd003f67cb9b2a49b0263ef4",
".git/objects/d1/b3ce3684f070c2ace4fbf4b48d0b404c523bbe": "4d5cb7d566dba5fc7f989b58914b07fa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/323f1b8e0b274cd3df0601a7e2a3a75d1895da": "1294a1197f385f919f24165d67051e46",
".git/objects/bc/bf0064757c7abca4b3a8f28c49b8eac6183ef7": "0c5e54c4e879120aa9172abd5c8760b3",
".git/objects/bc/d3c085b87bfcf9061c86f6bc81ed0ee9d4b7d9": "686571d134ba57e9f72b7ef324c79fc6",
".git/objects/ae/b9bb09c7a107ed5c4bd671f6a20c1173cff4b5": "6a7878c5b53836c7d0dfa3ef7a85308d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/6a4c636d829ce007e659e36fc738c275b1f229": "1b9555ea0f41e22e15c463cbf38baff6",
".git/objects/e2/6996476b77368bfc9a66bc1229daff92e93046": "7b3d002cc81ca76f857e0889b5fe663e",
".git/objects/f4/94e157bd5098b8f5d0fdd3cbc2c18939403823": "0872ecb88de3f9d4925eebd3ef24bf77",
".git/objects/f4/c4ee994f717f8789fab90957b431bb94c8c648": "63e8b7adc6d75e46b4fb2726775d35c5",
".git/objects/f3/256c087f751d40ba23804bc9f8c1a92a920496": "9fdd58756b25c1eaa515e9e07b08730b",
".git/objects/f3/16ec991b634840a8ac20111131cfd0ddbb555f": "97a9dd3c4c16026898e10eacc1c9cd6f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/28e3b4e2ac3fc9c1bb9f7bddcdf95357aeea63": "53e2d404d00f65ee3e18da4ee9a5605b",
".git/objects/c0/da5137493588725f56c7da2104e581d9aaeae5": "ff667f719b3ef5294a56ce706f85d54a",
".git/objects/c0/b6dcfb5ea2edee9c016aab438df2e5b7b4149f": "890c77bc112d46de77e7167eecb8ffee",
".git/objects/ee/65015a1563e385bdb55d27f009938bff73598e": "bf8c48458d5f087a2222c21e720bdbec",
".git/objects/fd/452d5a40ac40fceb37589f0f33c6ebdbc7ec0b": "6b028d42e96a12a436483cdc5f5c416c",
".git/objects/f2/20cc8602bcc12f5f4d27ccf7d769a418b47f0b": "ee4b024cbb6b9981769415f2a07f7e09",
".git/objects/ca/c9b5f9ab42759c65d8ceeca25756e460c4a5ea": "061fe0f9a0b4b1474d7e22c309018a0c",
".git/objects/e4/a56e78291a6150e02827394aa1d538833ac3e1": "7f655ee5834ccf83a94da9da6789beb3",
".git/objects/fe/accdc0efbc0e81d3323d8d5f028d480d714d77": "cb5b656afef29902f4451ba8157df679",
".git/objects/fe/89524e617952a96e73ea864c4afed25c8ef033": "cbeeab0088a02f7b6f8b12e7d65646e6",
".git/objects/fe/e04859652884f48bbd0dfbda6760b830815392": "2895ccb5dd8241578dfae45fff4d050a",
".git/objects/fe/12076dada20461c61149daa0b516a990a25fe8": "7048e1a6c6b888ee470b48b91db30cff",
".git/objects/fb/ac24e10e374a3e2d59c993ac4e8cb464e117d0": "c65a509757fccc9255fcdea26422a457",
".git/objects/ed/47a5a9b92d1c6b4f08042ad6e7e93defe90dcc": "f825c3449e893f377cff458beab676b9",
".git/objects/ed/9fdae7ed8a26545eec9b75686701afe0359afb": "cc3eb548d08b7d71780467839cd47191",
".git/objects/c1/70c72ab11ba9ac05486a7b482f35db375ccd92": "12c19d8641dae9836b58af68709f1abb",
".git/objects/c1/af43b06eec0c0e186536268f7b1d5fcf68eb09": "6f6d5bd2a3e43b4a24aacf604b15320a",
".git/objects/c1/51926c46e23e4c204860c7c8b13f675100bec3": "064f8cd33feb0e44753c417fd05926d1",
".git/objects/c6/2c838c0ee9ad3ebc89bbb538e4fa7ac9228be8": "dbf150695d68cb00b8b30b36835c92cd",
".git/objects/c6/927e52bd170db8afe70dca1a61f1df7e39efb4": "000ab6ec3173be05d6f4fb031baa1d4d",
".git/objects/c6/7c4941854394655b92d3062cdaeeb8bbd5392b": "a0165d3e363c5859e18b2d6932f19cc9",
".git/objects/c6/118ccffbfe4b0b5c70ec5a0106f88934183f66": "ad023a9f298e6d6882c3f2a128a917ab",
".git/objects/ec/ffc7f0397480483fa5d6abcead5bfa2c19158f": "39e771d3cac951de740b7341367a15db",
".git/objects/4e/3bc960198d78b667a80d2f4d59b2f30dd30bcc": "ca1a61e641d5c8c8e956ffe790a19bfb",
".git/objects/20/eb14164ca52d3e4d2c3b7887cfcabbfac22eb1": "e4180a2d85f19962ce12786f02a26cc1",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/11/8cf039ad7301ea5be9f65299b88ab64b598887": "3227dd85d00473c8262eaa6383f9198e",
".git/objects/29/da5c241f29f09cebbfedc50fb2623c9e898238": "b7157d2dd0258c26f1f6bce415200fce",
".git/objects/16/7e8a3eb7dd460593883049a75ce03ad0f7ef48": "5fb2b75020ea3e2743045590960c6664",
".git/objects/16/dce22bf05af8fdc47da7eb88acf2f7a66a2184": "c188fc766a353f98f26ee2436edf1eb5",
".git/objects/16/9136f6f1231da72d04ee088d92abff25c35e57": "8f6cec8c88db0f931c5554638dc164d6",
".git/objects/16/1ce050447b90e9ec6052d06724f1b872c32687": "91075f12c0251483bab88c0a8317049f",
".git/objects/16/f08dc2e2e58cdfba91c894f5117fc13dc073ca": "14397f4d1e0aa36495478e25b0e10441",
".git/objects/16/bba64f5b895bf67f45daf4b77dfc941512b1bf": "fef6bbcbc5836183d0e5ab4133eb7ae5",
".git/objects/89/c0757a7268694dac1bc8d667e1da70fcf0fa59": "6048caf520437ba64c446ca86a8df07e",
".git/objects/89/6dfc6349fcbaec03dc3d0dcc09f39494614d4c": "dd8fb50b370a076008fcf1e3f16f2958",
".git/objects/89/e2ccfd12e17698fd326c0372d1c0be35b7364d": "6e165ba9ff7cf3d7a7700a1b96c7af53",
".git/objects/45/d5b06f7c5620385cb4b881e6e68aecb0e9a8b6": "965108152c6c2a1ee851410bfa05e5de",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/4fcf400a95c7ffeaae71dbd1c463f75cb1e1a9": "89ed6b6572d738085bb1842d551d642e",
".git/objects/80/dbcf8aa761de01bb8638dfb9f668693d82c8f4": "5e3a778187bdbeed3bf2ecb48710d397",
".git/objects/74/a066783703b8c9961b87b7c89a2b212e4d43a7": "833e82a69aa38e22eac7aca2d958c03b",
".git/objects/74/948983a6345e35098d80b8703313ca94d5558b": "b525bd6fad350e5b07802549654d8381",
".git/objects/1a/52400afede7d772a043b09ee5129564554dc34": "0d4b5d73b2d328c13c348a150a822a5a",
".git/objects/17/b10fe499d43520b8b4a01617f198b14f48a0de": "bc4d16ddf897c0feb5913418ad1c03b0",
".git/objects/17/62a100819e09c5b12507f3fc68e645d2bec639": "a9261654ebdaa957aa0095abfd8e85ae",
".git/objects/8f/4a575fa2b8bf526b9f1e326357ef5b676b94ab": "d245f0414cde341e60e1cba9785a83d1",
".git/objects/8f/d834b374ed8093fb71e9b83defc10a5f2b001d": "0987ba99cfd8b558750f5a97b7af412d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/7bd1e07cc44c5c980f75a300ef6c358df4150d": "14fa141859b667f1e6b56eeac3d6f81a",
".git/objects/10/506ccc2f6b83be8d75c042671061f9a6fb6d52": "1abd56a628eba5829cc995ea44989fbe",
".git/objects/10/f8496c6fc60f0bd8ae924d1b8e84b759e5d5ce": "c9a4367417de48f4a495c54a01ef7151",
".git/objects/10/e1c8a94a87cd046c2c6d4c7a41c20ecdef1129": "9564338513b271616d8e8333ecdc043a",
".git/objects/10/b68f9b63a5fbb75fc99787be1af927254d9e3e": "06ded82a234e013b3cf922377b4fb662",
".git/objects/19/d061bc1d9c2b29b8f94660712b196c41857034": "3494fe2fba27be8a14b23fcbc3285ad0",
".git/objects/19/c4f52e1bfdcd0cf47914bda32034e6cb3cd614": "7ed8ceac1dd00bae6aa45053661d62be",
".git/objects/4c/b18dda42447ba476750df136983c79ed2fd6e4": "3f29559c672f85e66f65d95ce5be9890",
".git/objects/26/6b77a550d8a1b1c123a1f050d9e2c62cafc9e5": "3f444ed9a6a57ae4d4ec6381089b81f4",
".git/objects/26/79300f6883707afca2359e2edcd2ae317c4b29": "c4a7fcacbf7b87fe60c10e7f4647ef5f",
".git/objects/26/9d92a44565062b99810e2e0bba2bf4d3dc54a3": "bc7ce859d4c5c00364aeb89020b3de4f",
".git/objects/75/901091d210a216936895c905ed39d4e9920bbe": "cbabbabd99bec36d32bfc298b7188a5e",
".git/objects/81/eb53e204ab5ab2bee4b5ce444fbaffdf5f952f": "5c52e53f9d1baba73ab8e7c3b3d36615",
".git/objects/81/b327eae5ce1bb872cbcf837c8fb121404f4a5a": "705e2a0f7615580d29f2c258d1f7f6e1",
".git/objects/86/74b351bf0100fddc6f9eba593c30f6a45accac": "ee7445e7a2df9ee443b948f6fe0b9550",
".git/objects/86/01cb065e51cfdd3853dc4bf159b08e5eeedf81": "fe33150cfe635d743781cba2b9f672d2",
".git/objects/72/c2f1c3c74ed5a6532de85a5096b0f06c9e691d": "8daae7e9d6601d107e3be3e174fa5df9",
".git/objects/44/49470f5c3f3f316ba475110e37d6314b304b2d": "f3a64f6d2011f369595b5ba96413247d",
".git/objects/44/175ddd77d917c2d3bad1e3e9dab4211647f8de": "6e4873ec212786c3a736546e8cf6e9e3",
".git/objects/2a/398b7d0b92d6cbff44c83506bb7cad68f74e6e": "238dc2d112f965448a7276be7cd713df",
".git/objects/2a/70345e7b5685fe80b6f91259cce0251cf0fc17": "f52b04628e1b616b3e9201a5c858e2e7",
".git/objects/2a/960d3507ac3e90136f1fa9e3889bc59dcc03c6": "7957d2e04978fb6bae7ce6acd0a3df2d",
".git/objects/2f/49ca3b231733b9e77d68ed1f324ded1459f391": "72e01bbe80129175afd19a36f8aed94e",
".git/objects/2f/0e88ba84845d91467da21c0acb10019248fdcf": "9dcbdc3e82ab780b832e5d9f8d7ba4df",
".git/objects/43/3d41e39133788de8f518cfe27ab4022a97b302": "117d644cc346a24e0d3d03cd06a139c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/0ed948b7ae305bd5bd10e2e486e4e9f6b2493a": "f7714f63767a69a725dd9b2cc4524c44",
".git/objects/9f/7034f4ec9214381dc78db538b5dbaf20a4cf71": "18b8f3af7a5637fbcea54e4d43deab99",
".git/objects/6b/7ce2016cee4e6c52592248339ce7c8a7d2ed53": "a6bd555fd46e0b8544e7ab973a371822",
".git/objects/38/3ce6dac1f3f549aea2fc4952d3e6ce03b14916": "b2672566384efbb07ce8e6e6987be548",
".git/objects/6e/813bf7a90f3024bd10b006579522733bade9d1": "63e3966657876c7412c7ff590b7fcc86",
".git/objects/9a/117341fa326e088aa60ff75c42c3aaebe68beb": "ec7d7bb914db848bbf144197c3f7cfae",
".git/objects/9a/68a24d54fe40bbb461b1d759af745789aece4b": "4099d03c5dd51e0424bc9acbabecfb51",
".git/objects/9a/2e971a6cabf43b812a70d4d4a6240bd570a081": "a2bcaabeb2db42feddf59acd18e3aaae",
".git/objects/36/f1b6d102bbbff50dcd59df17ed9784758b24cd": "4e5c807b35cd6abca00e4460d082962c",
".git/objects/36/0db2b94fb48e1e82e31cb5300d000c3167c532": "a36048e4fed768ee2b761275a61864f3",
".git/objects/36/028031cf59586dedeb40c06eabb79e0540ad77": "f3e0b11ef3d7fbb3b54ea30e642fa0b1",
".git/objects/5d/7d0ba0c3f22a25eb20158d73453b4075763cb9": "f43b8bd05dc8274b9c50b7227f864ac9",
".git/objects/5d/22f04810c064c1547207462d7f03a78d2af4ab": "094bbd361d22c667ba91e2ef5e1159ed",
".git/objects/5d/4d831156642363bbfb3abfd4a6f3fa77008142": "7bb89fee3faf9a66778f11e0160288fb",
".git/objects/5d/3088b3a118e60ac18bf28eaaef4d38597e525b": "d2e80451629a4f76faccf8decebe0f15",
".git/objects/31/c0c3738dae75b407b3861ea5ceaba2f2e2ee8b": "dadbe2ab1f2488ec7712d6041f15b040",
".git/objects/31/85ec2bc17c6150b4e71c02c5b0b0e38c7eaaea": "538f202f329d9dbb0554017cea3211b7",
".git/objects/65/087994a927a803069aefe1dccc7374561609c8": "2010915b78cabb741cec8f00df556d1e",
".git/objects/65/7258ee36161ece6299507dc05f090f62ec19e5": "37046d4ada2c3053902fc18a655e3828",
".git/objects/65/b9c3078bcb56eb419f81e358f4740fe7db1ab5": "bf5fc31f8ea20d1c565dff0d43c880d6",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/96/a47222c800c6226377f99af3236e61cdfe4d1e": "da8f0137d3d940700a73e831fddd7ddf",
".git/objects/3a/2f1bd862e157664e87998bf830a2e8836d3d2e": "5a73457640d3f86ac407affd5fec956f",
".git/objects/3a/36d623110597fd78371f85bc2e898ffd4d94d1": "d20ee27d1e612d44a023cf7a4c2aa316",
".git/objects/3a/36a91e50f28473f590c9e6571354fc8a795cd1": "c59a146e370d54337af53c13620815ab",
".git/objects/3a/8565c76bf6180df91487bbb69e1d55b2b35171": "866511d260ab1588621462edb52a2678",
".git/objects/3a/548e8a4f846ac14b15ec1a46667ff60492b762": "9a23277073b524f80878f8af8ef52722",
".git/objects/54/9a76bc623b961f745d36c513417ce0dcdce6e3": "3206d6cfbe67f7d97d8789d15786860c",
".git/objects/53/959a69799db0eab4097295b52d06cc8c7e1085": "f4ae44b946c85c09b7fe4ad5e2e83005",
".git/objects/3f/10fda27b1b854a029311fea8fb9450777c0a45": "b21f1b110f533497f58a2d56599565de",
".git/objects/3f/27a945f4d16196c51a5032b87a2abe1026903e": "988716e6828c6abde6f74b678b5360b0",
".git/objects/30/9323468d6fa5a4f16a77a4553b0d34122efb49": "032ac312c35dc9f38dfa6dfa641f6591",
".git/objects/5e/af42e482d67d99fae98faf4e50d2e64e9795cc": "9ded362e59b1309e394cb228dae0958c",
".git/objects/5e/6f60a8b640d4110a4738db621e3c13a4fa9a5f": "b1862f388459d81db7051c3fdaed76d4",
".git/objects/5b/3ae288d2d77685b6b692555c66601dd81e34dd": "f15c9a666b28904360c6d0c2e7394cd1",
".git/objects/5b/ce242d3d05112d476327039d40d47a222cb6dd": "beed7c9ec91d42b6126d3bab07c8e686",
".git/objects/5b/4fe3e0beb1c971ed966448483290536540cfc4": "8bbb7239b689598332e1e948dd708760",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/512e9e87b654be6282f64dc14aed314aeb2d11": "8eddb31317779310d623bbc37bba784f",
".git/objects/08/827dd295df73b9054b1ce59c0edb5f099610a2": "2777b43d9b0e050483d3e943214546b5",
".git/objects/6d/ed4dae154dc682ca42a4e095d864fc60c5c402": "cb4aba893aed369b7363527894d9dead",
".git/objects/01/353d7b219f962a4faa0914cf491373e1a82738": "f23e8c7807db99b5363e8b9c68e6757d",
".git/objects/06/0ae9862fa7c82e7cda532a6c5ed22b42253e7a": "c71a2ae83832e854b95eb24bd110365e",
".git/objects/06/0b50d3adf793a1bc18bf079222e8388b82fb46": "23a7f1dd356869ead81930f410781fb7",
".git/objects/06/32d3aacb9e3227926044a5af4c7b327cb5ad3e": "0090f2734351caa4f8b97586d5707993",
".git/objects/99/7186d421217dd744c9e7e9a2c963cfee5fc2e2": "c7812e4e857b30fa0a21293ade530923",
".git/objects/52/d42b106a69a6be281bcf3d4ad0c1de31cc2f99": "cb753a3f5cb974673d45f88c1c926bac",
".git/objects/52/d1ba7e45209023c52e141e79c623ff5470b087": "6428929ea5b54fe530303abc5c712ffb",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/97/5138b3c94b13f22b1e7f26ea03a4867986c7bc": "55a44bef86fd59cce138a8326b3bbfb5",
".git/objects/63/9891d327d0475a55a56b5d69e38a0b309c5bc0": "d6f0b94b655bb349265c2e46e3bc44b0",
".git/objects/0a/b050922fd9d657d1ecc6e92582c055e368923e": "1143522ae84d8193ad9f0588810362fd",
".git/objects/0a/daebd8cc6edeb8b02babf56c94b286a2226b12": "92790623e7f872074a1b2b77be946ae6",
".git/objects/64/2f91dec734109389da74c45c9f483e06bd71a9": "edaf80613ad10e31e6ed871307353b3b",
".git/objects/bf/16c2e6549e64cd503ff2fc921c88571556f6eb": "69cdf7e4149eaf2df15a092ef46c20d7",
".git/objects/d4/c94f6960b6037e659f03756300d6d9754dcf6d": "0016c7ace6851bfcf81884b046a9c912",
".git/objects/d4/f335557fc1ac8047eb2a4f80f883aede097504": "d5b667fc3d7e95445542f57664e4e086",
".git/objects/a7/75fe1c34e6c6a234cb98a4a7f7b2d02671942b": "78b31ad6c81470e561371b1cac8e6c85",
".git/objects/a7/5024ad9395bf01b0e93683d54772434638ca1f": "8bbcdf51da08caa3d5800e784565497a",
".git/objects/b1/0cd6ba5fe587377995cfc18dd9105f2d97086c": "ffb9b98f2978ef9d0ab85c724cadd337",
".git/objects/b1/fea382142f3c4c7db5203b38fdd386b290bc43": "559638bca790afdb251aff5cb9daf47b",
".git/objects/dd/ccca2bc6040e43f7e1f6336d268b53829f787c": "fda5ff5267edce007156f071a290b544",
".git/objects/dc/7de59f438d133e8d41ce185b8f62a893214eb8": "a18057b3d7ccd3d51ac8072e18cceb85",
".git/objects/b6/26d0fdffb56aeced99ed6854c7161ab34a9348": "1dcd3ba1d6af6852230f919bb40bacbd",
".git/objects/a9/67527fac2b7105353026fb15d46dd82b697811": "36cc6703eebfd6ca2ba2903dcb31d534",
".git/objects/a9/b69af6045d128b9454ade970774da1b0c0d459": "fca10962c7ccdcadedbf1b10a3b5adfb",
".git/objects/a9/0915e5aa1de966c2d6fd8f8d6e96579ac2dccd": "82685cf24efa0015ed0d0cbf9f3fd9ea",
".git/objects/d2/c71cf18b1d8bcc1424fcdf0252d67e63e573b2": "3a88fc6cbbaade35f64b8569c2297a95",
".git/objects/aa/985d065bec9e78253af711c73dd4391f9e1dbf": "4ea6d2e6ed19c5867e549cbd5ae58209",
".git/objects/aa/a52cf6c7cefbc6ce339f027dd8f434e5709de6": "4b791d5f2e553be1ed27e6a2dcda69dc",
".git/objects/af/35cc515d4b188e06414e80a5922fcfcec7d2ae": "2b55d51b9b76548ec88b934cc0956a78",
".git/objects/af/8368c5663a6f0dda4efa83ef1e2bb2929ed3cc": "3f6652281a78c636498964544eaf181e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a6b3222d6d58dcfd2b5288d09307dc63c151f7": "fa981e4fb497a1707a89e983a8f9abd8",
".git/objects/db/904ebcd94e7644d708ca4856506d3254cb24bc": "056696a5c708f4f8490bcc00717bf1ab",
".git/objects/db/4f8584a15c4f417fc49ac2381b8d4351dcb229": "255e35c2f28c926312b3af21a4640077",
".git/objects/db/7a5bfd37b39724e8ea537399608d1bc783fb07": "b008821c4945217a80b4ed7b52d8bfa8",
".git/objects/b0/b5994be64dbb96afdb974fc8962590b8ccd0c3": "24b97b85c392aac48e00425f27f9eb1b",
".git/objects/b0/ad2ef15323370395d5979c2136733db315d187": "1d1ba774486cf2cd4da0e240e593b15d",
".git/objects/a6/0769493d28b62fcf5d863234b03b9c928231cc": "7e12b82182335d5d67a2a3d9f4106407",
".git/objects/a6/4a15c7c74efd1699f2ade3dd0c138289ab1625": "85c7a30c5ed9c68782b048a349614948",
".git/objects/a6/3f20b0a524cf1a8e23800f304fb08aba8f8550": "4ea2ab8b6d9627fa91e9a9647e18b67f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/cadd9e3276bf3647b83da205d5d14fedf20205": "2071535a513fad99ad5c826cc0beb0c2",
".git/objects/a1/d79533e8ac8914f1ab7fc72329e13829217591": "fcdd7ea5ce4b30167b54a91c65025fa8",
".git/objects/a1/0dcaa0f39c7ef5aa1e8b916c4219bf79403452": "fd95d761bb6b25865efc8083977e4857",
".git/objects/c3/c66b8c55ddf7f465d114cf8d01ef565622d899": "3448e7a2bba7a4c696e5e901319b99a2",
".git/objects/c4/d874e971432e9b5487ca9a142ddbc79ef406c9": "e4e8537255577a373b98832de7225fa6",
".git/objects/c4/3ba662855f71b3bdb01fc2213ffa6a6dbcd40a": "a2f8d61a3138863ed23b01b7ce34b29d",
".git/objects/e1/0216eb99d0f355dbde00310710cdea227b3fc9": "5ebcb7a864ac7506d4388fdfd6bd9a1f",
".git/objects/cd/adc613cec32a51c576cf8d8dbc6bd542aed6bc": "7219865684c42ea0f43344f1cee0f3b3",
".git/objects/e6/7a582d710f7a05d3f5dbc1c62233e75acac755": "1643a02c66bffc431ecf4f6722547bba",
".git/objects/f9/451b150c780e327276d955363263c941d2f473": "8ce675886a0049b7cb3d70be189004b0",
".git/objects/f9/f6822bdd0040e8c7a0d44a6935e74b47d7816e": "f9819bd3d7f122dce916a6f16b2be027",
".git/objects/f9/e43db68fd8e43006a429438422e41714035095": "7ae1c79b72515c283371171c01b0f513",
".git/objects/fa/b47b8f733c09a53fe07ae5d81313760e8f431a": "71a418555dd6e1ea2d6e2c25f6185e9c",
".git/objects/ff/2495ed85b98237acc56dca87e80b8f8ab5d41f": "ec2abde127fc0d72c2d14b0ba9052e13",
".git/objects/ff/2883d28f9b8dbca0688dca4ecadd1642e3688c": "2ba949c2c90fc7674dbc3f27d8b7daec",
".git/objects/ff/0f435719b21700ca11a9c2c603ec0a133f1d2b": "9ff3441b01f2307aab7177e6d56f4d23",
".git/objects/c5/033bbe193018bca543864407faed72aca2b3c6": "25cd5b5a26789af166bd704456726426",
".git/objects/c2/93047047dd75ff0d744469309f623ad01db498": "bb3ae227645a416e31babe9f643769b1",
".git/objects/f6/f133a049390bef4493e8ec659f9e7bc4119d83": "da6cc575e8317ad9d0e7be5e7be2663c",
".git/objects/e9/45acd72024619722a644fdc874720c1b747562": "da0562d0c8aab041832f37a5d2d2f153",
".git/objects/e7/ee8d02b77db5f2caa71eaaa6a7eb5ba66f8e35": "e618227a80deeaf6f2efef58d8b6ba6a",
".git/objects/cb/f6f800bd10b22de3f9b41b35bb093f146d8e03": "6b421216f1c7dafc501e1e15086e4407",
".git/objects/cb/fff25b26054c728771d33e63b7d96cf2528614": "0fc8dfe760c827b9a3977f918b0f786a",
".git/objects/f8/6b4f9929746099368d28d1aa3b704d816d137c": "2775c27daa485d83e5e2e0958150ed9a",
".git/objects/f8/149babbe7e4e20b1e9c657845429cc3fe62a49": "7881868d74a97590d43582b8c85e6605",
".git/objects/ce/314163e17bd21b6f318c8b3d0873a912cea694": "005aa4b87a719806c0a478b6f802e06c",
".git/objects/ce/1319d7dd324cd74ac15c7d5131a8f99ac834b8": "1cc66d7d8329565528ff7a537e9b14d7",
".git/objects/ce/6b1c31019560077f0e8a80f83e8997ac5a9b9d": "aee5c68b7901dc422c99516fcf0eb11d",
".git/objects/2c/aa5025cddeb151b445d7506774a2f4f1ad2822": "c474d7df1d1e9670521f3bdcd24d2e79",
".git/objects/2c/996dfc505ba946474492ce0b741158c520abb7": "1e1a316ecc178ecd4c9d90b6d722a1a8",
".git/objects/79/458e1750f9b15a1adb99243016295ceb04a418": "7725eef4b9513b3cee440bb0af2af521",
".git/objects/79/ff2eea1193eb4d3bcde88576c2cdb9a39337aa": "115997e3ee0982fa9317597207e98d0a",
".git/objects/79/946b46fe89e45e97d641ebbfeec04c628cfd3a": "bea4e918d2191bef049270fc1945cc75",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/c01bfd4ae381e7a7c5d6e2f995e9939d25266d": "8ddee33d091e0497b963800a10c0c4af",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/4854d579431e5ac7bd9afbe12f5a7b047b9561": "e56e48ae0019be89f12009fceefa23c9",
".git/objects/41/1429dbc1644c4239667ac70f294f3906841c69": "23973443d7daa35675506669b97b5d3f",
".git/objects/41/7d714181d7197ef6d6e7aea763d0959f4c1baa": "0656d520dc74a149319cff98adcc1dfb",
".git/objects/83/ee7e09fc5a843525e907941192686e5ac9d2ca": "26ed9c96c0730b78ae996d3e80a78e2e",
".git/objects/83/ae19b11937bb190a91aba6397d1edcbcf3d27e": "7dcb9941a7b4d3e857dc1ec606c0ebf0",
".git/objects/1b/c810fb1f5b6afd20f77e5e18d952768671513d": "be1fb6d4e26065f979508d324a883068",
".git/objects/77/125e75ba92a4f384649d1a02a2a12f32dd8ec6": "742aa685fd5898b38a75e53ec73db4ef",
".git/objects/77/fd48b63e45ff6f9950f371637147a33467473e": "a381750cb0a6c62f20be8cd49f0abac0",
".git/objects/48/12b874197eee712b81998ba6c30e32591118ca": "6397ebbb1a4bae757212c6bbfdbb3201",
".git/objects/48/68b8b9a9c89f7dc269884f302ea05a5cb04ce4": "bae8c674e3f7f065b3679dbf4947cd3b",
".git/objects/1e/dbc45eca799c7a58e7a80d0b50995b1eaa6647": "03a28b979ffa30bad05052134da64ddb",
".git/objects/1e/153419fbd4ab47d4a9cdf3ec39a8c59b122654": "d10aeb740d31cbcff982ab75f624c3ac",
".git/objects/84/45a12780818d8fc6bc223131a75d3af9c340e0": "9b488185b4a71c459860e723c5d3143d",
".git/objects/84/7a1858aae1e8f2e0e7aaedb9fcafafa89f53e3": "743433ee058834d4f07e5e47888adaa3",
".git/objects/84/834c0db282c770b7fdaf7d2a23825c5c97cecf": "3f692815dbed187e437307245e59cdf6",
".git/objects/84/6417f8f3827a03a93de4d811c6af993bd83c65": "4d9bcfc899e5e6223218225a81c47a7f",
".git/objects/4a/7176fef9f8c26c646be978de4d0ee74254dc01": "7ad6288481d960a42b29737dbc3120d7",
".git/objects/4a/4d78a200be848332cd4c31ba0389bf57fcf1bb": "836b9a94cd05c48ac51d4f093bc58f29",
".git/objects/4a/be16969bbacb1136cddbe6ae4a14fc48343367": "cc78a67b6f7531d57b7bd932644e0f05",
".git/objects/4a/4c3ca27bf3fbc9fef14be83fc13d98ba25143a": "1259de909c1be986b3e4ab89b1362ed4",
".git/objects/24/45352be1b2f19b8b8e1af13b24fbf4e0960a06": "7ac3fb0b4ad33a9eca18357d6f7f4d05",
".git/objects/24/a69de0bc072a621bd8ca4eff994b6928cadfa6": "833850cd91258962f896bc6b444eb1a8",
".git/objects/23/0bf4239f83ad20c0e50ced7a7f90ddf1c83875": "0d6dbbacd97531643c03d9c9b4ea0a6e",
".git/objects/23/7185acc90560e501e3ea8c15642cb3dfd2cc08": "184c30e67b7f42aa712b6c928a0d5257",
".git/objects/4f/e90899bb98f1bb127cc2a610a2a7d79e2d83bd": "6179bfef3c49fd05e99ff94633846926",
".git/objects/4f/81089ce98e5b1c459f908396e4050d44e5adfe": "048dce634a4d1a743131ecc2c9a34227",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/3fec1d025816e8b364ab29d4aa1f68bf15e09d": "687e60d54e26293dc7903a23c61c0b25",
".git/objects/1d/18c6e9cfcddcf471659e30114026bb17b8ba12": "b223290e5af7a0aafb3ebfa1b6256c10",
".git/objects/1d/7843747cf27198941f55433ccd78a0dc175980": "d7133bd12d7cb32152603ff5c2162215",
".git/objects/71/c822c140924ed8ffcf0a041a3be852deaafbee": "36a91d3592e50ef46c8d528b8ae96980",
".git/objects/82/64f1dda5132c88227185189d45b1ad2486fea9": "45c4a516dc423714bc939401ed1430a9",
".git/objects/82/a53472c5d582c3d4ec296a052329fea878da74": "f503c2e4f0c0830ac09b1b3abebdd9c2",
".git/objects/82/c868e64be6435c2462daef36c93351ae3ea211": "4bb55dab69fb4a0c45d4b35ee6ca2014",
".git/objects/49/073c5ffd799bb3958219af7d2ba138287891e3": "e8588e545827f00a36461037663bce82",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/2e/9ad26b76a74dc4ea2c7210edcff57caedb288e": "395e0bb0eabefcaeb4673a10a9184d2f",
".git/objects/2e/72fa1437c8e653372b352c900459d9aecf9e41": "7a2d820776c2fa0d81d779ba84b2b6fd",
".git/objects/2b/fe720d4ea5ad79c63cfc9c4bf0136fbfb12472": "579a6c4b51bede0ce928489e1ea250cc",
".git/objects/78/14b244702c74400439f70bae41f63e23988d7e": "7f0978bb1eeb76d082560a8bc7903f44",
".git/objects/78/5f74d2b2709a2165061da2390edd7abc64e383": "91675e87c7c3c4116c42069a08499b6b",
".git/objects/8b/ca7e02687ea3ab69905ea5f0b7f7ae3032d451": "a36bb84a71d073861e30c18ebc6ca502",
".git/objects/7f/84391c23c072ddb8b18e50bc8f39ba9cd43d3a": "b867eaa8ed43a54c89528cab742ccd09",
".git/objects/7a/86aa5ab4e4225472d78054a4977fea5d39a8ec": "0cbb5e4ae4cbeedfd29c2896d3eb5e3e",
".git/objects/7a/4769206d43d004d77e892e2d16d8aa0cfff954": "75bec92744d0f799828fdbc8f9b35ba8",
".git/objects/22/46247fd59d14c82ef6a3b4dbf207e479b92b92": "0ee2410bb722a7eea28274d1144567d3",
".git/objects/22/ec1d583168ae22151ff00e3a8641de97455d70": "21712b5a69961e80765870095f882a60",
".git/objects/25/58038118c37459b1898b802f53820b2efadaf8": "a4ff8895757468693adb1d7a1b755002",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "974a85596598afa603c121d8508c1959",
".git/logs/refs/heads/master": "a4770b0ea6cb5be8798a84a759e18660",
".git/logs/refs/remotes/origin/master": "eaae325e9b486ee59600bbc1d7492d9f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "37b3bd96249117864428d3b61f85cf81",
".git/refs/remotes/origin/master": "37b3bd96249117864428d3b61f85cf81",
".git/index": "2f117435ac5292df0c1fe5489e5ebff4",
".git/COMMIT_EDITMSG": "c20d02301f8a823d11e1cc4b5d8ac144",
"assets/AssetManifest.json": "bbbb1daddb1ddb25f4d5fffacf7eedae",
"assets/NOTICES": "1498e1a88dd6ae5667a52db0d3b22627",
"assets/FontManifest.json": "6d29ce987093d8d160c224c28e0fe76e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/Be_Vietnam_Pro/BeVietnamPro-SemiBold.ttf": "205935f41af371be49ba31b51187e36f",
"assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Light.ttf": "4880b6055406c3d07487cbcf665f4d39",
"assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Medium.ttf": "1ac40fd79ee227d1457f552b22828aa3",
"assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Bold.ttf": "48bbc99d88e5c99a2bc2780f28c137e3",
"assets/fonts/Be_Vietnam_Pro/BeVietnamPro.ttf": "ec23619ef59c67e6a69719e8f0780a7e",
"assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Thin.ttf": "479015dd594feb75bb95ef7cf6719af9",
"assets/fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraLight.ttf": "18be20ca8d219993704166a765fce6f2",
"assets/fonts/Be_Vietnam_Pro/BeVietnamPro-ExtraBold.ttf": "4902e830ee5797b9a61ccc74b339eed3",
"assets/fonts/Be_Vietnam_Pro/BeVietnamPro-Black.ttf": "4cff70e430fb4667ec3e6725e055f8ec",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/container_background/top_collection/mid.png": "c74e68729cb40d6ef8136c10c017e14e",
"assets/assets/container_background/top_collection/back.png": "8acaebef798c06e2763b42394f66ef40",
"assets/assets/container_background/homepage/suggestion_article_background.png": "097e2638aa23ed0157fd83198bf7916b",
"assets/assets/container_background/article_minimize_content_background.png": "ccc466f13961f243fa859e64b0487fa3",
"assets/assets/container_background/explore/activity_together_background.png": "85f58225bfe44a943cf7eb0ed121e94e",
"assets/assets/container_background/explore/outstanding_background.png": "98db4bbfc55910dac5ea475c3832aebb",
"assets/assets/container_background/explore/podcast_background.png": "d5c9412fa20fd811ff79dbb753efdf5f",
"assets/assets/container_background/explore/for_you_title_background.png": "176983abdeb5cd97198fc77063343c5d",
"assets/assets/container_background/explore/top_collection_background.png": "ecc8350eba97434f48c04e1d5c144015",
"assets/assets/container_background/explore/continue_read_article.png": "251a6ed81d62f8f3a69786304bd8cc59",
"assets/assets/container_background/explore/today_read_background.png": "7ab80b67f9478073d4cf5345da87f3cb",
"assets/assets/container_background/sleeping_chart/top_background.png": "66f4b1511a5df3bcb9fe8e831a2fd910",
"assets/assets/container_background/suggest_background/thanks_background.png": "7d8490c48f2863656c071a4fafd7490a",
"assets/assets/container_background/attribute_background/attribute_container.png": "6dc4b346475e8c701d3b9f7ad7196aad",
"assets/assets/container_background/article/collection_background/tag_background.png": "8bae525f6aa1a6d2e1a0d7dd473cd904",
"assets/assets/container_background/article/recommend_activity/backcolor.png": "397e4adac9239480a6c59b9a58b58902",
"assets/assets/container_background/expert/background.png": "990a91e5c0c05e13d8c393699ad9a9fc",
"assets/assets/container_background/expert/background_exp.png": "8afdb3dbdf5a1de98b042c2d2b61c391",
"assets/assets/container_background/expert/background_education.png": "524be4908b3b05759988dd8e78b6cdea",
"assets/assets/container_background/quote_background/yellow.png": "12c3e4102e66ec6302b84e5766ef7fcc",
"assets/assets/container_background/quote_background/pink.png": "5ea4ee20be344ca6ccd6440e65c35cf2",
"assets/assets/container_background/quote_background/green.png": "94d9a3fff3db9a2ec527a7b3429a7637",
"assets/assets/container_background/quote_background/deep_purple.png": "f26994565f9cf856efc176f44aff5ebb",
"assets/assets/container_background/quote_background/cyan.png": "270cae71b1e0027315e8c60512028adb",
"assets/assets/container_background/quote_background/purple.png": "2b55cd2ee2eb697bfce4196d3466fda4",
"assets/assets/container_background/expert_background.png": "4e44bad1f9275144cfb5b6f8650e6d6b",
"assets/assets/game/background/wonder_week_background.png": "3a4c95790406cfabfa0b670cae522a57",
"assets/assets/game/background/teething_background.png": "11ad0f866a024ee247812f7ec8ba1da5",
"assets/assets/game/icon/teething/7_right_choose.png": "b7d0efdd79159fa719e3009328daf728",
"assets/assets/game/icon/teething/2_left.png": "4a1df846eaed1515c5af2c184ac838d7",
"assets/assets/game/icon/teething/3_left.png": "ada3953d5a8358b3c05fcc61e544c192",
"assets/assets/game/icon/teething/5_right.png": "2911dde3f0af32e668d004a2d7244006",
"assets/assets/game/icon/teething/10_left.png": "5074dfcc54b7b671e651022ef0dbfef2",
"assets/assets/game/icon/teething/8_left.png": "819a418be2c7a9b9a45128aea7c1d638",
"assets/assets/game/icon/teething/9_left.png": "529c1bb3dd7be35fc99fa3bafbe165d3",
"assets/assets/game/icon/teething/10_left_choose.png": "ba99249333af0a6bbd47a2e814f23b6d",
"assets/assets/game/icon/teething/8_right.png": "c66ac8a7f61d2fc7a3bd8ee022986bab",
"assets/assets/game/icon/teething/3_right.png": "4ef2ed08ceb1ecae5c38e27ce7ee560e",
"assets/assets/game/icon/teething/7_left_choose.png": "862db33db8f10f630484eabf045b1437",
"assets/assets/game/icon/teething/8_right_choose.png": "81cc6f06d38ea1b776aae1f0a0de0b2e",
"assets/assets/game/icon/teething/3_right_choose.png": "9082a927996fb04c914675f52956414c",
"assets/assets/game/icon/teething/8_left_choose.png": "b35b1c4950d7e463c41374362b66af5e",
"assets/assets/game/icon/teething/6_left_choose.png": "22d2f0bab995ee6a1806bff8f71f4a83",
"assets/assets/game/icon/teething/6_right_choose.png": "d35c7f07af84a8257e5c6067bcab1c9a",
"assets/assets/game/icon/teething/4_right.png": "4aeb9b0f0bb508555a862e47034394dd",
"assets/assets/game/icon/teething/bottom.png": "1c0778976651b9c2ee66a6dfb2bd3017",
"assets/assets/game/icon/teething/9_left_choose.png": "fac576c332a830202b121e5c2eec1ca2",
"assets/assets/game/icon/teething/9_right.png": "986884e3cb1808687383f86006d97e21",
"assets/assets/game/icon/teething/5_left.png": "98a56a9132f5d48a9d3504fed6da3c40",
"assets/assets/game/icon/teething/4_left.png": "7b2e84f3961b06ac35af16e95792c4a0",
"assets/assets/game/icon/teething/9_right_choose.png": "7cc6ca4dccb79888d4add079f63b5e8f",
"assets/assets/game/icon/teething/2_right.png": "3bd7d6f4fe84722e755dc37be58b286a",
"assets/assets/game/icon/teething/2_right_choose.png": "11c3872e7822d5d8e93bd066b5991faa",
"assets/assets/game/icon/teething/1_left_choose.png": "2cb2fdb27347d1a38de7dc4ffdf07ba6",
"assets/assets/game/icon/teething/10_right.png": "9405c4fe7f058d957217d57b12e7bbec",
"assets/assets/game/icon/teething/heart.png": "f972ee11d9c422648ce649a7a1ca97b9",
"assets/assets/game/icon/teething/7_right.png": "aa8cf5ec7f0a2d5ca84069e15025595e",
"assets/assets/game/icon/teething/4_left_choose.png": "261414b97685b3787f881a712e620976",
"assets/assets/game/icon/teething/top.png": "8a9e3006210b1f246aa65e81b91fc5cb",
"assets/assets/game/icon/teething/5_right_choose.png": "a516533d7c11510118871705532a72e7",
"assets/assets/game/icon/teething/1_right_choose.png": "679eb084af8a1baeeb582fef433580db",
"assets/assets/game/icon/teething/1_right.png": "4f6b5e83d00080e64afd6239541d065b",
"assets/assets/game/icon/teething/1_left.png": "52af1691f8ee11c9815f070b8e790ca0",
"assets/assets/game/icon/teething/3_left_choose.png": "5cde3578b046c3f60988947253744642",
"assets/assets/game/icon/teething/clock.png": "c6ce2025329f231b07bf4ab0eca4c8eb",
"assets/assets/game/icon/teething/6_right.png": "3b8f043b2584cb218af121de2ed1aed0",
"assets/assets/game/icon/teething/6_left.png": "fc942024e68bda09e58383d17b30d486",
"assets/assets/game/icon/teething/4_right_choose.png": "3d31c026bc967bc6b8a272ad29decd19",
"assets/assets/game/icon/teething/7_left.png": "6d47cf4e1360d055608201a23c5b1aeb",
"assets/assets/game/icon/teething/2_left_choose.png": "d1d5de22b1255b03235d76484601b5a3",
"assets/assets/game/icon/teething/10_right_choose.png": "9e25ed96d8488b6b0bf8a55282fc8cb1",
"assets/assets/game/icon/teething/5_left_choose.png": "258932620e2dd79024391ca30c00e716",
"assets/assets/logo/Facebook%2520Logo.png": "42a7b698a1a6ff0b56eff41309dceb8a",
"assets/assets/logo/Apple%2520Logo.png": "e863062c08a60d016e2f7a0617df15b7",
"assets/assets/logo/expert_title.png": "7059b7e026a30e2869c686bde591f042",
"assets/assets/logo/title.png": "282a5626b6f7071ec38734dc502694d9",
"assets/assets/logo/logo_android.png": "88192e8b110dcdf9d7516975900df352",
"assets/assets/logo/logo512.png": "06917a2c7700fbe18666cedd93d6b02e",
"assets/assets/logo/logo_ios.png": "ed7f14fb7166e9b85be1d9700ede8474",
"assets/assets/logo/tool_title.png": "09fa6661b55b4eaf21a0761574a52039",
"assets/assets/logo/logo.png": "710af568800bf03984ae373d7ec1512b",
"assets/assets/logo/Google%2520Logo.png": "527d483889a906dcc138ab591e39d12f",
"assets/assets/logo/explore_title.png": "aec91a9579d5af511df6e10e9efa6fd1",
"assets/assets/logo/launcher_icon.png": "7b5366592fe8a7604ea7c89b2b3ed54b",
"assets/assets/logo/logo_1.png": "17900a7040ae4b7640977797efaf124f",
"assets/assets/logo/logo_4.png": "d9740bb6c8b8c48b3f444423d2ce30c1",
"assets/assets/icon/default_avatar.png": "986bdbb26a875b227445eaaa1064c792",
"assets/assets/icon/email.png": "f1d1195021d92d25a519aba1a65405b1",
"assets/assets/icon/add_suggest.png": "7c8cf46d02ec381bc4fa6c7d8bd684db",
"assets/assets/icon/nav_bar_icon/watch.png": "33fd0049e60bd7a0eecdf1b9b00ad6d6",
"assets/assets/icon/nav_bar_icon/tool.png": "1619f707023365d90795c970abdb7903",
"assets/assets/icon/nav_bar_icon/home.png": "f10d45bf9fef7ba9388ae9c188e35c2b",
"assets/assets/icon/nav_bar_icon/expert.png": "caa3426c4752dcd495c562697c8839e4",
"assets/assets/icon/nav_bar_icon/explore.png": "600e89155883c2a65951b5a9f8c715db",
"assets/assets/icon/nav_bar_icon/feedback.png": "2f4073d0d51ce899e045d042976b95a8",
"assets/assets/icon/appbar_icon/sort_random.png": "64aa0f16f8d173c8131b08fa12fdff65",
"assets/assets/icon/appbar_icon/account_login.png": "3a82b44d3f8053de54498234d29aa985",
"assets/assets/icon/appbar_icon/account.png": "550e5ab48e0545b26e81d1bde95c8dbc",
"assets/assets/icon/appbar_icon/search.png": "88006ecf1000aced98900e75c090c35f",
"assets/assets/icon/appbar_icon/menu.png": "a3e24ceb60d42e8f3953679e3329077f",
"assets/assets/icon/appbar_icon/filter.png": "23af809c1b83c0190f76051a8e3ac78b",
"assets/assets/icon/appbar_icon/back_icon.png": "8288e3f4b468ffa0042ea0b724bcc682",
"assets/assets/icon/appbar_icon/sort_az.png": "aa50cb5bf95f57d82501a2d1c957af6c",
"assets/assets/icon/appbar_icon/sort_za.png": "3020a94f43261bdba1b85bfb8fbe780c",
"assets/assets/icon/loading/loading_indicator.json": "3476458f77656820c3792f3f4d58622e",
"assets/assets/icon/routes_icon.png": "3243bbedb07f6b17909118d246b27fc6",
"assets/assets/icon/suggest_icon_button/bmi.png": "8ffee76d1a11eb8febd9c80537f6be1b",
"assets/assets/icon/suggest_icon_button/wonder.png": "5a70b16702d9fb4498230b40ee04853d",
"assets/assets/icon/suggest_icon_button/contact_icon.png": "6f62822f7e5954461c17b185f3b4baac",
"assets/assets/icon/suggest_icon_button/menu.png": "02bb1161e154654db7381925610e05cb",
"assets/assets/icon/suggest_icon_button/report_bug_icon.png": "b3f8a50e25590e3e6826562e58e33575",
"assets/assets/icon/suggest_icon_button/feedback_icon.png": "429ba681188b524aa44789be3315d6ca",
"assets/assets/icon/suggest_icon_button/appointments.png": "e25cefaaba986bd5f3d22050dfe09ae7",
"assets/assets/icon/suggest_icon_button/suggest_new_feature_icon.png": "e92edc85f254cf1d8ebfea43106fba42",
"assets/assets/icon/suggest_icon_button/safety_notebook.png": "aabda54c22a619e0fae82631d660c368",
"assets/assets/icon/suggest_icon_button/teething.png": "e2bbcfe9e942050d40c7e0c3b6a73244",
"assets/assets/icon/suggest_icon_button/sleeping.png": "5987be9fc83feb62eef8a05df0f17c5b",
"assets/assets/icon/podcast_heart.png": "5eaf69f9b082131b388d7b50a433dccf",
"assets/assets/icon/outstanding_heart.png": "f42b5217bc58735869152ce1e8af42e0",
"assets/assets/icon/album_white.png": "f3f6400aa2f01f8e0d593a64d34fc5a9",
"assets/assets/icon/user/no_avatar.png": "56ee66597288ee49faf772c61ea450b0",
"assets/assets/icon/user/mail.png": "f1d1195021d92d25a519aba1a65405b1",
"assets/assets/icon/user/log_out.png": "0476da78d1794ca1ebc5f1a08e1080ff",
"assets/assets/icon/user/alert.png": "502cd2c9f6d0da80e4f3b10cd558effd",
"assets/assets/icon/user/iphone.png": "29d31fa519f891e01136a853aa0fc516",
"assets/assets/icon/user/calendar.png": "5f0b9de8fa47fe33bac408c56203aa17",
"assets/assets/icon/user/profile.png": "35138db168414b1f2211f3de65d1709a",
"assets/assets/icon/user/delete.png": "216e01019cc8be6769bf34abcd89047f",
"assets/assets/icon/user/account_info.png": "660e9cb11ac7806bf96894479ed3a568",
"assets/assets/icon/user/telephone.png": "f8856d59bd66a16d46b34b9947432fa3",
"assets/assets/icon/user/ipad.png": "ce171197e577667817eb180bb4775175",
"assets/assets/icon/user/child.png": "36fdc2ddbc1294647914b60590ac6c85",
"assets/assets/icon/heart.png": "6ce9fa7dc098520277f720fad4764380",
"assets/assets/icon/suggestion_heart.png": "5f415dd2d9b6e1de85fc79a5dd527fe5",
"assets/assets/icon/empty_data.png": "beb7224ef10395c5f713a6ec1c145895",
"assets/assets/icon/article_row_item/question.png": "2987401b526c7347cb66796d04d69c0b",
"assets/assets/icon/article_row_item/expert.png": "5277ae28077bec6458f26d41f873fe47",
"assets/assets/icon/article_row_item/activity.png": "c33b1b880fe141febf80a5276895d543",
"assets/assets/icon/old_choose/old_choose_bottom_icon.png": "ff6cc21892b4965f467602c79cd19c26",
"assets/assets/icon/call.png": "a53a45be5ca13f33527b4972c77f7674",
"assets/assets/icon/search_page/un_filter.png": "5dd521cfe2d88847de5150d76d7ef2e3",
"assets/assets/icon/search_page/search_icon.png": "6fd4639c29e368c16b6643bdde190aab",
"assets/assets/icon/search_page/filter.png": "a716ac7082fc24a87ed0c63f5eab71a8",
"assets/assets/icon/search_page/no_result.png": "5e1d054dc6d3812e7f3b7c274d2f44c6",
"assets/assets/icon/edit.png": "6119372439ad9b7dcb8283dcdcbec83c",
"assets/assets/icon/article/article_minimize_status/no_act_has_read.png": "b07aba8568699ae98a7b0624fc107de9",
"assets/assets/icon/article/article_minimize_status/has_act_no_read.png": "cd0549db568e059ecb2b25c49cc5bf70",
"assets/assets/icon/article/article_minimize_status/has_act_reading.png": "ba2366ee3bc3e4c3be1a007dd3fa68ec",
"assets/assets/icon/article/article_minimize_status/has_act_question_comp.png": "a3d32ee86d7675a178c8914b7a4ae43b",
"assets/assets/icon/article/article_minimize_status/no_act_question_comp.png": "b02ef53ff1d3c2d3fdc47329a197f4d6",
"assets/assets/icon/article/article_minimize_status/has_act_has_read.png": "69a88d6fc10e368475bf10e4ee73cc50",
"assets/assets/icon/article/article_minimize_status/no_act_reading.png": "420d118bf8179ec7b99249cd321df303",
"assets/assets/icon/article/article_minimize_status/no_act_no_read.png": "5bdba8ae51c72204dd28bf195802b385",
"assets/assets/icon/article/question_slide.png": "710726ce0f977697c4a5881bf0a04c76",
"assets/assets/icon/article/question_rectangle.png": "9d68e1585d5d3ebd13e06ca6db83406b",
"assets/assets/icon/article/question.png": "2769510a118f908c0f046695c52eb630",
"assets/assets/icon/article/tag.png": "475e8aa780e2033d96e3e2acabc7f254",
"assets/assets/icon/article/tap.png": "dba63a4bf1721990383a85610a75b74a",
"assets/assets/icon/article/answer_right.png": "a421fcadbd4ba3183d916df11fcc460a",
"assets/assets/icon/article/answer_wrong.png": "37bb8e575fa73bf85ee5c7a58522caa9",
"assets/assets/icon/article/percent_blob.json": "3c07822c2f59d7e2e97718d5a14d18f2",
"assets/assets/icon/article/tmp.gif": "cb768795c67273b45f1dbbeb7f9a9e81",
"assets/assets/icon/article/verify.png": "ebe255f65b28d846eb7a80e4956999cf",
"assets/assets/icon/article/author.png": "775fbad45ff237dfea71853c14adc335",
"assets/assets/icon/article/question_icon.png": "9173252a8762dcccab56971fef14390e",
"assets/assets/icon/article/favorite.png": "af9b9fc7b324b86ca9dc96a04776979a",
"assets/assets/icon/albums.png": "9adf92b6fd53d5a81e324ef305b0e1e1",
"assets/assets/icon/expert/booking.png": "b86c2ca66b3f71a69671d9a88f0e2cb2",
"assets/assets/icon/expert/podcast.png": "1cef2d3d0b4f7adb2c26590757ae4025",
"assets/assets/icon/expert/note.png": "df174e1a669c96af8f036363b3891a2b",
"assets/assets/icon/expert/certificate.png": "5d2e70bb609a28660792166c0a881a34",
"assets/assets/icon/expert/instagram.png": "39d451f48e3271b4fd484f7ca97f68b3",
"assets/assets/icon/expert/course.png": "fdc66b35a9ec6dc87e24e7b968562c9e",
"assets/assets/icon/expert/video.png": "c78a92672e08d57f90cefa6be2fbf744",
"assets/assets/icon/expert/conversation.png": "4fd22e6349632afc286c9677b15c852f",
"assets/assets/icon/expert/web.png": "e1fcaa24ebb117b29204e0270a27a94c",
"assets/assets/icon/expert/youtube.png": "e7d0f31f08c33b03e7aee3220bcde9e2",
"assets/assets/icon/expert/education.png": "617ff0f03aef67d5b7a1b2021b258bc0",
"assets/assets/icon/expert/facebook.png": "9de9c912acb8a118e514d17c0c20e697",
"assets/assets/icon/expert/chat.png": "54ee588a0f593a4b3d52db3cc924dabc",
"assets/assets/icon/more.png": "599356c242ce8efa244fa8f692d58a10",
"assets/assets/icon/topic_heart.png": "b8f143208e319d78648afd281386dc2a",
"assets/assets/icon/child/parents.png": "3dbc228df81422e25136dbdc5763e4d4",
"assets/assets/icon/child/0_3_baby.png": "93c15d231c0f0131e275caa6753d6263",
"assets/assets/icon/child/1_3_girl.png": "7bdfaf9292dd33866476fba4f189293c",
"assets/assets/icon/child/6_10_boy.png": "f81fca92ee7e58ebc9e450d8cb95e761",
"assets/assets/icon/child/3_6_boy.png": "134813d513763c6f72abd8933685803a",
"assets/assets/icon/child/16_18_boy.png": "aa4e8042a30fe2eaaba3e3912dbef2c0",
"assets/assets/icon/child/10_15_boy.png": "d6f4a1ae21d5ec0ad5ecfb27736cac94",
"assets/assets/icon/child/10_15_girl.png": "e7def61c68af4a25dae19ddda1824dfc",
"assets/assets/icon/child/3_12_baby.png": "284264fab0ef210cbd4ca559c11fb9eb",
"assets/assets/icon/child/1_3_boy.png": "def55e8b3b851359343acdec2f235a1b",
"assets/assets/icon/child/6_10_girl.png": "afee26509c3ef9271f34a45ca4351fa2",
"assets/assets/icon/child/3_6_girl.png": "43ef71560024e31ea8ef6cb5c4b0fe9e",
"assets/assets/icon/child/16_18_girl.png": "04b04bbe9c7b99b96552f0a75d20ea73",
"assets/assets/icon/child/pregnant.png": "bd0c617aca30e92003ce9b12b2201f9e",
"assets/assets/icon/activity_together_heart.png": "baef35ff9e64acc678583be691028ae3",
"assets/assets/icon/image_holder.jpg": "0096bedf7267f1d72f8d3c54fd0c013d",
"assets/assets/icon/tool/sleeping_chart/star.png": "84e64ca7d0eb69bbc8c50f686e9ef142",
"assets/assets/icon/tool/food/tag.png": "def06b5a6239dd9619916017314b7e1a",
"assets/assets/icon/tool/food/notes.png": "6e17f3b6a1dde5148329fa98a47cb295",
"assets/assets/icon/tool/food/cook.png": "28f1fc200b2cf8c19af8918fbdccf74c",
"assets/assets/icon/tool/food/dish.png": "4dbfc205d50ac36638165263b11ed16c",
"assets/assets/icon/tool/food/time_icon.png": "9a3673905cc12d1e2be5e3e017d4a2cd",
"assets/assets/icon/tool/whr/arrow_right.png": "d012ccd1e3cac43c73a3ca75b75617d4",
"assets/assets/icon/tool/whr/ellipse.png": "d418dcb39d466f73f8913e956746346f",
"assets/assets/icon/tool/whr/arrow_left.png": "94a804e202842ea8b26e7f52b934f703",
"assets/assets/icon/tool/whr/boy_small.png": "6bf6bb9456fd17eca16b6077ac9abfaf",
"assets/assets/icon/tool/whr/girl_small.png": "3b32ab325fe03eb4426ebd92e2aeec2b",
"assets/assets/icon/tool/whr/boy_big.png": "8353045569f3db02910b9e34abff5488",
"assets/assets/icon/tool/whr/girl_big.png": "736dc533aa91c16fe3ce0449dca826de",
"assets/assets/text_assets/about_us": "6ba92bf9fc7fc872f82b274c40a11767",
"assets/assets/text_assets/process_flow": "a6e401d1864affcbfe702f75582c6566",
"assets/assets/text_assets/policy": "044f5e836b183028b83d2eb5b52400af",
"assets/assets/demo_image/demo_2.png": "e129efedbf5ab6287d1f91883185efe2",
"assets/assets/demo_image/demo_3.png": "d57874c39ee9fa33f218553d13c0b93d",
"assets/assets/demo_image/demo_1.png": "a151b4529a7873217edaf8e1293b5865",
"assets/assets/demo_image/pizza.png": "258e181d5e3dcdacd929a104fe7007fb",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
