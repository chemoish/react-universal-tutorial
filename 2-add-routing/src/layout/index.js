import React from 'react';

import Home from 'view/home';

export default function Layout(props) {
  return (
    <div>
      <header>Header</header>

      <main>
        <Home />
      </main>

      <footer>Footer</footer>
    </div>
  );
};
