import User from './user.json';

const info = {
  username : User.username,
  tag : User.tag,
  location: User.location,
  avatar: User.avatar,
  stats:User.stats,
}
console.log(info);

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
