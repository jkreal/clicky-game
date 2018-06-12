import React from "react";
import Clicky from "./components/Clicky";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import WrapperRow from "./components/WrapperRow";
import WrapperColumn from "./components/WrapperColumn";
import MainBody from "./components/MainBody";

const App = () => (

	<Wrapper>
		
		<WrapperRow>
			<Navbar/>
		</WrapperRow>

	<MainBody>
		<WrapperRow>
			<WrapperColumn>
				<Clicky />
			</WrapperColumn>

			<WrapperColumn>
				<Clicky />
			</WrapperColumn>

			<WrapperColumn>
				<Clicky />
			</WrapperColumn>

			<WrapperColumn>
				<Clicky />
			</WrapperColumn>
		</WrapperRow>

		<WrapperRow>
			<WrapperColumn>
				<Clicky />
			</WrapperColumn>

			<WrapperColumn>
				<Clicky />
			</WrapperColumn>

			<WrapperColumn>
				<Clicky />
			</WrapperColumn>

			<WrapperColumn>
				<Clicky />
			</WrapperColumn>

		</WrapperRow>

		<WrapperRow>
			<WrapperColumn>
				<Clicky />
			</WrapperColumn>

			<WrapperColumn>
				<Clicky />
			</WrapperColumn>

			<WrapperColumn>
				<Clicky />
			</WrapperColumn>

			<WrapperColumn>
				<Clicky />
			</WrapperColumn>
		</WrapperRow>

		</MainBody>

</Wrapper>
);

export default App;