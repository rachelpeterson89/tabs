
const DisplayTabs = props => {

    const { idx, name, isSelected, toggleTab} = props;

    return <div onClick={() => toggleTab(idx)} className="zoom col-3 border rounded text-center mr-4 mb-3 p-3" style={isSelected ? {backgroundColor:"darkseagreen"} : {}}>
                <h3 className="bg-transparent">{ name }</h3>
        </div>

}

export default DisplayTabs;