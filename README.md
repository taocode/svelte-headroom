# @taocode/Svelte-Headroom

**Hide your header and footer until you need it!**

Svelte Headroom is a [Svelte](https://svelte.dev) component to hide or show your header and footer on scroll, adapted from [collardeau/svelte-headroom](https://github.com/collardeau/svelte-headroom), inspired by [headroom.js](https://wicky.nillia.ms/headroom.js/).

`@taocode/svelte-headroom` has **no dependencies**.

## Demo

[Svelte REPL](https://svelte.dev/repl/44cafd471bcf497080e12ed3bee80986?version=3.53.1)

## Source

[Get the source from the GitHub repository (@taocode/svelte-headroom)](https://github.com/taocode/svelte-headroom) and play with it directly. Run `pnpm dev` (or yarn, npm equivalents) and edit the demo test page: `src/routes/+page.svelte`

## Install

One of these:

- `pnpm install -D @taocode/svelte-headroom`
- `yarn add -D @taocode/svelte-headroom`
- `npm install -D @taocode/svelte-headroom`

## Usage

```html
<script>
  import Headroom from '@taocode/svelte-headroom';
</script>

<Headroom>
  <!-- Header will be fixed at top 
      and auto show/hide based on scroll -->
</Headroom>
```

## Props

### `tolerance` number

The number of pixels that need to be scrolled in either direction for the effect to occur. This is useful if you want the user to be able to scroll slowly and not change the header position. 

__default: `0`__ -- _Overridden by `toleranceDown` and `toleranceUp`_

```html
<Headroom tolerance={10}>
  <!-- ignore any scroll less than 10px -->
</Headroom>
```

#### `toleranceDown` number

The number of pixels that need to be scrolled down for the effect to occur. This is useful if you want the user to be able to scroll slowly but respond differently to the downward direction. 

__default: `tolerance`__ -- _Overrides `tolerance`_

```html
<Headroom toleranceDown={10}>
  <!-- ignore downward scroll less than 10px -->
</Headroom>
```

#### `toleranceUp` number

The number of pixels that need to be scrolled up for the effect to occur. This is useful if you want the user to be able to scroll slowly but respond differently in the upward direction. 

__default: `tolerance`__ -- _Overrides `tolerance`_

```html
<Headroom toleranceUp={10}>
  <!-- ignore upward scroll less than 10px -->
</Headroom>
```

### `offset` number

The number of pixels from the top or bottom of the page before the effect is allowed to occur; *controls:* `class:atTop` and `class:atBottom` (useful with [(show|hide)At(Bottom|Top)](#ats)). 

__default: `2`__ -- _Overridden by `offsetTop` and `offsetBottom`_

#### `offsetTop` number

The number of pixels from the top of the page before the effect is allowed to occur; *controls:* `class:atTop` (useful with hideAtTop, showAtTop).

__default: `offset`__ -- _Overrides `offset`_

```html
<Headroom offsetTop={50}>
  <!-- will show until after 50px from top -->
</Headroom>
```

#### `offsetBottom` number

The number of pixels from bottom to be considered at the bottom; *controls* `class:atBottom` (useful with hideAtBottom, showAtBottom).

__default: `offset`__ -- _Overrides `offset`_

```html
<Headroom showAtBottom offsetBottom={150}>
  <!-- show when within 150px of bottom -->
</Headroom>
```

### `duration` string

The duration of the sliding effect. The value is passed on as a [CSS Transition Duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration).

__default: `"300ms"`__

```html
<Headroom duration='500ms'>
  <!-- take 500ms to transition -->
</Headroom>
```

### `easing` string

The timing function (easing) of the sliding effect. The value is passed on as a [CSS Transition Timing Function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function).

__default: `"linear"`__

```html
<Headroom easing='ease-out'>
  <!-- will ease-out -->
</Headroom>
```

### `bottom` boolean

If this is to be pinned to the bottom, like a return to top button. 

__default: `false`__

*Note:* you'll need to wrap a bottom pinned Headroom to use it because
it isn't 100% wide to avoid covering links and breaking the UI a bit.
You can play with heights and widths and different positioning; *see below for my favorite .totop-wrap*

```html
<div class="totop-wrap">
  <Headroom bottom>
    <!-- pinned to the bottom -->
  </Headroom>
</div>
```

### `(hide|show)At(Bottom|Top)` boolean

If this is to be pinned to the bottom, like a return to top button.

__default: `false`__

*Note:* atBottom detection fails on [Svelte REPL](https://svelte.dev/repl/44cafd471bcf497080e12ed3bee80986?version=3.53.1).

```html
<Headroom showAtBottom>
  <!-- always show when at bottom -->
</Headroom>

<div class="totop-wrap">
  <Headroom 
    bottom hideAtTop showAtBottom 
    toleranceUp={20} offset={50}>
    <!-- footer for 'to top' button -->
    <button 
      class="totop" 
      on:click={()=> window.scroll(0,0)}
      > 
      <span class="caret">^</span>
      <span>To Top</span>
    </button>
  </Headroom>
</div>

<style>
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
    padding-top: 0.6rem;
  }
</style>
```

## Events

A `svelte-headroom` component emits two events: `pin` and `unpin`.

```html
<Headroom
  on:pin={ () => {} }
  on:unpin={ () => {} }
>
  <header>My Header</header>
</Headroom>
```

## Happy Coding!
