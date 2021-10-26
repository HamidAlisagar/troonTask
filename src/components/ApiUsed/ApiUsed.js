import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ApiUsed() {
  const [data, setData] = useState();
  const [loading, setLodaing] = useState(true);

  useEffect(() => {
    fetch(`https://thronesapi.com/api/v2/Characters`)
      .then((response) => response.json())
      .then((charaters) => {
        setData(charaters);

        setLodaing(false);
      })
      .catch((error) => {
        console.log(`error ${error}`);
      });

    console.log(data);
    // eslint-disable-next-line
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className=" text-center">
      <h2 className=" text-center"> Characters </h2>
    
      <table className="table " style={{}}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Detail</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                  <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>
                  <Link to={`/detail/${item.id}`} className="btn btn-info">
                    Show Detail
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ApiUsed;
