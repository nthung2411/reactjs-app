import React from 'react';
import './Giphy.css';

const giphy = (props) => {
    const user = props.user;
    const images = props.images;
    const index = props.index;
    const hrefUri = '#' + index;

    let name = user.display_name;
    if (name === '') {
        name = user.username;
    }

    const content = <div className="Giphy">
        <article>
            <a href={hrefUri} title='click here to see full sized image'>
                <img src={images['480w_still'].url} alt=''/>
            </a>
        </article>
        <div className='author'>
            <img className='avatar' src={user.avatar_url} alt=''/>
            <span className='name'>
                {name}
            </span>
        </div>
        <div className="lightbox-target" id={index}>
            <img src={images['original'].url}/>
            <a className="lightbox-close" href="#"></a>
        </div>
    </div>;
    return (content);
};

export default giphy;
