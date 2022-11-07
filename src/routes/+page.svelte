<script>
  import Headroom from '$lib/headroom/index.svelte'

</script>

<svelte:head>
	<title>Svelte-Headroom Demo page</title>
</svelte:head>


<Headroom showAtBottom>
  <nav class="menu">
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </ul>
  </nav>
</Headroom>

<div class="totop-wrap">
<Headroom bottom showAtBottom hideAtTop >
  <button class="totop" on:click={() => window.scroll(0,0)}> <span class="caret">^</span> <span>To Top</span> </button>
</Headroom>
</div>

<article class="markdown-body entry-content container-lg" itemprop="text">
  <h1>Svelte-Headroom</h1>
  <p><strong>Hide your header and footer until you need them!</strong></p>
  <p>Svelte Headroom is a <a href="https://svelte.dev" rel="nofollow">Svelte</a> component to hide or show your header on scroll, based on <a href="https://github.com/collardeau/svelte-headroom">collardeau/svelte-headroom</a>, inspired by <a href="https://wicky.nillia.ms/headroom.js/" rel="nofollow">headroom.js</a></p>
  <p><code>@taocode/svelte-headroom</code> has <strong>no dependencies</strong>.</p>
  <h1>Demo</h1>
  <p><a href="https://codesandbox.io/embed/svelte-headroom-demo-cf7lv" rel="nofollow">Code Sandbox</a></p>
  <h1>Install</h1>
  <p><code>npm install @taocode/svelte-headroom</code></p>
  <h2>Usage</h2>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto"><pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span>
    <span class="pl-k">import</span> <span class="pl-v">Headroom</span> <span class="pl-k">from</span> <span class="pl-s">'@taocode/svelte-headroom'</span><span class="pl-kos">;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span>
  
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- my header --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre></div>
  <h2>Props</h2>
  <h3><code>offset</code> number</h3>
  <p>The number of pixels from the top of the page before the effect is allowed to occur. Default: <code>0</code>.</p>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto"><pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> <span class="pl-c1">offset</span>=<span class="pl-s">&lbrace;50&rbrace;</span><span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- my header --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre></div>
  <h3><code>tolerance</code> number</h3>
  <p>The amount of pixels that need to be scrolled in either direction for the effect to occur. This is useful if you want the user to be able to scroll slowly and not change the header position. Default: <code>0</code>.</p>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto"><pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> <span class="pl-c1">tolerance</span>=<span class="pl-s">&lbrace;10&rbrace;</span><span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- my header --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre></div>
  <h3><code>duration</code> string</h3>
  <p>The duration of the sliding effect. The value is passed on as a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration" rel="nofollow">CSS Transition Duration</a>. Default: <code>"300ms"</code>.</p>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto"><pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> <span class="pl-c1">duration</span>='<span class="pl-s">500ms</span>'<span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- my header --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre></div>
  

  <h3><code>bottom</code> boolean</h3>
  <p>If this is to be pinned to the bottom, like a return to top button. Default: false.</p>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto"><pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> <span class="pl-c1">bottom</span><span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- my header --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre>
  </div>

  <h3><code>(show|hide)At(Top|Bottom)</code> boolean</h3>
  <p>Always <em>show</em> or <em>hide</em> when at <em>top</em> or <em>bottom</em>. Default: false.</p>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto">
  <pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> <span class="pl-c1">showAtBottom</span><span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- header: always show when at bottom --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre>
  
  <pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> <span class="pl-c1">bottom hideAtTop showAtBottom</span><span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- footer: auto show for 'To Top' button  --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre></div>


  <h2>Events</h2>
  <p>A <code>svelte-headroom</code> component emits two events: <code>pin</code> and <code>unpin</code>.</p>
  <div class="highlight highlight-source-js notranslate position-relative overflow-auto"><pre><span class="pl-c1">&lt;</span><span class="pl-ent">Headroom</span>
    <span class="pl-s1">on</span>:<span class="pl-s1">pin</span><span class="pl-c1">=</span><span class="pl-kos">&lbrace;</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">&lbrace;</span><span class="pl-kos">&rbrace;</span> <span class="pl-kos">&rbrace;</span>
    <span class="pl-s1">on</span>:<span class="pl-s1">unpin</span><span class="pl-c1">=</span><span class="pl-kos">&lbrace;</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">&lbrace;</span><span class="pl-kos">&rbrace;</span> <span class="pl-kos">&rbrace;</span>
  <span class="pl-c1">&gt;</span>
    <span class="pl-c1">&lt;</span><span class="pl-ent">header</span><span class="pl-c1">&gt;</span>My Header<span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">header</span><span class="pl-c1">&gt;</span>
  <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">Headroom</span><span class="pl-c1">&gt;</span></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
      
    </div></div>
  <p>Happy Coding!</p>
</article>

  <style>
    :global(html, body) {
      margin: 0;
      font-family: sans-serif;
      font-size: 12pt;
    }
    .menu ul {
      background: hsl(29, 100%, 40%);
      color: white;
      list-style: none;
      display: flex;
      justify-content: space-evenly;
      margin: 0;
      padding: 1em;
    }
    .totop-wrap {
      max-width: 90ch;
      margin: 0 auto;
      display: flex;
      justify-content: end;
    }
    .totop {
      margin: 2em;
      background: hsl(29, 100%, 40%);
      color: white;
      border: 0;
      padding: 0.5rem;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-transform: uppercase;
      font-size: 0.667em;
      line-height: 1.5rem;
    }
    .caret {
      font-size: 4em;
      padding-top: 0.5rem;
    }
    article {
      max-width: 70ch;
      margin: 5em auto;
    }
  </style>