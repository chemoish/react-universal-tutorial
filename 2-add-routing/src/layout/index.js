import React from 'react';

import { Link } from 'react-router';

export default function Layout(props) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {props.children}
      </main>

      <footer>Footer</footer>
    </div>
  );
};
