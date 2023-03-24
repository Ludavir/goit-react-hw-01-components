
import User from './../json/user.json';

const keys = Object.keys(User);
console.log(keys);

const Description = ({username, tag, location, avatar, stats, textAlt, followers, views, likes}) => {

    return (
            <div className="profile">
                <div className="description">
                    <img
                    src={avatar}
                    alt={textAlt}
                    className={(keys[3])}
                    />
                    <p className="name">{username}</p>
                    <p className="tag">{tag}</p>
                    <p className="location">{location}</p>
                </div>

                <ul className={(keys[4])}>
                    <li>
                        <span className="label">Followers:</span>
                        <span className="quantity">{followers}</span>
                    </li>
                    <li>
                        <span className="label">Views:</span>
                        <span className="quantity">{views}</span>
                    </li>
                    <li>
                        <span className="label">Likes:</span>
                        <span className="quantity">{likes}</span>
                    </li>
                </ul>
            </div>
    )
};

export default Description