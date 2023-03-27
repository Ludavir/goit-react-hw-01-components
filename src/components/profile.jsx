import User from './../json/user.json';
import PropTypes from "prop-types";
import { Box__one, Information_box, Information_box_children, Picture } from './profileStyles';

const keys = Object.keys(User);
console.log(keys);

const Description = ({username, tag, location, avatar, stats, textAlt, followers, views, likes}) => {

    return (
            <div className="profile">
                <Box__one className="description">
                    <Picture
                    src={avatar}
                    alt={textAlt}
                    className={(keys[3])}
                    />
                    <p className="name">{username}</p>
                    <p className="tag">{tag}</p>
                    <p className="location">{location}</p>
                </Box__one>

                <Information_box className={(keys[4])}>
                    <Information_box_children>
                        <span className="label">Followers:</span>
                        <span className="quantity">{followers}</span>
                    </Information_box_children>
                    <Information_box_children>
                        <span className="label">Views:</span>
                        <span className="quantity">{views}</span>
                    </Information_box_children>
                    <Information_box_children>
                        <span className="label">Likes:</span>
                        <span className="quantity">{likes}</span>
                    </Information_box_children>
                </Information_box>
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