import './App.css';
import './colors.css'
import './fontsizes.css'
import './lineheights.css'
import ComponentsMenu from './ComponentsMenu';
import { HashRouter, Route, Routes } from 'react-router-dom';
import StepTrackerOverview from './components/steptracker/StepTrackerOverview';
import { DFlex } from './components/common/Containers';
import Intro from './components/intro/Intro';

function App() {
  return (
    <div className="d-flex">
      <ComponentsMenu />
      <HashRouter>
        <Routes>
          <Route path=''
            element={<DFlex><Intro></Intro></DFlex>} />

          <Route path='/steptracker'
            element={<StepTrackerOverview />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
