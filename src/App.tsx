import ComponentsOverview from './ComponentsOverview';
import './App.css';
import './colors.css'
import ComponentsMenu from './ComponentsMenu';

function App() {
  return (
    <div className="d-flex">
      <ComponentsMenu />
      <ComponentsOverview />
    </div>
  );
}

export default App;
