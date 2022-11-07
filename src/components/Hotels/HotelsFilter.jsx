import React, {memo} from "react";
import hotelsData from "../../data2/hotelsData";

export const HotelsFilter = memo(({filterSelected}) => {
  console.log("HotelsFilter se inicio");
  let res = hotelsData;

  const applySorting = (optionSelected) => {
    console.log(optionSelected);
    if (optionSelected === "mayor") {
      console.log(res);

      res = res.sort((a, b) => {
        if (b.name.toLowerCase() < a.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    } else if (optionSelected === "menor") {
      const copy = [...res];
      res = copy.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    } else {
      res = hotelsData;
    }

    filterSelected(res)
  }

  const applySearch = (e) => {
    console.log(e.target.value);

    res = res.filter((evento) => {
      return evento.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    console.log(res);

    filterSelected(res)
  }

  return (
    <>
      <div className="container_filter">
        <div>
          <select onChange={(e) => applySorting(e.target.value)}>
            <option selected value="">Ordenar por:</option>
            <option value="menor">asc/desc</option>
            <option value="mayor">desc/asc</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="Buscar" onChange={applySearch}/>
        </div>
      </div>
    </>
  );
})
