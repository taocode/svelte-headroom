<script>
  import { Headroom } from '$lib'

  function onPin() {
    console.log('pin')
    pinned = true
  }

  function onUnPin() {
    console.log('unpin')
    pinned = false
  }

  const propsMenu = ['tolerance','offsetTop','offsetBottom','duration','easing','bottom',['ats','(hide|show)at(Top|Bottom)']]
  let pinned = true
</script>

<svelte:head>
  <title>Svelte-Headroom Demo page</title>
</svelte:head>

<div class:pinned>
<Headroom showAtBottom duration="500ms" easing="ease-out" on:unpin={onUnPin} on:pin={onPin}>
  <div class="topmenu-wrap">
    <div class="topmenu">
      <div class="label">props:</div>
      <nav class="menu">
        {#each propsMenu as p}
        {#if Array.isArray(p)}
          <a href="#{p[0]}">{p[1]}</a>
        {:else}
          <a href="#{p}">{p}</a>
        {/if}
        {/each}
      </nav>
    </div>
  </div>
</Headroom>

<div class="totop-wrap">
  <Headroom bottom showAtBottom hideAtTop tolerance={20} offsetTop={100} offsetBottom={100}>
    <button class="totop" on:click={()=> window.scroll(0,0)}> <span class="caret">^</span> <span>To Top</span> </button>
  </Headroom>
</div>

<article class="markdown-body entry-content container-lg" itemprop="text">
  <h1>Svelte-Headroom</h1>
  <p><strong>Hide your header and footer until you need them!</strong></p>
  <p>Svelte Headroom is a <a href="https://svelte.dev" rel="nofollow">Svelte</a> component to hide or show your header
    on scroll, based on <a href="https://github.com/collardeau/svelte-headroom">collardeau/svelte-headroom</a>, inspired
    by <a href="https://wicky.nillia.ms/headroom.js/" rel="nofollow">headroom.js</a></p>
  <p><code>@taocode/svelte-headroom</code> has <strong>no dependencies</strong>.</p>
  <h2>Demo</h2>
  <p><a href="https://svelte.dev/repl/44cafd471bcf497080e12ed3bee80986?version=3" rel="nofollow">SVELTE REPL</a></p>
  <h2>Install</h2>
  <p><code>npm install @taocode/svelte-headroom</code></p>
  <h2>Usage</h2>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto">
    <pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span>
    <span class="pl-k">import</span> <span class="pl-v">Headroom</span> <span class="pl-k">from</span> <span class="pl-s">'@taocode/svelte-headroom'</span><span class="pl-kos">;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">script</span><span class="pl-kos">&gt;</span>

  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- Header will be fixed at top and auto show/hide based on scroll --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre>
  </div>
  <h2>Props</h2>
  <h3 id="tolerance"><code>tolerance</code> number</h3>
  <p>The number of pixels that need to be scrolled in either direction for the effect to occur. This is useful if you
    want the user to be able to scroll slowly and not trigger un/pin event. Default: <code>0</code>.</p>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto">
  <pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> <span class="pl-c1">tolerance</span>=<span class="pl-s">&lbrace;10&rbrace;</span><span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- will ignore any scroll less than 10px --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre>
  </div>
  <h3 id="offsetTop"><code>offsetTop</code> number</h3>
  <p>The number of pixels from the top of the page before the effect is allowed to occur; <em>controls</em> `class:atTop` (used with hideAtTop, showAtTop) Default: <code>2</code>.</p>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto">
  <pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> <span class="pl-c1">offsetTop</span>=<span class="pl-s">&lbrace;50&rbrace;</span><span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- will show until after 50px from top --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre>
  </div>
  <h3 id="offsetBottom"><code>offsetBottom</code> number</h3>
  <p>The number of pixels from top to still be considered at the bottom; <em>controls:</em> `class:atBottom` (used with hideAtBottom, showAtBottom).
    Default: <code>2</code>.</p>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto">
    <pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> showAtBottom <span class="pl-c1">offsetBottom</span>=<span class="pl-s">&lbrace;150&rbrace;</span><span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- will show when within 150px of bottom --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre>
  </div>
  <h3 id="duration"><code>duration</code> string</h3>
  <p>The duration of the sliding effect. The value is passed on as a <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration" rel="nofollow">CSS Transition
      Duration</a>. Default: <code>"300ms"</code>.</p>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto">
    <pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> <span class="pl-c1">duration</span>='<span class="pl-s">500ms</span>'<span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- will take 500ms to transition --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre>
  </div>

  <h3 id="easing"><code>easing</code> string</h3>
  <p>The easing of the sliding effect. The value is passed on as a <a
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function" rel="nofollow">CSS Transition
      Timing Function</a>. Default: <code>"linear"</code>.</p>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto">
    <pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> <span class="pl-c1">easing</span>='<span class="pl-s">ease-out</span>'<span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- will ease-out --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre>
  </div>

  <h3 id="bottom"><code>bottom</code> boolean</h3>
  <p>If this is to be pinned to the bottom, like a return to top button. Default: false.</p>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto">
    <pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> <span class="pl-c1">bottom</span><span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- pinned to the bottom --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre>
  </div>

  <h3 id="ats"><code>(show|hide)At(Top|Bottom)</code> boolean</h3>
  <p>Always <em>show</em> or <em>hide</em> when at <em>top</em> or <em>bottom</em>. Default: false.</p>
  <div class="highlight highlight-text-html-basic notranslate position-relative overflow-auto">
    <pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> <span class="pl-c1">showAtBottom</span><span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- header: always show when at bottom --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre>

    <pre>
  <span class="pl-kos">&lt;</span><span class="pl-ent">Headroom</span> <span class="pl-c1">bottom hideAtTop showAtBottom</span><span class="pl-kos">&gt;</span>
    <span class="pl-c">&lt;!-- footer: auto show for 'To Top' button  --&gt;</span>
  <span class="pl-kos">&lt;/</span><span class="pl-ent">Headroom</span><span class="pl-kos">&gt;</span></pre>
  </div>


  <h2>Events</h2>
  <p>A <code>svelte-headroom</code> component emits two events: <code>pin</code> and <code>unpin</code>.</p>
  <div class="highlight highlight-source-js notranslate position-relative overflow-auto">
    <pre><span class="pl-c1">&lt;</span><span class="pl-ent">Headroom</span>
    <span class="pl-s1">on</span>:<span class="pl-s1">pin</span><span class="pl-c1">=</span><span class="pl-kos">&lbrace;</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">&lbrace;</span><span class="pl-kos">&rbrace;</span> <span class="pl-kos">&rbrace;</span>
    <span class="pl-s1">on</span>:<span class="pl-s1">unpin</span><span class="pl-c1">=</span><span class="pl-kos">&lbrace;</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-c1">=&gt;</span> <span class="pl-kos">&lbrace;</span><span class="pl-kos">&rbrace;</span> <span class="pl-kos">&rbrace;</span>
  <span class="pl-c1">&gt;</span>
    <span class="pl-c1">&lt;</span><span class="pl-ent">header</span><span class="pl-c1">&gt;</span>My Header<span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">header</span><span class="pl-c1">&gt;</span>
  <span class="pl-c1">&lt;</span><span class="pl-c1">/</span><span class="pl-ent">Headroom</span><span class="pl-c1">&gt;</span></pre>
    <div class="zeroclipboard-container position-absolute right-0 top-0">

    </div>
  </div>
  <p class="happy">Happy Coding!</p>
</article>
</div>
<style>
  :global(html, body) {
    margin: 0;
    font-family: sans-serif;
    font-size: 12pt;
  }
  [id]:target {
    margin-top: -3.5em;
    padding-top: 3.5em;
  }

  .topmenu-wrap {
    background: hsl(29, 100%, 40%);
    padding: 1em 0;
  }
  .topmenu {
    color: white;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 80ch;
    padding: 0 0.35em;
  }
  .topmenu .label {
    text-transform: uppercase;
		transform: rotate(-45deg) scaleX(0.85) skewX(-20deg);
  }
	@media screen and (min-width: 700px) {
		.topmenu .label {
			transform: rotate(0);
		}
	}
  
  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5em;
  }
  .menu a {
    color: white;
    text-decoration: none;
  }
  .menu a:hover {
    text-decoration: underline;
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
  .happy {
    font-size: 3em;
    text-align: center;
    padding: 40vh 0;
    font-family: 'Courier New', Courier, monospace;
  }
</style>