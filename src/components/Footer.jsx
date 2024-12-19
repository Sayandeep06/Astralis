export default function Footer(props){
    const {handleToggleModal} = props;
    return <footer>
        <div className="bgGradient"></div>
        <div>
            <h2>This is the waify photo</h2>
            <h1>Astralis</h1>
        </div>
        <button onClick={handleToggleModal}>
            <i class="fa-solid fa-circle-info"></i>
        </button>
    </footer>
}