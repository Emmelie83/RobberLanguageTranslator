import React from "react";
import Skull from "../../assets/img/skull.png";

const Contact: React.FC = () => {
	return (
		<div
			id="contact"
			className="mx-auto pt-24  pb-18 text-center lg:w-1/2 max-w-[500px]">
			{/* Section Heading */}
			<h2 className="mb-4">Kontakt</h2>

			{/* Contact Text */}
			<p className="mb-2">
				Jag som ligger bakom denna sida heter{" "}
				<strong>Emmelie Johansson</strong>. Har du frågor eller
				synpunkter? Hör av dig till
			</p>

			{/* Email Address */}
			<address className="not-italic mt-6 mb-12">
				info@emmeliejohansson.com
			</address>

			{/* Image */}
			<img
				src={Skull}
				alt="En dödskalle"
				className="w-26 h-auto mt-12 mx-auto"
			/>
		</div>
	);
};

export default Contact;
