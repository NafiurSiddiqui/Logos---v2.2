import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { txtActions } from '../../../store/textSlice';
// import { setUser, user } from '../../../store/textSlice';

function UiText(props) {

	const {uTxt,txtState, storageText,isTouched, storageStatus, delTxtState } = useSelector(state => state.txt);
	
	// const [userText, setUserText] = useState('');
	// const [deletedText, setdeletedText] = useState('');
	// const [delTxtState, setDelTxtState] = useState(false);
	// const [isTouched, setIsTouched] = useState(false);
	// const [storeText, setStoreText] = useState();

	// const ctx = useContext(textCtx);

	
	const dispatch = useDispatch();
	
	const userTextChangeHandler = (e) => {
		
		
		if (e.nativeEvent.inputType === 'deleteContentBackward') {
			// setdeletedText(e.target.value);
			// setDelTxtState(true);
			dispatch(txtActions.setDelTxtState(true));
		}
		
		

		dispatch(txtActions.setTxtState(true));
		dispatch(txtActions.setIsTouched(true))
	
		// setIsTouched(true);
		// setUserText(e.target.value);
		
	
		dispatch(txtActions.setUtxt(e.target.value));
		
	};
	

	useEffect(() => {
		
	
		// if (userText.length >= 20) {
		// 	alert(
		// 		`If you need more than 20 characters of text, Please contact us: 📞 +14-999-876-42`
		// 	);
		// }
		if (isTouched && uTxt.length >= 20) {
			alert(
				`If you need more than 20 characters of text, Please contact us: 📞 +14-999-876-42`
			);
		}
	}, [isTouched, uTxt]);

	useEffect(() => {
		const test = 'test';
		try {
			//storage availability
			localStorage.setItem(test, test);
			localStorage.removeItem(test);

			dispatch(txtActions.setStorageStatus(true));

			// if (userText.length > 0) {
			// localStorage.setItem('storeText', userText);
			// }
			if (uTxt.length > 0) {
			localStorage.setItem('storeText', uTxt);
			dispatch(txtActions.setDelTxtState(false));
			}
		
			dispatch(txtActions.setStorageText(localStorage.getItem('storeText')));
			//local storgae clearance
			// if (isTouched && userText.length === 0) {
			// 	localStorage.clear();
			// 	setIsTouched(false);
			// 	// ctx.textInput.setTxtState(false);
			// 	dispatch(txtActions.setTxtState(false));
			// }
			if (isTouched && uTxt.length === 0) {
				localStorage.clear();
				// setIsTouched(false);
				// ctx.textInput.setTxtState(false);
				dispatch(txtActions.setIsTouched(false))
				dispatch(txtActions.setTxtState(false));
			}

		} catch (e) {
			// ctx.textInput.setStorageStatus(false);
			dispatch(txtActions.setStorageStatus(false));
		}

		// ctx.textInput.setDelTxtState(delTxtState);

		// ctx.textInput.setUTxt(userText);
	}, [dispatch, isTouched, uTxt]);

	console.table(`uTxt: ${uTxt}, txtState: ${txtState}, storageText:${storageText}, delTxtState: ${delTxtState}, storageStatus: ${storageStatus}, isTouched: ${isTouched}`);

	return (
		<section
			className={`ui-input-form text  ${props.navState ? 'ui-active' : ''}`}
		>
			<input
				type="text"
				name="userText"
				id="userText"
				placeholder="Type your text here"
				spellCheck="false"
				onChange={userTextChangeHandler}
			/>
		</section>
	);
}
export default UiText;
