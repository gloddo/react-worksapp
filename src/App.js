import React, {
	Component
} from "react";
import "./App.css";
import Chat from "./components/Chat";
import ChatList from "./components/ChatList";

class App extends Component {
	render() {
		return ( <
			div >
			<
			ChatList / >
			<
			Chat / >
			<
			/div>
		);
	}
}

export default App;