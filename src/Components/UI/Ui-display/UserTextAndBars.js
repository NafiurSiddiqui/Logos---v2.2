import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDebounceState } from '../../store/debounceSlice';
import { setWidth } from '../../store/dimension';
import { setFontSize } from '../../store/fontSlice';

const windowWidth = window.innerWidth;

function UserTextAndBars() {
	const [showBars, setShowBars] = useState(false);
	const [displayText, setDisplayText] = useState('Your Text');
	//STYLING STATE
	const [largeFont, setLargeFont] = useState();

	const {
		uTxt,
		txtState,
		storageText: storeText,
		isTouched,
		storageStatus,
	} = useSelector((state) => state.txt);

	const { height, width } = useSelector((state) => state.dimension);

	const { fontFamily, fontState } = useSelector((state) => state.font);
	const { colorActive } = useSelector((state) => state.color);
	const { neonState } = useSelector((state) => state.neonSwitch);

	const dispatch = useDispatch();

	useEffect(() => {
		if (
			fontFamily === 'RasterSlice' ||
			fontFamily === 'Amsterdam' ||
			fontFamily === 'Orbitron'
		) {
			setLargeFont(true);
		} else {
			setLargeFont(false);
		}

		let timerHandler = setTimeout(() => {
			if (txtState === true || storeText !== (null || '')) {
				setShowBars(true);

				if (storeText === null) {
					dispatch(setWidth(``));
				} else {
					dispatch(setWidth(`${storeText.length}CM`));
				}
				setDisplayText(storeText);
				dispatch(setDebounceState(true));
			}

			if (!isTouched) {
				setDisplayText('Your Text');
				dispatch(setWidth(''));
				setShowBars(false);
			}

			if (storageStatus === false && txtState === true) {
				setDisplayText(uTxt);
				dispatch(setWidth(`${uTxt.length} CM`));
				dispatch(setDebounceState(true));
			}
		}, 300);

		return () => {
			clearTimeout(timerHandler);
			dispatch(setDebounceState(false));
		};
	}, [
		fontFamily,
		dispatch,
		txtState,
		storageStatus,
		uTxt,
		storeText,
		isTouched,
		fontState,
		height,
	]);

	const neonShadow = ` rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px,
		${colorActive} 0px 0px 20px, ${colorActive} 0px 0px 30px,
		${colorActive} 0px 0px 40px, ${colorActive} 0px 0px 55px,
		${colorActive} 0px 0px 75px`;

	//FONTS
	// let fontForLargeDevice = windowWidth > 2200 ? '7em' : '5em';

	// const deviceWidth = windowWidth <= 600 ? '55px' : fontForLargeDevice;

	let fontForLargeDevice = '5em';

	if (windowWidth > 2200) {
		fontForLargeDevice = '7em';

		setFontSize('7em');
	} else {
		setFontSize('5em');
	}

	// const deviceWidth = windowWidth <= 600 ? '55px' : fontForLargeDevice;

	let deviceWidth;

	if (windowWidth <= 600) {
		deviceWidth = '55px';
		setFontSize('55px');
	} else {
		deviceWidth = fontForLargeDevice;
		setFontSize('5em');
	}

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
							fontFamily: fontFamily,
							fontSize: largeFont ? '3em' : deviceWidth,
							textShadow: !neonState ? 'none' : neonShadow,
						}}
					>
						{storageStatus && displayText}
						{!storageStatus && uTxt}
						{!isTouched && displayText}
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

			<span className="measurementBar-width-length">{showBars && width}</span>
		</>
	);
}
export default UserTextAndBars;
