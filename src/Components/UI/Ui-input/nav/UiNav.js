import { useDispatch } from 'react-redux';
import { getDeviceWidth } from '../../../store/smallDevice-slice';

const windowWidth = window.innerWidth;

function UiNav(props) {
	const dispatch = useDispatch();

	if (windowWidth <= 860) {
		dispatch(getDeviceWidth(true));
	} else {
		dispatch(getDeviceWidth(false));
	}

	//if minimize is not clicked, default nav

	const navTxtActiveHandler = () => {
		//Activate TEXT
		props.setNavTxtState(true);
		//Deactivate the rests
		props.setNavFontState(false);
		props.setNavColorState(false);
		props.setPriceActive(false);
	};

	const navFontActiveHandler = () => {
		//Activate TEXT
		props.setNavFontState(true);

		//Deactivate the rests
		props.setNavTxtState(false);
		props.setNavColorState(false);
		props.setPriceActive(false);
	};

	const navColorActiveHandler = () => {
		//Activate TEXT
		props.setNavColorState(true);
		//Deactivate the rests
		props.setNavTxtState(false);
		props.setNavFontState(false);
		props.setPriceActive(false);
	};

	const priceActiveHandler = () => {
		props.setPriceActive(true);
		props.setNavTxtState(false);
		props.setNavFontState(false);
		props.setNavColorState(false);
	};

	if (props.navState.colorState) {
		document.body.style.overflowY = 'scroll';
		document.body.style.height = '140vh';
	} else {
		document.body.style.overflowY = 'hidden';
		document.body.style.height = '100vh';
	}

	return (
		<div className="ui-input-nav">
			<ul className="ui-input-nav-lists">
				<li
					className={`ui-input-nav-list ${
						props.navState.txtState && !props.chevClicked ? 'nav-active' : ''
					}`}
					onClick={navTxtActiveHandler}
				>
					Text
				</li>

				<li
					className={`ui-input-nav-list ${
						props.navState.fontState && !props.chevClicked ? 'nav-active' : ''
					}`}
					onClick={navFontActiveHandler}
				>
					Fonts
				</li>

				<li
					className={`ui-input-nav-list ${
						props.navState.colorState && !props.chevClicked ? 'nav-active' : ''
					}`}
					onClick={navColorActiveHandler}
				>
					Color
				</li>
				{windowWidth <= 860 && (
					<li
						className={`ui-input-nav-list ${
							props.navState.priceClickState && !props.chevClicked
								? 'nav-active'
								: ''
						}`}
						onClick={priceActiveHandler}
					>
						Price
					</li>
				)}
			</ul>
		</div>
	);
}

export default UiNav;
