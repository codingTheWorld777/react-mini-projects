import React from 'react';

const CommentsComponent = props => {
    return (
        <div className="comment" style={{ marginTop: '8px' }}>
            <a href="/" className="avatar">
                <img src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">{props.author}</a>
                <div className="metadata">
                <div className="date">{props.timeAgo}</div>
                    <div className="rating">
                        <i className="star icon"></i>
                        {props.rating}
                    </div>
                </div>
                <div className="text">
                    {props.content}
                </div>
            </div>
        </div>
    );
};

export default CommentsComponent;