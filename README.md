# chenin-blog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).





## 数据库准备

### **文章表**：article

| 属性名         | 含义 | 特性 |      |
| -------------- | ---- | ---- | ---- |
| ID             |      |      |      |
| title          |      |      |      |
| datetime       |      |      |      |
| content        |      |      |      |
| tags_id        |      |      |      |
| comment        |      |      |      |
| comment_number |      |      |      |
| read_number    |      |      |      |
| git_address    |      |      |      |



### 轮播图：banner

| 属性名    | 含义 | 特性 |      |
| --------- | ---- | ---- | ---- |
| id        |      |      |      |
| image_url |      |      |      |
| path      |      |      |      |



### 随笔:Causerie

| 属性名   | 含义 | 特性 |      |
| -------- | ---- | ---- | ---- |
| id       |      |      |      |
| datetime |      |      |      |
| content  |      |      |      |



### 标签：tag

| 属性名 | 含义 | 特性 |      |
| ------ | ---- | ---- | ---- |
| id     |      |      |      |
| name   |      |      |      |
| color  |      |      |      |



### 社区1：S_ communities

| 属性名  | 含义 | 特性 |      |
| ------- | ---- | ---- | ---- |
| id      |      |      |      |
| name    |      |      |      |
| address |      |      |      |
| image   |      |      |      |



### 社区2：b_communities

| 属性名  | 含义 | 特性 |      |
| ------- | ---- | ---- | ---- |
| id      |      |      |      |
| name    |      |      |      |
| address |      |      |      |



### 留言：comment

| 属性名     | 含义 | 特性 |      |
| ---------- | ---- | ---- | ---- |
| article_id |      |      |      |
| id         |      |      |      |
| parent_id  |      |      |      |
| datetime   |      |      |      |
| name       |      |      |      |
| content    |      |      |      |
| email      |      |      |      |
| url        |      |      |      |
| avatar     |      |      |      |



### 时间线：timeline

| 属性名    | 含义 | 特性 |      |
| --------- | ---- | ---- | ---- |
| id        |      |      |      |
| content   |      |      |      |
| timestamp |      |      |      |

