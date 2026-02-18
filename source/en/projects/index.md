---
title: Projects
date: 2026-02-08 22:39:00
comments: false
lang: en
---

This page tracks reproducible research projects and technical tooling.

## Project 01: TopoSC Scan Engine

- goal: sweep topological superconducting models and generate phase atlas
- stack: Python + C++ extension + sparse solver
- status: `ACTIVE`
- repo: `https://github.com/bowenphys/topo-sc-minimal`

## Project 02: TransportLab-Kubo

- goal: standardized Kubo transport implementation with error checks
- stack: Julia + CUDA + HDF5
- status: `BENCHMARKING`
- repo: `https://github.com/bowenphys/kubo-bench`

## Project 03: Tensor Workflow Ops

- goal: automated report pipeline for tensor-network experiments
- stack: Python + Snakemake + LaTeX
- status: `PROTOTYPE`
- repo: `https://github.com/bowenphys/tn-workflow`

## Standard project layout

- `README`: context, dependencies, run command, outputs
- `scripts/`: minimal reproducible execution
- `configs/`: versioned experiment parameters
- `reports/`: generated summaries and figures

[中文页面](/projects/)
