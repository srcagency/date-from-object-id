# Date from ObjectId

```js
var o2d = require('date-from-object-id');

o2d('5750268e0ddf67495e000007');
// Date('2016-06-02T12:29:02.000Z')

o2d(mongodb.ObjectId('5750268e0ddf67495e000007'));
// Date('2016-06-02T12:29:02.000Z')
```

```shell
npm i -g date-from-object-id

$ date-from-object-id 574567db0ddf673759000024
2016-05-25T08:52:43.000Z
```
