import Friends from './../json/friends.json';
import FriendListItem from './FriendListitem'
import {List} from './FriendListStyles';


const FriendList = () => {
    return (
        <List className="friend-list">
            <FriendListItem
            avatar={Friends.avatar}
            name={Friends.name}
            isOnline={Friends.isOnline}
            altText="User avatar"
            />
        </List>
    )
};

export default FriendList