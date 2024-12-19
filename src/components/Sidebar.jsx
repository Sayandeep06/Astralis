export default function Sidebar(props){
    const {handleToggleModal} = props;
    return <div className="sidebar">
        <div onClick={handleToggleModal} className="bgOverlay"></div>
        <div className="sidebarContents">
            <h2>The brutal waifu landscape</h2>
            <div>
                <p>Description</p>
                <p>blah blah bla
                </p>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    </div>
}