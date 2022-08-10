import { useContext, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCanvas } from '../../HelperFunc';
import { setHeight } from '../../store/dimension';
import textCtx from '../../store/txtCtx';

function Canvas() {

	const {uTxt,storageText,storageStatus,delTxtState,} = useSelector(state => state.txt);

	const {fontState, fontFamily} = useSelector(state => state.font);

	const dispatch = useDispatch();

	const ctx = useContext(textCtx);

	// let storageText = ctx.textInput.storageText;
	// const storageStatus = ctx.textInput.storageStatus;
	// let delTxtState = ctx.textInput.delTxtState;
	// const fontState = ctx.fontInput.fontState;
	// const fontFamily = ctx.fontInput.setFontFamily;

	const ctxRef = useRef();

	useEffect(() => {
		// let uTxt = ctx.textInput.uTxt;

		const canvaCtx = ctxRef.current.getContext('2d');
		const metrics = canvaCtx.measureText(uTxt);

		// ctx.dimension.setHeight(
		// 	Math.floor(metrics.actualBoundingBoxAscent) +
		// 		Math.floor(metrics.actualBoundingBoxDescent)
		// );
		dispatch(setHeight(Math.floor(metrics.actualBoundingBoxAscent) +
		Math.floor(metrics.actualBoundingBoxDescent)));
		

		const canvasWidth = ctxRef.current.width;
		const canvasHeight = ctxRef.current.height;

		//WRITE and CLEAR canvas
		if (delTxtState === true) {
			clearCanvas(canvaCtx, canvasWidth, canvasHeight);
		}

		fontState === true
			? (canvaCtx.font = `4rem ${fontFamily}`)
			: (canvaCtx.font = '4rem Tangerine');

		canvaCtx.fillStyle = 'White';

		if (storageStatus === false) {
			canvaCtx.fillText(uTxt, 0, 50);
		}

		if (storageText !== null) {
			clearCanvas(canvaCtx, canvasWidth, canvasHeight);
			canvaCtx.fillText(storageText, 0, 50);
		}
	}, [uTxt, delTxtState, storageText, storageStatus, fontFamily, fontState,dispatch]);

	return <canvas id="displayText" ref={ctxRef}></canvas>;
}
export default Canvas;
