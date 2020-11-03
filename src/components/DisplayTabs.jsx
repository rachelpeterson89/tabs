
const DisplayTabs = props => {

    const { idx, name, isSelected, toggleTab} = props;

    return <div onClick={() => toggleTab(idx)} className="col-3 border rounded text-center mr-3 p-3" style={isSelected ? {backgroundColor:"darkseagreen"} : {}}>
            <div className="bg-transparent">
                <h3 className="bg-transparent">{ name }</h3>
            </div>
        </div>

}

export default DisplayTabs;