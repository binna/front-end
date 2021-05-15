import React from 'react';

// function Hello(props) {
//     { /* props : props.color, props.name => props = {color:'gold', name='김사과'} */ }
//     return <div style={{color: props.color}}>안녕하세요 {props.name}</div>
// }
function Hello({color, name, isSpecial}) {
    return (
        <div style={{ color }}>
            {/* { isSpecial ? <b>★</b> : null } 안녕하세요 { name } */}
            { isSpecial && <b>★</b> } 안녕하세요 { name }
        </div>
    )
}

Hello.defaultProps = {
    color: 'pink',
    name: '무명'
}

export default Hello;