import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>

      <div className="content">
        <div className="cardContainer">
          <Card style={{ maxWidth: "250px" }}>
            <CardBody className="text-center">
              <CardTitle>
                <h4>Snacks({snacks.length})</h4>
              </CardTitle>
            </CardBody>
          </Card>
          <Card style={{ maxWidth: "250px" }}>
            <CardBody className="text-center">
              <CardTitle>
                <h4>Drinks({drinks.length})</h4>
              </CardTitle>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Home;
