import Data from './../json/data.json';
import PropTypes from "prop-types";
import { Box, List, ItemList } from './statisticsStyles';

const Statistics = ({title, stats}) => {
    return (
        <Box className="statistics">

            {title==="" && <h2 className="title">{title}</h2> }

            <List className="stat-list">
                { Data.map((element) => {
                    return (
                        <ItemList key={element.id} className='item'>
                            <span className="label">{element.label}</span>
                            <span className="percentage">{element.percentage}</span>
                        </ItemList>
                    )
                    })
                }
            </List>
        </Box>
    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.array.isRequired,
}

export default Statistics

