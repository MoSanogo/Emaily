import React from 'react';
import linkedin from '../Img/linkedin.jpg';
import twitter from '../Img/twitter.jpg';
import gmail from '../Img/gmail.jpg';

export default () => {
	return (
		<>
			<footer
				className="page-footer"
				style={{
					boxSizing: 'border-box',
					marginBottom: '0.08rem',
					marginTop: '50vh',
					textAlign: 'center',
					backgroundColor: 'rgb(238, 110, 115)',
					height: 'auto',
					color: 'white',
					marginLeft: '0.8rem',
					marginRight: '0.8rem',
					padding: '0.25rem',
					position: 'sticky'
				}}
			>
				<div>
					<div className="row">
						<div className="footer-copyright col m4  s12 " style={{ marginTop: '1.5rem' }}>
							<span className="text-center">© {new Date().getFullYear()} Copyright : MSanogo , All rights reserved.</span>
						</div>
						<div className="col m6 offset-m2 s12" style={{ paddingTop: '0.9rem', paddingBottom: '0rem' }}>
							<div className="row white-text">
								<div className="col s12 m4">
									<a href="https://www.twitter.com/ModiboSanogo16" rel="noopener noreferrer" target="_blank" className="white-text">
										<img src={twitter} alt="Twitter-Logo" className="responsive-img circle col m5 offset-m3 show-on-large hide-on-med-and-down" />
										<p className="col s12 hide-on-med-and-up">Twitter</p>
									</a>
								</div>
								<div className="col s12 m4">
									<a href="mailto:mowdsanogo@gmail.com" rel="noopener noreferrer" target="_blank" className="white-text">
										{/* <i className="material-icons">send</i> */}
										<img src={gmail} alt="Gmail-Logo" className="responsive-img circle col m5 offset-m3 show-on-large hide-on-med-and-down" />
										<p className="col s12 hide-on-med-and-up">Gmail</p>
									</a>
								</div>
								<div className="col s12 m4">
									<a href="https://www.linkedin.com/in/modibosanogo" rel="noopener noreferrer" target="_blank" className="white-text">
										<img src={linkedin} alt="LinkedIn-Logo" className="responsive-img circle col m5 offset-m3 show-on-large hide-on-med-and-down" />
										<p className="col s12 hide-on-med-and-up">Linkedin</p>
									</a>
								</div>
								<div className="col s12 m4">
									<a href="tel:+14389853655" rel="noopener noreferrer" target="_blank" className="white-text">
										<p className="col s12 hide-on-med-and-up">Call Me</p>
										<i className="material-icons hide-on-med-and-up ">call</i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
