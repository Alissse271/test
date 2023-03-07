import { App } from "App";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "ui";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<>
		<GlobalStyles />
		<App />
	</>,
);
