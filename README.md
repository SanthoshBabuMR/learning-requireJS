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
* Default/App Server ( http://localhost:6234/ )
```bash
grunt appServer
```
* Non-"Cross-Orgin Resource Sharing" server  ( http://localhost:5234/ )
```bash
grunt nonCorsServer
```
* "Cross-Orgin Resource Sharing" enabled server  ( http://localhost:4234/ )
```bash
grunt corsServer
```
* run a server using ip address  ( http://127.1.1.1:6111/ )
```bash
grunt serverIp
```