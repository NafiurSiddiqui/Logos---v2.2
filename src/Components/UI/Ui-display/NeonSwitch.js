import { useDispatch, useSelector } from "react-redux";
import { setNeonState } from "../../store/neonSlice";

function NeonSwitch() {

	const {neonState} = useSelector(state => state.neonSwitch);


	const dispatch = useDispatch();
	
	const switchHandler =()=>{
	
		dispatch(setNeonState());
	 };
	
	return (
		<label className="switch">
			<input type="checkbox" id="neonSwitch" onClick={switchHandler} defaultChecked={neonState} />
			<span className="slider round" role='switch' aria-checked={neonState ? 'true':'false'}>
				<span aria-hidden="true" >On</span>
				<span aria-hidden="true" >Off</span>
			</span>
		</label>
	);
}
export default NeonSwitch;
