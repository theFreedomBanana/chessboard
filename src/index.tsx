import React from "react";
import ReactDOM from "react-dom";
import { Chessboard } from "./chessboard";

const App = () => (
	<Chessboard />
);

ReactDOM.render(
	<App />,
	document.getElementById("root"),
);
