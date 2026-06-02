# README + Knowledge Graph — Design Spec

**Date:** 2026-06-02  
**Repo:** DataStructure-Algo  
**Status:** Approved

---

## Goal

Add a `README.md` and `graph.html` to the repo root that make 1,500+ JavaScript solutions navigable via a structured index and an interactive visual knowledge graph.

---

## Deliverables

### 1. `README.md`
Navigation-only document. No prose explanations, no complexity tables. English text; Chinese folder paths preserved as clickable relative links.

### 2. `graph.html`
Self-contained D3.js v7 force-directed knowledge graph. No build step, no external dependencies beyond the D3 CDN script tag.

---

## README.md Structure

```
# DataStructure-Algo

One-liner description + stats (language, file count).

[Open Interactive Knowledge Graph →](./graph.html)

## Overview
Compact Mermaid graph (~12 nodes) showing all major DS→Algorithm edges.

## Data Structures
  ### Binary Tree       94 files
  ### Graph             43 files
  ### Stack & Queue     61 files
  ### Linked List       31 files
  ### Array / Prefix Sum 34 files
  ### Matrix            38 files
  ### Heap              19 files
  ### Trie               8 files

## Algorithm Techniques
  ### DFS              113 files
  ### BFS               52 files
  ### Two Pointers / Sliding Window  142 files
  ### Dynamic Programming  98 files
  ### Backtracking      59 files
  ### Greedy            25 files
  ### Sorting           20 files
  ### Hash Table        31 files

## LeetCode Index
Link to /Leetcode folder with note on numbering scheme.
```

### Per-section template (Data Structures)

Each DS section contains:
1. A focused Mermaid sub-graph showing which algorithm techniques apply to that DS
2. A markdown table of subcategory links (folder path → relative link)

Example for Binary Tree:
```markdown
### Binary Tree  `94 files`

​```mermaid
graph LR
  BinaryTree --> DFS-Traversal
  BinaryTree --> BFS-LevelOrder
  BinaryTree --> BST-Operations
  BinaryTree --> LCA
  BinaryTree --> Tree-DP
​```

| Subcategory | Path |
|---|---|
| Traversal templates | [数据结构/BinaryTree二叉树/遍历模版](./数据结构/BinaryTree二叉树/遍历模版) |
| BST properties | [.../BST属性](./数据结构/BinaryTree二叉树/BST(二叉搜索树)的属性) |
| BST construction | [...](./数据结构/BinaryTree二叉树/BST(二叉搜索树)的修改和构造) |
| Tree properties | [...](./数据结构/BinaryTree二叉树/二叉树的属性) |
| Tree construction | [...](./数据结构/BinaryTree二叉树/二叉树的修改和构造) |
| LCA | [...](./数据结构/BinaryTree二叉树/二叉树最近公共祖先问题\(LCA\)) |
```

### Per-section template (Algorithm Techniques)

Same pattern: Mermaid sub-graph showing which DS the algorithm applies to, then folder links.

---

## graph.html Spec

### Technology
- D3.js v7 loaded from CDN (`https://d3js.org/d3.v7.min.js`) — pin to this exact URL, do not upgrade to v8+
- Single HTML file, no build, no npm

### Graph Data
- **~25 nodes** across three types:
  - Data Structure nodes (blue `#58a6ff`): BinaryTree, Graph, Array, Matrix, StackQueue, LinkedList, Heap, Trie, String
  - Algorithm Technique nodes (green `#3fb950`): DFS, BFS, DP, Backtracking, TwoPointers, Greedy, Sort, HashTable, BinarySearch, Recursion
  - Sub-technique nodes (purple `#d2a8ff`): SlidingWindow, MonotonicStack, UnionFind, Dijkstra, PrefixSum, TopoSort
- **~40 edges** with relationship labels (e.g., "level-order", "fast/slow", "islands")
- **Node radius** proportional to file count

### Interactions
- Drag any node (D3 drag behavior)
- Scroll to zoom (D3 zoom)
- Hover to highlight: dim all non-connected nodes and edges, show tooltip with node name, type, file count, and connection count
- Mouse-leave resets all highlights

### Layout
- Fixed header (title, legend badges, hint text)
- Bottom-left legend (DS / Algorithm / Sub-technique color key)
- Bottom-right hint text
- Floating tooltip follows cursor

### Visual style
- Dark background (`#0d1117`, GitHub dark theme)
- Node fill: color at 13% opacity; stroke: full color
- Link stroke: `#30363d` at 40% opacity; highlighted at 90%

---

## Constraints

- No external hosting required — `graph.html` works when opened as a local file or via GitHub Pages
- No Node.js / build tooling
- README renders correctly on github.com without any plugins
- All folder links use relative paths from repo root
- Chinese characters in paths must be URL-encoded where needed for clickability

---

## Out of Scope

- Prose explanations for each data structure or algorithm
- Big O complexity tables
- Per-file links (folder-level links only)
- Dark/light mode toggle
