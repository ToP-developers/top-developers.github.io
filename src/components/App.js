import React from 'react';

import Header from './Header';
import About from './About';
import Footer from './Footer';
import Team from './Team';

// Здесь собираем все компоненты вместе
const App = () => {
    return (
        <div id="app">
            <Header />
            <About />
            <Team />
            <Footer />
        </div>
    );
};

export default App;
