( () => {
  const KEY = '__labCanvas'
  if (window[KEY]) return

  const isHome = () => {
    const p = location.pathname.replace(/index\.html$/, '')
    return p === '/' || p === '' || p === '/en' || p === '/en/'
  }

  const mount = () => {
    if (!isHome()) return
    const header = document.querySelector('#page-header.full_page')
    if (!header) return

    const canvas = document.createElement('canvas')
    canvas.id = 'lab-hero-canvas'
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1;opacity:0.3;'
    header.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    const SCALE = 5
    const waves = []
    for (let i = 0; i < 8; i++) {
      const theta = (i / 8) * Math.PI * 2 + (Math.random() - 0.5) * 0.4
      const k = 0.03 + Math.random() * 0.035
      waves.push({
        kx: Math.cos(theta) * k,
        ky: Math.sin(theta) * k,
        phase: Math.random() * Math.PI * 2,
        amp: 0.6 + Math.random() * 0.4,
      })
    }

    let t = 0, animId

    const resize = () => {
      canvas.width = Math.ceil(header.offsetWidth / SCALE)
      canvas.height = Math.ceil(header.offsetHeight / SCALE)
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = [
      [53, 245, 255],
      [125, 255, 196],
      [107, 168, 255],
    ]

    const draw = () => {
      t += 0.012
      const w = canvas.width, h = canvas.height
      const img = ctx.createImageData(w, h)
      const d = img.data

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          let val = 0
          for (const wv of waves) {
            val += Math.sin(wv.kx * x * SCALE + wv.ky * y * SCALE + t + wv.phase) * wv.amp
          }
          val = val / waves.length * 0.5 + 0.5
          val = Math.max(0, Math.min(1, val))

          const idx = (y * w + x) * 4
          const ci = Math.floor(val * (colors.length - 1))
          const cf = val * (colors.length - 1) - ci
          const c0 = colors[Math.min(ci, colors.length - 1)]
          const c1 = colors[Math.min(ci + 1, colors.length - 1)]

          d[idx]     = (c0[0] + (c1[0] - c0[0]) * cf) * val
          d[idx + 1] = (c0[1] + (c1[1] - c0[1]) * cf) * val
          d[idx + 2] = (c0[2] + (c1[2] - c0[2]) * cf) * val
          d[idx + 3] = val * 200
        }
      }

      ctx.putImageData(img, 0, 0)
      animId = requestAnimationFrame(draw)
    }

    draw()

    window[KEY] = true
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      canvas.remove()
      window[KEY] = false
    }
  }

  document.addEventListener('DOMContentLoaded', mount)
  document.addEventListener('pjax:complete', mount)
  document.addEventListener('pjax:send', () => { window[KEY] = false })
})()
