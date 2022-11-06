import cityData from "../../data2/cityData";
import hotelsData from "../../data2/hotelsData";
import './Carousel'

export default function Carousel(props) {
  let { tipoImagen } = props;
  let data = tipoImagen === "cities" ? cityData : hotelsData
  return (
    <>
      <div className="carousel_container">
        <div className="card">
          {
            data.map((d, i) => {
              if (i < 4) {
                return (
                  <div className="card1">
                    <div className="capa">
                      <h3>{d.name}</h3>
                    </div>
                    <img src={d.photo[0]} alt="imagen1" />
                  </div>
                )
              }
            })
          }
        </div>
      </div>

    </>
  );
}