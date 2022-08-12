import { Provider } from 'react-redux';
import Header from '../Header';
import { store } from '../store';
import UiDisplay from './Ui-display/UiDisplay';
import UserInput from './Ui-input/input/UserInput';


function Ui() {
	
	
	
	document.body.classList.add('ui-body');
	// console.log(window.innerWidth);

	
	
	return (
		<>
			<Header className="ui-logo" />
			<Provider store={store}>
				<main className="container">
					<section className="ui-container">
						<UserInput />
						<UiDisplay />
					</section>
				</main>
			</Provider>
		</>
	);
}
export default Ui;

/**
 * Here i needed to provide the context since both of the components that needs access are here.
 */
