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
    "url": "3_questions.html",
    "revision": "55a70858124a775d5d101ce88adc3c0c"
  }, {
    "url": "about.html",
    "revision": "a418be453b0c41a605fdef2fb19edae9"
  }, {
    "url": "about2.html",
    "revision": "0fb1a652d6e1acb6482e0e146ac6ceb0"
  }, {
    "url": "assets/_...all_-18cd78da.js",
    "revision": null
  }, {
    "url": "assets/_name_-2cdb7ac8.js",
    "revision": null
  }, {
    "url": "assets/3_questions-d633f01c.js",
    "revision": null
  }, {
    "url": "assets/404-6f3bc3c2.js",
    "revision": null
  }, {
    "url": "assets/about-90433d04.js",
    "revision": null
  }, {
    "url": "assets/about2-3fd660fa.js",
    "revision": null
  }, {
    "url": "assets/app-373371a2.js",
    "revision": null
  }, {
    "url": "assets/home-71dcba62.js",
    "revision": null
  }, {
    "url": "assets/icons-69b06cb6.js",
    "revision": null
  }, {
    "url": "assets/icons-d517a85d.css",
    "revision": null
  }, {
    "url": "assets/index-4dd92774.css",
    "revision": null
  }, {
    "url": "assets/README-169aff1a.js",
    "revision": null
  }, {
    "url": "assets/technical_challenge-a22d89c8.js",
    "revision": null
  }, {
    "url": "assets/tell_about_yourself-737090d3.js",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-f947a944.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-295a6886.js",
    "revision": null
  }, {
    "url": "icons.html",
    "revision": "6fbd589f3988e422ba47d69ed0a77cc0"
  }, {
    "url": "index.html",
    "revision": "db8b41515801d57fb4582bedb47af52f"
  }, {
    "url": "readme.html",
    "revision": "0c20b0c8923514e89f65ec68f156d2bb"
  }, {
    "url": "technical_challenge.html",
    "revision": "b7b54cdc639ef35e0bef7fab8003f426"
  }, {
    "url": "tell_about_yourself.html",
    "revision": "02fb8fa19649b2dd6e96535c6f6bf3c5"
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
