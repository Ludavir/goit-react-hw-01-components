import User from './../json/user.json';
import PropTypes from "prop-types";
import { BoxOne, Container, InformationBox, InformationBoxChildren, Picture } from './profileStyles';

const keys = Object.keys(User);
console.log(keys);

const Description = ({username, tag, location, avatar, textAlt, followers, views, likes}) => {

    return (
            <Container className="profile">
                <BoxOne className="description">
                    <Picture
                    src={avatar}
                    alt={textAlt}
                    className={(keys[3])}
                    />
                    <p className="name">{username}</p>
                    <p className="tag">{tag}</p>
                    <p className="location">{location}</p>
                </BoxOne>

                <InformationBox className={(keys[4])}>
                    <InformationBoxChildren>
                        <span className="label">Followers:</span>
                        <span className="quantity">{followers}</span>
                    </InformationBoxChildren>
                    <InformationBoxChildren>
                        <span className="label">Views:</span>
                        <span className="quantity">{views}</span>
                    </InformationBoxChildren>
                    <InformationBoxChildren>
                        <span className="label">Likes:</span>
                        <span className="quantity">{likes}</span>
                    </InformationBoxChildren>
                </InformationBox>
            </Container>
    )
};

Description.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    textAlt: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}

export default Description