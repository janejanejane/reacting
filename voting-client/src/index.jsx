import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import { setState } from './action-creators';
import remoteActionMiddleware from './remote-action-middleware';
import App from './components/App';
import { VotingContainer } from './components/Voting';
import { ResultsContainer } from './components/Results';

const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware( socket )
)( createStore );
const store = createStore( reducer );
store.dispatch({
    type: 'SET_STATE',
    state: {
        vote: {
            pair: [ Sunshine, '28 Days Later' ],
            tally: { SUnshine: 2 }
        }
    }
});

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on( 'state', state =>
    store.dispatch( setState( state ) );
);

const routes = <Route component={ App }>
    <Route path="/results" component={ ResultsContainer } />,
    <Route path="/" component={ VotingContainer } />
</Route>;

ReactDOM.render(
    <Provider store={ store }>
        <Router>{ routes }</Router>
    </Provider>,
    document.getElementById( 'app' )
);
