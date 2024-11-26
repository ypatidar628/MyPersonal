
import { Link } from "react-router-dom"
import "./MordernChair.css"
function ModernChair() {
  return<div className="chair-container">
    <div className="contaienr">
      <div className="section-fluid-main">
		<div className="section">
			<div className="info-wrap mob-margin">
				<p className="title-up">Modern chair</p>
				<h2>Telford Kursi</h2>
				<h4>$254 <span>$530</span></h4>
				<div className="section-fluid">
					<input className="desc-btn" type="radio" id="desc-1" name="desc-btn" defaultChecked />
					<label htmlFor="desc-1">Description</label>
					<input className="desc-btn" type="radio" id="desc-2" name="desc-btn" />
					<label htmlFor="desc-2">Details</label>
					<div className="section-fluid desc-sec accor-1">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id totam tempora enim officia
							veritatis hic.
						</p>
					</div>
					<div className="section-fluid desc-sec accor-2">
						<div className="section-inline">
							<p><span>80</span>cm<br />Length</p>
						</div>
						<div className="section-inline">
							<p><span>65</span>cm<br />Width</p>
						</div>
						<div className="section-inline">
							<p><span>90</span>cm<br />Height</p>
						</div>
						<div className="section-inline">
							<p><span>17.6</span>lbs<br />Weight</p>
						</div>
					</div>
				</div>
				<h5>Choose Color:</h5>
			</div>
			<input className="color-btn for-color-1" type="radio" id="color-1" name="color-btn" defaultChecked/>
			<label className="first-color" htmlFor="color-1"></label>
			<input className="color-btn for-color-2" type="radio" id="color-2" name="color-btn" />
			<label className="color-2" htmlFor="color-2"></label>
			<input className="color-btn for-color-3" type="radio" id="color-3" name="color-btn" />
			<label className="color-3" htmlFor="color-3"></label>
			<input className="color-btn for-color-4" type="radio" id="color-4" name="color-btn" />
			<label className="color-4" htmlFor="color-4"></label>
			<input className="color-btn for-color-5" type="radio" id="color-5" name="color-btn" />
			<label className="color-5" htmlFor="color-5"></label>
			<input className="color-btn for-color-6" type="radio" id="color-6" name="color-btn" />
			<label className="color-6" htmlFor="color-6"></label>
			<div className="info-wrap">
				<Link  className="btn-chair" to={''}><i className="uil uil-shopping-cart icon"></i> Add To Cart</Link>
			</div>
			<div className="img-wrap chair-1"></div>
			<div className="img-wrap chair-2"></div>
			<div className="img-wrap chair-3"></div>
			<div className="img-wrap chair-4"></div>
			<div className="img-wrap chair-5"></div>
			<div className="img-wrap chair-6"></div>
			<div className="back-color"></div>
			<div className="back-color chair-2"></div>
			<div className="back-color chair-3"></div>
			<div className="back-color chair-4"></div>
			<div className="back-color chair-5"></div>
			<div className="back-color chair-6"></div>
		</div>
	</div>
    </div>
    </div>
}

export default ModernChair
