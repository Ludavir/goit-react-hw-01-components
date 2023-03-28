import Friends from './../json/friends.json';
import { ItemList, List, Off, On } from './FriendListStyles';


const OnlineText = () => {
    return (
        <div>
            <On className="status">•</On>
        </div>
    )
}

const OfflineText = () => {
    return (
        <div>
            <Off className="status">•</Off>
        </div>
    )
}


const FriendListItem = (altText) => {
    
    return (

        Friends.map((element) => {
            return (
                <ItemList key={element.id} className='item'>

                    {element.isOnline ? <OnlineText/> : <OfflineText/>}
                    <img className='avatar' src={element.avatar} alt={altText} width="48"/>
                    <p className="name">{element.name}</p>
                </ItemList>
            )
        })
    )
};


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