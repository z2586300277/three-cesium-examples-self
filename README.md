# 🏠 three-cesium-examples 分布式仓库 

### 实现n个仓库 增加案例配置 就可以互相引用对方的资源案例 在线运行

- 调试可自行启动端口指向 index.html

- github page 搭建  => 创建仓库 => 页面流程 => setting => pages => Build and deployment => source (depoly from a branch) => branch 选择对应分支

- 架构设计是以请求资源形式访问代码,所以如 codeUrl image, 等资源信息不局限于存储在 本仓库中，例如存储在你自己的服务器，然后url 访问到你的资源地址即可。

- 注 由于 github 访问限制 http 会被自动禁止, 建议 也搭建自己得github page ,使用 github 充当自己的资源服务器。

- 本地新增 可参照 初始案例

- 你的页面访问 https://xxxxxx.github.io/xxxxxx/

- 资源互通 如加载其他仓库的案例

```js 
{
    id: 'online',
    name: '加载了其他仓库的案例',
    tag: '线上-#154fff',
    author: 'z2586300277',
    codeUrl: 'https://z2586300277.github.io/three-cesium-examples/threeExamples/shader/chinaFlag.js',
    image : 'https://z2586300277.github.io/three-cesium-examples/threeExamples/shader/chinaFlag.jpg'
},
```
