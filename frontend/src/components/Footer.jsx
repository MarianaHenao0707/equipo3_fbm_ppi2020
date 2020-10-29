import React from 'react';
import '../styles/Footer.css'


function Footer(props) {
    return (
        <footer>
             <div className="icon-text-text">
                <ul className="social">
                    <li>
                        <a href="Correo:vallejo.timo15@gmail.com" target="_blank">
                            <i className="fa fa-envelope-o"></i>
                        </a>
                    </li>
                    <li>
                        <a href="http://facebook.com/profile.php?id=100023930166598&ref=content_filter" target="_blank">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a href="htpp://instagram.com/@vallejo_timo15" target="_blank">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                


            </div>
            <div className="segundo-footer">
                <p>
                     <a href="Index.html" target="_blank">Eduquémonos sobre los residuos.</a>
                </p>
            </div>
        </footer>

    );
    
}
export default Footer;