import "../style/Card.css"


export default function Card({name, click, img, lowercase}){
    return(
        <>
            <div  onClick={click} className="card">
                <img src={img} alt=""/>
                <p>{name}</p>
            </div>
        </>
    )
}