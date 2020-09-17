import React from "react";

function Gallery({ dog }) {
	return (
		<div>
			<img className="dog-pic" alt={dog + " pic"} src={dog} />
		</div>
	);
}

export default Gallery;
