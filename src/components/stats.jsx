
import User from './../user.json';

const keys = Object.keys(User);
console.log(keys);


const Stats = () => {

    return (
        <ul className={(keys[4])}>
            <li className='label'>
                <span className='label'>{(keys[0])}: </span>
                <span className='quantity'>{User.stats.followers}</span>
            </li>
            <li>
                <span className='label'>{(keys[1])}: </span>
                <span className='quantity'>{User.stats.views}</span>
            </li>
            <li>
                <span className='label'>{(keys[2])}: </span>
                <span className='quantity'>{User.stats.likes}</span>
            </li>
            
        </ul>
    )
}

export default Stats