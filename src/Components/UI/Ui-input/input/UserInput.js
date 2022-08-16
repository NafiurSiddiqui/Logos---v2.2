import { useState } from 'react';
import UiNav from '../nav/UiNav';
import PriceCards from '../priceCards/PriceCards';
import UiColors from './UiColors';
import UiFonts from './UiFonts';
import UiText from './UiText';

function UserInput() {
	//nav state here
	const [navTxtActive, setNavTxtActive] = useState(true);
	const [navFontActive, setNavFontActive] = useState(false);
	const [navColorActive, setNavColorActive] = useState(false);
	const [priceActive, setPriceActive] = useState(false);

	const [chevClick, setChevClick] = useState(false);

	const navTxtStateHandler = (txtState) => {
		setNavTxtActive(txtState);
		setChevClick(false);
	};

	const navFontStateHandler = (fontState) => {
		setNavFontActive(fontState);
		setChevClick(false);
	};
	const navColorStateHandler = (colorState) => {
		setNavColorActive(colorState);
		setChevClick(false);
	};

	const priceClickHandler = (state) => {
		setPriceActive(state);
		setChevClick(false);
	};

	const chevClickHandler = () => {
		setChevClick(true);
	};

	const navState = {
		txtState: navTxtActive,
		fontState: navFontActive,
		colorState: navColorActive,
		priceClickState: priceActive,
	};

	return (
		<>
			<article className={`ui-input ${chevClick? 'navMinimize':''}`} >
				<div className="ui-input-container">
					<UiNav
						setNavTxtState={navTxtStateHandler}
						setNavFontState={navFontStateHandler}
						setNavColorState={navColorStateHandler}
						setPriceActive={priceClickHandler}
						navState={navState}
						chevClicked={chevClick}
					/>
					<div
						className={`ui-input-form-container ${
							priceActive ? 'form-hide' : ''
						}`}
					>
						<UiText navState={navState.txtState} />
						<UiFonts navState={navState.fontState} />
						<UiColors navState={navState.colorState} />
					</div>
				</div>

				{/* {priceActive && <div className={`chevron-up ${chevClick ? 'chevHide':''}`} onClick={chevClickHandler} >
				&gt;
				<span className='tooltip' >Cards Collapse</span>
			</div>} */}

				<PriceCards priceActive={priceActive} chevClick={chevClick} />
			</article>

			<div className='chevron-container'>
			<div className={`chevron-up`} onClick={chevClickHandler} >
				&gt;
				<span className='tooltip' >Nav bar Collapse</span>
			</div>
			</div>
		</>
	);
}
export default UserInput;
