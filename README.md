## 设置 npm 的代理
```js
export HTTP_PROXY='http://dev-proxy.oa.com:8080'
export HTTPS_PROXY='http://dev-proxy.oa.com:8080'
export NO_PROXY="localhost,127.0.0.1,.oa.com"
export http_proxy=$HTTP_PROXY
export https_proxy=$HTTPS_PROXY
export no_proxy=$NO_PROXY
export npm_config_proxy=$HTTP_PROXY
export npm_config_https_proxy=$HTTP_PROXY

```
## 安装项目依赖包，以及用lerna关联项目中的需要用到的包
```js
  npm install && npm run init 
```

### 运行项目

```js
 npm run dev
```