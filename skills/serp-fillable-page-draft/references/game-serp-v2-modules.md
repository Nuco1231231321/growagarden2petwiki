# Game SERP Evidence Draft System v2 模块说明

这份文件用于补充 v2 游戏内容生产系统的关键模块。

## 1. Query Intent Engine

先分类，再选模板：

- ACTION
- DECISION
- REFERENCE
- NAVIGATION
- UPDATE

如果没有完成 intent 分类，不要开写。

## 2. SERP Opportunity Score

输出：

```yaml
SERP 缺口评分:
  覆盖缺口:
  证据缺口:
  体验缺口:
  工具缺口:
  时效缺口:
  视觉缺口:
  总机会分:
```

总机会分低时，不要做同质化页面。

## 3. Evidence Confidence Score

统一用 A/B/C/D/F：

- A：官方
- B：官方 + 社区交叉支持
- C：多个社区共识
- D：单一来源
- F：猜测

## 4. Patch Drift System

按稳定性分：

- STATIC
- SEMI-STABLE
- VOLATILE

并输出复查周期。

## 5. Entity Extraction

正文前先抽实体：

- 游戏
- 职业
- Build
- 技能
- 武器
- Boss
- 地图
- 材料
- 版本

## 6. Tool Opportunity Detector

判断页面更适合：

- 文章
- 数据库
- 计算器
- Builder
- Tracker
- Planner
- Generator
- Simulator

## 7. Asset Planner

按查询类型规划资产：

- 头图
- 地图图
- 小地图定位图
- 掉落表
- Build 表
- 对比表
- 视频时间戳
- Patch 引用
- 交互工具

## 8. Internal Link Graph

必须输出：

- 父页
- 子页
- 兄弟页

## 9. E-E-A-T Proof Layer

优先使用这些中文占位符：

- `[[实测: ...]]`
- `[[补丁: ...]]`
- `[[社区共识: ...]]`
- `[[视频证据: ...]]`
- `[[数据挖掘: ...]]`

## 10. Density Audit

草稿后必须输出：

```yaml
信息密度检查:
  事实数:
  决策点:
  表格数:
  可执行步骤数:
  灌水段落数:
```

如果灌水占比超过 15%，重写。
