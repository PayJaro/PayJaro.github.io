'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4a8ce03c6145533e0acf1e98a81c2f93",
".git/config": "3a271c3f9364cdf7e29c15c520dc8849",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15449b11820192e86c21824981606c04",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e2800eebe1d6ea9fd1ea04b9b66e2a81",
".git/logs/refs/heads/main": "fbb72b090f1fc542fda35a233ed3c29b",
".git/logs/refs/remotes/origin/main": "282a065a5b6abfeb25a6911154662cc3",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/07/64b894821ffc921d457bc1245b97a9fbaa0532": "a6547c43836ceabb923752f41c6f7609",
".git/objects/08/046e6940f4e122c24eb354cc162d013f12865c": "7c3d1638c9731325fbb775c03dbaf560",
".git/objects/09/c2e7334b836f90b959419f21e9f1a345fab9d1": "78484e4ab9e239ff9501796e3c3218c8",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/0c/b6105dace71245be5436f2e22e948836c6c788": "549fa54730336d3894a64d85b00c551d",
".git/objects/0c/ef5d31138ea3f94233c5ef0ede94473066b657": "36e0f2cbbb0e5a5210557a24c3fad5a5",
".git/objects/0d/42578667428f51d7317b09b84f5c9d8ce2a6bd": "54d5ebecf7aa5381692590e3cb8b49a2",
".git/objects/0d/427f002fcfb2a2fa26c54152094c42ee6fe3ed": "10af7d3655ab10c56575cb7d30c802f7",
".git/objects/12/2443dcabe0f801560875acdc9d171634b56179": "d5174804c6309668a44c608c6a16b668",
".git/objects/12/98dc1147a513b0f17dc70bd979373aa2709423": "bfab43c69da75c882373dd4297b0f8e3",
".git/objects/14/ac3c30a7a25887be0dadf68590b2972427ac7d": "b76264c8a6c20aba18b21ecb924d3bd2",
".git/objects/15/b04e1899cf3a19a1f36d236c6e850ae629afed": "22cfb7e719e55a2b36f62182f5943cc8",
".git/objects/16/dc57b28586ee89aa6973074fd9634d4fd9cd40": "1e5e9785a767a37494dbc17551483241",
".git/objects/17/40479091ff84026c530d02c7b47abf70befb55": "0af3168301a865c22eb97d02dd4caf97",
".git/objects/18/f293d30127cd4926761fe5810e83cd14693977": "0ac8a609403e4536cd53d05c69e44994",
".git/objects/1b/427b43a7c8332ce0485804199257b1cabe6029": "61b378758c4538032423874042689d9e",
".git/objects/1c/11b8aa7facde438acdfaeae34001d0079637e7": "f0f8b24d9843510748919e1ba098d007",
".git/objects/1d/331f6ef9104723fcf0d5ad7ed1fbc4fe0300d6": "f4999ad10875156e454493847a3e29ec",
".git/objects/1d/edb7c68faf8c7e75ece65c455eea4b496a87ab": "7b0ced8a8af89098ecf7af5d32a0b639",
".git/objects/1f/234819eb4b649515370a70d3912f5909bd585e": "f341593ba5e1801a4d0b407e6af05c61",
".git/objects/1f/d15c11560887b9bc68cb64201035084e9a8b1b": "d359cc6ff0b947b3c642c125f6ff1f52",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/4a3cf677481fd445aa9377a53882813d12a3b3": "b91f23f2ce20591101943a62b1e0c42e",
".git/objects/22/c13b32ebb39e0b3da830eac1ad09017cba5654": "3e4d9e11620d49da7995eaec6cf774ac",
".git/objects/22/e208f8c484452e639c0ba13a2be12d09441744": "1faf0eeef41bb974cfc9ba1c0eece546",
".git/objects/24/081bc3639b9b02471302d6ba81cd13ae823f69": "1c75c14e1666ecb3f6e7511c07fe1b3e",
".git/objects/24/0a03a5ad2165c7a3014bd4074aefcfb8d21304": "e26dc604bbcd8758aa30a03cad11671a",
".git/objects/27/99b1972df96e1aeb11de3a48f19e77db6d3187": "77e2398c3716a05dd3dace9bcebfd961",
".git/objects/2a/b243f6f39d3c1d069f2ad25584577089ea569a": "16e39a7ba0af1a21ef44bb9eefc22d96",
".git/objects/2b/11bd4f01b8c98cb42992060ff4d5bef0c40f88": "c57a1b2263b0e88f36283c69fac8420e",
".git/objects/2c/d9339b4b31e72eb0adf0997b132af8f1d72424": "4f7a6dd3216e9c4bbba6815c0cef2023",
".git/objects/2c/eaa46caafeb3cc71b09f1ed492976e0e864703": "91bbef15516c0d9c384ac40b08badbcd",
".git/objects/2d/73cf5058218c87f51b5ad2674cf1b16de28a53": "1a7ba36a235fc2e8a6b57ede7357ccc2",
".git/objects/2d/ec6c269c957a159faf6b29eab8de4c32113b2c": "bd587a8955022c2d08d8abf57ec9633a",
".git/objects/2e/7abb0b66c49c851ecce6157f7ae3b7439efb6d": "e0b01c141ca92b24b3e580e0df1f64a5",
".git/objects/32/29bcd096e9e1ef49ffc95b931903d617901f06": "2f7e6daf74c3c89e200ce286c62021ec",
".git/objects/33/2df6830f73401630f8c789e9bc08cd08e71fb9": "ce7b6c7350f44d115f46ee10db1c71e5",
".git/objects/33/73a577dda21efcbf031271d17952632fc39d1a": "7490f405bff59daf2c5ce92e14362420",
".git/objects/36/1a597a51bf39491e16eeedf47cee8c06476219": "67cd52264a54d2694526976b074a4231",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/3c/898fcc243f6ffe3ea00823ea0fe912677af0b8": "206dda36f0229552f25ff8c3a189f2c2",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3f/595fcc13a68600f2546c2e00d37088a0b6f80d": "c73538f1e4cdb792f8f14eb579fa6655",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/df13467cee1bdd690a43c8eaca284c56ea606f": "ad753d5d44cd5fcfbcd6017234459afb",
".git/objects/47/3d85865c20ab1132a7c42e7805ea221f61de6c": "794b7951a469f3fc71b63ffadc341878",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/789eae8716392b0f81c1d1cc00cc479a4c5e0a": "35b1ee7ad13cbaec359da11a6f0d3fb8",
".git/objects/4a/b7e99ea3181a69331a54e04ee23fa93591e950": "e63115cb4ac3e0cd78389be4ba0b0fcd",
".git/objects/4b/4c81f828be01e888719d1a2144b6358ce8717b": "602a0dc91395e92b882b6922ebb08504",
".git/objects/4c/965bf1c4a6717fe17e67144ae6fc408b862e87": "48b8e3cace69e668d49bace1710cbcaa",
".git/objects/4e/88dffd5b728b237192d23ab55b72377b9a7816": "76419e9ec064cc42fa0d766210506803",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/cb974637e4b0050ac2bea9a37190f14d0dfe22": "63b6e6abd6b772bc93854daca8c152bb",
".git/objects/51/5241348e841d0c242b1212de7e96a278bb88a5": "5799dbb833ef5b4e9fbc80eb17b9c467",
".git/objects/51/f055116d0e900e11fce91d3c34d1b14eb4ecbf": "872d52fae63e5ffd478c1a89763cd434",
".git/objects/52/4e286add0079f0c15b3da1aa277235721e3fd8": "5bc9488c8cb99aadba7a94ce424ba7e4",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/a2c1c535d89388b1128cd83f131797abf2ea58": "174891cc387da7a50d1ca119318bdb4b",
".git/objects/58/097605e0e32a9b3a09576d8f36b0cbfe4165be": "cda45b67aef61e83e9d6b3a56e53f200",
".git/objects/59/e985098730d83aea850ea9b35b2ca0d02041a4": "1611c2cba252f31dc7c0a3f7a4047a8d",
".git/objects/61/9240dec87e72d6a72dfec8106e7b4cd48447a8": "942fa1d2aa205ecb5e42e665a89c58f2",
".git/objects/63/9e76af1fc049bf1dea7900f88ae13cc183e3b3": "5cfc4d3662f20d2fb7e3f71f5232bf65",
".git/objects/67/64d87b4fae6f620319d6ab36379ee4d68035ff": "5c7ea63979e0551387e920171b8fd126",
".git/objects/68/0f0b913d8a66a057d24fc2539893faa02c244d": "99241166523c7d9f6dcaf1345721d967",
".git/objects/68/f796ed2fca933aec6f904aa54934e357db8e8f": "0b7d01c512bcc9233a32d507986c011c",
".git/objects/69/0c94f4254d3992f48561ea3f8a83743f85afaa": "d06436399db4ffb780fe5ff4b7fd69d4",
".git/objects/6c/3db7e6c107de86563cca5a6937ec87799df0a2": "e3d6739a3569a653f3424623a28f4abe",
".git/objects/6e/0dc78b457412d0814b8f958403d4e4828ed392": "b99de62df668c90431998591c7189c5c",
".git/objects/6f/30baf35800501c87b05c00f16fdec5c467b352": "8b0314951fcd1b2007a282402112efef",
".git/objects/70/4e9d497752fe904d854e2bacb7a5dc5287ba45": "6f03113ba73fa541611fc117c40ab056",
".git/objects/70/9ba5ed07d01ebe70489e4d96dc3a091abd138f": "ba8043935cb68784c0f4e3f9c6b27a9b",
".git/objects/73/ae5185300b3c5bbe9813d8b06460da8280180e": "3eab96f2f76681f334b3eb94f1e9eb89",
".git/objects/74/2bf670bbdf8c86a4cff09a761650045bcdc6e5": "2365452093a5d572c12f1597e5005983",
".git/objects/75/2d8462513a3da74ea439b3feb6a9e8c966e15e": "b3fff62105eb012379a6fa2b0fe01c9a",
".git/objects/75/846290f0eacbd04357dd51c12b343e042868e0": "76451fa3d769fb0aaf0078501d1c945b",
".git/objects/77/764fa6b265082e119beae9c38482251d47a8f5": "0648029c5b6e8cc98ba2c28599b83ced",
".git/objects/77/cb01d9ab1316a80c0a5fa35b4ece0bd585987b": "27098a768c7c26612539f286b744952c",
".git/objects/7c/6130329ccc8cea4e8f03a029c3e4bfa060b1fd": "d63004dab69c3f256341df3b0bd13832",
".git/objects/7c/a757fe17ca0d51ce2b97895f5630d33f82c646": "b4e33128fe44ce2df6ed7cb476b19eb0",
".git/objects/80/dce8a7c545a124d4c1cd06b7ec85636cf592da": "a477f3588109edde8f5a6e15e6a68fe7",
".git/objects/81/01e31f19c86480c3558d555340d5c9faa77cf1": "8ee584f58beb33269b19d05594b32d72",
".git/objects/82/6c61247bd8a8daf2c0937a089bb78704fdaa7f": "4eb822fdea8893418bc382296ea18acd",
".git/objects/84/9b7cb5bc589958da362a5fc238778bb7dcd100": "769b9cb7781638f4b32d49670b6fd547",
".git/objects/87/c023a4b8d6d2a1b10e010efb7d1091e6d8fa4d": "476f818deb4f5cc01601a6359b7cc3c1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/44b83c5eef3dd492afd82766f0bead2d7860f4": "1964a7dfe80ab2bf298ea987d39ceced",
".git/objects/8a/64814b29f343e1de99997aa14d00ffbcc8f43f": "f2338e53299ddef66c338c1c8a7fd2a1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/fd23206f51575f52ccf7bb1dbb610b04f709fc": "fb438987a837f596e66dba982b6579ec",
".git/objects/95/c6bbc5f88a5c85365173538066e200913fd577": "a6c651c0e74fc2a3a0159f801c69c783",
".git/objects/96/e7f4ae918567720f20587a77798270c0882bff": "d0868b0fbcc17e3feb80884cd63cee07",
".git/objects/97/1542c86ee6f54927dda4b44eda8e2351a392bc": "96e5c949da1c9e3b1ff1c6fa720f05b4",
".git/objects/97/6233dd2511d0dab5119f60e263b80d69f7ccab": "693651256dab85385f18d8d8517b6106",
".git/objects/97/bba549b3a80d14a12de09eb70b1a231c3788cd": "d83a460ed35879afbb3f9bece61f64d0",
".git/objects/9a/20832547919f41a16e4b2f6c63912c8685b215": "fd17d66a93bb9551321d9bb2c0cc8be3",
".git/objects/9b/c7defc2093416d8326c3ff9646b1a2afe169b3": "9ff5c156b36cf7fcb2d8cbdad6a816dc",
".git/objects/9f/dd841cc7079837087411e39f2fdd666b5fa8ae": "b69bbe642cc68dacbe7013e386fc6969",
".git/objects/a0/c2f789406c738c9bc90df366e683dbae4aa3f9": "2539028eb886fa234215f1308184a685",
".git/objects/a1/1f0bf8c55fc8f025c9dc54ce62f90f338d50b8": "c7727ce497dcd138464ce88be8833193",
".git/objects/a3/1a3d7e028cb088600d9741b4ec1a459e05362b": "42a2d9999b7ed9fd071e16ae565a5cb1",
".git/objects/a9/57e3c34ede7fbf74b74ac9ca696be39f7a8381": "7f46401e961202a4bf4039072cb4a8c8",
".git/objects/ac/1b3ef1d7251c7eecc956ff0ea51f274b471722": "550a2bf29b6a38d2b3dbfb80be32f1d8",
".git/objects/ad/16eadac72bb61cf406e3c80d375846f8d217cd": "c7daa40cf69b25082cf9967b59ad434e",
".git/objects/ad/185b8d42a794a089c6e9156e7c1eded3ad6ff5": "1cb45726b867aedecdde089c206c582a",
".git/objects/ad/6aabfeef3885b1be7853f6eef32586e542565f": "60fd1fb0e4b184d44285914b49b3d6c7",
".git/objects/b1/3a0bad56a8fb827668018d02a3e09dc31075a2": "3d71027aff90d3d228dfd0b8d31e17bd",
".git/objects/b1/a61619b13c14e05dd580b1d1b0772e8c5fa3a7": "c89b4a5530cb2562bb32b6f0bef2a157",
".git/objects/b6/23349937fe502a51e16bded3675934de6a2117": "123e26249d25615e09f8653e724085f4",
".git/objects/b6/8a7a3a1281db3378cc4a76aecd99e1701a5292": "84cc233d244e989e45e44d314fa26f5f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/b49594f0583e47d95daa86c7a3f53283aad30a": "6982975e694e096d015251985da4e13e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5680c5484dbfffe73be4e94e6f7352e213d18e": "54dbfed66640b222e989a7dde2a3fb5f",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bf/56143405522996562b2a708d1a62418fa8a75e": "55604344066826a680e913fb5e68a246",
".git/objects/bf/ce46247efc7066d8753f43892ea6ddb0c69a2f": "720ee83bf76dc86379bfb8369f654685",
".git/objects/c0/8ed4fa90858502ead84bce9eb55a61e1d673ea": "2ee0487a28c74527f77a95a2f759b632",
".git/objects/c1/1ebfc4bd4b7a88a483c5384fc08e062073fea7": "789b38f7a05b47c7762df0e3d8985b91",
".git/objects/c2/17fc14695ab84b200856305314e4d4aaa11686": "52d08209bd3b1d68e7ddfa24437ce1f2",
".git/objects/c3/40ef88c2b19d62924d309bc72e9c207d54e49b": "201207a7dc535bd894ab5781b37fd388",
".git/objects/c3/61b40e1205c54ed7d69ac2402330f511150c00": "da79c64572ec29b647815df00b2ce770",
".git/objects/c5/ea7e214fe4dda67820898cb07eb8c4eb3d4fd4": "69049f7c8056b5ce4c036f2dbf532910",
".git/objects/c6/1c7a0c66e5aec82a679295eead38ab03410543": "d11f185daf90408d4d0141e2507d162b",
".git/objects/c9/388261da8ac05fac0c18b3548d4c536aba0349": "51ce6bbe77dbc536601f7941b327ab5f",
".git/objects/c9/918715c8b81162881fd7da12a63d4758e94e2b": "5658832900f04943909a376901c3d084",
".git/objects/c9/97bc3c2d57e449941967d20485d4afbc57980c": "583701af7122a795cc087b39fef617cb",
".git/objects/cb/2f2ebffe091b84e2ff33c563b95b07ba362efe": "7eda937c0ee36a8fa537d74046d91852",
".git/objects/cc/1311b722bf7c78165ef6e2e7bec39a94a94549": "47ad7275c0b4d581083065a32cb45c4a",
".git/objects/cd/3e42b0d72324115b20491e77cab32d985d3452": "aa626fe4f18a51fe367939e01832f446",
".git/objects/ce/1a2d66aa32324034b4f326f69011d7f2ff63aa": "0c9123c7641f21c43bf042b6f0243464",
".git/objects/ce/bba0651477e82126a27f130176947111f883d8": "f4124606f0cfa759335c3c51d4f01fc8",
".git/objects/cf/d6255b4318baead969cb05028bd3469e4b75d8": "aae7985e9f2f6a059a8e005f72cd023b",
".git/objects/d0/3ea1db4f9a8b09e9eba954f077548e727fbd53": "b904649a4283ce7123403c152ee0de44",
".git/objects/d1/7edda90951a38f2523aee258fd1edfa45d0b4f": "96934b45129e99a0c8b9d2afec924c97",
".git/objects/d1/87a6a8603eeddb60ff7fa3b2156b9ed425a03e": "b96c5d00664d85b40a8d6d5a27045952",
".git/objects/d4/5439aa31cf705547c04daad9308938674f0ab5": "77f36d8bd357f159aece243715c3622c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/7747d033248cb8bdff2989e246cf7c18ceed62": "4d605b7e0dc0df789ca741b457c999bb",
".git/objects/da/e1ae220bc48aea1bade9b231d645a13f35dd73": "9d8c293eacc7b57b39194ca6ecf5349d",
".git/objects/db/27761fcf8c6fc31ae2a7f9f193b6ac95a88eb4": "a7af8709356003483cf665ae9e20d7b5",
".git/objects/dc/7e56b7bc1bdcf19db9c9d9b6fee0e3af6e5eec": "9db777045630de16de2e2267d85d1328",
".git/objects/dc/c34836aa03da0e0381607c8f0e3e863462ee99": "414babddf356ff5c8321552676053f24",
".git/objects/dd/d2cd6e2804c581ecb41f404fd6465a400f0e5e": "841717f6da390a288ccd45975910ae82",
".git/objects/de/6f41a5628f4896f27ae23418e7e3a4aac7bee1": "1ebb8ad26014c8ac8ddb35642bceb290",
".git/objects/e2/a263abf07b97fb6a7b661d83985eaed0318e49": "1396a5fa4b2382528ef55afb0f4a72d2",
".git/objects/e3/78a3bdc97b654d7186febecf237c64b8f3fe84": "230249aed10fae6ed667a3555c4c0f24",
".git/objects/e4/d7058cff24e06baf573b20ff14d45574a9790d": "b14d850bd905097a9d3c2f597c6f9536",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/1472bfb2d333400de9fb8c8e572614d145159f": "df9effbd0a96b2a33494a6f5160e5e2f",
".git/objects/e9/e3705a62b4da2f80d017e2c325d6842d8b58e6": "064f700e395ca2cbdb74145e2fb303f8",
".git/objects/ea/40e5a37e53223c2e9a05548c27e0a7450bb5ff": "5036908031d123e86360edc2ba5f1804",
".git/objects/ea/a0ae724b1d5a4718a142c39975f34a1ef626d0": "6ee51ebc575d1183067f1d0ca67f77d7",
".git/objects/eb/3e5ce19ff009667ed010b3a4b3fc9c7bc65f12": "d5a7d3b8dd93e13b0644184d2fecef64",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/ce0c72907242bc4a2d2084ec10c28d3bc663ba": "b5d7a4e8af47e8b11560c558cc8054f8",
".git/objects/ef/f73277555f4855b5b5854d6e75105a8de978f2": "7ce0dbc46742821badc63388197e6ee6",
".git/objects/f0/2aea1f2d55bf56422af51e08a86cf261be274f": "4c4bc4ee9f58988bdc79c8cb36bae200",
".git/objects/f0/f859d76b401f5b77f2b2a8838e133185c5d926": "51b89c60d3b59ff2dc627497ec4b008d",
".git/objects/f5/ca338880cfaec216d8fe9caa169c478539b0a0": "712c88a7c90d7b9488fae4ec86644818",
".git/objects/f5/cceaf13fe1b374ceefc075f48969a7c6700d6b": "b29001a0f8ce95519321ad586e37b9af",
".git/objects/f6/e61d93f0f0c8d4ee2a1ab6cd52dba78c4cf48f": "6605602b25fd2cd786a7411f5521455c",
".git/objects/f7/fa3d90c64fd0f9fbc913bfa8bc7b10bbff7b87": "d63abf730ee9c0e497bcd63d174d4529",
".git/objects/fa/73f1e3b8e88bcf3505084fcda18febd8b8d285": "c8d079c2d46229a1b8d518ad4c11abc3",
".git/objects/fb/623cf351ab49e3237609b68e207d2c09badce8": "975b4af08e6a996ac7cda2f7e71b18cc",
".git/objects/fd/da716557bc0047a3734ed61e606a6853b2e4d7": "41ca7adeae4df104b65c26c9284054a8",
".git/objects/fe/e0eb328361df29e373ceb54470666fc6106e30": "b6206f8694d862fd7c330ffe0c99fed8",
".git/objects/ff/2738ae60f590e5f6aff495349c237478687e45": "680922c9187470f65471b67460c12772",
".git/refs/heads/main": "8a2c183cff773f6c1e60acdfbe8dea9a",
".git/refs/remotes/origin/main": "8a2c183cff773f6c1e60acdfbe8dea9a",
"assets/AssetManifest.bin": "024ac2a69b0bca9e7410e9600b3fd119",
"assets/AssetManifest.bin.json": "773b153b3578cc8ade8588d3d57566c2",
"assets/AssetManifest.json": "e1764826c7cdb0993d10ab7ca5bdfca8",
"assets/assets/icons/account_setup_icon.png": "58b1900dbf660927f49c03f69bbe77e4",
"assets/assets/icons/arrow_down_icon.svg": "0ff5e27132d6e486657c15e626c6b918",
"assets/assets/icons/arrow_up_icon.svg": "5fd79f020b104b86655bdfbe6354a442",
"assets/assets/icons/bag-2.svg": "6aa7a011b5bbd062ca42667dd8fb8adc",
"assets/assets/icons/call.png": "0e8ce76bdd06cd7cf393cf994f9ca983",
"assets/assets/icons/close_icon.svg": "e80d87ab5c1e3f01b1e4a92ecf5f86ce",
"assets/assets/icons/delete_icon.svg": "529d6b3be87bcf86448a909e4f62b4c8",
"assets/assets/icons/discount-shape.svg": "d50a098f6ef609bf57a531b0b22c7106",
"assets/assets/icons/done_icon.png": "d0aa2a5b5775dc29ec2a23f128e389ab",
"assets/assets/icons/download_icon.png": "bcc50c28afe7ba0ea27d317141f8d7e5",
"assets/assets/icons/edit_icon.svg": "9493728aa3e138dc72ad483b545a410d",
"assets/assets/icons/email.png": "633b4e932b0fba62f0109cc6ef572739",
"assets/assets/icons/error_icon.png": "45760977a6c4a7eba1a48b6afc9c4022",
"assets/assets/icons/eye-slash.svg": "5001797c213fb6b6091910e89d8c5b01",
"assets/assets/icons/eye.svg": "68832d530eab4b181a4b80fea967630a",
"assets/assets/icons/home.svg": "fa331d204b954f8bb67473da78f4c74a",
"assets/assets/icons/login.svg": "aaf0640cd4591984785fee9de56af1e6",
"assets/assets/icons/menu-board.svg": "4dd08f278cd621887bd05822eda4ff65",
"assets/assets/icons/message-question.svg": "b1a3aef4e0815750fa6517c87c187357",
"assets/assets/icons/money-recive.svg": "693fb30a5d9a20e523e12e8a4126a625",
"assets/assets/icons/notification.svg": "f123e1b755c85436126a1f97352ce0cd",
"assets/assets/icons/people.svg": "5735c744cc9bdbba832ece67c1ea3e20",
"assets/assets/icons/receipt.svg": "4c9c29c1d8d847dffacf4b95ed847071",
"assets/assets/icons/search.svg": "c2b2872d40397156dc4408c08782882b",
"assets/assets/icons/setting.svg": "b2004cdfe6136ace01ec049538c6ad79",
"assets/assets/icons/success_icon.png": "c91ba5f18260e4b1e1a6d43d11a02253",
"assets/assets/icons/telegram.png": "2fc974b40ec1f9314401e58009b1fe94",
"assets/assets/icons/warning.svg": "c487d265bf8683d80eb56ae93b1afcd9",
"assets/assets/icons/whatsapp.png": "58af041f4d9c91011b2200c3c037bf35",
"assets/assets/images/add_product.png": "f36d2eaf16bea2ecb5d8538f9e00c1cb",
"assets/assets/images/auth_side_image.png": "a8295617ef8e6bdbef1b5f48914b9e7f",
"assets/assets/images/customers.png": "29c3f44db5bf8327ce04fb1aa072194e",
"assets/assets/images/customers.svg": "02f3bea4397f2ed1487de339c13685e2",
"assets/assets/images/default_img.jpg": "3c70d3de98f22b2e196c3f2dff71f81a",
"assets/assets/images/dollar.png": "d4a402ad5e2867cceb4e593da1bf3a9c",
"assets/assets/images/favorite.png": "54d9adf34dcbc4ff998516b7221797a2",
"assets/assets/images/funds.png": "f800d49a34f847882e86a0fd8684aae4",
"assets/assets/images/green_bank.png": "8315b70002d4663f12713d7acb81ed30",
"assets/assets/images/in_stock.png": "d3eea184bc4c7c1263a206555e0f84a5",
"assets/assets/images/in_stock.svg": "5f46c70c320b78b6e3a3e470a98274a8",
"assets/assets/images/logo.png": "6f78f89bb34b3fb787b613f69863b949",
"assets/assets/images/no_sale_illustration.png": "c0aa79413cffc0a13a0d51b76ad925f3",
"assets/assets/images/orders.png": "b364ca83835916376d9ff72c9c68dba0",
"assets/assets/images/orders.svg": "f1f87ff08df6d8275ab4e9e07dad23a9",
"assets/assets/images/out_of_stock.svg": "4fca43ec60225e3c025cdb12a1cdddd3",
"assets/assets/images/paid.png": "a3f5a88f2759d744cf223ab3814bfe35",
"assets/assets/images/paid.svg": "62f919742738d3807370fc1614da4521",
"assets/assets/images/product_pic_one.png": "0844d0e0cb61f17db7c65991d62a91c2",
"assets/assets/images/product_pic_two.png": "6f0eaddc9fb6fe9739c16a90db3e9a37",
"assets/assets/images/profile_pic.png": "2949e17e97a193dbac8132670c28c40e",
"assets/assets/images/receipt.png": "a5763a8f21ae5de6233862216efb38ae",
"assets/assets/images/revenue.png": "a07fbabd77ca687b03af5453ab254292",
"assets/assets/images/revenue.svg": "e815e510ad6ac8c0d66f6fa820304231",
"assets/assets/images/sales.png": "454596f3b5d177b2898384659581cc31",
"assets/assets/images/sales.svg": "b597f88f8d8e1e5fff97f79e713782a0",
"assets/assets/images/shoprite_logo.png": "b10939eb2407207116e8b7fbfeb77032",
"assets/assets/images/shop_logo_default.jpg": "87a57d9ff00c73e499c11d36a00fd80b",
"assets/assets/images/splash_logo.png": "213d93d65f4fdbd5d7af914f9cb44509",
"assets/assets/images/support_illustration.png": "4122fb3feadcdf0fe6b6aeb7ebf1aa08",
"assets/assets/images/total_product.png": "0c40af14af8764d1aee7ddf6fdc84eaa",
"assets/assets/images/total_product_bought.png": "023440c2465c21bd0c08ca76993c04a1",
"assets/assets/images/total_product_bought.svg": "0feb2ef09855932a07d8cb6e9c3d9b06",
"assets/assets/images/Twitter%2520SaaS%2520builder.png": "e468beeab2cefe6af74f71d42b062058",
"assets/assets/images/white_bank.png": "d93b8dae755c2f67cecbcc27f67460d1",
"assets/assets/images/woman.png": "37ed4c488846da2f928c7c88f162a72d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9763818f9507579a3b58a711b1bab714",
"assets/NOTICES": "7892323fb896937a042948282f849a59",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js": "772bfb61f9f219b31fefe571f75f9dd6",
"assets/packages/amplify_auth_cognito_dart/lib/src/workers/workers.min.js.map": "faeefddee12d604326347aed3d78fbcb",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js": "97addd330c84b3e5293ff92e57a14187",
"assets/packages/amplify_secure_storage_dart/lib/src/worker/workers.min.js.map": "d7df73e44cb061869867c2be53b7dd28",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"img/splash_logo.png": "213d93d65f4fdbd5d7af914f9cb44509",
"index.html": "e0661a051651b37034402fdba2df6264",
"/": "e0661a051651b37034402fdba2df6264",
"main.dart.js": "29e86f935edbdcd20df71b8d28e04a66",
"manifest.json": "1e5b445719e6a7527dd904b95e5c6c4f",
"splash/img/dark-1x.png": "e434f8c47fac839a1ed17469d744feec",
"splash/img/dark-2x.png": "f9357242646ef7fbd7a290f4d1e51507",
"splash/img/dark-3x.png": "dc17bcb9568343b755b7a91c277d8cf8",
"splash/img/dark-4x.png": "24fe0244e7fb415e44af621e63b60265",
"splash/img/light-1x.png": "e434f8c47fac839a1ed17469d744feec",
"splash/img/light-2x.png": "f9357242646ef7fbd7a290f4d1e51507",
"splash/img/light-3x.png": "dc17bcb9568343b755b7a91c277d8cf8",
"splash/img/light-4x.png": "24fe0244e7fb415e44af621e63b60265",
"version.json": "12481ed665e76f12267e9aff8cb08c2c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
