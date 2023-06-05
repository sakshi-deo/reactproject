const Navbar = () => {
    return (  <nav>
        <div id="logo">
            <h1> SHOPPING lIST  </h1>
        </div>
        <div id="search-bar">
            <input type="search" placeholder="search for products"/>
            <button>search</button>
        </div>
        <div id="add-products">
            <a href="/">Add products </a>
        </div>
    </nav>
    );
}
 
export default Navbar;