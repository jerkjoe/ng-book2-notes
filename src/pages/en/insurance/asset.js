import React, { Fragment } from "react"
import Layout from "../../../components/layout"
import { Row, Col, Button, Container } from "react-bootstrap"
import { Link } from "gatsby"

import "./asset.scss"
import BotNav from "../../../components/botNav"
const Asset = () => {
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <div className="parallax-container">
        <div className="parallax-image"></div>
        <div className="content-container">
          <Row noGutters>
            <Col md="8" sm="12" className="left-side">
              <div>
                <h1> 财产保险</h1>
                <h4>Beautiful mobile websites</h4>
                <p>
                  Click any text to edit or style it. Select text to insert a
                  link. Click blue "Gear" icon in the top right corner to
                  hide/show buttons, text, title and change the block
                  background.
                </p>
                <p>
                  <Button>联系我们</Button>
                </p>
              </div>
            </Col>
            <Col md="4" sm="0"></Col>
          </Row>
        </div>
      </div>
      <Container className="asset-container">
        <p>
          业务介绍 Mobirise helps you cut down development time by providing you
          with a flexible website editor with a drag and drop interface.
          Mobirise Website Builder creates responsive, retina and mobile
          friendly websites in a few clicks. Mobirise is one of the easiest
          website development tools available today. It also gives you the
          freedom to develop as many websites as you like given the fact that it
          is a desktop app.
        </p>
        <p>
          Make your own website in a few clicks! Mobirise helps you cut down
          development time by providing you with a flexible website editor with
          a drag and drop interface. Mobirise Website Builder creates
          responsive, retina and mobile friendly websites in a few clicks.
          Mobirise is one of the easiest website development tools available
          today. It also gives you the freedom to develop as many websites as
          you like given the fact that it is a desktop app.
        </p>
      </Container>
      <BotNav llink="/insurance/strategy" rlink="/insurance/corporate" left="个人保险" right="企业保险" />
    </Layout>
  )
}

export default Asset