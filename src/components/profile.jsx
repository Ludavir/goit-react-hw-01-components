import User from './../json/user.json';
import PropTypes from "prop-types";

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

Description.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired,
    textAlt: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}

export default Description