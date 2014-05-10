Exploring requireJS Library

**What's Covered**
* explored RequireJS 2.1.11
* tried requireJS config options ( baseUrl, paths, shim, map, urlArgs, waitSeconds )
* tried out requireJS plugins ( text, domReady, i18n )
* tried r.js optimization with single file and the entire app directory
* made few notes on requireJS config option(s) and r.js optimization config option(s)

**Dependencies**
* grunt-contrib-connect

**Launching server from grunt**
* Web server
```bash
grunt
```
* "Cross-Orgin Resource Sharing" enabled server
```bash
grunt corsServer
```
* Non-"Cross-Orgin Resource Sharing" server
```bash
grunt nonCorsServer
```
* run a server using ip address
```bash
grunt serverIp
```