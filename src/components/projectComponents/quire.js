import React from 'react';
import '../../sass/main.scss';
import { Link } from 'gatsby';
import NoteBook from '../../images/note-book.svg';

const Quire = () => (
	<div className="project-wrapper-reverse">
		<div className="project-content-wrapper">
			<div className="page-content">
				<h1 className="project-header">Quire - Notebook</h1>
				<p className="project-text">
					Quire is a jcidsjjf fjdsijfiosd fjdsifjids
					fgjdsjgifpdsj kfjdsjipf jfidsjifj jfipdsjifj jfkjdskjfk
					klfndsklj klnvdsfklnfl klfgnskljdi fjdisjf fjdisojfiosj
					ijfidsj ijfidsojio
				</p>
				<div className="link-container">
					{/* <Link className="link2" to="/Read more/">
					About me
				</Link> */}
					<a
						href="../https://github.com/martin-linden"
						className="link2"
					>
						Github
					</a>
				</div>
			</div>
		</div>
		<div className="project-image-wrapper">
			<img className="project-image" src={NoteBook} />
		</div>
	</div>
);

export default Quire;
