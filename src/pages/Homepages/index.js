import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { fetchHomepages } from "../../store/homepages/actions";
import { selectHomepages } from "../../store/homepages/selectors";
import Homepage from "../../components/Homepage";
import "../../App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export default function HomePages() {
  const dispatch = useDispatch();
  const homepages = useSelector(selectHomepages);
  const [search, setSearch] = useState("");

  console.log("what is search", homepages);

  useEffect(() => {
    dispatch(fetchHomepages());
  }, [dispatch]);

  const filterHomepages = homepages.filter(homepages => {
    return homepages.title.toLowerCase().includes(search.toLowerCase());
  });

  console.log("Test filter", filterHomepages);
  return (
    <>
      <Jumbotron
        style={{
          backgroundImage:
            "url(" +
            "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" +
            ")",

          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "600px"
        }}
      >
        <h1>Wees Duurzaam </h1>
        <h3>Eenvoudig tweedehands meubels kopen & verkopen</h3>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search for a homepage"
            className=" mr-sm-2"
            onChange={e => setSearch(e.target.value)}
          />
          <Button variant="outline-secondary" type="submit">
            Submit
          </Button>
        </Form>
      </Jumbotron>

      <Container>
        <h2>Homepages</h2>
        {filterHomepages.map(homepage => {
          console.log("Homepages?", homepage);
          return (
            <Homepage
              key={homepage.id}
              id={homepage.id}
              title={homepage.title}
              description={homepage.description}
              image={homepage.imageUrl}
              showLink={true}
            />
          );
        })}
      </Container>
    </>
  );
}
