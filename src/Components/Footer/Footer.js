import React from "react";
import "./Footer.css"
function Footer() {
    return (
        <>

            <div class="footer">
                <footer>
                    <ul class="links social-links list-non-bullets">
                        <li class="list-item-inline icon-social"><a class="link" href="https://github.com/ZuberDunge"><i
                            class="fab fa-github social"></i></a></li>
                        <li class="list-item-inline icon-social"><a class="link"
                            href="https://www.instagram.com/zuberdunge/"><i class="fab fa-instagram social"></i></a>
                        </li>
                        <li class="list-item-inline icon-social"><a class="link"
                            href="https://www.linkedin.com/in/zuberdunge/"><i class="fab fa-linkedin-in social"></i></a>
                        </li>
                        <li class="list-item-inline icon-social"><a class="link"
                            href="https://www.twitter.com/zuberdunge/"><i class="fab fa-twitter social"></i></a></li>
                        <li class="list-item-inline icon-social"><a class="link" href="mailto:iamZuberDunge@gmail.com"><i
                            class="fas fa-envelope social"></i></a></li>
                    </ul>
                    <p class="bottom">© Made with Love 💕 by <span class="social"><a href="https://zuberdunge.tech"><span><strong>
                        Zuber Dunge </strong> <i class="fas fa-external-link-alt"></i></span> </a></span>
                    </p>
                </footer>
            </div >

        </>
    )
}



export default Footer;
