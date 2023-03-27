import Data from './../json/data.json';
import PropTypes from "prop-types";

const ItemElement = () => {
    return (
        
        Data.map((element) => {
            return (
                <li key={element.id} className='item'>
                    <span className="label">{element.label}</span>
                    <br />
                    <span className="percentage">{element.percentage}</span>
                </li>
            )
        })
        
    )
};

const Statistics = ({title, }) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                <ItemElement/>
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

export default Statistics

