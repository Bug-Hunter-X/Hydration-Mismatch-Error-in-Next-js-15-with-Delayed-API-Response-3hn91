```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About(){
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
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  // Simulate a delay to reproduce the issue
  await new Promise((resolve) => setTimeout(resolve, 2000));

  res.status(200).json({ message: 'Hello from API!' });
}
```