# 博客提交与发布说明

当前仓库采用：

- 源码分支：`main`
- 发布分支：`gh-pages`（由 GitHub Actions 自动生成）
- 自动部署触发：`push` 到 `main`

## 1. 每次更新后的标准流程

```bash
cd ~/blog
git add -A
git commit -m "update: 你的改动说明"
git push
```

推送后去 GitHub 查看：

1. `Actions` 页签中 `Deploy Hexo Site` 是否成功。
2. `pages build and deployment` 是否成功。
3. 访问 `https://bowenphys.github.io` 确认生效。

## 2. 如果提示没有可提交内容

```bash
git status
```

如果显示 `nothing to commit`，说明本地没有新改动。

## 3. 如果推送被拒绝（远程有新提交）

```bash
git pull --rebase origin main
git push
```

如果有冲突，先解决冲突文件，再执行：

```bash
git add -A
git rebase --continue
git push
```

## 4. 一键检查当前状态

```bash
git fetch origin --prune
git branch -vv
git branch -r
git remote show origin
```

## 5. 说明：`dependabot/npm_and_yarn/hexo-8.1.1` 是什么

这是 GitHub Dependabot 自动创建的依赖升级分支，用于把 `hexo` 升级到 `8.1.1`。  
它不会影响你正常发博客；你可以选择：

- 合并这个 PR（升级依赖）
- 关闭这个 PR（保持当前版本）
