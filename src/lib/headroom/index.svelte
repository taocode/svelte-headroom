<script>
	import { createEventDispatcher, onMount } from 'svelte'
	import validate from './validation'

	export let duration = '300ms'
	export let easing = 'linear'
	export let offset = 2
	export let offsetTop = offset
	export let offsetBottom = offset
	export let tolerance = 0
	export let toleranceDown = tolerance
	export let toleranceUp = tolerance
	export let bottom = false
	export let hideAtBottom = false
	export let hideAtTop = false
	export let showAtBottom = false
	export let showAtTop = false
	
	let headerClass = bottom ? 'unpin' : 'pin'
	let lastHeaderClass = headerClass
	let y = 0
	let lastY = 0
	let atTop = true
	let atBottom = false

	validate({ duration, easing, tolerance, toleranceDown, toleranceUp, offset, offsetTop, offsetBottom })

	const dispatch = createEventDispatcher()

	/**
   * @type {Window & typeof globalThis}
   */
	let win
	onMount(() => {
		win = window
	})

	function deriveClass(y = 0, scrolled = 0) {
		if (y < offsetTop) return headerClass
		const up = scrolled > 0
		if (!scrolled 
			 || (
				 	! up && Math.abs(scrolled) < toleranceDown
					|| up && scrolled < toleranceUp 
					)
				) return headerClass
		return (up) ? 'pin' : 'unpin'
	}

	function updateClass(y = 0) {
		const scrolledPxs = lastY - y
		const result = deriveClass(y, scrolledPxs)
		lastY = y
		return result
	}

	/**
   * @param {HTMLDivElement} node
   */
	function transitionSettings(node) {
		node.style.transitionDuration = duration
		node.style.transitionTimingFunction = easing
	}

	$: {
		headerClass = updateClass(y)
		atTop = y <= offsetTop
		atBottom = win && win.innerHeight + win.pageYOffset >= document.body.offsetHeight - offsetBottom
		if (headerClass !== lastHeaderClass) {
			dispatch(headerClass)
		}
		lastHeaderClass = headerClass
	}
</script>
<svelte:window bind:scrollY={y} />
<div
	use:transitionSettings
	class={headerClass}
	class:bottom
	class:atTop
	class:atBottom
	class:showAtTop
	class:hideAtTop
	class:showAtBottom
	class:hideAtBottom
>
	<slot />

</div>

<style>
	div {
		position: fixed;
		width: 100%;
		top: 0;
		transition: transform 300ms linear;
	}
	.bottom {
		top: auto;
		bottom: 0;
		width: auto;
		/* so a single back to top button, for example, doesn't cover (and block) page links */
	}
	.pin,
	.atTop.showAtTop.unpin,
	.atBottom.showAtBottom.unpin {
		transform: translateY(0%);
	}
	.unpin,
	.atTop.hideAtTop,
	.atBottom.hideAtBottom {
		transform: translateY(-100%);
	}
	.bottom.unpin,
	.bottom.atTop.hideAtTop,
	.bottom.atBottom.hideAtBottom {
		transform: translateY(100%);
	}
</style>