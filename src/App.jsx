import User from './json/user.json';
import Description from './components/profile';

const keys = Object.keys(User);
console.log(keys);

function App() {
  return (
    <div className='conatainer'>
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
    </div>

  );
}

export default App;
