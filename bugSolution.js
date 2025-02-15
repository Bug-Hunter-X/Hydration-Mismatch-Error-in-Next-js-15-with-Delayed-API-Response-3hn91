```javascript
// pages/about.js
import {useEffect, useState} from 'react';
import {Suspense} from 'react';

const LazyAbout = React.lazy(() => import('./lazyAbout'));

export default function About(){
    return(
        <Suspense fallback={<p>Loading...</p>}>
            <LazyAbout/>
        </Suspense>
    );
}
```
```javascript
// pages/lazyAbout.js
import {useEffect, useState} from 'react';

export default function LazyAbout(){
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/api/data');
            const json = await res.json();
            setData(json);
        };
        fetchData();
    }, []);
    if(!data){
        return <p>Loading...</p>;
    }
    return(
        <div>
            <h1>About Page</h1>
            <p>{data.message}</p>
        </div>
    );
}
```