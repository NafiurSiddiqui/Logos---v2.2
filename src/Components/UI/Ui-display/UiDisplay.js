import NeonSwitch from './NeonSwitch';
import Canvas from './UiCanvas';
import UserTextAndBars from './UserTextAndBars';

function UiDisplay() {


	
	return (
		<article className="ui-display">
			<NeonSwitch/>
			<div className="ui-display-userText-container">
				<UserTextAndBars />
				<Canvas />
			</div>
		</article>
	);
}
export default UiDisplay;
