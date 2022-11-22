import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import ImagesBtn from '../../../Images';
import { setFontFamily, setFontState } from '../../../store/fontSlice';

import BtnFont from './BtnFont';

const buttons = [
	{
		liClass: 'Amanda',
		id: 'Amanda',
		image: ImagesBtn.amanda,
		key: 1,
	},
	{
		liClass: 'Allura',
		id: 'Allura',
		image: ImagesBtn.allura,
		key: 2,
	},
	{
		liClass: 'Tangerine',
		id: 'Tangerine',
		image: ImagesBtn.tangerine,
		key: 3,
	},
	{
		liClass: 'Amsterdam',
		id: 'Amsterdam',
		image: ImagesBtn.amsterdam,
		key: 4,
	},
	{
		liClass: 'RasterSlice',
		id: 'RasterSlice',
		image: ImagesBtn.raster,
		key: 5,
	},
	{
		liClass: 'HerrVonMuellerhoff',
		id: 'HerrVonMuellerhoff',
		image: ImagesBtn.herrVonMuellerhoff,
		key: 6,
	},
	{
		liClass: 'Cookie',
		id: 'Cookie',
		image: ImagesBtn.cookie,
		key: 7,
	},
	{
		liClass: 'Orbitron',
		id: 'Orbitron',
		image: ImagesBtn.orbitron,
		key: 8,
	},
];

function UiFonts(props) {
	const dispatch = useDispatch();

	const [activeButtonId, setActiveButtonId] = useState(null);

	const fontHandler = (e) => {
		//if--click is list
		if (e.target.localName === 'li') {
			//get the fontName
			const targetClass = e.target.classList[1];
			dispatch(setFontFamily(targetClass));
			dispatch(setFontState(true));
			setActiveButtonId(targetClass);
		}
		//if--img
		if (e.target.localName === 'img') {
			const targetId = e.target.id;
			dispatch(setFontFamily(targetId));
			dispatch(setFontState(true));
			setActiveButtonId(targetId);
		}
	};

	return (
		<section
			className={`ui-input-form fontFamily  ${
				props.navState ? 'ui-active' : ''
			}`}
		>
			<h3 className="ui-input-form-heading">CHOOSE FONT</h3>
			<ul className="ui-input-fontFamily-lists">
				{buttons.map((btn) => {
					const isActive = btn.id === activeButtonId;
					return (
						<BtnFont
							className={`ui-input-fontFamily-list ${btn.liClass} ${
								isActive ? 'btn-active' : ''
							}`}
							onClick={fontHandler}
							key={btn.key}
							id={btn.id}
							image={btn.image}
						/>
					);
				})}
			</ul>
		</section>
	);
}
export default UiFonts;
