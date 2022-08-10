import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDebounceState } from '../../store/debounceSlice';
import { setWidth } from '../../store/dimension';
import textCtx from '../../store/txtCtx';

const windowWidth = window.innerWidth;



function UserTextAndBars(props) {
	
	const [showBars, setShowBars] = useState(false);
	const [displayText, setDisplayText] = useState('Your Text' );
	//STYLING STATE
	const [largeFont, setLargeFont] = useState();

	const ctx = useContext(textCtx);

	const {uTxt,txtState, storageText:storeText,isTouched, storageStatus } = useSelector(state => state.txt);



	const {height, width} = useSelector(state => state.dimension);

	const { fontFamily } = useSelector(state => state.font);

	const {colorActive} = useSelector(state => state.color);
	const neonState = props.neonSwitchState;


	const dispatch = useDispatch();

	// let letterHeight = ctx.dimension.height;

	// let txtState = ctx.textInput.txtState;
	// let userText = ctx.textInput.uTxt;
	// let storeText = ctx.textInput.storageText;
	// const storageStatus = ctx.textInput.storageStatus;
	//color states
	// const colorActive = ctx.colorInput.colorActive;
	
	// console.log(uTxt);

	
	useEffect(() => {
		if (
		
			// ctx.fontInput.fontFamily === 'RasterSlice' ||
			// ctx.fontInput.fontFamily === 'Amsterdam' ||
			// ctx.fontInput.fontFamily === 'Orbitron'
			fontFamily === 'RasterSlice' ||
			fontFamily === 'Amsterdam' ||
			fontFamily === 'Orbitron'
		) {
			setLargeFont(true);
		} else {
			setLargeFont(false);
		}
		
		let timerHandler = setTimeout(() => {
			
			if (txtState === true || storeText !== null) {
				
				setShowBars(true);
	
				// ctx.dimension.setWidth(`${storeText.length * 2}CM`)
				dispatch(setWidth(`${storeText.length}CM`))
				setDisplayText(storeText);
				dispatch(setDebounceState(true));
			}

			// if (uTxt.length > 0) {
	
			// 	// ctx.debouncer.setDebounceState(true);
			// 	setDisplayText(uTxt);
			// }

			// if (uTxt.length === 0) {
			
			// 	setDisplayText('Your Text');
		
			// 	// ctx.dimension.setWidth(``);
			// 	dispatch(setWidth(''));
			// 	setShowBars(false);
			// }
			if (!isTouched) {
			
				setDisplayText('Your Text');
		
				// ctx.dimension.setWidth(``);
				dispatch(setWidth(''));
				setShowBars(false);
			}

			if (storageStatus === false && txtState === true) {
			
				// ctx.dimension.setWidth(`${ctx.textInput.uTxt.length * 2} CM`);
				setDisplayText(uTxt);
				dispatch(setWidth(`${uTxt.length} CM`));
			}	
		}, 300);

		

		return () => {
			clearTimeout(timerHandler);
			
	
			// ctx.debouncer.setDebounceState(false);
			dispatch(setDebounceState(false));
		};
	}, [fontFamily,dispatch,txtState,storageStatus,uTxt,storeText,isTouched]);
	

	

	const neonShadow = ` rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,
		${colorActive} 0px 0px 20px, ${colorActive} 0px 0px 30px,
		${colorActive} 0px 0px 40px, ${colorActive} 0px 0px 55px,
		${colorActive} 0px 0px 75px`;

	//FONTS
	const fontForLargeDevice = windowWidth > 2200? '7em': '5em';
	const deviceWidth = windowWidth <= 600 ? '55px': fontForLargeDevice;

	
	// console.log(height);

	
	return (
		<>
			<div className="ui-display-userText-wrapper">
				<section
					className={`ui-display-userText-and-bar ${
						showBars ? 'widthActive ' : ''
					}`}
				>
					<p
						className="ui-display-userText-text neonOn"
						style={{
							fontFamily: ctx.fontInput.fontFamily,
							fontSize: largeFont ? '3em' : deviceWidth,
							textShadow: !neonState ? 'none' : neonShadow,
						}}
					>
						{storageStatus && displayText}
						{!storageStatus && uTxt}
					</p>
				</section>

				{showBars && (
					<div className="measurementBar-height-wrapper">
						<span
							className="measurementBar-height"
							style={{ height: `${height}px` }}
						></span>
						<span className="measurementBar-height-length">
							{`${Math.floor(height)}Cm`}
						</span>
					</div>
				)}
			</div>

			<span className="measurementBar-width-length">
				{showBars && width}
			</span>
		</>
	);
}
export default UserTextAndBars;
