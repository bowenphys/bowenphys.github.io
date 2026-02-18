---
title: 项目
date: 2026-02-08 22:33:00
comments: false
---

该页面用于追踪可复现研究项目与计算工具链，以下内容为占位示例。

## Project 01 | TopoSC Scan Engine

- 目标：批量扫描拓扑超导模型参数空间并生成相图
- 技术：Python + C++ Extension + Sparse Solver
- 状态：`ACTIVE`
- 仓库：`https://github.com/bowenphys/topo-sc-minimal`

## Project 02 | TransportLab-Kubo

- 目标：统一 Kubo 公式数值实现与误差校验流程
- 技术：Julia + CUDA + HDF5
- 状态：`BENCHMARKING`
- 仓库：`https://github.com/bowenphys/kubo-bench`

## Project 03 | Tensor Workflow Ops

- 目标：构建张量网络实验的自动报告流水线
- 技术：Python + Snakemake + LaTeX
- 状态：`PROTOTYPE`
- 仓库：`https://github.com/bowenphys/tn-workflow`

## 标准项目模板

- `README`：问题定义、依赖、运行方式、输出示例
- `scripts/`：最小复现脚本与参数入口
- `configs/`：实验参数版本
- `reports/`：自动生成的结果摘要

[English Version](/en/projects/)
