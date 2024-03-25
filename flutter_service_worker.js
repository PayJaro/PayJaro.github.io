'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "fc705ecebe915c902d8876b74e65a469",
"assets/AssetManifest.bin.json": "68957df5c3b617d37f7a6088269c138b",
"assets/AssetManifest.json": "a4d404eb65e2894154ba865381f5330d",
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
"assets/assets/images/support_illustration.png": "4122fb3feadcdf0fe6b6aeb7ebf1aa08",
"assets/assets/images/total_product.png": "0c40af14af8764d1aee7ddf6fdc84eaa",
"assets/assets/images/total_product_bought.png": "023440c2465c21bd0c08ca76993c04a1",
"assets/assets/images/total_product_bought.svg": "0feb2ef09855932a07d8cb6e9c3d9b06",
"assets/assets/images/Twitter%2520SaaS%2520builder.png": "e468beeab2cefe6af74f71d42b062058",
"assets/assets/images/white_bank.png": "d93b8dae755c2f67cecbcc27f67460d1",
"assets/assets/images/woman.png": "37ed4c488846da2f928c7c88f162a72d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e47524cad3008f8e5cb2428afe38ece8",
"assets/NOTICES": "94fdf82a954fa47833d7c9dc210b27cc",
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
"index.html": "6b0c87fd38a68c96ddad085520ffda1d",
"/": "6b0c87fd38a68c96ddad085520ffda1d",
"main.dart.js": "6ae7c0028e11e06c1bf9526d9901a0b2",
"manifest.json": "4d0c4cbb65d1db8fba0ba6231840391b",
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
