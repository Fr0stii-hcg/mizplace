// ==UserScript==
// @name         Mizkif
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Mizkids Attacks
// @author       Fr0stii
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/Fr0stii-hcg/mizplace/blob/main/mizkids.user.js
// @downloadURL  https://github.com/Fr0stii-hcg/mizplace/blob/main/mizkids.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://cdn.discordapp.com/attachments/959657090815770676/959678737992011826/imageedit_10_6976684199.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 1000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
