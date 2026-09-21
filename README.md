# Personal Research Homepage

一个无需构建工具、可以直接部署到 GitHub Pages 的个人科研主页。

## 修改内容

- 在 `index.html` 中替换姓名、简介、学校、论文、邮箱和社交链接。
- 如需使用个人照片，将 `.portrait` 内的文字替换为 `<img src="assets/photo.jpg" alt="个人照片">`，并添加照片文件。
- 主题颜色和排版变量位于 `styles.css` 顶部。

## 部署到 GitHub Pages

1. 将代码推送到名为 `你的用户名.github.io` 的 GitHub 仓库。
2. 在仓库 `Settings → Pages` 中选择 `Deploy from a branch`。
3. 选择 `main` 分支与 `/ (root)` 目录并保存。
4. 稍等片刻后访问 `https://你的用户名.github.io`。

本地预览可在项目目录运行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。
