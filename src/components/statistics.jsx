import Data from './../json/data.json';
import PropTypes from "prop-types";
import { Box, List, ItemList } from './statisticsStyles';

const ItemElement = () => {
    return (
        
        Data.map((element) => {
            return (
                <ItemList key={element.id} className='item'>
                    <span className="label">{element.label}</span>
                    <span className="percentage">{element.percentage}</span>
                </ItemList>
            )
        })
        
    )
};

const Statistics = ({title}) => {
    return (
        <Box className="statistics">
            <h2 className="title">{title}</h2>

            <List className="stat-list">
                <ItemElement/>
            </List>
        </Box>
    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Statistics

