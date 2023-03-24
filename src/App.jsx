import User from './json/user.json';
import Data from './json/data.json'
import Description from './components/profile';
import Statistics from './components/statistics';

const keys = Object.keys(User);
console.log(keys);

function App() {
  return (
    <div className='container'>
      <Description
      username={User.username}
      tag={User.tag}
      location={User.location}
      avatar={User.avatar}
      stats={User.stats}
      textAlt = "User avatar"
      followers={User.stats.followers}
      views={User.stats.views}
      likes={User.stats.likes}
      />
      <Statistics
      title="Upload stats"
      stats={Data}/>
    </div>

  );
}

export default App;
