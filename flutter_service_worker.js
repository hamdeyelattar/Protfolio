'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "32d1da0ec12cfeee9d0eb62ade82fb0b",
".git/config": "b7ce213e4f4bdd70df39bbf5bfe5302a",
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
".git/index": "2e12b14395b9da29c0ace06ca2e53949",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "aac023be95083295073ae710c22cd649",
".git/logs/refs/heads/main": "4e90a4b373b5731658289be935644572",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/a907b1fc9f9293772092048001ec38938a1129": "6dac621adf67fdd8d1b0bf13288a3fa9",
".git/objects/08/57d36b2f2c65bed113598c55aadc3937936bc4": "5a481cbc9b6dfacac5d8261e5b4a9011",
".git/objects/10/0ce7f675288e0e077aa5c7614e84e1b5aeaa0f": "307105a04f07076387bc9b641351a2a6",
".git/objects/19/2dfbbc7410bf1870b194872b222da9ea79697a": "635ed6338c3f0474d2162a2d35fa74d7",
".git/objects/1a/8667128f8823a80497fdc2a30bb0551c0eaf6a": "1a29fd5ee0e85f3e36e5ff8ec386a1a1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/31/d7959b9f9ae21f6fb097a155df18c2d10af9fb": "34478d231025a339e47247c7d8fd330d",
".git/objects/34/8dfa5b75ef53d07c49da376c0572977b0aacfd": "4fe9f5dabe9caf8e207078319047b2b5",
".git/objects/35/9c118a3d240e892be946d5be5d89374b4431c3": "af7a80105f94052adf20bbc1f8dad670",
".git/objects/37/63eba53c8d2501a7ae855b80a9f64ac0c5aadd": "22ba0e53b2d4a2e21f34b5cfdb5663f1",
".git/objects/3c/b27684b45657b9ca64185dfa671dfde7d080a9": "e59fd0cfae7fd45762c073cef70fc5fa",
".git/objects/45/d89dcb6f8b252774b4a617213f69270d28f849": "cc2294fd3f98c62f64189622bb20f7e4",
".git/objects/4f/b98b9638fc6173092ebbfa5cffb73d3fcac1eb": "7bb0688067c1fca7439a4bebf42c7890",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/93f58dc3841485653adc1de0ef21bfd2aa7096": "1d644182f54b729aaf78771d6a22abf3",
".git/objects/68/0c51df68e6fbfdf6ff9ee9f4688e2698607af2": "b2ad331cdcc93ba242d27f76269d7925",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/91/b8c450b2a894ec0720456079f40cff45cc9f97": "22f1a3c787a1af4a0b0dc7a1626d136c",
".git/objects/96/c3d81660f539e906b6893ee67569f3bc04e4ef": "3c422b0c8203813494c153994002d053",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/4878128211bc0b5853df3363b0c35776cf2378": "4179c85284358900090640934800ea8b",
".git/objects/a7/a80d4711f699b49bca3e3f82ac2b205804b179": "3e5c573ef81e662e7cffdb503859142a",
".git/objects/ab/19204d2ba7abedbcd4eec948aa7b7552eb45ec": "1cbd2c4740a083c2f42015b1f52ba42f",
".git/objects/ab/e96f440d29c8b063b1ca856725382d50659a17": "75da8d8087275e357379793f251d85b5",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e11858cf96fbf4b94771c042555a7719e19779": "14a638700942b7daa77a548a13b264ff",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/eb34348e9187ce3fb2c8fe87537c250a22aa21": "5e2af87103e57df33f5270df72bb7072",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cd/d56c3fd08a0bb01e17488e4a00d50f2e6ed21b": "af26911fec9a422075c09e19ac47a0b1",
".git/objects/d4/04603db02e01166eb56fc7c29afac3b8c432de": "90cc9e61a75f6a817dac803b374fb1aa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/fe4239dc2451ba7f1e1035b9b8d192711e89a9": "52bf5142ac9f5339a9ff00e092248581",
".git/objects/e3/4557d21bb504ffe7216f4688cf816ad796195d": "b4fda4a71ffd6723adbafde1c56c7981",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/4c3109145d974f9251e1bd51d51d268aea0019": "2ce561a5337d090d413ec7fec9f239fa",
".git/objects/ed/6a9d3644c22ea9de92bbfe11315baad11287af": "4c2f2c59d397d887e6cf912d2cd2db29",
".git/objects/ee/06e19834cf52c52e57de76da5137beac37ed54": "ad1752a3a99ef923bdc9dc84451f8382",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/bf1098d1e3453a0eb69c529fc406e4a7678966": "2c433933d71376982e27a1e61964a5ac",
".git/objects/ff/75b87117e51dde3d949cb5411eda4932b508bd": "c32b449adf2689690e63d5cf549edf89",
".git/refs/heads/main": "ee1be4014b1ced64f424916cb90a83f7",
"assets/AssetManifest.bin": "f4a30aad41da995aa3b4cf368b275af3",
"assets/AssetManifest.bin.json": "c598b6c9c84c19c04d24d198a685989e",
"assets/AssetManifest.json": "eb038ab518802ed41493681ee0da5a5f",
"assets/assets/images/cv.pdf": "27bfe0e5919e8897e41f3de83ccc5293",
"assets/assets/images/gom.jpg": "82232c67b4d00d118ac5c697d937ef8c",
"assets/assets/images/hr.jpg": "ef20782457cd142e77c1e96456092526",
"assets/assets/images/menu.jpg": "0c007762007f650e6ccf499dd304b200",
"assets/assets/images/pro.jpg": "ada047f535a6dfb5d53a38de7493b0df",
"assets/assets/images/profile.jpg": "0ee36f028dff90cbc4bf3867c7f205a5",
"assets/assets/images/richy.jpg": "3fff8f6a6649f0ae670d2ba155534bba",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "5c4eda1096de9892b90d6fb46eab57a4",
"assets/NOTICES": "8fa920c62ffd2a5d6866260d1273a2ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3672b66d4f8402f8d7a498da4b43bdeb",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "8dab20d707a4316c0c111d8e082adba7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "3f8569b1bea63778801d6855f8aa0356",
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
"flutter_bootstrap.js": "358f3fba21d8525ac4b61b2310297e7f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "73f4f9e89766f223b055159b2ae4baf0",
"/": "73f4f9e89766f223b055159b2ae4baf0",
"main.dart.js": "71646ecaebde849bc1c8a31747b6c0bd",
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
