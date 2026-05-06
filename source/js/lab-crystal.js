( () => {
  const KEY = '__labCrystal'

  const isResearch = () => {
    const p = location.pathname.replace(/index\.html$/, '')
    return p === '/research' || p === '/research/' || p === '/en/research' || p === '/en/research/'
  }

  const ATOM_COLORS = ['#72ecff', '#7ba8ff', '#8effd4', '#ffd77a']

  const buildLattice = (size) => {
    const pts = []
    for (let x = 0; x <= size; x++) {
      for (let y = 0; y <= size; y++) {
        for (let z = 0; z <= size; z++) {
          pts.push({ x: x - size / 2, y: y - size / 2, z: z - size / 2 })
        }
      }
    }
    const edges = []
    const set = new Set(pts.map(p => `${p.x},${p.y},${p.z}`))
    const dirs = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    for (const p of pts) {
      for (const [dx, dy, dz] of dirs) {
        const n = `${p.x + dx},${p.y + dy},${p.z + dz}`
        if (set.has(n)) edges.push([p, { x: p.x + dx, y: p.y + dy, z: p.z + dz }])
      }
    }
    return { vertices: pts, edges }
  }

  const rotY = (p, a) => ({
    x: p.x * Math.cos(a) - p.z * Math.sin(a),
    y: p.y,
    z: p.x * Math.sin(a) + p.z * Math.cos(a),
  })

  const rotX = (p, a) => ({
    x: p.x,
    y: p.y * Math.cos(a) - p.z * Math.sin(a),
    z: p.y * Math.sin(a) + p.z * Math.cos(a),
  })

  const project = (p, d) => ({
    x: p.x / (p.z + d),
    y: p.y / (p.z + d),
    depth: p.z,
  })

  const mount = () => {
    if (!isResearch()) return
    if (window[KEY]) return
    const hero = document.querySelector('.lab-doc-panel.is-hero')
    if (!hero) return

    const wrap = document.createElement('div')
    wrap.className = 'lab-crystal-wrap'
    wrap.innerHTML = '<canvas id="lab-crystal-canvas"></canvas>'
    hero.style.overflow = 'hidden'
    hero.appendChild(wrap)

    const canvas = wrap.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    const SIZE = 3
    const { vertices, edges } = buildLattice(SIZE)
    let angle = 0.8, animId

    const resize = () => {
      canvas.width = Math.min(280, hero.offsetWidth * 0.38)
      canvas.height = Math.min(240, hero.offsetHeight * 0.65)
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      angle += 0.006
      const w = canvas.width, h = canvas.height
      ctx.clearRect(0, 0, w, h)

      const cx = w / 2, cy = h / 2
      const scale = Math.min(w, h) * 0.32
      const dist = 7

      const projected = vertices.map(v => {
        let p = rotY(v, angle)
        p = rotX(p, angle * 0.4)
        p = project(p, dist)
        return {
          sx: cx + p.x * scale,
          sy: cy - p.y * scale,
          depth: p.depth,
        }
      })

      // draw bonds
      ctx.strokeStyle = 'rgba(114, 236, 255, 0.18)'
      ctx.lineWidth = 1.2
      ctx.beginPath()
      for (const [a, b] of edges) {
        const ia = vertices.indexOf(a), ib = vertices.indexOf(b)
        if (ia < 0 || ib < 0) continue
        ctx.moveTo(projected[ia].sx, projected[ia].sy)
        ctx.lineTo(projected[ib].sx, projected[ib].sy)
      }
      ctx.stroke()

      // draw atoms (depth-sorted)
      const sorted = projected
        .map((p, i) => ({ ...p, i }))
        .sort((a, b) => b.depth - a.depth)

      for (const p of sorted) {
        const r = 2.2 + p.depth * 0.5
        const alpha = 0.65 + p.depth * 0.12
        const color = ATOM_COLORS[p.i % ATOM_COLORS.length]

        ctx.beginPath()
        ctx.arc(p.sx, p.sy, r + 4, 0, Math.PI * 2)
        ctx.fillStyle = color.replace(')', `,${alpha * 0.25})`).replace('rgb', 'rgba')
        if (color.startsWith('#')) {
          const hex = color.slice(1)
          const rr = parseInt(hex.slice(0, 2), 16)
          const gg = parseInt(hex.slice(2, 4), 16)
          const bb = parseInt(hex.slice(4, 6), 16)
          ctx.fillStyle = `rgba(${rr},${gg},${bb},${alpha * 0.25})`
        }
        ctx.fill()

        ctx.beginPath()
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    window[KEY] = true

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      wrap.remove()
      window[KEY] = false
    }
  }

  document.addEventListener('DOMContentLoaded', mount)
  document.addEventListener('pjax:complete', mount)
  document.addEventListener('pjax:send', () => { window[KEY] = false })
})()
