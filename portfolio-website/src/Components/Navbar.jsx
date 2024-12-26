import '../App.css'



const Navbar = () => {

    

    return (
       <nav className='nav'>
        <div className="navbar-logo">
                <a href="/">Logo</a>
            </div>
            <div className="nav-inks">
                <ul>
                    <a href="/">
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

       </nav>
    )
}

export default Navbar