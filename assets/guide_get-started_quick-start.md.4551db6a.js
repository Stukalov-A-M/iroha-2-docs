import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.1293becd.js";const g=JSON.parse('{"title":"Quick Start with Docker","description":"","frontmatter":{},"headers":[],"relativePath":"guide/get-started/quick-start.md","filePath":"guide/get-started/quick-start.md","lastUpdated":1702457319000}'),o={name:"guide/get-started/quick-start.md"},l=n(`<h1 id="quick-start-with-docker" tabindex="-1">Quick Start with Docker <a class="header-anchor" href="#quick-start-with-docker" aria-label="Permalink to &quot;Quick Start with Docker&quot;">​</a></h1><ol><li><p>Install the prerequisites:</p><ul><li><a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer">Docker</a></li><li><a href="https://docs.docker.com/compose/" target="_blank" rel="noreferrer">Docker compose</a></li></ul></li><li><p><a href="./install.html">Install Iroha from GitHub</a>.</p></li><li><p>Run <code>docker-compose</code> to bring up a network of 4 containerised peers:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker-compose</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">up</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker-compose</span><span style="color:#24292E;"> </span><span style="color:#032F62;">up</span></span></code></pre></div><p>Depending on your set-up, this might either <a href="https://hub.docker.com/r/hyperledger/iroha2/tags" target="_blank" rel="noreferrer">pull the image</a> off of DockerHub, or build the container locally. After this process is complete, you&#39;ll be greeted with,</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">[+] Running 4/0</span></span>
<span class="line"><span style="color:#2188ff;"> ⠿ Container iroha-iroha2-1  Created                                         0.0s</span></span>
<span class="line"><span style="color:#2188ff;"> ⠿ Container iroha-iroha0-1  Created                                         0.0s</span></span>
<span class="line"><span style="color:#2188ff;"> ⠿ Container iroha-iroha3-1  Created                                         0.0s</span></span>
<span class="line"><span style="color:#2188ff;"> ⠿ Container iroha-iroha1-1  Created                                         0.0s</span></span>
<span class="line"><span style="color:#e1e4e8;">Attaching to iroha-iroha0-1, iroha-iroha1-1, iroha-iroha2-1, iroha-iroha3-1</span></span>
<span class="line"><span style="color:#ffea7f;">iroha-iroha1-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.540651Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> Hyperledgerいろは2にようこそ！</span></span>
<span class="line"><span style="color:#ffea7f;">iroha-iroha1-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.542379Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> (translation) Welcome to Hyperledger Iroha 2!</span></span>
<span class="line"><span style="color:#ffea7f;">iroha-iroha1-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.542906Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> Starting peer </span><span style="color:#e1e4e8;font-style:italic;">listen_addr</span><span style="color:#e1e4e880;">=</span><span style="color:#e1e4e8;">iroha1:1338</span></span>
<span class="line"><span style="color:#ffea7f;">iroha-iroha1-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.543188Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha_p2p::network:</span><span style="color:#e1e4e8;"> Binding listener </span><span style="color:#e1e4e8;font-style:italic;">listen_addr</span><span style="color:#e1e4e880;">=</span><span style="color:#e1e4e8;">iroha1:1338</span></span>
<span class="line"><span style="color:#ffea7f;">iroha-iroha1-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.551356Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha_p2p::network:</span><span style="color:#e1e4e8;"> Starting network actor </span><span style="color:#e1e4e8;font-style:italic;">listen_addr</span><span style="color:#e1e4e880;">=</span><span style="color:#e1e4e8;">iroha1:1338</span></span>
<span class="line"><span style="color:#ffea7f;">iroha-iroha1-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.569289Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha_core::kura:</span><span style="color:#e1e4e8;"> Loaded 0 blocks at init.</span></span>
<span class="line"><span style="color:#ffea7f;">iroha-iroha1-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.572457Z</span><span style="color:#e1e4e8;"> </span><span style="color:#ea4a5a;">ERROR</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> Telemetry did not start</span></span>
<span class="line"><span style="color:#ffea7f;">iroha-iroha1-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.594190Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> Starting Iroha</span></span>
<span class="line"><span style="color:#34d058;">iroha-iroha2-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.698491Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> Hyperledgerいろは2にようこそ！</span></span>
<span class="line"><span style="color:#34d058;">iroha-iroha2-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.700998Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> (translation) Welcome to Hyperledger Iroha 2!</span></span>
<span class="line"><span style="color:#34d058;">iroha-iroha2-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.701624Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> Starting peer </span><span style="color:#e1e4e8;font-style:italic;">listen_addr</span><span style="color:#e1e4e880;">=</span><span style="color:#e1e4e8;">iroha2:1339</span></span>
<span class="line"><span style="color:#34d058;">iroha-iroha2-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.701895Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha_p2p::network:</span><span style="color:#e1e4e8;"> Binding listener </span><span style="color:#e1e4e8;font-style:italic;">listen_addr</span><span style="color:#e1e4e880;">=</span><span style="color:#e1e4e8;">iroha2:1339</span></span>
<span class="line"><span style="color:#34d058;">iroha-iroha2-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.707759Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha_p2p::network:</span><span style="color:#e1e4e8;"> Starting network actor </span><span style="color:#e1e4e8;font-style:italic;">listen_addr</span><span style="color:#e1e4e880;">=</span><span style="color:#e1e4e8;">iroha2:1339</span></span>
<span class="line"><span style="color:#39c5cf;">iroha-iroha0-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.719683Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> Hyperledgerいろは2にようこそ！</span></span>
<span class="line"><span style="color:#39c5cf;">iroha-iroha0-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.722029Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> (translation) Welcome to Hyperledger Iroha 2!</span></span>
<span class="line"><span style="color:#34d058;">iroha-iroha2-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.730201Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha_core::kura:</span><span style="color:#e1e4e8;"> Loaded 1 blocks at init.</span></span>
<span class="line"><span style="color:#34d058;">iroha-iroha2-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.746975Z</span><span style="color:#e1e4e8;"> </span><span style="color:#ea4a5a;">ERROR</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> Telemetry did not start</span></span>
<span class="line"><span style="color:#39c5cf;">iroha-iroha0-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.748879Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> Starting peer </span><span style="color:#e1e4e8;font-style:italic;">listen_addr</span><span style="color:#e1e4e880;">=</span><span style="color:#e1e4e8;">iroha0:1337</span></span>
<span class="line"><span style="color:#39c5cf;">iroha-iroha0-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.749155Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha_p2p::network:</span><span style="color:#e1e4e8;"> Binding listener </span><span style="color:#e1e4e8;font-style:italic;">listen_addr</span><span style="color:#e1e4e880;">=</span><span style="color:#e1e4e8;">iroha0:1337</span></span>
<span class="line"><span style="color:#39c5cf;">iroha-iroha0-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.754613Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha_p2p::network:</span><span style="color:#e1e4e8;"> Starting network actor </span><span style="color:#e1e4e8;font-style:italic;">listen_addr</span><span style="color:#e1e4e880;">=</span><span style="color:#e1e4e8;">iroha0:1337</span></span>
<span class="line"><span style="color:#b392f0;">iroha-iroha3-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.753230Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> Hyperledgerいろは2にようこそ！</span></span>
<span class="line"><span style="color:#b392f0;">iroha-iroha3-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.754934Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> (translation) Welcome to Hyperledger Iroha 2!</span></span>
<span class="line"><span style="color:#b392f0;">iroha-iroha3-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.755503Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> Starting peer </span><span style="color:#e1e4e8;font-style:italic;">listen_addr</span><span style="color:#e1e4e880;">=</span><span style="color:#e1e4e8;">iroha3:1340</span></span>
<span class="line"><span style="color:#b392f0;">iroha-iroha3-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.755802Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha_p2p::network:</span><span style="color:#e1e4e8;"> Binding listener </span><span style="color:#e1e4e8;font-style:italic;">listen_addr</span><span style="color:#e1e4e880;">=</span><span style="color:#e1e4e8;">iroha3:1340</span></span>
<span class="line"><span style="color:#b392f0;">iroha-iroha3-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.760437Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha_p2p::network:</span><span style="color:#e1e4e8;"> Starting network actor </span><span style="color:#e1e4e8;font-style:italic;">listen_addr</span><span style="color:#e1e4e880;">=</span><span style="color:#e1e4e8;">iroha3:1340</span></span>
<span class="line"><span style="color:#34d058;">iroha-iroha2-1  | </span><span style="color:#e1e4e880;">2023-02-27T12:43:08.763216Z</span><span style="color:#e1e4e8;"> </span><span style="color:#34d058;"> INFO</span><span style="color:#e1e4e8;"> </span><span style="color:#e1e4e880;">iroha:</span><span style="color:#e1e4e8;"> Starting Iroha</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[+] Running 4/0</span></span>
<span class="line"><span style="color:#0366d6;"> ⠿ Container iroha-iroha2-1  Created                                         0.0s</span></span>
<span class="line"><span style="color:#0366d6;"> ⠿ Container iroha-iroha0-1  Created                                         0.0s</span></span>
<span class="line"><span style="color:#0366d6;"> ⠿ Container iroha-iroha3-1  Created                                         0.0s</span></span>
<span class="line"><span style="color:#0366d6;"> ⠿ Container iroha-iroha1-1  Created                                         0.0s</span></span>
<span class="line"><span style="color:#24292e;">Attaching to iroha-iroha0-1, iroha-iroha1-1, iroha-iroha2-1, iroha-iroha3-1</span></span>
<span class="line"><span style="color:#dbab09;">iroha-iroha1-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.540651Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> Hyperledgerいろは2にようこそ！</span></span>
<span class="line"><span style="color:#dbab09;">iroha-iroha1-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.542379Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> (translation) Welcome to Hyperledger Iroha 2!</span></span>
<span class="line"><span style="color:#dbab09;">iroha-iroha1-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.542906Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> Starting peer </span><span style="color:#24292e;font-style:italic;">listen_addr</span><span style="color:#24292e80;">=</span><span style="color:#24292e;">iroha1:1338</span></span>
<span class="line"><span style="color:#dbab09;">iroha-iroha1-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.543188Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha_p2p::network:</span><span style="color:#24292e;"> Binding listener </span><span style="color:#24292e;font-style:italic;">listen_addr</span><span style="color:#24292e80;">=</span><span style="color:#24292e;">iroha1:1338</span></span>
<span class="line"><span style="color:#dbab09;">iroha-iroha1-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.551356Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha_p2p::network:</span><span style="color:#24292e;"> Starting network actor </span><span style="color:#24292e;font-style:italic;">listen_addr</span><span style="color:#24292e80;">=</span><span style="color:#24292e;">iroha1:1338</span></span>
<span class="line"><span style="color:#dbab09;">iroha-iroha1-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.569289Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha_core::kura:</span><span style="color:#24292e;"> Loaded 0 blocks at init.</span></span>
<span class="line"><span style="color:#dbab09;">iroha-iroha1-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.572457Z</span><span style="color:#24292e;"> </span><span style="color:#d73a49;">ERROR</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> Telemetry did not start</span></span>
<span class="line"><span style="color:#dbab09;">iroha-iroha1-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.594190Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> Starting Iroha</span></span>
<span class="line"><span style="color:#28a745;">iroha-iroha2-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.698491Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> Hyperledgerいろは2にようこそ！</span></span>
<span class="line"><span style="color:#28a745;">iroha-iroha2-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.700998Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> (translation) Welcome to Hyperledger Iroha 2!</span></span>
<span class="line"><span style="color:#28a745;">iroha-iroha2-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.701624Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> Starting peer </span><span style="color:#24292e;font-style:italic;">listen_addr</span><span style="color:#24292e80;">=</span><span style="color:#24292e;">iroha2:1339</span></span>
<span class="line"><span style="color:#28a745;">iroha-iroha2-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.701895Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha_p2p::network:</span><span style="color:#24292e;"> Binding listener </span><span style="color:#24292e;font-style:italic;">listen_addr</span><span style="color:#24292e80;">=</span><span style="color:#24292e;">iroha2:1339</span></span>
<span class="line"><span style="color:#28a745;">iroha-iroha2-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.707759Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha_p2p::network:</span><span style="color:#24292e;"> Starting network actor </span><span style="color:#24292e;font-style:italic;">listen_addr</span><span style="color:#24292e80;">=</span><span style="color:#24292e;">iroha2:1339</span></span>
<span class="line"><span style="color:#1b7c83;">iroha-iroha0-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.719683Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> Hyperledgerいろは2にようこそ！</span></span>
<span class="line"><span style="color:#1b7c83;">iroha-iroha0-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.722029Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> (translation) Welcome to Hyperledger Iroha 2!</span></span>
<span class="line"><span style="color:#28a745;">iroha-iroha2-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.730201Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha_core::kura:</span><span style="color:#24292e;"> Loaded 1 blocks at init.</span></span>
<span class="line"><span style="color:#28a745;">iroha-iroha2-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.746975Z</span><span style="color:#24292e;"> </span><span style="color:#d73a49;">ERROR</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> Telemetry did not start</span></span>
<span class="line"><span style="color:#1b7c83;">iroha-iroha0-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.748879Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> Starting peer </span><span style="color:#24292e;font-style:italic;">listen_addr</span><span style="color:#24292e80;">=</span><span style="color:#24292e;">iroha0:1337</span></span>
<span class="line"><span style="color:#1b7c83;">iroha-iroha0-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.749155Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha_p2p::network:</span><span style="color:#24292e;"> Binding listener </span><span style="color:#24292e;font-style:italic;">listen_addr</span><span style="color:#24292e80;">=</span><span style="color:#24292e;">iroha0:1337</span></span>
<span class="line"><span style="color:#1b7c83;">iroha-iroha0-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.754613Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha_p2p::network:</span><span style="color:#24292e;"> Starting network actor </span><span style="color:#24292e;font-style:italic;">listen_addr</span><span style="color:#24292e80;">=</span><span style="color:#24292e;">iroha0:1337</span></span>
<span class="line"><span style="color:#5a32a3;">iroha-iroha3-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.753230Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> Hyperledgerいろは2にようこそ！</span></span>
<span class="line"><span style="color:#5a32a3;">iroha-iroha3-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.754934Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> (translation) Welcome to Hyperledger Iroha 2!</span></span>
<span class="line"><span style="color:#5a32a3;">iroha-iroha3-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.755503Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> Starting peer </span><span style="color:#24292e;font-style:italic;">listen_addr</span><span style="color:#24292e80;">=</span><span style="color:#24292e;">iroha3:1340</span></span>
<span class="line"><span style="color:#5a32a3;">iroha-iroha3-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.755802Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha_p2p::network:</span><span style="color:#24292e;"> Binding listener </span><span style="color:#24292e;font-style:italic;">listen_addr</span><span style="color:#24292e80;">=</span><span style="color:#24292e;">iroha3:1340</span></span>
<span class="line"><span style="color:#5a32a3;">iroha-iroha3-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.760437Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha_p2p::network:</span><span style="color:#24292e;"> Starting network actor </span><span style="color:#24292e;font-style:italic;">listen_addr</span><span style="color:#24292e80;">=</span><span style="color:#24292e;">iroha3:1340</span></span>
<span class="line"><span style="color:#28a745;">iroha-iroha2-1  | </span><span style="color:#24292e80;">2023-02-27T12:43:08.763216Z</span><span style="color:#24292e;"> </span><span style="color:#28a745;"> INFO</span><span style="color:#24292e;"> </span><span style="color:#24292e80;">iroha:</span><span style="color:#24292e;"> Starting Iroha</span></span></code></pre></div></li><li><p>Follow the <a href="./bash.html">Bash tutorial</a> to check out Iroha&#39;s capabilities.</p></li><li><p>When you&#39;re done with the test network, just hit <code>Control + C</code> to stop the containers (<code>⌃ + C</code> on Mac).</p></li></ol><h2 id="docker-options" tabindex="-1">Docker Options <a class="header-anchor" href="#docker-options" aria-label="Permalink to &quot;Docker Options&quot;">​</a></h2><p>You might also be interested in other options for local compilation:</p><ul><li>For testing Iroha code quickly, you can use <code>docker-compose-single.yml</code>, which starts a container with a single peer.</li><li>For testing Iroha code in normal conditions, you can use <code>docker-compose-local.yml</code>, which starts 4 connected containers with peers.</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Please note that there is ongoing work to make our configurations for Docker even more customizable with the help of Swarm.</p></div>`,6),p=[l];function r(t,c,i,y,h,d){return a(),e("div",null,p)}const k=s(o,[["render",r]]);export{g as __pageData,k as default};
