import User from './user.json';
import Description from './components/description';
import Stats from './components/stats';

const keys = Object.keys(User);
console.log(keys);

function App() {
  return (
    <div className='profile'>
      <Description/>
      <Stats/>
    </div>

  );
}

export default App;
