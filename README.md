# WNS

```
npm install git://github.com/scazan/wns.git
```

Now move the "node_modules/wns/samples" folder to somewhere on your webserver where they are accessible. 
Then here's how to use the library:
```
import { WNS } from 'wns';

WNS({
samplePath: "/path/to/samples/folder/on/server"
})
```
