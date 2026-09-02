# IELTS Learning Lab 中文说明

这是一个可直接体验的 IELTS 训练应用，也是一个小型研究原型：比较普通 JSON 提示、严格 JSON Schema、以及“Schema + 语义验证 + 一次修复”三种词汇条目生成方式。

## 最快体验

- 在线零密钥版：<https://yizihao8288-coder.github.io/ielts-learning-lab/demo/>
- Windows：安装 Python 3.10+ 后双击 `启动雅思训练器.bat`
- macOS/Linux：执行 `python3 run.py`

听力、填空、阅读、写作、收藏、错题、本地存储和浏览器语音不需要 API Key。在线生成是可选增强；静态 Pages 不调用服务端。

## 当前研究状态

验证管线和 12 项自动测试已经完成。原计划中的 900 个首轮模型输出和 60 项人工盲评尚未执行，所以仓库没有填写或暗示任何模型效果结论。完整说明见 [`docs/research-protocol.md`](docs/research-protocol.md)。

## 初学者需要理解的三点

1. `run.py` 是本地服务器，负责安全保存与可选 API；网页本身仍能离线使用核心功能。
2. JSON Schema 只保证“格式像不像”，语义验证才检查“内容能不能用于学习”。
3. 测试通过只能证明已检查的行为符合预期，不能替代真人对释义准确性和例句自然度的评价。
