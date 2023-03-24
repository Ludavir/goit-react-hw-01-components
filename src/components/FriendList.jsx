import Friends from './../json/friends.json';

const FriendListItem = (avatar, name, isOnline, altText) => {
    
    return (

        Friends.map((element) => {
            return (
                <li key={element.id} className='item'>
                    <span className="status">
                        {element.isOnline ? "Is ONline" : "is OFFLine"}
                    </span>
                    <img className='avatar' src={element.avatar} alt={altText} width="48"/>
                    <p className="name">{element.name}</p>
                </li>
            )
        })

    )
};


const FriendList = () => {
    return (
        <ul className="friend-list">
            <FriendListItem
            avatar={Friends.avatar}
            name={Friends.name}
            isOnline={Friends.isOnline}
            altText="User avatar"
            />

        </ul>
    )
};

export default FriendList