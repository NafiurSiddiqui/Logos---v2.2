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
	};

	const navFontStateHandler = (fontState) => {
		setNavFontActive(fontState);
	};
	const navColorStateHandler = (colorState) => {
		setNavColorActive(colorState);
	};

	const priceClickHandler = (state)=>{
		setPriceActive(state)
		setChevClick(false);
	 };

	 const chevClickHandler = ()=>{
		setChevClick(true);
	  };

	const navState = {
		txtState: navTxtActive,
		fontState: navFontActive,
		colorState: navColorActive,
		priceClickState:priceActive
	};

	
	return (
		<article className="ui-input">
			<div className="ui-input-container">
				<UiNav
					setNavTxtState={navTxtStateHandler}
					setNavFontState={navFontStateHandler}
					setNavColorState={navColorStateHandler}
					setPriceActive={priceClickHandler}
					navState={navState}
				/>
				<div className={`ui-input-form-container ${priceActive? 'form-hide':''}`}>
					<UiText navState={navState.txtState} />
					<UiFonts navState={navState.fontState} />
					<UiColors navState={navState.colorState} />
				</div>
			</div>
			<PriceCards priceActive={priceActive} chevClick={chevClick} />

			{priceActive && <div className={`chevron-up ${chevClick ? 'chevHide':''}`} onClick={chevClickHandler} >
				&gt;

				<span className='tooltip' >Cards Collapse</span>
			</div>}
		</article>
	);
}
export default UserInput;
