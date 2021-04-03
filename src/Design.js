import "./Design.css";
function Components(props) {
  let n = "new",
    m = "featured";
  return (
    <div class="Container">
      <div class="Total">
        <div className="Img">
          <img src={props.data.logo} />
        </div>
        <div className="Elements">
          <div class="Elem1">
            <div class="Compagny_Name"> {props.data.company}</div>
            {props.data.new && <div class="New"> {n} </div>}
            {props.data.featured && <div class="Featured">{m} </div>}
          </div>
          <div class="Elem2">
            <h1>{props.data.position}</h1>
          </div>
          <div class="Elem3">
            <div class="Item1">{props.data.postedAt} </div>
            <div class="Item2">{props.data.contract}</div>
            <div class="Item3">{props.data.location} </div>
          </div>
        </div>
      </div>
      <div className="Skills">
        <div className="Skill">{props.data.role}</div>
        <div className="Skill">{props.data.level}</div>
        {/* {props.data.languages.map((elem) => (
          <div className="Skill">{elem}</div> */}

        {props.data.languages.map((elem) => (
          <div className="Skill">{elem}</div>
        ))}
        {/* ))} */}
        {/* {props.data.tools.map((elem) => ( */}
        {/* <div className="Skill">{elem}</div> */}
        {props.data.tools.map((elem) => (
          <div className="Skill">{elem}</div>
        ))}
        {/* ))} */}
      </div>
    </div>
  );
}

export default Components;
