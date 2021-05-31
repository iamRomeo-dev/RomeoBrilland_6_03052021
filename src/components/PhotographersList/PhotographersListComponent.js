import { Link } from "react-router-dom";

export const PhotographersListComponent = ({ index, photographer }) => {
  return (
    <div className="PhotographerContainer" key={index}>
      <Link
        to={`/photographers/${photographer.id}`}
        className="PhotographerLink"
      >
        <>
          <img
            src={`${process.env.PUBLIC_URL}/photographers/${photographer.portrait}`}
            alt={photographer.name}
            className="PhotographerLink_img"
          />
          <h2 className="PhotographerLink_name">{photographer.name}</h2>
        </>
      </Link>
      <h4 className="PhotographerCity">{photographer.city}</h4>
      <h4 className="PhotographerTagline">{photographer.tagline}</h4>
      <h4 className="PhotographerPrice">{photographer.price}€/jour</h4>
      <h4 className="PhotographerCity">{photographer.portrait}</h4>
      <ul className="Tags">
        {photographer.tags.map((tag, index) => (
          <li className="Tag" key={index}>
            <button className="Tag_btn">#{tag}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};