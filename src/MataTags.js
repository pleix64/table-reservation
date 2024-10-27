import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTags = () => {
    return (
        <Helmet>
            <title>Little Lemon</title>
            <meta name="description" content="Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."/>
            <meta name="og:title" content="Little Lemon" />
            <meta name="og:description" content="Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."/>
            <meta name="og:image" content="logo/vertical_lemon_yellow.png"/>
        </Helmet>
    );
}

export default MetaTags;