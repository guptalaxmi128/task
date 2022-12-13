import React, { useState, useEffect } from "react";

const Card = () => {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?nat=us&results=9&page=1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data)

        let demo = data.results;
        console.log(demo);
        setUser(demo);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
      <div className="clearfix">
        <div className="div">
          {user.map(data => { return (  <div className="col-md-4 animated fadeIn" key={data.id.value}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={data.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {
                        data.name.first + " "+
                        data.name.last
                    }
                  </h5>
                  <p className="card-text">
                  {
                    data.location.city + "," + data.location.state
                  }
                  <br />
                  <span className="phone">{data.phone}</span>
                  </p>

                </div>
              </div>
            </div>)
          
          })}
        </div>
      </div>
  )
}

export default Card;
