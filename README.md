# Svelte-Headroom

**Hide your header and footer until you need it!**

Svelte Headroom is a [Svelte](https://svelte.dev) component to hide or show your header on scroll, adapted from [collardeau/svelte-headroom](https://github.com/collardeau/svelte-headroom), inspired by [headroom.js](https://wicky.nillia.ms/headroom.js/)

`@taocode/svelte-headroom` has **no dependencies**.

## Demo

Demo URL coming soon or check the source.

[Svelte REPL](https://svelte.dev/repl/44cafd471bcf497080e12ed3bee80986?version=3.53.1)

## Install

`npm install @taocode/svelte-headroom`

## Usage

```html
<script>
  import Headroom from '@taocode/svelte-headroom';
</script>

<Headroom>
  <!-- Header will be fixed and auto show/hide based on scroll -->
</Headroom>

```

## Props

### `offset` number

The number of pixels from the top of the page before the effect is allowed to occur. Default: `0`.

```html

<Headroom offset={50}>
  <!-- my header -->
</Headroom>

```

### `tolerance` number

The number of pixels that need to be scrolled in either direction for the effect to occur. This is useful if you want the user to be able to scroll slowly and not change the header position. Default: `0`.

```html

<Headroom tolerance={10}>
  <!-- my header -->
</Headroom>

```

### `shim` number

The number of pixels from top or bottom to detect top or bottom status. If you're within this value of top or bottom, you'll be considered at top or bottom. Default: `2`.

```html

<Headroom shim={5}>
  <!-- my header -->
</Headroom>

```

### `duration` string

The duration of the sliding effect. The value is passed on as a [CSS Transition Duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration). Default: `"300ms"`.

```html

<Headroom duration='500ms'>
  <!-- my header -->
</Headroom>

```

### `easing` string

The timing function (easing) of the sliding effect. The value is passed on as a [CSS Transition Timing Function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function). Default: `"linear"`.

```html

<Headroom duration='500ms'>
  <!-- my header -->
</Headroom>

```

### `bottom` boolean

If this is to be pinned to the bottom, like a return to top button. Default: `false`.

```html

<Headroom duration='500ms'>
  <!-- my header -->
</Headroom>

```

### `(show|hide)At(Top|Bottom)` boolean

If this is to be pinned to the bottom, like a return to top button. Default: `false`.

```html

<Headroom showAtBottom>
  <!-- my header that will always show when at bottom -->
</Headroom>

<Headroom bottom hideAtTop showAtBottom>
  <!-- footer for 'to top' button -->
</Headroom>

```

# Events

A `svelte-headroom` component emits two events: `pin` and `unpin`.

```jsx
<Headroom
  on:pin={ () => {} }
  on:unpin={ () => {} }
>
  <header>My Header</header>
</Headroom>
```

Happy Coding!
