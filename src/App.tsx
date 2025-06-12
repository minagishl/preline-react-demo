import { useState } from 'react';
import { Button } from 'preline-react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 text-center">
      <h1 className="mb-4 text-2xl font-bold">Count: {count}</h1>

      <Button variant="solid" color="blue" onClick={() => setCount(count + 1)}>
        Click
      </Button>
    </div>
  );
}

export default App;
