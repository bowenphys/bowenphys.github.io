# Bowen Academic Site (Hexo + Butterfly)

个人学术网站源码，定位为「学术主页 + 科研历程博客」。

## 本地开发

```bash
npm ci
npm run server
```

默认地址：`http://localhost:4000`

## 常用命令

```bash
# 生成论文数据（从 data/publications.bib）
npm run build:publications

# 完整构建
npm run build

# 清理缓存
npm run clean
```

## 双语结构

- 中文页面：`source/<page>/index.md`
- 英文页面：`source/en/<page>/index.md`
- 菜单中的语言按钮会在中英文之间自动切换。

## 论文列表维护

1. 编辑 `data/publications.bib`
2. 执行 `npm run build:publications`
3. 页面 `source/publications/index.md` 与 `source/en/publications/index.md` 自动读取生成数据

## 自动部署

- 分支：`main`（源码）
- 发布分支：`gh-pages`（静态站点）
- 工作流：`.github/workflows/deploy.yml`
