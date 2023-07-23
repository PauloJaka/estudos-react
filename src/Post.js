import React from "react";
import PropTypes from "prop-types";

export default function Post(props) {
    return(
        <article>
            <strong>{props.title}</strong><br />
            <small>ddd</small>
            <br />
            Media:{props.likes/2}
        </article>
    );
}

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};