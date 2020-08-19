import React, { useState, useEffect } from "react"
import Layout from "../../../components/layout"
import { Carousel as AndtCarousel } from "antd"
import { Row, Col, Container, Modal, Card, Button } from "react-bootstrap"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
// import "./services.scss"
const Contentful = require("contentful")
const Service = () => {
  const [post, setPost] = useState({})
  const id = "6Qfdx4kBH6HyV6v1GSOMgj"
  useEffect(() => {
    const client = Contentful.createClient({
      space: "xxnh1wfwedpb",
      accessToken: "2tDLrcvmKpzOorRWsHgbwHodpFLzUHExcvtLrVw9w2E",
    })
    client.getEntry(id).then(res => {
      console.log(res)
      setPost({
        ...res.fields,
        date: new Date(res.sys.createdAt).toDateString(),
      })
      const htmlString = documentToHtmlString(res.fields.content)
      if (typeof document !== "undefined") {
        document.querySelector(".html-content").innerHTML = htmlString
      }
    })
  }, [])
  return (
    <Layout>
      <Container className="service-container">
        <h1>二 / 三级按揭抵押（ETO）</h1>
        <div className="html-content"></div>
      </Container>
    </Layout>
  )
}

export default Service
