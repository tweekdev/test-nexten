import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Country from './components/Country/Country';
import Home from './components/Home';

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
});

const App = () => {
  let routes;
  routes = (
    <Switch>
      <Route path='/pays' exact>
        <Home />
      </Route>
      <Route path='/pays/:pays'>
        <Country />
      </Route>
      <Redirect to='/pays' />
    </Switch>
  );

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App'>
          <main>{routes}</main>
        </div>
      </Router>
    </ApolloProvider>
  );
};
export default App;
