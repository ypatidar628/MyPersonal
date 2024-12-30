import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter as faXTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Home(){
    return (
        <div>
            <Splide 
       options={{
        rewind: true,
        type: 'loop',
        perPage: 1,
        perMove: 1,
        autoplay: true,
        gap: '1rem',
      }}>
      <SplideSlide>
         <div className=" set-bg1 ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-7 col-md-8">
                            <div className="hero__text">
                                <h6>Summer Collection</h6>
                                <h2>Fall - Winter Collections 2030</h2>
                                <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                commitment to exceptional quality.</p>
                                <Link to="#" className="primary-btn">Shop now <span className="arrow_right"></span></Link>
                                <div className="hero__social">
                                <Link to="#"><i className="fa "></i><FontAwesomeIcon icon={faFacebook} /></Link>
                                    <Link to="#"><i className="fa "></i><FontAwesomeIcon icon={faXTwitter} /></Link>
                                    <Link to="#"><i className="fa "><FontAwesomeIcon icon={faPinterest} /></i></Link>
                                    <Link to="#"><i className="fa "></i><FontAwesomeIcon icon={faInstagram} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </SplideSlide>
     <SplideSlide>
     <div className=" set-bg2">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-7 col-md-8">
                            <div className="hero__text">
                                <h6>Summer Collection</h6>
                                <h2>Fall - Winter Collections 2030</h2>
                                <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                commitment to exceptional quality.</p>
                                <Link to="#" className="primary-btn">Shop now <span className="arrow_right"></span></Link>
                                <div className="hero__social">
                                    <Link to="#"><i className="fa "></i><FontAwesomeIcon icon={faFacebook} /></Link>
                                    <Link to="#"><i className="fa "></i><FontAwesomeIcon icon={faXTwitter} /></Link>
                                    <Link to="#"><i className="fa "></i><FontAwesomeIcon icon={faPinterest} /></Link>
                                    <Link to="#"><i className="fa "></i><FontAwesomeIcon icon={faInstagram} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     </SplideSlide>
    </Splide>
        </div>
    )
}
export default Home;