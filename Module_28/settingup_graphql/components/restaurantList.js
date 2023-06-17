import { gql, useQuery } from '@apollo/client';
import Dishes from "./dishes"
import { useContext, useState } from 'react';


import AppContext from "./context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

function RestaurantList(props) {
  const [restaurantID, setRestaurantID] = useState(1)
  const { cart } = useContext(AppContext);
  const [state, setState] = useState(cart)
  const GET_RESTAURANTS = gql`
  query {
    restaurants {
      id
      name
      description
      image {
        url
      }
      dishes{
      id
      name
      description
      price
      image {
        url
      }
      }
    }
  }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  //console.log(`Query Data: ${data.restaurants}`);




  let searchQuery = data.restaurants.filter((res) => {
    //console.log("restList res:", res)
    return res.name.toLowerCase().includes(props.search)
  }) ||[];

  let currentRest = searchQuery
 // console.log("rest currentRest:",currentRest);

  /*let dishsearchQuery = data.restaurant.dishes.filter((res) => {
    console.log("dishes res:", res.name.toLowerCase())
    return res.name.toLowerCase().includes(props.search)
  }) ||[];*/
  //let dishes = restaurant;
 // console.log("dishes searchQuery: ",searchQuery)
 // console.log("restList data.restaurants.dishes: ", )
  let restId = searchQuery[0] ? searchQuery[0].id : null;
//console.log("restlist searchQuery: ", searchQuery);
  // definet renderer for Dishes
  const renderDishes = (restaurantID) => {
    return (<Dishes restId={restaurantID}> </Dishes>)
  };
  if (searchQuery.length > 0) {
    const restList = searchQuery.map((res) => (
      <Col xs="6" sm="4" key={res.id}>
        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
          <CardImg
            top={true}
            style={{ height: 200 }}
            src={
              `http://localhost:1337` + res.image.url
            }
          />
          <CardBody>
            <CardText>{res.description}</CardText>
          </CardBody>
          <div className="card-footer">
          
            <Button color="info" onClick={() => setRestaurantID(res.id)}>{res.name}</Button>

          </div>
        </Card>
      </Col>
    ))

    return (

      <Container>
        <Row xs='3'>
          {restList}
        </Row>
        
        <Row xs='3'>
          {renderDishes(restaurantID)}
        </Row>

      </Container>

    )
  } else {
    return <h1> No Restaurants Found</h1>
  }
}
export default RestaurantList