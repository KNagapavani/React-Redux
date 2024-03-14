import React from 'react';

const Footer = () => {
  return (
    <>
        <footer id="footer">
            <div className="container"> 
                <div className="copyright">
                    @Copyright <strong><span>SHOPPING CART</span></strong>
                </div>
                <div className="credits">
                    Designed by <a href="http://localhost:3000/" onClick={(e) => { e.preventDefault(); }}>Pavani</a>
                </div>
            </div>
        </footer>
    </>
  );
}

export default Footer;
