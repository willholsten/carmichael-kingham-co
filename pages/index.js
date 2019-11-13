import React from "react";

// Components
import Layout from "../components/Layout";
import HomeBanner from "../components/HomeBanner";
import SectionHeader from "../components/Common/SectionHeader";
import AboutTile from "../components/AboutTile";
import ExpertiseTile from "../components/ExpertiseTile";
import TeamTile from "../components/TeamTile";

// Resources
import { Container } from "@material-ui/core";

// Data
import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCApQ2O5wlYgAkIMdJoKKbT9r6v6Adt8wo",
  authDomain: "carmichael-kingham-co.firebaseapp.com",
  databaseURL: "https://carmichael-kingham-co.firebaseio.com",
  projectId: "carmichael-kingham-co",
  storageBucket: "carmichael-kingham-co.appspot.com",
  messagingSenderId: "9561026588731140173233974",
  appId: "1:1026588731140:web:8410b87fda5041821b5251"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyDetails: []
    };
  }

  componentDidMount() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }
  render() {
    return (
      <Layout
        title="Carmichael Kingham &amp; Co"
        description="Insert page description"
        keywords="Insert keywords"
      >
        <section>
          <HomeBanner />
          {/* <h1>{this.state.users.firstName}</h1> */}
          {/* <h1>{this.state.test.testText}</h1> */}
          {/* {console.log(result.test.testText)} */}
        </section>
        <Container maxWidth="md">
          <section>
            <SectionHeader text="About us" image="/svg/about-us.svg" />
            <AboutTile />
          </section>
          <section>
            <SectionHeader text="Expertise" image="/svg/services.svg" />
            <ExpertiseTile />
          </section>
          <section>
            <SectionHeader text="Our people" image="/svg/our-people.svg" />
            <TeamTile />
          </section>
        </Container>
      </Layout>
    );
  }
}
