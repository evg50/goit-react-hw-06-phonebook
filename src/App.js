import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TodosView from './views/TodosView';
import ContactsView from './views/ContactsView';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/todos">Заметки</Link>
      </li>
      <li>
        <Link to="/contacts">Телефонная книга</Link>
      </li>
    </ul>

    <Switch>
      <Route path="/todos">
        <TodosView />
      </Route>
      <Route path="/contacts">
        <ContactsView />
      </Route>
    </Switch>
  </>
);

export default App;
