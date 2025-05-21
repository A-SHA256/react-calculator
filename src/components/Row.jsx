import PropTypes from 'prop-types';

const Row = ({rowData, className}) => {
    return <div className={className}>{rowData}</div>
}

Row.propTypes = {
    rowData: String.PropTypes
}

export default Row;