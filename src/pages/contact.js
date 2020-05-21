import React from 'react';
import Background from '../components/backgroundContact';
import Footer from '../components/footer';
import ContactForm from '../components/form';
import '../sass/main.scss';

const ContactPage = () => (
	<div>
		<Background />
		<ContactForm />
		<Footer />
	</div>
);

export default ContactPage;
