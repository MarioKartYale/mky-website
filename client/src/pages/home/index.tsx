// client/src/pages/home/index.tsx

import { useEffect, useState } from 'react';

function Home() {
  const [homeMessage, setHomeMessage] = useState('');

  useEffect(() => {
    const fetchHomeMessage = async () => {
      try  {
        setHomeMessage('Loading...');
        const res = await fetch('/api/example');
        const data = await res.json();
        setHomeMessage(data.message);
      } catch (err) {
        console.error('Failed to fetch home message:', err);
        setHomeMessage('Failed to load message');
      }
    }

    fetchHomeMessage();
  }, []);

  return (
    <>
      <div>
        <h1>Home Page</h1>
        <p>{homeMessage}</p>
      </div>
    </>
  )
}

export default Home