'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "013c95b65e4bf38627ee4989cd5cc362",
".git/config": "ce6d0cab72a0437ae5d1e605c488530b",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "71b4a7ae7827a9373961c243f4c1954d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bc8f5688ced4f859930ea313d7ef8f53",
".git/logs/refs/heads/main": "29e7721c15d72d7e7ed30485e0ad853d",
".git/logs/refs/remotes/origin/main": "a2c0c4edae6708ed1a068a7629e2c34e",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/09b25043c85a0c871683713ac62b8c02112538": "010ff7a859a73da0d20f8149e6e09856",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/5d7c09cb63f28291e7ce2f0e3dae641af8472e": "496e2aea18030d51cecb2e36b04919ae",
".git/objects/06/e9823b928e6057409fa87fa86a5459bc1736d8": "1176d1f5f75d4a5de8b2d2e076cbc333",
".git/objects/08/57d36b2f2c65bed113598c55aadc3937936bc4": "5a481cbc9b6dfacac5d8261e5b4a9011",
".git/objects/0e/c741b0dcedc9f0ecb431dff925ccc00a6070cb": "41b22307af09c793ce35ada336b9e59e",
".git/objects/1a/8667128f8823a80497fdc2a30bb0551c0eaf6a": "1a29fd5ee0e85f3e36e5ff8ec386a1a1",
".git/objects/1e/e22bfbf0c63c474312205c875a73aeccf09368": "7af71bcc679ef15bd17033e5598d2805",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2e/c1de5bcc169b06fd60d8d700843a2c29c514e0": "f90fd3a9603979b0e7061dd11a56781d",
".git/objects/2f/37fe64b6d5492a0d98e9901389422b1c2baf77": "1e42816196978b4ca314dd882dceccbf",
".git/objects/2f/b4999d880bb93f31d218430d297c2614e12c22": "37b211eb4d488671207921f7a7a8ac5c",
".git/objects/31/d7959b9f9ae21f6fb097a155df18c2d10af9fb": "34478d231025a339e47247c7d8fd330d",
".git/objects/37/63eba53c8d2501a7ae855b80a9f64ac0c5aadd": "22ba0e53b2d4a2e21f34b5cfdb5663f1",
".git/objects/37/b3f540e03f40493d73086c58512bfc0004996c": "a348c3d50986f95e237dbcbab1e6ccf0",
".git/objects/3a/7219bfdf35110bc98c73076c80c40a14826d19": "149acd249c1f5cc1bdc108874314c2f6",
".git/objects/41/39eb0e6d1cf863a77a497b0083802359d39665": "ab86dc937e23b8ffce098c0c791dbcc5",
".git/objects/42/65877b39464521d140f6838ea3ef4044551b26": "936ebf04a81e4d1c67b4c187921f9557",
".git/objects/43/ec0667daa112f1e3e7651a3f78d738d7c4f3c3": "7adb66c89e3280cab009c3cd81216f7a",
".git/objects/45/d89dcb6f8b252774b4a617213f69270d28f849": "cc2294fd3f98c62f64189622bb20f7e4",
".git/objects/46/a4f9b5d6aa67dee0cf2a65f54cc8f499057bcd": "7a0025d4ad74fc28984dd63ef0a131d1",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/ca44af6a1958223e55cfa45fa4ac9cb42a303b": "4bdc5101e58f22d8e3e2f2a457c1951a",
".git/objects/4f/b98b9638fc6173092ebbfa5cffb73d3fcac1eb": "7bb0688067c1fca7439a4bebf42c7890",
".git/objects/52/53cd81e4b724852e8ad71098d2f0a20fc50538": "fbdc7ccd6e4f9ea1ca5a441d1f62c8d4",
".git/objects/55/daebe5ba7e59551a5751d749b89f0148fc7e88": "a3c2d17e3320be656e29252fa87a6df9",
".git/objects/5a/8defb71e9a2d7f99038f5e8a6bb4298b215527": "098a5c55d0e6e9540c4e067e1f574212",
".git/objects/5b/2376a59460a558ba82211f8a5482fc0f9323b6": "390ae95cf4b2a47750f4be7f99c119e0",
".git/objects/61/cf6c4036ba1e93a4179dbe8f5d0a3e4fb67bfb": "700929cb605b96db1a658bbb92f23704",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/93f58dc3841485653adc1de0ef21bfd2aa7096": "1d644182f54b729aaf78771d6a22abf3",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/7d0194a77009860bd177116b40db09046c2267": "c9922fcdb2533b0342b7bd25111845a2",
".git/objects/78/685676c20791b69f20a58cbc9713a2cf62c5ec": "275084b061f4501777809e5195c3fd15",
".git/objects/7f/b65da8bf7eaebed1cbed8c1a553835f9bfb3eb": "474b7995f6709a402f858fa3d92a96ff",
".git/objects/80/fb02d7720fd90adb8783ea24b9bbf0716f081d": "473c112e8bb051d6c165f97bbdb50acb",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/576f6a6143579b5b78b61dad7ae34847b51580": "7cda9792f8f5b236921b187bb0c783a1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/93/bc6308be87cc636d2229cf8eca9a4d490a67c6": "15953c1c55601de6c60e1433f0c59626",
".git/objects/95/80cc849f39ee736958e41ffbf0742c86628881": "4d14a68ef27e204d18b79da1d2d26740",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/4878128211bc0b5853df3363b0c35776cf2378": "4179c85284358900090640934800ea8b",
".git/objects/9a/b08856663da964f780a454c3f1c72d402b3c31": "6ab9532cfb38c6635c51019957a3dba1",
".git/objects/9e/251bd28048674d32938dea77e73efbeb9fa27d": "6b0fb0b99ec498cbbb25fc5b908e6d59",
".git/objects/a2/21a1590dfe7087b1dbc5bea98d89ce4dec0a5a": "2d9e014eb6fbc8e7b9e732a94c1144d7",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/799717369bb2f9d49855fb2ee0bb86d7558a7d": "97bcaedae2147eed7b5d548af74bdc2b",
".git/objects/b5/db0482f19b967595321878116e17a3fd5a2a96": "8c63f06a9be831c3832bb248cd6e3fab",
".git/objects/b7/3d81b3f814939b25339727340b6bf34e20a803": "6b912156f2796a1df519c88525aaf234",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/a0784236b3b970fda767e4203e95ecb6e0f029": "d79f98e1bd2c2aea4a869222af9961df",
".git/objects/d9/b086137c5704c0754f9e1317d20cb8241a53d4": "9208fe3e115ac0814339d3c384345d53",
".git/objects/dc/ccc76655e92ee24410d59b62fb9a0127af7e68": "d7c3e4be42bbd19a0d8b9311bb72a899",
".git/objects/dc/f36613311753b8e41d7fce67f5365bf06bbda0": "443cc28d7e3679501fbf47ee8a17a38e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/abc0bccc9477932c9db6fd6dae70735d48c446": "9fd1ed36d8d6415388485ab91b19199c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/43b756be72cedf91ac4921ad8190945969b10d": "85f3d8f7f24c8b3e9f88301804f2ee3a",
".git/objects/fd/7274035d2977fcfb71653c4d8e50f97add4a5a": "5a85eea900a18cd0d17fa44b93741f36",
".git/refs/heads/main": "3338d98056e51f35720e035075b0557d",
".git/refs/remotes/origin/main": "3338d98056e51f35720e035075b0557d",
"assets/AssetManifest.bin": "bdcb12567865a1da8d52677c9062383e",
"assets/AssetManifest.bin.json": "9c62d871fed86b3f1d450aae03d88cae",
"assets/AssetManifest.json": "39555fe9f5d79f88db670632c704df2a",
"assets/assets/images/cv.pdf": "27bfe0e5919e8897e41f3de83ccc5293",
"assets/assets/images/gom1.png": "e5277db456918b6b69327eed105387a7",
"assets/assets/images/gom2.png": "c8d5923bad3f898cc6cf1f971e88659a",
"assets/assets/images/gom3.png": "3bc5b9879d8ca8258f717dfa664bb794",
"assets/assets/images/gom4.png": "ece454448aefab0702b4e96928d94d2a",
"assets/assets/images/hr1.png": "9c6572cbb0c5cae68a3e914c645ca2a8",
"assets/assets/images/hr2.png": "613d43ec26c9c7da94f77ecd1bd884df",
"assets/assets/images/hr3.png": "9c6572cbb0c5cae68a3e914c645ca2a8",
"assets/assets/images/hr4.png": "5ebbe87c338901930536276d0122f503",
"assets/assets/images/m1.png": "95d6ded0c814a568c38a8ac4eb85adea",
"assets/assets/images/m2.png": "6fdf76dba175477e5c0cd2570f0aec64",
"assets/assets/images/m3.png": "34a3ba4162e6ac40d9697a9b0893f3aa",
"assets/assets/images/m4.png": "94571803cebe2a5ee1d80e8fb90203f5",
"assets/assets/images/m5.png": "fd2c15cb31b4c45169b2402461edfe4e",
"assets/assets/images/pro1.jpg": "e46dac54eb37bfaeb473efbd1521813d",
"assets/assets/images/pro2.jpg": "797484014374f66978c31a2f9309112d",
"assets/assets/images/pro3.jpg": "86db77ee7db906d7bf08838f774128fd",
"assets/assets/images/pro4.jpg": "7eeaeb164f9796bf136241d2a112ed2b",
"assets/assets/images/profile.jpg": "0ee36f028dff90cbc4bf3867c7f205a5",
"assets/assets/images/r1.jpeg": "147e32b9a3fb215ad5aeae834ac45853",
"assets/assets/images/r2.jpeg": "a3d5d9969a773b66cab27eff940da888",
"assets/assets/images/r3.jpeg": "90e148e16941a4664f4dfd5fef73983a",
"assets/assets/images/r4.jpeg": "6dfc206d0924af17ae1c9e78fd47f8f3",
"assets/assets/images/r5.jpeg": "e37de7917cfaf8b4e8e6f218ad2aeed5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "afe379e0cf34cafd83d7b504f2226e30",
"assets/NOTICES": "8fa920c62ffd2a5d6866260d1273a2ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3672b66d4f8402f8d7a498da4b43bdeb",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1dec37ae6f66ff59b6c6529e15cfbe68",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e56113d91c03b44bb6cf0407453738d0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "13ab5fb1722023d7f352ee138482fb90",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "73f4f9e89766f223b055159b2ae4baf0",
"/": "73f4f9e89766f223b055159b2ae4baf0",
"main.dart.js": "0cada4cf17574d96a2bfed8213864c09",
"manifest.json": "41e18b126a91ff0658e253ecbca1bf77",
"version.json": "59d2395580bb60caba00e1949de10660"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
