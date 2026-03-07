---
title: 研究方向
date: 2026-02-08 22:31:00
comments: false
---

<section class="lab-doc-panel is-hero">
  <div class="lab-doc-eyebrow">Research Map / 研究地图</div>
  <h2>四条主线并行：相图、输运、张量网络、方法学</h2>
  <p>这里不是一组松散关键词，而是我当前科研工作的控制面板。每条主线都对应问题定义、数值策略、误差来源和可复现输出。</p>
  <div class="lab-param-strip">
    <span>Phase Atlas: ACTIVE</span>
    <span>Transport Bus: BENCHMARKING</span>
    <span>Tensor Stack: VALIDATING</span>
  </div>
</section>

<section id="sector-phase-atlas" class="lab-record-card">
  <div class="lab-doc-eyebrow">Sector 01 / Phase Atlas</div>
  <h3>相图控制塔：拓扑与非常规超导中的低能理论</h3>
  <p>目标是从模型层面提取能够与可观测量直接关联的结构，并把相边界、有限尺寸效应和收敛误差统一纳入 atlas 报告。</p>
  <ul class="lab-protocol-list">
    <li>解析推导与最小模型化简</li>
    <li>高维参数扫描与 phase boundary extraction</li>
    <li>finite-size scaling 与误差条自动生成</li>
  </ul>
  <div class="lab-metric-line"><span>当前任务</span><span>TopoSC parameter atlas revision</span></div>
  <div class="lab-metric-line"><span>输出形式</span><span>Derivation note / Atlas report / Repro script</span></div>
</section>

<section id="sector-transport" class="lab-record-card">
  <div class="lab-doc-eyebrow">Sector 02 / Transport Bus</div>
  <h3>输运总线：Kubo 公式、数值响应与 benchmark protocol</h3>
  <p>这条主线面向“不同实现给出相同物理量时，代价、稳定性和误差如何比较”的问题。核心是统一 Kubo 管线与缓存策略。</p>
  <ul class="lab-protocol-list">
    <li>solver / backend / truncation rule 的横向比较</li>
    <li>矩阵元缓存、I/O 管线与吞吐分析</li>
    <li>误差预算写入自动报告，避免 benchmark 只剩速度数字</li>
  </ul>
  <div class="lab-metric-line"><span>当前任务</span><span>Kubo transport cache layer</span></div>
  <div class="lab-metric-line"><span>核心指标</span><span>41% runtime reduction</span></div>
</section>

<section id="sector-tensor" class="lab-record-card">
  <div class="lab-doc-eyebrow">Sector 03 / Tensor Stack</div>
  <h3>张量栈：DMRG、误差门控与自动 dossier</h3>
  <p>我把张量网络计算看作一套受控实验：截断阈值、迭代收敛和有限尺寸外推要被同时记录，而不是分散在 notebook 和记忆里。</p>
  <ul class="lab-protocol-list">
    <li>truncation / iteration / finite-size 三类误差分层建模</li>
    <li>张量实验自动生成摘要、图和日志</li>
    <li>将“是否可信”从主观判断转成可比对的 gate rule</li>
  </ul>
  <div class="lab-metric-line"><span>当前任务</span><span>Tensor-network gate controller</span></div>
  <div class="lab-metric-line"><span>当前状态</span><span>VALIDATING</span></div>
</section>

<section id="sector-methodology" class="lab-record-card">
  <div class="lab-doc-eyebrow">Sector 04 / Method Forge</div>
  <h3>方法铸造厂：paper-to-code 与科研软件工程</h3>
  <p>这是最偏工程的一条主线，目的是把论文阅读转成可执行的最小算例，并沉淀成长期可以复用的模板。</p>
  <ul class="lab-protocol-list">
    <li>paper reading template：假设、边界条件、风险点一页收束</li>
    <li>minimal executable case：最快得到可跑原型，而不是一次写完整系统</li>
    <li>workflow skeleton：配置、脚本、报告结构统一</li>
  </ul>
  <div class="lab-metric-line"><span>当前任务</span><span>Auto reproducibility dossier</span></div>
  <div class="lab-metric-line"><span>产物类型</span><span>Template / Script / Report / Checklist</span></div>
</section>

## 近期里程碑

| 时间 | 里程碑 | 状态 |
| --- | --- | --- |
| 2026 Q1 | TopoSC 参数图谱控制塔重构 | ✅ 完成 |
| 2026 Q1 | Kubo 输运缓存层基准协议 | ✅ 完成 |
| 2026 Q2 | 张量网络误差门控器 | 🚧 进行中 |
| 2026 Q2 | 自动化学术 dossier 管线 | 🧪 验证中 |

[English Version](/en/research/)
