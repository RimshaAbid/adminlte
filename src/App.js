import React from 'react';
import AppHeader from './appHeader/appHeader';
import AppMenu from './appMenu/appMenu';
import AppDashboard from './appDashboard/appDashboard';
import AppFooter from './appFooter/appFooter';



function App() {
  return (
    <div className="wrapper">
      <AppHeader />
      <AppMenu />
      <AppDashboard/>
      <AppFooter />

    </div>
    
  );
}

export default App;
