
function Header() {
    return(
        <header>
            <h1 className="text-3xl font-bold underline">Pets Blog</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/dogs">Dogs</a></li>
                    <li><a href="/cats">Cats</a></li>
                </ul>
            </nav>
        </header>

    );
}

export default Header;