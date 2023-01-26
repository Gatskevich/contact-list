import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const ContactList = lazy(() => import('./pages/contact-list/ContactList'));

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ContactList />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
