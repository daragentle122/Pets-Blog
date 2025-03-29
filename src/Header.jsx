
function Header() {
    return(
        <header className="flex justify-around items-center bg-white text-gray-950 h-20">
            <img class="w-60" src="/img/pets-boutique-high-resolution-logo.png" alt="" />
            <nav className="flex gap-16 font-mono text-xl ">
                <p><a href="/">Home</a></p>
                <p><a href="/about">Dogs</a></p>
                <p><a href="/contact">Cats</a></p>
            </nav>
        </header>
        

    );
}

export default Header;