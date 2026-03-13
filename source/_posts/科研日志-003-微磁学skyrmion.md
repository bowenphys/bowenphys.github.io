---
title: 科研日志 003 | 微磁学模拟：磁skyrmion的霍尔效应
date: 2026-02-05 09:15:00
categories:
  - Research Diary
tags:
  - micromagnetics
  - skyrmion
  - spin-dynamics
abbrlink: 10003
katex: true
---

本周开始微磁学模拟工作，研究磁性skyrmion（磁斯格明子）的动力学行为，特别是其独特的霍尔效应。

## 理论背景

磁skyrmion是一种拓扑保护的磁涡旋结构，其运动行为与传统磁畴壁不同：

- **拓扑数**: $Q = \frac{1}{4\pi}\int \mathbf{m}\cdot(\partial_x\mathbf{m}\times\partial_y\mathbf{m})dxdy = -1$
- **Skyrmion霍尔角**: $\theta_{SH} \approx \arctan(\alpha D / K_{eff})$

其中 $\alpha$ 为阻尼系数，$D$ 为 Dzyaloshinskii-Moriya 相互作用 (DMI) 强度，$K_{eff}$ 为有效磁各向异性。

## 模拟设置

- **软件**: mumax3 (GPU加速)
- **薄膜尺寸**: $500 \times 500 \times 1$ nm³
- **材料参数** (Co/Pd 多层膜):
  - 饱和磁化 $M_s = 1.2 \times 10^6$ A/m
  - 交换常数 $A = 1.5 \times 10^{-11}$ J/m
  - DMI $D = 1.5 \times 10^{-3}$ J/m²
  - 阻尼 $\alpha = 0.02$

## 模拟结果

### Skyrmion 运动轨迹

![skyrmion trajectory](/img/micromagnetics/skyrmion-trajectory.png)

- 驱动力: 电流密度 $j = 1 \times 10^{12}$ A/m²
- Skyrmion霍尔角: $\theta_{SH} \approx 35^\circ$
- 纵向速度: $v_x = 285$ m/s
- 横向漂移: $v_y = 198$ m/s

### 温度效应

引入蒙特卡洛热涨落后，观察到：

| 温度 (K) | 霍尔角 (°) | 稳定性 |
|---------|-----------|--------|
| 0 | 35.2 | 稳定 |
| 100 | 33.8 | 稳定 |
| 200 | 29.5 | 部分融化 |
| 300 | - | 完全破坏 |

## 分析

1. DMI 与交换相互作用的竞争决定了 skyrmion 尺寸
2. 温度升高导致拓扑保护减弱，最终解离
3. 霍尔角与材料参数呈非线性关系

## 下一步计划

1. 研究多个 skyrmion 间的相互作用
2. 探索 skyrmion 在赛道存储器中的应用
3. 与实验组合作验证微磁模拟结果
