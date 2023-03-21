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
    "revision": "3077d8c0283895d932136f9bd7fb7c77"
  }, {
    "url": "about2.html",
    "revision": "d837d76a820952c81a91828c5d1a752d"
  }, {
    "url": "assets/_...all_-0debabde.js",
    "revision": null
  }, {
    "url": "assets/_name_-f273f8e5.js",
    "revision": null
  }, {
    "url": "assets/404-2390aaff.js",
    "revision": null
  }, {
    "url": "assets/about-a07db0ce.js",
    "revision": null
  }, {
    "url": "assets/about2-2f8b0842.js",
    "revision": null
  }, {
    "url": "assets/app-75e40a44.js",
    "revision": null
  }, {
    "url": "assets/home-753a1178.js",
    "revision": null
  }, {
    "url": "assets/icons-227b4bbd.js",
    "revision": null
  }, {
    "url": "assets/icons-d517a85d.css",
    "revision": null
  }, {
    "url": "assets/index-cf724b6f.css",
    "revision": null
  }, {
    "url": "assets/README-2851a0a1.js",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-cfe0a72c.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-295a6886.js",
    "revision": null
  }, {
    "url": "icons.html",
    "revision": "22726dcc8fb917c87f18d2e2b6f5fdb5"
  }, {
    "url": "index.html",
    "revision": "c90d08814102e6126c37d94d459b9615"
  }, {
    "url": "readme.html",
    "revision": "844aadf0584b9c8568c5b9b05dad78bb"
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
