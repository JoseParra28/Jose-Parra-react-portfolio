import '../App.css'



const Navbar = () => {

    

    return (
       <nav className="nav">
        <div className="navbar-logo">
        <div className="drop" id="show-menu">&equiv;</div>
                <a href="/">Logo</a>
            </div>
            <div className="nav-inks">
                <ul>
                    <a href="/home">
                        <li>Home</li>
                    </a>
                    <a href="/">
                        <li>About</li>
                    </a>
                    <a href="/">
                        <li>Experience</li>
                    </a>
                    <a href="/">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>
            <div className="social-container">
            <ul className="social-media">
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener"><i className="fab fa-twitter-square"
                    id="twitter"></i></a></li>
                    <li><a href="https://www.youtube.com" target="_blank" rel="noopener"><i className="fab fa-youtube-square"
                    id="youtube"></i></a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener"><i className="fab fa-instagram"
                    id="instagram"></i></a></li>
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener"><i className="fa-brands fa-facebook"
                    id="facebook"></i></a></li>
                    </ul> 
            </div>

       </nav>
    )
}

export default Navbar