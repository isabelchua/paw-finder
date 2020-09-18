import React from "react";

function Gallery({ dog }) {
	return (
		<>
			<h1>Gallery</h1>
			<div className="dog-contain">
				<img className="dog-pic" alt={dog + " pic"} src={dog} />
			</div>
		</>
	);
}

export default Gallery;
