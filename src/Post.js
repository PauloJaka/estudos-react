import React from "react";
import PropTypes from "prop-types";

export default function Post(props) {
    return(
        <article>
            <strong>{props.post.title}</strong><br />
            <small>{props.post.subtitle}</small>
            <br />
        </article>
    );
}

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};