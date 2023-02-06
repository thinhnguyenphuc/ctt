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
"index.html": "b2f1925dc66251c9d279e21c1cf96a83",
"/": "b2f1925dc66251c9d279e21c1cf96a83",
"main.dart.js": "da20ca552922884370df092b14cfe5ca",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "604018ff29b3c55bcb18fcc1a912c003",
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
