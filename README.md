## 一个小小小...的Webpack custom Loader🤡

## 使用

xxx.tdl
``` html

<div>
  <h1>{{ name }}</h1>
  <div>{{ age }}</div>
  <div>{{ sex }}</div>
</div>

<template>
  data = {
    name: 'alex',
    age: 20,
    sex: 'male',
  }
</template>

```
### webpack.config.js

``` js
 rules: [
    // ...other rules
      {
        test: /\.tdl$/,
        use: [
          {
            loader: 'tdl-loader',
            options: {
              logger: false,
            },
          },
        ],
      },
    ],
```

## 例子

``` js
import tdl from './index.tdl'

document.body.innerHTML = tdl
```
