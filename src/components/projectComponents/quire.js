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
					Quire is a professional notebook in the browser. Take
					notes, add images, favourite your pages and easily save
					it to a pdf.
				</p>
				<div className="link-container">
					{/* <Link className="link2" to="/Read more/">
					About me
				</Link> */}
					<a
						href="https://github.com/amol0900/fe19tp1_-team-ink-"
						className="link2"
					>
						Github
					</a>
				</div>
			</div>
		</div>
		<div className="project-image-wrapper">
			<img
				className="project-image"
				alt="Quire Logo"
				src={NoteBook}
			/>
		</div>
	</div>
);

export default Quire;
