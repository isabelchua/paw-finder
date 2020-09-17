import React, { useState } from "react";
import Gallery from "./Gallery";

function Search() {
	const [query, setQuery] = useState("");
	const [dogs, setDogs] = useState([]);

	const onSubmit = async e => {
		e.preventDefault();
		//const url = `https://dog.ceo/api/breed/${query}/images/random/10`;
		const url = `https://dog.ceo/api/breed/akita/images/random/10`;
		//console.log(query);

		try {
			const res = await fetch(url);
			const data = await res.json();
			//console.log(data);

			//object inner array
			setDogs(data.message);
			console.log(data);

			console.log(setDogs);
			//setDogs(data.results);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				Search{" "}
				<input
					type="text"
					name=""
					id=""
					value={query}
					onChange={e => setQuery(e.target.value)}
				/>
				<button>FETCH!</button>
			</form>

			{dogs.map((dog, id) => (
				<Gallery dog={dog} key={id} />
			))}
		</div>
	);
}

export default Search;
