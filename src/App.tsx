import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const Main = lazy(() => import('./pages/main/Main'));

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Main />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
