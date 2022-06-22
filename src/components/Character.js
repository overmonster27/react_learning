import './Character.css'
function Family(props) {
    let {name, paragraph, picture} = props;

    return(
        <div>
            <h3 className={'head'}>{name}</h3>
            <p className={'par'}>{paragraph}</p>
            <img src={picture} alt={'Bart'}/>
        </div>
    )
}

export default Family