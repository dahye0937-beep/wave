const Scrollpage = ({id,title,desc,imgName}) => {
  return (
    <div className="page">
        <div className="left">
            <div className="top">
                <p>{desc}</p>
                <p>자세히보기 →</p>
            </div>
            <div className="bottom">
                <p>0{id}</p>
                <h2>{title}</h2>
            </div>
        </div>
        <img 
            src={require(`../assets/images/${imgName}`)}
            alt={title}
        /> 
    </div>
  )
}

export default Scrollpage