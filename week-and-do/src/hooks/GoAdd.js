import { useNavigate } from "react-router-dom";

function GoAdd() {
    let navigate = useNavigate();

    function addText() {
        navigate('/addText');
    }

    return (
        <button type="button" onClick={addText}>
            글귀 추가하기
        </button>
    );
}

export default GoAdd;