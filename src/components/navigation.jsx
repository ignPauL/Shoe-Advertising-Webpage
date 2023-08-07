const Navigation = () => {
    return(
        <nav>
        <div className='brand logo'>
          <img  src="/images/brand_logo.png"alt='brand_logo' size="50px"/> 
          
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>
          login
        </button>
      </nav>
    )

}
export default Navigation;