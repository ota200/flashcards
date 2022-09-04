export default function Card(props) {
  return (
    <div style={{"border":"solid"}}>
        <h1>{props.title}</h1>
        <br></br>
        <p>{props.info}</p>
    </div>
  );
}

