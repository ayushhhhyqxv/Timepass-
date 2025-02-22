import React from 'react';
import ReactDOM from 'react-dom/client';
import ClubsPage from './components/ClubsPage';

const root = document.getElementById('root');

if (root) {
    const reactRoot = ReactDOM.createRoot(root);
    reactRoot.render(<ClubsPage />);
} else {
    console.error("Root element not found");
}
