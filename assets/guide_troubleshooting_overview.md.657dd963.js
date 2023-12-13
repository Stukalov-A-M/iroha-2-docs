import{_ as e,o as t,c as s,Q as o}from"./chunks/framework.1293becd.js";const g=JSON.parse('{"title":"Troubleshooting","description":"","frontmatter":{},"headers":[],"relativePath":"guide/troubleshooting/overview.md","filePath":"guide/troubleshooting/overview.md","lastUpdated":1702457319000}'),i={name:"guide/troubleshooting/overview.md"},r=o('<h1 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h1><p>This section is intended to help if you encounter issues while working with Iroha. If something goes wrong, please <a href="#check-the-keys">check the keys</a> first. If that doesn&#39;t help, check the troubleshooting instructions for each stage:</p><ul><li><a href="./installation-issues.html">Installation issues</a></li><li><a href="./configuration-issues.html">Configuration issues</a></li><li><a href="./deployment-issues.html">Deployment issues</a></li><li><a href="./integration-issues.html">Integration issues</a></li></ul><p>If the issue you are experiencing is not described here, contact us via <a href="https://t.me/hyperledgeriroha" target="_blank" rel="noreferrer">Telegram</a>.</p><h2 id="check-the-keys" tabindex="-1">Check the keys <a class="header-anchor" href="#check-the-keys" aria-label="Permalink to &quot;Check the keys&quot;">​</a></h2><p>Most issues arise as a result of unmatched keys. This is why we recommend to follow this rule: <strong>If something goes wrong, check the keys first</strong>.</p><p>Here&#39;s a quick explanation: It is not possible to differentiate the error messages that arise when peers&#39; keys do not match the keys in the array of <a href="/iroha-2-docs/guide/configure/peer-configuration.html#trusted-peers">trusted peers</a>, because it would expose the peers&#39; public key. As such, if you have Helm charts or K8s deployed with keys defined via the environment variables, you should check for Key definitions.</p><p>If in doubt, <a href="./../security/generating-cryptographic-keys.html">generate a new pair of keys</a>.</p>',8),a=[r];function n(h,l,c,u,d,p){return t(),s("div",null,a)}const k=e(i,[["render",n]]);export{g as __pageData,k as default};
