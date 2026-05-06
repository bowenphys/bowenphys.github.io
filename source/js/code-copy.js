// Code block copy button
(() => {
  const mount = () => {
    const blocks = document.querySelectorAll('figure.highlight');
    blocks.forEach((block) => {
      if (block.querySelector('.code-copy-btn')) return;
      const btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.textContent = 'Copy';
      btn.addEventListener('click', () => {
        const code = block.querySelector('td.code') || block.querySelector('pre code') || block.querySelector('pre');
        if (!code) return;
        const text = code.textContent || code.innerText || '';
        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = 'Copied';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = 'Copy';
            btn.classList.remove('copied');
          }, 2000);
        }).catch(() => {
          btn.textContent = 'Failed';
        });
      });
      const tools = block.querySelector('.highlight-tools');
      if (tools) {
        tools.appendChild(btn);
      } else {
        block.style.position = 'relative';
        btn.style.position = 'absolute';
        block.appendChild(btn);
      }
    });
  };

  document.addEventListener('DOMContentLoaded', mount);
  document.addEventListener('pjax:complete', mount);
})();
