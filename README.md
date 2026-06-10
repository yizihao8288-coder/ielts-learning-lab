# IELTS British Listening Trainer

一个本地运行的雅思听力单词训练小工具。输入单词后，工具会用英式发音朗读单词和自动生成的例句，然后让你从选项中选择听到的单词。

## 功能

- 每行输入一个单词，也支持逗号或分号分隔。
- 自动生成 IELTS 风格英文例句。
- 优先使用 Windows 已安装的 `en-GB` 英式文本转语音。
- 朗读过程中可以提前点击答案；答对后自动停止朗读并进入下一题。
- 全部文件本地运行，不需要安装前端依赖。

## 启动

双击：

```text
启动雅思训练器.bat
```

然后在浏览器中打开：

```text
http://127.0.0.1:8765/index.html
```

使用期间请保持启动窗口打开。

## 英式发音要求

Windows 需要安装 English (United Kingdom) 的文本转语音语音包。可在：

```text
Windows 设置 -> 时间和语言 -> 语音 -> 管理语音 / 添加语音
```

安装 `English (United Kingdom)`。安装后如果页面仍未识别，请重启浏览器或重启 Windows。

## 文件说明

- `index.html`：页面结构
- `styles.css`：界面样式
- `app.js`：训练逻辑
- `serve-ielts.ps1`：本地静态服务和 Windows TTS 音频接口
- `启动雅思训练器.bat`：一键启动脚本
