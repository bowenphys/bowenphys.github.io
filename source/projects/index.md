---
title: 项目
date: 2026-02-08 22:33:00
comments: false
---

<section class="lab-doc-panel is-hero">
  <div class="lab-doc-eyebrow">Project Vault / 模块库</div>
  <h2>把研究拆成可维护、可回放、可扩展的模块</h2>
  <p>这里收录的不是“产品化项目”，而是科研过程中的核心工具链：参数扫描、输运 benchmark、张量网络报告和 paper-to-code 脚手架。</p>
</section>

<section class="lab-record-card">
  <div class="lab-doc-eyebrow">Module 01</div>
  <h3>Phase Atlas Core</h3>
  <p>批量扫描拓扑超导模型参数空间，输出 phase atlas、边界热图和误差摘要。</p>
  <div class="lab-metric-line"><span>Stack</span><span>Python / C++ / Sparse Solver</span></div>
  <div class="lab-metric-line"><span>Status</span><span>ACTIVE</span></div>
  <div class="lab-metric-line"><span>Repo</span><span>github.com/bowenphys/phase-atlas-core</span></div>
</section>

<section class="lab-record-card">
  <div class="lab-doc-eyebrow">Module 02</div>
  <h3>Transport Bus</h3>
  <p>围绕 Kubo 公式建立统一求解与 benchmark protocol，关注吞吐、缓存命中与误差控制。</p>
  <div class="lab-metric-line"><span>Stack</span><span>Julia / CUDA / HDF5</span></div>
  <div class="lab-metric-line"><span>Status</span><span>BENCHMARKING</span></div>
  <div class="lab-metric-line"><span>Repo</span><span>github.com/bowenphys/transport-bus</span></div>
</section>

<section class="lab-record-card">
  <div class="lab-doc-eyebrow">Module 03</div>
  <h3>Tensor Gate Controller</h3>
  <p>把 truncation、iteration 与 finite-size 误差合并成 gate rule，并自动生成报告与版本记录。</p>
  <div class="lab-metric-line"><span>Stack</span><span>Python / Snakemake / LaTeX</span></div>
  <div class="lab-metric-line"><span>Status</span><span>VALIDATING</span></div>
  <div class="lab-metric-line"><span>Repo</span><span>github.com/bowenphys/tensor-gate</span></div>
</section>

<section class="lab-record-card">
  <div class="lab-doc-eyebrow">Module 04</div>
  <h3>Paper-to-Code Forge</h3>
  <p>把论文阅读模板、假设清单、最小运行脚本和图表输出骨架合并为统一脚手架。</p>
  <div class="lab-metric-line"><span>Stack</span><span>Markdown / Python / Hexo</span></div>
  <div class="lab-metric-line"><span>Status</span><span>ITERATING</span></div>
  <div class="lab-metric-line"><span>Repo</span><span>github.com/bowenphys/paper-forge</span></div>
</section>

## 标准项目骨架

- `README`：问题定义、输入输出、运行方式、结果解释
- `configs/`：参数版本与实验编号
- `scripts/`：最小复现入口与批量调度脚本
- `reports/`：图表、摘要、误差预算与结论快照

[English Version](/en/projects/)
