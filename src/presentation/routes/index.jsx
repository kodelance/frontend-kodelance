import { Switch,Route } from "react-router-dom"
import Counter from "../components/Counter"
import {ROOT,COUNTER} from "./constrant"
export const RouterConfig = () => {
	return(
		<>
		<Switch>
			<Route path={COUNTER}>
				<Counter/>
			</Route>
			<Route path={ROOT}>
				<h1>hello world</h1>
			</Route>
		</Switch>
		</>
	)
}