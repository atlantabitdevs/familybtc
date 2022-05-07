import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Outlet, Link,
} from "react-router-dom";
import Account from "./routes/Account";
import Accounts from "./routes/Accounts";
import Home from "./routes/Home";
import Family from "./routes/Family";
import NewAccount from "./routes/NewAccount";
import Onboarding from './routes/Onboarding';
import React from 'react';
import {ContactsIcon, CrossIcon, GearIcon, MenuIcon} from '@bitcoin-design/bitcoin-icons-react/filled';
import {ChartSquareBarIcon} from '@heroicons/react/solid';
import NewFamily from './routes/NewFamily';

const Child = {};

function App() {
  const [menuActive, setMenuActive] = React.useState(false)
  
  return (
    <div className="app">
      <nav className={"fixed bg-fam-bg-dark h-screen w-screen z-50 p-8 space-y-8 transition-all " + (menuActive ? 'right-0' : 'right-full')}>
        <p className="text-4xl lowercase font-display drop-shadow-xl font-[900]">Tribe</p>
        <ul className="space-y-8 text-lg">
          <li>
            <Link className="flex flex-row items-center space-x-2" to="/">
              <ChartSquareBarIcon className="w-8 h-8 inline" /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-row items-center space-x-2" to="/family/BitDevs">
              <ContactsIcon className="w-8 h-8 inline" /> <span>BitDevs Family</span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-row items-center space-x-2" to="/">
              <ContactsIcon className="w-8 h-8 inline" /> <span>Accounts</span>
            </Link>
          </li>
          <li>
            <Link className="flex flex-row items-center space-x-2" to="/">
              <GearIcon className="w-8 h-8 inline" /> <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="fixed top-8 right-8 z-50" onClick={() => setMenuActive(!menuActive)}>
        {menuActive ? <CrossIcon className="w-12 h-12 drop-shadow-md" /> : <MenuIcon className="w-12 h-12 drop-shadow-md" />}
      </div>

      <Routes>
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="new-family" element={<NewFamily />} />
        <Route path="/" element={<Home />}>
          <Route path="family" element={<Family />}>
            <Route path=":family" element={<Accounts />}>
              <Route path=":account" element={<Account />} />
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;