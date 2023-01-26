import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

const ContactList = lazy(() => import('./pages/contact-list/ContactList'));

function App() {
  return (
    <div className='app'>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' element={<ContactList />} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
