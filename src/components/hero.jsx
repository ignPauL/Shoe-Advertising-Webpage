const HeroSection = () => {
    return <main className="Hero">
        <div className="hero-content">
            <h1>Your feet deserves the best</h1>
            <p>
                 Your feet deserves the best and we're here to help you with our shoes.Your feet deserves the best and we're here to help you with our shoes
            </p>
            <div className="hero-button">
                <button className="Shop-Now">Shop Now</button>
                <button className="Cart">Add to cart</button>
            </div>
            <div className="Shopping">
                <p>
                    Also available on
                </p>
            <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon-logo" />
                <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
        </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero_image.png" alt="shoe image"/>
        </div>
        
    </main>
}
export default HeroSection;