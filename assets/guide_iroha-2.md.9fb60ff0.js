import{_ as e,o as a,c as t,Q as o}from"./chunks/framework.1293becd.js";const g=JSON.parse('{"title":"Iroha 2 vs. Iroha 1","description":"","frontmatter":{},"headers":[],"relativePath":"guide/iroha-2.md","filePath":"guide/iroha-2.md","lastUpdated":1702457319000}'),i={name:"guide/iroha-2.md"},r=o('<h1 id="iroha-2-vs-iroha-1" tabindex="-1">Iroha 2 vs. Iroha 1 <a class="header-anchor" href="#iroha-2-vs-iroha-1" aria-label="Permalink to &quot;Iroha 2 vs. Iroha 1&quot;">​</a></h1><p>Iroha 2 is a <strong>complete</strong> re-write of <a href="https://iroha.readthedocs.io/en/develop/index.html" target="_blank" rel="noreferrer">Hyperledger Iroha</a> in Rust. As of writing, the two projects are developed concurrently.</p><p>In this introduction we outline the differences between the two versions of Iroha and highlight the new features of Iroha 2. It should be of particular interest to those who are already familiar with Iroha but wish to upgrade and start using the newer version.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Note that Iroha 1 and Iroha 2 are not compatible. Both projects are very different in their approaches and implementations as we present in the comparison below.</p><p>Among other changes, cryptography and account structures are implemented differently, meaning that users would have to generate new keys and link to their old account through a centralized service and no data from Iroha 1 would be accessible from Iroha 2.</p></div><h2 id="fault-tolerance" tabindex="-1">Fault Tolerance <a class="header-anchor" href="#fault-tolerance" aria-label="Permalink to &quot;Fault Tolerance&quot;">​</a></h2><p>Iroha 2 learned a great deal from the development of the original Iroha. Of particular importance is the new and improved Byzantine-fault-tolerant consensus algorithm: <a href="https://github.com/hyperledger/iroha/blob/iroha2-dev/docs/source/iroha_2_whitepaper.md#28-consensus" target="_blank" rel="noreferrer"><em>Sumeragi</em></a>. This new consensus allowed us to expand what could be done on a blockchain without any security risks.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The first version of Iroha used a consensus algorithm called <em>Yac</em>. <em>Yac</em> is <em>crash-fault-tolerant</em>, which means that it can survive a set number of nodes <em>crashing</em>: i.e. losing power, being cut off from the network, or being destroyed with a sledgehammer.</p><p><em>Sumeragi</em>, by contrast, was designed to be <em>Byzantine-fault-tolerant</em>. This means that Iroha 2 can tolerate not only peers being inactive on the network, but also running malicious software and actively trying to falsify data in the blockchain.</p><p>We can mathematically prove that Iroha 2 can work when <strong>up to 33%</strong> of its nodes are actively trying to stop Iroha 2 from working properly or at all. In other words, even if someone gained control of a <em>third</em> of all of your network nodes, an Iroha 2 deployment is <em>mathematically guaranteed</em> to keep working.</p></div><h2 id="minimalist-code-base" tabindex="-1">Minimalist Code Base <a class="header-anchor" href="#minimalist-code-base" aria-label="Permalink to &quot;Minimalist Code Base&quot;">​</a></h2><p>Iroha 2 is a minimalist code base. We take great care to vet our dependencies and avoid large inter-dependent chunks of code.</p><p>We provide a few telemetry APIs, including <code>prometheus</code> tooling, structured logging in JSON, as well as compatibility with standard tools used in Parity Substrate.</p><p>Our data is strongly-typed, our methods are statically dispatched. We make use of the best that Rust has to offer: <code>serde</code> and <code>parity_scale_codec</code> for serialisation, <code>tokio</code> for co-operative multi-threading, as well as testing, bench-marking, static analysis and code auditing tools that come packaged with the exemplary <code>cargo</code>.</p><p>Our code is easy to reason about, and quick to compile, whilst also being ergonomic to use and thoughtfully crafted. We have no <code>panics</code> and no <code>unsafe</code> code.</p><h2 id="flexibility" tabindex="-1">Flexibility <a class="header-anchor" href="#flexibility" aria-label="Permalink to &quot;Flexibility&quot;">​</a></h2><p>Iroha 2 is also more flexible than the original Iroha due to its modular design.</p><p>It is possible to add or remove features based on a particular use-case. If you want the blockchain to be extremely fast and work on embedded hardware, just compile Iroha 2 without the <code>expensive-metrics</code> feature. Don&#39;t use telemetry at all? Remove it entirely and enjoy even more performance. <em>Permission</em> sets are plugins that can be upgraded during run-time.</p><p>We have an extensive module system as well as a robust WASM runtime framework.</p><h2 id="smart-contracts" tabindex="-1">Smart Contracts <a class="header-anchor" href="#smart-contracts" aria-label="Permalink to &quot;Smart Contracts&quot;">​</a></h2><p>Iroha 2 is an event-driven ledger. Each change in the state of the blockchain is necessarily accompanied by its own event that can <em>trigger</em> a smart contract: complex logic designed for use in on-chain scripting.</p><p>For smart contracts, Iroha 2 supports two approaches:</p><ul><li><a href="./blockchain/instructions.html">Iroha Special Instructions (ISI)</a></li><li><a href="./blockchain/wasm.html">Web ASseMbly (WASM)</a></li></ul><p>The first approach is useful when you want very simple transparent logic and also want to minimise the footprint in the blockchain. All interactions with the <em>World state</em>, that is, the state of the blockchain at this point in time, has to be done using the aforementioned instructions. There is also rudimentary support for domain-specific conditional logic.</p><p>If you want to learn more about smart contracts in Iroha 2, please consult our <a href="https://wiki.hyperledger.org/display/iroha/Scripting+Languages+and+Runtimes+for+Iroha2+Smart+Contracts" target="_blank" rel="noreferrer">Wiki</a>.</p><h2 id="static-and-dynamic-linking" tabindex="-1">Static and Dynamic Linking <a class="header-anchor" href="#static-and-dynamic-linking" aria-label="Permalink to &quot;Static and Dynamic Linking&quot;">​</a></h2><p>Iroha 2 smartly chooses when to use dynamic linking. This strikes a balance between it being easy to patch a Critical security vulnerability in a vendored library like OpenSSL, but also remaining reproducible and portable across platforms, architectures, and deployments.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>You get the best of both worlds. Patching a security vulnerability is as easy as running <code>sudo apt upgrade</code>. On the other hand, only security-critical dependencies are linked dynamically, so it is highly unlikely that any of the smaller and less important libraries can break Iroha after an upgrade.</p></div><h2 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-label="Permalink to &quot;Testing&quot;">​</a></h2><p>Iroha 2 is extensively tested. Despite being in active development, Iroha has 80% line coverage. Keep in mind that line coverage includes documentation comments, some of which are also tests.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>There are plans to include Fuzz testing, property-based testing, and failure-point testing to ensure that Iroha is reliable.</p></div>',28),n=[r];function s(l,c,h,d,p,m){return a(),t("div",null,n)}const f=e(i,[["render",s]]);export{g as __pageData,f as default};
