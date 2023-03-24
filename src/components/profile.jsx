
import User from './../json/user.json';

const keys = Object.keys(User);
console.log(keys);

const Description = ({username, tag, location, avatar, stats, textAlt, followers, views, likes}) => {

    return (
            <div class="profile">
                <div class="description">
                    <img
                    src={avatar}
                    alt={textAlt}
                    class={(keys[3])}
                    />
                    <p class="name">{username}</p>
                    <p class="tag">{tag}</p>
                    <p class="location">{location}</p>
                </div>

                <ul class={(keys[4])}>
                    <li>
                        <span class="label">Followers:</span>
                        <span class="quantity">{followers}</span>
                    </li>
                    <li>
                        <span class="label">Views:</span>
                        <span class="quantity">{views}</span>
                    </li>
                    <li>
                        <span class="label">Likes:</span>
                        <span class="quantity">{likes}</span>
                    </li>
                </ul>
            </div>
    )
}

export default Description