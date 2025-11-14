import Styles from './Card.module.css';
import Stle from '../assets/kantaoui.jfif';
function Card(props) {
  return (
    <>
      <div className={Styles.card} style={{ width: "18rem",  }}>
        <img src={Stle} className="card-img-top" alt="pas" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
           {props.description}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price/ per day : {props.price}</li>
          <li className="list-group-item">Location : {props.location}</li>
          <li className="list-group-item">Rate : {props.stars}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Map</a>
          <a href="#" className="card-link">i have a question</a>
        </div>
        <button className={Styles.btn
        }>
          Book Now
        </button>
      </div>
    </>
  );
}

export default Card;
