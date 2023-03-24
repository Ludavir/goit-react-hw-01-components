import Data from './../json/data.json';

const ItemElement = () => {
    return (
        <li className='item'>

            {
                Data.map((element, index) => {
                    return (
                        <li>
                            <span key={index} className="label">{element.label}</span>
                            <br />
                            <span key={index} className="percentage">{element.percentage}</span>
                        </li>
                    )
                })
            }

        </li>
    )
};

const Statistics = ({title}) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                <ItemElement/>
            </ul>
        </section>
    )
};


export default Statistics

