import React from "react";
import Table from "react-bootstrap/Table";
import { MDBTypography } from "mdb-react-ui-kit";

const Blog = () => {
  return (
    <div>
      <MDBTypography
        tag="h3"
        className="text-center mb-4 pb-2 text-primary fw-bold"
      >
        Blog
      </MDBTypography>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>What is Cors?</td>
            <td>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources.
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </td>
            <td>
              Firebase Authentication provides backend services, easy-to-use
              SDKs, and ready-made UI libraries to authenticate users to your
              app. It supports authentication using passwords, phone numbers,
              popular federated identity providers like Google, Facebook and
              Twitter, and more.
              <br /> Auth0, MongoDB, Passport, Okta, and Firebase are the most
              popular alternatives and competitors to Firebase Authentication.
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>How does the private route work?</td>
            <td>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>What is Node? How does Node work?</td>
            <td>
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive. Working of Node.
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Blog;
