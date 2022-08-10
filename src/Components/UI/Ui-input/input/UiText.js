import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { txtActions } from '../../../store/textSlice';

function UiText(props) {
	const { uTxt, isTouched, storageStatus } = useSelector((state) => state.txt);

	const dispatch = useDispatch();

	const userTextChangeHandler = (e) => {
		if (e.nativeEvent.inputType === 'deleteContentBackward') {
			dispatch(txtActions.setDelTxtState(true));

			uTxt.length <= 1 && dispatch(txtActions.setIsTouched(false));
		}

		dispatch(txtActions.setTxtState(true));
		dispatch(txtActions.setIsTouched(true));
		dispatch(txtActions.setUtxt(e.target.value));
	};

	useEffect(() => {
		const test = 'test';
		try {
			//storage availability
			localStorage.setItem(test, test);
			localStorage.removeItem(test);

			if (isTouched && uTxt.length !== 0) {
				dispatch(txtActions.setStorageStatus(true));
			} else {
				localStorage.clear();
				dispatch(txtActions.setIsTouched(false));
				dispatch(txtActions.setTxtState(false));
				dispatch(txtActions.setStorageStatus(false));
			}

			if (uTxt.length > 0) {
				localStorage.setItem('storeText', uTxt);
				dispatch(txtActions.setDelTxtState(false));
			}

			dispatch(txtActions.setStorageText(localStorage.getItem('storeText')));
		} catch (e) {
			dispatch(txtActions.setStorageStatus(false));
		}

		if (isTouched && uTxt.length >= 20) {
			alert(
				`If you need more than 20 characters of text, Please contact us: 📞 +14-999-876-42`
			);
		}
	}, [dispatch, isTouched, uTxt, storageStatus]);

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
