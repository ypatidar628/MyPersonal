import { Link } from "react-router-dom";

function UserPost(){
    return  <div className="container">
    <div className="page-inner">
        <div className="page-header">
            <h3 className="fw-bold mb-3">Panels</h3>
            <ul className="breadcrumbs mb-3">
                <li className="nav-home">
                    <Link to="#">
                        <i className="icon-home"></i>
                    </Link>
                </li>
                <li className="separator">
                    <i className="icon-arrow-right"></i>
                </li>
                <li className="nav-item">
                    <Link to="#">Base</Link>
                </li>
                <li className="separator">
                    <i className="icon-arrow-right"></i>
                </li>
                <li className="nav-item">
                    <Link to="#">Panels</Link>
                </li>
            </ul>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Nav Pills (Horizontal Tabs)</h4>
                    </div>
                    <div className="card-body">
                        <ul className="nav nav-pills nav-secondary" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <Link className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" to="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" to="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" to="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</Link>
                            </li>
                        </ul>
                        <div className="tab-content mt-2 mb-3" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <p>Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>

                                <p> But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                  </div>
    </div>
</div>	
}
export default UserPost;