/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class Notifications extends React.Component {
  notify = place => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Black Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  render() {
    return (
      <>
        <div className="content">
          <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Row>
            
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Alertas</CardTitle>
                </CardHeader>
                <CardBody>
                  
                  <UncontrolledAlert color="warning">
                    <span>
                      <b>Ciudado - </b>
                      Molino 2 alcanza potencia mayor a 60% ".alert-warning"
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="danger">
                    <span>
                      <b>Alerta - </b>
                      Molino 3 alcanza potencia mayor a 80% ".alert-danger"
                    </span>
                  </UncontrolledAlert>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </div>
      </>
    );
  }
}

export default Notifications;
