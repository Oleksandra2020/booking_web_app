// import { elementType } from "prop-types";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { CropRotate } from "@material-ui/icons";
import main from "../_shared/main.module.css";
import Content from "./Content";

/* {
    trainId: "144П",
    trainDest: "Бахмут-Львів",
    departureTime: "Пн, 24.02, 13:34",
    tickets: [
      {
        carriage: 3,
        seat: 41,
        fullName: "Іванов Іван",
      },
      {
        carriage: 3,
        seat: 42,
        fullName: "Іванова Іванна",
      },
    ],
  },
 */

/* {
      trainId: "144П",
      trainDest: "Бахмут-Львів",
      departureTime: "Пн, 24.02, 13:34",
      carriage: 3,
      seat: 41,
      fullName: "Іванов Іван",
      price: 180.87
    },
    {
      trainId: "144П",
      trainDest: "Бахмут-Львів",
      departureTime: "Пн, 24.02, 13:34",
      carriage: 3,
      seat: 42,
      fullName: "Іванова Іванна",
      price: 180.87
      },
*/

const cartRefactor = (cart) => {
  const refactoredCart = [];
  const trains = [];
  cart.forEach((ticket) => {
    if (!trains.includes(ticket.trainId)) {
      refactoredCart.push({
        trainId: ticket.trainId,
        trainDest: ticket.trainDest,
        departureTime: ticket.departureTime,
        tickets: [
          {
            carriage: ticket.carriage,
            seat: ticket.seat,
            fullName: ticket.fullName,
            price: ticket.price,
          },
        ],
      });

      trains.push(ticket.trainId);
    } else {
      refactoredCart.forEach((element) => {
        if (element.trainId === ticket.trainId) {
          element.tickets.push({
            carriage: ticket.carriage,
            seat: ticket.seat,
            fullName: ticket.fullName,
            price: ticket.price,
          });
        }
      });
    }
  });

  return refactoredCart;
};

function Basket() {
  const cart = useSelector((state) => state.cart);
  const refactoredCart = cartRefactor(cart);

  const cards =
    cart === undefined
      ? []
      : refactoredCart.map((element, index) => (
          <li key={`card_${index + 1}`}>
            <Card style={{ margin: "50px 0 0 0", padding: "30px 0 0 0" }}>
              <Container>
                <Row>
                  <Col>
                    <Card.Title
                      className={main.header_2_bold_left}
                      style={{ margin: "0 0 20px 0" }}
                    >
                      {`${element.trainId} ${element.trainDest}`}
                    </Card.Title>
                    <Card.Text
                      className={main.plain_text_bold}
                      style={{ margin: "0 0 20px 0", color: "#828282" }}
                    >
                      {element.departureTime}
                    </Card.Text>
                  </Col>
                </Row>
              </Container>
              {element.tickets && (
                <Content tickets={element.tickets} train={element.trainId} />
              )}
            </Card>
          </li>
        ));

  return (
    <>
      {cart.length === 0 ? (
        <p
          style={{
            margin: "0",
            padding: "30px 0 0 0",
            textAlign: "center",
          }}
        >
          Ваша корзина пуста
        </p>
      ) : (
        <ul style={{ margin: "0", padding: "0" }}>{cards}</ul>
      )}
    </>
  );
}

export default Basket;
