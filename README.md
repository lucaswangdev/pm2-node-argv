# pm2-node-argv

Get pm2, node, npm inject arguments

## Install

Using npm:

```sh
npm install pm2-node-argv
```

or using yarn:

```sh
yarn add pm2-node-argv
```

## How to Use ?
### Pm2

```javascript
Inject arguments:
pm2 start xxx.js -- --port=5005 --name=lucas

Get arguments:
const { getArgv } = require('pm2-node-argv')
const obj = getArgv();
console.log('obj', obj)
// {
//   "port": 5005,
//   "name": lucas
// }
```
### Node

```javascript
Inject arguments:
node start xxx.js -- --port=5005 --name=lucas

Get arguments:
const { getArgv } = require('pm2-node-argv')
const obj = getArgv();
console.log('obj', obj)
// {
//   "port": 5005,
//   "name": lucas
// }
```
### Npm
```javascript
Inject arguments:
pm2 start xxx.js -- --port=5005 --name=lucas

Get arguments:
const { getArgv } = require('pm2-node-argv')
const obj = getArgv();
console.log('obj', obj)
// {
//   "port": 5005,
//   "name": lucas
// }

node start xxx -- --port=5005 --name=lucas
```