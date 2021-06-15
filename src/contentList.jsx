import './styles.css';
import codingplaceholder from './media/codingplaceholder.png';

function ContentList(){

  return(

<div className="contentContainer">
  <div className="imageContainer">
    <img src={codingplaceholder}></img>
  </div>
  <div className="listContainer">
    <ul>
      <li>Homepage project</li>
        <li>WebDev.fictional webpage</li>
          <li>Z-Twin Primes</li>
            <li>Ecomerce.fictional webpage</li>

    </ul>
  </div>
</div>

  )
}

export default ContentList
