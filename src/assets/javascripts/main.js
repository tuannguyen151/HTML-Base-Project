/**
 * Draws an SVG path animation using GSAP library.
 */
const drawSvg = () => {
  const path = document.querySelector('#path')
  if (!path) return

  const length = path.getTotalLength()

  path.style.strokeDasharray = length
  path.style.strokeDashoffset = length

  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 3,
    ease: 'power1.inOut',
    repeat: 1,
  })
}
drawSvg()
