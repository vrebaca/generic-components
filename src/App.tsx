import ComponentsMenu from './ComponentsMenu';
import { HashRouter, Route, Routes } from 'react-router-dom';
import StepTrackerOverview from './components/steptracker/StepTrackerOverview';
import Intro from './components/intro/Intro';
import AccountCardOverview from './components/cards/accountcard/AccountCardOverview';
import './custom-portal/bootstrap.min.css';
import './custom-portal/custom-icons.css';
import './custom-portal/font-awesome.min.css';
import './custom-portal/style.css';
import './custom-portal/style_extend.css';
import './custom-portal/style_map.css';
import './App.css';
import './colors.css'
import './fontsizes.css'
import './lineheights.css'
import '@fontsource/open-sans';
import SearchOverview from './components/search/SearchOverview';
import TableOverview from './components/tables/TableOverview';


function App() {
  return (
    <>
      <div className="fixed-nav fixed-nav-basic fixed-sidebar">
        <div id="wrapper">
          <ComponentsMenu />
        </div>
      </div>
      <div id="page-wrapper" className="gray-bg">
        <div className='wrapper wrapper-content'>
          <div className='row'>
            <HashRouter>
              <Routes>
                <Route path=''
                  element={<Intro></Intro>} />
                <Route path='/steptracker'
                  element={<StepTrackerOverview />} />
                <Route path='/search'
                  element={<SearchOverview />} />
                <Route path='/accountcard'
                  element={<AccountCardOverview />} />
                <Route path='/table'
                  element={<TableOverview />} />
              </Routes>
            </HashRouter>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
