
import User from './../user.json';

const keys = Object.keys(User);
console.log(keys);


const Description = () => {
    const textAlt = "User avatar";

    return (
        <div className="description">
            <img src={User.avatar} alt={textAlt} className={(keys[3])} />
            <p className={(keys[0])}>{User.username}</p>
            <p className={(keys[1])}>{User.tag}</p>
            <p className={(keys[2])}>{User.location}</p>
        </div>
    )
}

export default Description