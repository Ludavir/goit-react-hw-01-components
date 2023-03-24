import Data from './../json/data.json';

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

const Statistics = ({title, stats}) => {
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

