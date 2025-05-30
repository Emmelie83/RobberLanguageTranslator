import React from "react";
import Skull from "../assets/img/skull.png"; // Adjust path as needed

const Contact: React.FC = () => {
	return (
		<section id="contact_section" className="py-12 text-center">
			<div
				id="contact"
				className="mx-auto w-11/12 max-w-xl">
				{/* Section Heading */}
				<h2 className="mb-4">
					Kontakt
				</h2>

				{/* Contact Text */}
				<p className="mb-2">
					Jag som ligger bakom denna sida heter{" "}
					<strong>Emmelie Johansson</strong>. Har du frågor eller
					synpunkter? Hör av dig till
				</p>

				{/* Email Address */}
				<address className="not-italic mt-6 mb-10">
					info@emmeliejohansson.com
				</address>

				{/* Image */}
				<img
					src={Skull}
					alt="En dödskalle"
					className="mx-auto w-30 h-auto mt-12"
				/>
			</div>
		</section>
	);
};

export default Contact;
