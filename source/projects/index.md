---
title: 项目
date: 2026-02-08 22:33:00
comments: false
---

<section class=”lab-doc-panel is-hero”>
  <div class=”lab-doc-eyebrow”>Project Vault / 模块库</div>
  <h2>把研究拆成可维护、可回放、可扩展的模块</h2>
  <p>这里收录的是四个研究方向对应的核心工具链：量子化学计算、DFT分析、微磁学模拟和Wannier后处理。</p>
</section>

<section class=”lab-record-card”>
  <div class=”lab-doc-eyebrow”>Module 01</div>
  <h3>Quantum VQE Toolkit</h3>
  <p>变分量子本征求解器开发工具包，包含多种ansatz设计、误差缓解策略和优化器接口。支持Qiskit、Cirq和PennyLane后端。</p>
  <div class=”lab-metric-line”><span>Stack</span><span>Python / Qiskit / PennyLane</span></div>
  <div class=”lab-metric-line”><span>Status</span><span>ACTIVE</span></div>
  <div class=”lab-metric-line”><span>Repo</span><span>github.com/bowenphys/qvqe-toolkit</span></div>
</section>

<section class=”lab-record-card”>
  <div class=”lab-doc-eyebrow”>Module 02</div>
  <h3>DFT Magnetic Analyzer</h3>
  <p>第一性原理计算磁性分析工具，支持VASP和Quantum ESPRESSO输出文件的自动解析、磁矩分析和能带可视化。</p>
  <div class=”lab-metric-line”><span>Stack</span><span>Python / ASE / Pymatgen</span></div>
  <div class=”lab-metric-line”><span>Status</span><span>ACTIVE</span></div>
  <div class=”lab-metric-line”><span>Repo</span><span>github.com/bowenphys/dft-mag-analyzer</span></div>
</section>

<section class=”lab-record-card”>
  <div class=”lab-doc-eyebrow”>Module 03</div>
  <h3>Micromagnetics Solver</h3>
  <p>基于Landau-Lifshitz-Bloch方程的微磁学求解器，支持GPU加速和多尺度耦合。包含skyrmion动力学分析和磁畴壁运动追踪模块。</p>
  <div class=”lab-metric-line”><span>Stack</span><span>Python / CuPy / mumax3 API</span></div>
  <div class=”lab-metric-line”><span>Status</span><span>DEVELOPING</span></div>
  <div class=”lab-metric-line”><span>Repo</span><span>github.com/bowenphys/micro-mag-solver</span></div>
</section>

<section class=”lab-record-card”>
  <div class=”lab-doc-eyebrow”>Module 04</div>
  <h3>Wannier Post-Processor</h3>
  <p>Wannier90后处理工具箱，实现二次谐波产生(SHG)、Berry曲率和反常霍尔效应的自动化计算。支持多种TMDC材料的批量处理。</p>
  <div class=”lab-metric-line”><span>Stack</span><span>Python / Wannier90 / NumPy</span></div>
  <div class=”lab-metric-line”><span>Status</span><span>VALIDATING</span></div>
  <div class=”lab-metric-line”><span>Repo</span><span>github.com/bowenphys/wannier-postproc</span></div>
</section>

## 标准项目骨架

- `README`：问题定义、输入输出、运行方式、结果解释
- `configs/`：参数版本与实验编号
- `scripts/`：最小复现入口与批量调度脚本
- `reports/`：图表、摘要、误差预算与结论快照

[English Version](/en/projects/)
