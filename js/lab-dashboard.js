( () => {
  const KEY = '__labDashboard'
  if (window[KEY]) return

  const isHome = () => {
    const p = location.pathname.replace(/index\.html$/, '')
    return p === '/' || p === '' || p === '/en' || p === '/en/'
  }

  const CATEGORY_META = {
    'Research Diary': { color: '#72ecff', icon: '🔬', label: 'Research' },
    'Project Notes':  { color: '#ffd77a', icon: '⚙',  label: 'Project' },
  }

  const SECTORS = [
    { id: 'quantum',   label: 'Quantum',    topic: 'VQE · QAOA',   status: 'ACTIVE',  color: '#72ecff' },
    { id: 'dft',       label: 'DFT',        topic: 'Fe₃GeTe₂',     status: 'ACTIVE',  color: '#7ba8ff' },
    { id: 'magnetics', label: 'Magnetics',  topic: 'Skyrmion',     status: 'DEV',     color: '#ffd77a' },
    { id: 'wannier',   label: 'Wannier',    topic: 'SHG · Berry',  status: 'VALID',   color: '#8effd4' },
  ]

  const METRICS = [
    { label: 'Pipeline',   value: 'PASS',  tone: 'ok' },
    { label: 'Modules',    value: '04',    tone: '' },
    { label: 'Papers',     value: '05',    tone: '' },
    { label: 'Posts',      value: '13',    tone: '' },
  ]

  const dashboardHtml = `
<section id="lab-dashboard" class="lab-dashboard">
  <div class="lab-dash-header">
    <span class="lab-dash-badge">● SYSTEM STATUS</span>
    <span class="lab-dash-sub">research control dashboard</span>
  </div>
  <div class="lab-dash-sectors">
    ${SECTORS.map(s => `
      <div class="lab-dash-sector" data-sector="${s.id}">
        <span class="lab-dash-indicator" style="background:${s.color};box-shadow:0 0 12px ${s.color}66"></span>
        <span class="lab-dash-s-label">${s.label}</span>
        <span class="lab-dash-s-topic">${s.topic}</span>
        <span class="lab-dash-s-status" style="color:${s.color}">${s.status}</span>
      </div>
    `).join('')}
  </div>
  <div class="lab-dash-metrics">
    ${METRICS.map(m => `
      <div class="lab-dash-metric ${m.tone ? 'tone-' + m.tone : ''}">
        <span class="lab-dash-m-label">${m.label}</span>
        <span class="lab-dash-m-value">${m.value}</span>
      </div>
    `).join('')}
  </div>
</section>`

  const enhanceCards = () => {
    document.querySelectorAll('#recent-posts .recent-post-item').forEach(item => {
      if (item.dataset.labEnhanced) return
      const catEl = item.querySelector('.article-meta__categories')
      if (!catEl) return
      const catName = catEl.textContent.trim()
      const meta = CATEGORY_META[catName]
      if (!meta) return

      item.style.setProperty('--cat-color', meta.color)
      const info = item.querySelector('.recent-post-info')
      if (!info) return

      const badge = document.createElement('span')
      badge.className = 'lab-post-badge'
      badge.textContent = meta.label
      badge.style.cssText = `border-color:${meta.color}44;color:${meta.color};`
      info.insertBefore(badge, info.firstChild)
      item.dataset.labEnhanced = 'true'
    })
  }

  const mount = () => {
    if (!isHome()) return
    const target = document.querySelector('#recent-posts')
    if (target && !target.querySelector('#lab-dashboard')) {
      target.insertAdjacentHTML('afterbegin', dashboardHtml)
    }
    enhanceCards()
    window[KEY] = true
  }

  document.addEventListener('DOMContentLoaded', mount)
  document.addEventListener('pjax:complete', mount)
  document.addEventListener('pjax:send', () => { window[KEY] = false })
})()
