import{_ as e,o,c as t,Q as i}from"./chunks/framework.1293becd.js";const m=JSON.parse('{"title":"Troubleshooting Configuration Issues","description":"","frontmatter":{},"headers":[],"relativePath":"guide/troubleshooting/configuration-issues.md","filePath":"guide/troubleshooting/configuration-issues.md","lastUpdated":1702457319000}'),s={name:"guide/troubleshooting/configuration-issues.md"},a=i('<h1 id="troubleshooting-configuration-issues" tabindex="-1">Troubleshooting Configuration Issues <a class="header-anchor" href="#troubleshooting-configuration-issues" aria-label="Permalink to &quot;Troubleshooting Configuration Issues&quot;">​</a></h1><p>This section offers troubleshooting tips for issues with Iroha 2 configuration. Make sure you <a href="./overview.html#check-the-keys">checked the keys</a> first, as it is the most common source of issues in Iroha.</p><p>If the issue you are experiencing is not described here, contact us via <a href="https://t.me/hyperledgeriroha" target="_blank" rel="noreferrer">Telegram</a>.</p><h2 id="outdated-genesis-on-a-docker-compose-setup" tabindex="-1">Outdated genesis on a Docker-compose setup <a class="header-anchor" href="#outdated-genesis-on-a-docker-compose-setup" aria-label="Permalink to &quot;Outdated genesis on a Docker-compose setup&quot;">​</a></h2><p>When you are using the Docker-compose version of Iroha, you might encounter the issue of one of the peer containers failing with the <code>Failed to deserialize raw genesis block</code> error. This happens if there is a mismatch between Iroha versions, meaning an Iroha peer cannot be initialized with the given genesis file.</p><p>If one of the peers is failing and it&#39;s been a while since you pulled the Iroha code for the first time, it&#39;s safe to assume the outdated genesis file is the cause. Here is how you can make sure Iroha is working incorrectly for exactly this reason:</p><ol><li><p>Use <code>docker ps</code> to check the current containers. Depending on the version, you will see either <code>hyperledger/iroha2:dev</code> or <code>hyperledger/iroha2:lts</code> containers. Check the number of Iroha peer containers in the <code>docker ps</code> output. By default, there are 4 peers configured in <code>docker-compose.yml</code> for Iroha, although you may have changed that value. You will see that the first container that should have been running Iroha just exited with an error, while three other containers remain active.</p></li><li><p>Check the logs and look for the <code>Failed to deserialize raw genesis block</code> error. If you started your Iroha in daemon mode with <code>docker compose up -d</code>, use <code>docker compose logs</code> command.</p></li></ol><p>The way to troubleshoot such an issue depends on the use of Iroha.</p><p>If this is a basic demo and you don&#39;t need the peer data to be restored, you can simply reset the genesis file to its latest state. To do this, use the <code>git checkout configs/peer/genesis.json</code> command.</p><p>If you need to restore the Iroha instance data, do the following:</p><ol><li>Connect the second Iroha peer that will copy the data from the first (failed) peer.</li><li>Wait for the new peer to synchronize the data with the first peer.</li><li>Leave the new peer active.</li><li>Update the genesis file of the first peer.</li></ol><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The features needed to monitor the copying progress between peers and a migration tool to update the genesis file are to be implemented in future releases.</p></div><h2 id="multihash-format-of-private-and-public-keys" tabindex="-1">Multihash Format of Private and Public Keys <a class="header-anchor" href="#multihash-format-of-private-and-public-keys" aria-label="Permalink to &quot;Multihash Format of Private and Public Keys&quot;">​</a></h2><p>If you look at the <a href="/iroha-2-docs/guide/configure/client-configuration.html">client configuration</a>, you will notice that the keys there are given in <a href="https://github.com/multiformats/multihash" target="_blank" rel="noreferrer">multi-hash format</a>.</p><p>If you&#39;ve never worked with multi-hash before, it is natural to assume that the right-hand-side is not a hexadecimal representation of the key bytes (two symbols per byte), but rather the bytes encoded as ASCII (or UTF-8), and call <code>from_hex</code> on the string literal in both the <code>public_key</code> and <code>private_key</code> instantiation.</p><p>It is also natural to assume that calling <code>PrivateKey::try_from_str</code> on the string literal would yield only the correct key. So if you get the number of bits in the key wrong, e.g. 32 bytes vs 64, that it would raise an error message.</p><p><strong>Both of these assumptions are wrong.</strong> Unfortunately, the error messages don&#39;t help in de-bugging this particular kind of failure.</p><p><strong>How to fix</strong>: use <code>hex_literal</code>. This will also turn an ugly string of characters into a nice small table of obviously hexadecimal numbers.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Even the <code>try_from_str</code> implementation cannot verify if a given string is a valid <code>PrivateKey</code> and warn you if it isn&#39;t.</p><p>It will catch some obvious errors, e.g. if the string contains an invalid symbol. However, since we aim to support many key formats, it can&#39;t do much else. It cannot tell if the key is the <em>correct</em> private key <em>for the given account</em> either, unless you submit an instruction.</p></div><p>These sorts of subtle mistakes can be avoided, for example, by deserialising directly from string literals, or by generating a fresh key-pair in places where it makes sense.</p>',20),r=[a];function n(h,c,l,d,u,p){return o(),t("div",null,r)}const g=e(s,[["render",n]]);export{m as __pageData,g as default};
