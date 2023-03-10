/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-01d9f47c'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "about.html",
    "revision": "fd46c62f48d18584318f196d04a0861c"
  }, {
    "url": "about2.html",
    "revision": "c0f663aa938ef2508125da561209058b"
  }, {
    "url": "assets/_...all_-616f8906.js",
    "revision": null
  }, {
    "url": "assets/_name_-7e981ecd.js",
    "revision": null
  }, {
    "url": "assets/404-dbea2326.js",
    "revision": null
  }, {
    "url": "assets/about-c4c8184e.js",
    "revision": null
  }, {
    "url": "assets/about2-db84926d.js",
    "revision": null
  }, {
    "url": "assets/app-40614864.js",
    "revision": null
  }, {
    "url": "assets/home-1cb2ead5.js",
    "revision": null
  }, {
    "url": "assets/icons-d517a85d.css",
    "revision": null
  }, {
    "url": "assets/icons-da21c853.js",
    "revision": null
  }, {
    "url": "assets/index-94c973da.css",
    "revision": null
  }, {
    "url": "assets/README-eb4734b4.js",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-4fe8961b.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-295a6886.js",
    "revision": null
  }, {
    "url": "icons.html",
    "revision": "8b9b905d68a7fce87ecbf52c7df7ae88"
  }, {
    "url": "index.html",
    "revision": "cf176a86417efdfc63da11402b29f17c"
  }, {
    "url": "readme.html",
    "revision": "496d8cb4ccdb70df20fa7abf8837b09c"
  }, {
    "url": "favicon.svg",
    "revision": "232e364bef2dd12a2093989b2dc5d5f5"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "5eaf74d1c43d30e0af743b68a3f48504"
  }, {
    "url": "pwa-192x192.png",
    "revision": "65f6c00ff3d88d8371df0480c1ba0272"
  }, {
    "url": "pwa-512x512.png",
    "revision": "20a2db7d5040eb315e6acf49c6983de9"
  }, {
    "url": "manifest.webmanifest",
    "revision": "37e8d18026b05432f623fc5efac2b4b1"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
