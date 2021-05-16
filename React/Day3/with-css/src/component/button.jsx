import classNames from 'classnames';
import React from 'react';
import './button.scss';

/*
    HTML에서 CSS class 적용
    <div class="button size">2가지 class 적용</div>
*/
function Button({children, size, color, outline, fullWidth, ...rest}) {
    // return <button className={["Button", size, color].join(' ')}>{children}</button>;
    // classnames 사용시
    return <button className={classNames("Button", size, color, {outline, fullWidth})} {...rest}>{children}</button>;
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
}

export default Button;