---
title: 项目纪要 004 | Codex 连接 Blender MCP（macOS + uv）安装与排障
date: 2026-02-18 23:30:00
categories:
  - Project Notes
tags:
  - blender
  - mcp
  - codex
  - uv
abbrlink: 10005
---

本文记录一次“在 macOS 上让 Codex（就是现在这个）通过 MCP 连接 Blender”的最小正确配置与排障要点。本文以仓库 [`ahujasid/blender-mcp`](https://github.com/ahujasid/blender-mcp) 为准。

## 目标

- Blender 侧：启用 `blender-mcp` 的 Blender 插件，让 Blender 在本机监听一个 TCP 端口（示例：`127.0.0.1:9876`）。
- Codex 侧：在 `~/.codex/config.toml` 中配置 MCP server，用 `uvx blender-mcp` 拉起服务并连接到 Blender。

## 前置依赖（macOS）

1. 安装 `uv`（Homebrew）：

```bash
brew install uv
```

2. Blender 已安装并可运行。

## Blender 侧：安装/启用插件

仓库提供的是单文件插件 `addon.py`，安装流程：

1. 从 GitHub 仓库下载 `addon.py`（保持文件名不变也可以）。
2. 打开 Blender：
   - `Edit` → `Preferences` → `Add-ons` → `Install...`
   - 选择 `addon.py` 安装
3. 在插件列表中勾选启用：`Interface: Blender MCP`

一般情况下插件会在本机监听端口（默认示例里常用 `9876`）。如果你改过端口，以你插件设置为准。

## Codex 侧：配置 MCP（关键）

Codex 的 MCP server 配置在 `~/.codex/config.toml`。建议点：

- **command 用绝对路径**：桌面 App 启动的进程经常拿不到你 shell 里的 PATH（尤其是 conda 初始化脚本），所以不要依赖 `uvx` “刚好在 PATH 里”。
- **host 用 `127.0.0.1`**：比 `localhost` 更直接；同时可以绕开少数环境里 `localhost` 解析/优先级导致的奇怪行为。

示例配置（核心片段）：

```toml
[mcp_servers.blender]
command = "/opt/homebrew/bin/uvx"
args = ["blender-mcp"]

[mcp_servers.blender.env]
BLENDER_HOST = "127.0.0.1"
BLENDER_PORT = "9876"
DISABLE_TELEMETRY = "true"
```

改完后需要**重启 Codex**（或至少重开会话/项目）让它重新加载配置。

## 快速连通性验证

### 1) 先确认 Blender 端口确实在监听

```bash
lsof -nP -iTCP:9876 -sTCP:LISTEN
nc -vz 127.0.0.1 9876
```

如果 `lsof` 没看到 Blender 在 LISTEN，说明 Blender 插件没启用/没启动成功/端口不是 9876。

### 2) 确认 `uvx` 可用

```bash
/opt/homebrew/bin/uvx --version
```

### 3) 让 Codex 真正通过 MCP 调 Blender

最直观的验证是让 Codex 调用 `get_viewport_screenshot`（抓一张 Blender 视口截图）。如果能返回 PNG，就说明链路是通的：

Codex →（stdio MCP server: `uvx blender-mcp`）→（TCP）→ Blender 插件

## 常见坑 & 处理方式

### 坑 1：`host.docker.internal` 在本机解析失败

`host.docker.internal` 主要是“容器内访问宿主机”场景；在宿主机上直接用它反而可能 DNS 找不到。

如果你是在宿主机上跑 Codex/Blender，优先用：

- `BLENDER_HOST=127.0.0.1`

### 坑 2：桌面 App 找不到 conda/用户 shell 的 PATH

你在终端里 `uvx blender-mcp` 能跑，不代表 Codex 里也能跑。

最稳的办法是：在 `~/.codex/config.toml` 里把 `command` 写成绝对路径（例如 `/opt/homebrew/bin/uvx`）。

### 坑 3：Blender 插件与 MCP server 版本不完全匹配

我实际遇到过 MCP server 启动时会向 Blender 发送 `get_telemetry_consent`，但 Blender 端返回 “Unknown command type”。这类报错通常不致命（后续功能仍可用），但它提示：

- 你的 `addon.py` 可能比 `uvx` 拉到的 `blender-mcp` server 版本更旧

解决方式：把 Blender 里安装的 `addon.py` 更新到与当前仓库一致的版本。

## “撤回/清理”建议（可选）

很多人会为了加速在本机额外做一次“预装”：

```bash
uv tool install blender-mcp
```

这不是官方主路径（官方主路径是直接 `uvx blender-mcp` 让客户端拉起），也不是必须。想回到最简状态可以卸载：

```bash
uv tool uninstall blender-mcp
rm -f ~/.local/bin/blender-mcp
```

保留 `brew install uv` 即可。

