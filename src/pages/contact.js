import React from 'react';
import Background from '../components/backgroundContact';
import Footer from '../components/footer';
import ContactForm from '../components/form';
import '../sass/main.scss';
import PaperPlane from '../components/PaperPlane';

const ContactPage = () => (
	<React.Fragment>
		<Background />

		<div className="project-border">
			<div className="project-header-wrapper">
				<h1 className="page-header">Contact</h1>

				<hr className="line" />
				<div id="paper-plane">
					<PaperPlane />
				</div>

				<div>
					<a
						href="https://github.com/martin-linden"
						className="contact-links"
					>
						Github
					</a>
					<a
						href="https://www.linkedin.com/in/martinlindensthlm/?locale=sv_SE"
						className="contact-links"
					>
						LinkedIn
					</a>
				</div>
				<h1>Let’s talk!</h1>
				<p>
					Don’t like forms? Send me an email to: <br />{' '}
					<a
						href="mailto:martinlinden.sthlm@gmail.com"
						className="send-email-link"
					>
						martinlinden.sthlm@gmail.com
					</a>
				</p>
			</div>
			<ContactForm />
		</div>
		<Footer />
	</React.Fragment>
);

export default ContactPage;
