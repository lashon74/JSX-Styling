import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img
        className="goku"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToa2CN02UPe_NFWkmFWbQSVQfGzbLdDiS3Sg&usqp=CAU"
        alt=""
      />
      <img
        className="goku"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUA-7f9O2xkalhtVpX_1f1g_5xTGnrsjEi1g&usqp=CAU"
        alt=""
      />
      <img
        className="goku"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZgODwKEcV8tIzPZRUKjZ7AQMINZwE7Dokqw&usqp=CAU"
        alt=""
      />
    </div>
    <div>
      <img src={img} alt="" />
    </div>
  </div>,
  document.getElementById("root")
);
