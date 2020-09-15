import React from "react";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import ApplicantCard from "./ApplicantCard";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../../actions/getUsers";
import { searchUser } from "../../actions/getUsers";
import { v4 as uuidv4 } from "uuid";
import "./Applicants.css";

const Applicants = ({
  getUsers,
  post: { posts, loading, error },
}) => {

  useEffect(() => {

    getUsers();

  }, [getUsers]);

  const ifErrorEmpty =
    Object.keys(error).length === 0 && error.constructor === Object;
  let postsLength;
  if (posts) {
    postsLength = posts.length;
  }
  return (
    <Container className="p-1 ApplicantOuter">
      {ifErrorEmpty === false || !posts ? (
        <h1 className="ApplicantsCenter">
          <img
            width="128"
            height="128"
            src={require("../../static/problem.png")}
            alt="404"
          ></img>{" "}
          <p>Server Error Occurrred</p>
        </h1>
      ) : loading ? (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
          className="ApplicantsCenter"
        />
      ) : postsLength === 0 ? (
        <h1 className="ApplicantsCenter">
          {" "}
          <img
            width="128"
            height="128"
            src={require("../../static/error.png")}
            alt="404"
          ></img>{" "}
          <p>No Matching Results</p>
        </h1>
      ) : (

              <div key={uuidv4()}>
                <h3 className="d-flex justify-content-center">Name of the movies Set</h3>

                {posts.map((status) => {
                  return (
                    <ApplicantCard
                      key={status.imdbID}
                      name={status.Title}
                      status={status.Type}
                      date={status.Year}
                      phone={status.imdbID}
                    />
                  );
                })}

              </div>

            )}

    </Container>
  );
};

Applicants.propTypes = {
  getUsers: PropTypes.func.isRequired,
  searchUser: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.applicants,
});

export default connect(mapStateToProps, { getUsers, searchUser })(Applicants);
