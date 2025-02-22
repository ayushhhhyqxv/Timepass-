import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import CalendarPage from './components/CalendarPage';
import ClubsPage from './components/ClubsPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/home" component={HomePage} />
                <Route path="/calendar" component={CalendarPage} />
                <Route path="/clubs" component={ClubsPage} />
                <Route path="/" component={LoginPage} />
            </Switch>
        </Router>
    );
}

export default App;
