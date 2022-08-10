import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import textCtx from '../../../store/txtCtx';
import PriceCard from './PriceCard';

const init = {
	small: 0,
	mid:0,
	large:0
}



function PriceCards() {

	const [pricing, setPricing] = useState(init);
	const [letterWidth, setletterWidth] = useState(init);
	const [height, setHeight] = useState(init);	
	const {uTxt, storageStatus, storageText: storeTxt} = useSelector(state => state.txt);
	const {height:letterHeight} = useSelector(state => state.dimension);
	const {debounceStat} = useSelector(state => state.debouncer);
	let userText;
	let storageText = '---';
	let width = null;

	
	uTxt === null || undefined ?  userText = '' : userText = uTxt; 


	if (uTxt !== null || undefined){
		width = uTxt.length;
		
	}


	if (storageStatus !== false && storeTxt){
		storageText = storeTxt;
		width = storeTxt.length;
	}
	


	const storageTextStatus = storeTxt === '---'; 

	
	//Debounce true? calculate this.
	useEffect(() => {
		
	if (debounceStat){
		const price = {
			small:storageTextStatus? `${userText.length * 80}`:`${storageText.length * 80}`,
			mid: storageTextStatus? `${userText.length * 95}`:`${storageText.length* 95}`,
			large: storageTextStatus? `${userText.length * 105}`:`${storageText.length* 105}`
		}
		//WIDTH
		const length = {
			small: ` ${(width * 2.4).toFixed(1)} Cm`,
			mid: ` ${(width * 3.2).toFixed(1)} Cm`,
			large: ` ${(width * 4.5).toFixed(1)} Cm`

		}
		//HEIGHT
		const height ={
			small: ` ${letterHeight} Cm`,
			mid: ` ${Math.floor(letterHeight * 1.1)} Cm`,
			large: ` ${Math.floor(letterHeight * 1.3)} Cm`
		}

		setPricing(price);
		setletterWidth(length);
		setHeight(height);
	}	
	
	if (userText.length === 0){
		
		setPricing(init);
		setletterWidth(init);
		setHeight(init);
	}

		
	}, [debounceStat,letterHeight, storageTextStatus,userText,storageText,width])
	

	return (
		<div className="ui-price-card__container">
			<ul className="ui-price-cards">
				<PriceCard size="small" price={pricing.small} length={letterWidth.small} height={height.small} />
				<PriceCard size="medium" price={pricing.mid} length={letterWidth.mid} height={height.mid} />
				<PriceCard size="large" price={pricing.large} length={letterWidth.large} height={height.large} />
			</ul>
		</div>
	);
}
export default PriceCards;
