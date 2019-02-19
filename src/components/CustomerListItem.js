import React from 'react';
import PropTypes from 'prop-types';

const CustomerListItem = ({ name, editAction, delAction, urlPath }) => {
    return (
        <div>
            <div className="customers-list-item">
                <div className="field">
                    <link to={`${props.urlPath}${dni}`}>{name}</link>
                </div>
                <div className="field">
                    <link to={`${props.urlPath}${dni}/edit`}>{editAction}</link>
                </div>
                <div className="field">
                    <link to={`${props.urlPath}${dni}/del`}>{delAction}</link>
                </div>
            </div>
            
        </div>
    );
};

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;