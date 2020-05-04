import React from 'react';
import '../sass/main.scss';

const ContactForm = () => (
	<div className="form-container">
		<form className="form" method="post" action="#">
			<label>
				Name
				<input
					className="form-input"
					type="text"
					name="name"
					id="name"
				/>
			</label>
			<label>
				Email
				<input
					className="form-input"
					type="email"
					name="email"
					id="email"
				/>
			</label>
			<label>
				Subject
				<input
					className="form-input"
					type="text"
					name="subject"
					id="subject"
				/>
			</label>
			<label>
				Message
				<textarea name="message" id="message" rows="5" />
			</label>
			<button type="submit">Send</button>
			<input className="form-input" type="reset" value="Clear" />
		</form>
	</div>
);

export default ContactForm;
