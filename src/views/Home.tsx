//import React from 'react'
import { Card } from "antd";
import styles from "./Home.module.css";
import { Container } from "react-bootstrap";
import { NabBarDoCut } from "../components/NavBarDoCut";

export const Home = () => {
  return (
    <div className={styles.fullScreen}>
      <NabBarDoCut />
      <Container fluid>
        <div className="row">
          <div className="col-sm-4">
            <Card className={styles.cardSpace}>Hello</Card>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4"></div>
        </div>
      </Container>
    </div>
  );
};
