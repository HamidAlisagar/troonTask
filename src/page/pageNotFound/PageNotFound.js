import React from 'react'
import { Link } from 'react-router-dom';
import Styles from "./PageNotFound.module.css";
const PageNotFound = () => {
    return (
        <div className={Styles.pageNotFound}>
            <h1>4O4</h1>
            <h3> OOPS! Page Not Found</h3>
            <Link to="/"> Return Home</Link>
        </div>
    )
}

export default PageNotFound
