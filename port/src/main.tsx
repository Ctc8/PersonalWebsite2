import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"
import Skills from "./pages/Skills.tsx"
import Projects from "./pages/Projects.tsx"
// import Contact from "./pages/Contact.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Home />
		<About />
		<Skills />
		<Projects />
		{/* <Contact /> */}
	</React.StrictMode>
)
