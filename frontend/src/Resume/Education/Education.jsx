import "./style.css";
import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import { REACT_APP_SERVER_URL } from "../../index";

function Education() {
	const [educations, setEducation] = useState([
		{
			title: "B.Tech in Computer Science & Engineering",
			milestone: "2021 - 2025",
			content:
				"Pursuing B.Tech in Computer Science & Engineering. Focused on academic excellence and participated in technical projects like Jiobasket and MovieBuzz.",
		},
		{
			title: "Higher Secondary School (Class 12)",
			milestone: "2021",
			content:
				"Completed 12th grade from Maharishi Vidya Mandir, Seoni, MP, with 82.2% marks. Excelled in Physics, Chemistry, and Mathematics.",
		},
		{
			title: "High School (Class 10)",
			milestone: "2019",
			content:
				"Completed 10th grade from Maharishi Vidya Mandir, Seoni, MP, with a strong foundation in core subjects.",
		},
	]);

	useEffect(() => {
		let isMounted = true; // avoid memory leak
		console.log("Server url: ", REACT_APP_SERVER_URL);

		// Example of fetching education dynamically if API is available
		fetch(`${REACT_APP_SERVER_URL}/api/education`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((jsonRes) => {
				if (isMounted) setEducation(jsonRes);
			});

		return () => {
			isMounted = false;
		};
	}, []); // Empty dependency array ([]) to run this effect only once when the component mounts

	let element_education = educations.map((education, index) => {
		return (
			<Card
				title={education.title}
				milestone={education.milestone}
				content={education.content}
				key={index}
			/>
		);
	});

	return (
		<div className="education d-flex flex-column p-3 pt-0">
			<h2 className="stage mb-3">Education Milestone</h2>

			{element_education}
		</div>
	);
}

export default Education;
