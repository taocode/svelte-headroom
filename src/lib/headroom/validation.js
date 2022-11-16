const warn = (msg, val) => console.warn(`[svelte-headroom]:`, msg, val)

const timingFunctions = [
  'linear',
  'ease',
  'ease-in',
  'ease-out',
  'ease-in-out',
  'cubic-bezier()'
]

export default function validate({ duration, easing, offset, toleranceScroll, toleranceTop, toleranceBottom }) {
  if (typeof offset !== "number")
    warn("The `offset` prop is not a number: ", offset)
  if (typeof toleranceScroll !== "number")
    warn("The `toleranceScroll` prop is not a number: ", toleranceScroll)
  if (typeof toleranceTop !== "number")
    warn("The `toleranceTop` prop is not a number: ", toleranceTop)
  if (typeof toleranceBottom !== "number")
    warn("The `toleranceBottom` prop is not a number: ", toleranceBottom)
  if (typeof duration !== "string")
    warn("The `duration` prop is not a string such as '200ms': ", duration)
  if (typeof easing !== "string" || ! timingFunctions.includes(easing) && ! easing.startsWith('cubic-bezier('))
    warn("The `easing` prop is not a valid timing function: ["
      + timingFunctions.reduce((p,c) => `${p}, ${c}`)
      + "], your value: ", easing)
}
