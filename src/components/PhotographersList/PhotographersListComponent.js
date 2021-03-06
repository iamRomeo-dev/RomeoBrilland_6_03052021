import { Link } from "react-router-dom";

export const PhotographersListComponent = ({ photographer, setFilter }) => {
  return (
    <div className="PhotographerContainer" id={photographer.id}>
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
      <ul className="Tags">
        {photographer.tags.map((tag, index) => (
          <li className="Tag" key={index}>
            <button
              onClick={() => setFilter(`${tag}`)}
              className="Tag_btn Pointer"
            >
              #{tag}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
