import React from 'react';

const CertTile = (props) => {
    let classes = ['tile'];

    if (props.data.opened) {
        classes.push('open');
    }

    return (
        <div className={classes.join(' ').toString()}>
            <img src={props.data.url}
                 alt={props.data.title}
                 onClick = {() => props.onChange(props.data.id)}
            />
        </div>
    );
};
export default CertTile;
