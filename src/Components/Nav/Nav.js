import React from "react";
import "./Nav.css"
function Nav() {
    return (
        <>
            <div className="bg-nav">
                <div className="nav">
                    <h1 className="heading">tvShows<span>XD</span></h1>
                    <a rel="noreferrer noopener" href="https://github.com/ZuberDunge/tv-show-xd">
                        <i className="fab fa-github"></i>
                        <span>
                            View on GitHub <i className="fas fa-external-link-alt"></i>
                        </span>
                    </a>
                </div>
            </div>

        </>
    )
}



export default Nav;
