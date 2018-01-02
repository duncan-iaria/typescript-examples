import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App';

// APOLLO
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  link: new HttpLink( { uri: `http://fake.graphql.guru/graphql` } ),
  cache: new InMemoryCache()
});

const store = configureStore( {} );

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
