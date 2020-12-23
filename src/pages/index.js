import React from 'react';
import Background from '../components/background';
import ProjectPage from '../components/projects';
import Footer from '../components/footer';
import '../sass/main.scss';
import 'aos/dist/aos.css';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

const IndexPage = (props) => {
  const data = props.data.allPrismicProjectList.edges[0].node.data.body[0].items;

  return (
    <React.Fragment>
      <Helmet>
        <title>Martin Lindén - Front-End Developer</title>
        <meta name="description" content="Front-end developer - HTML, CSS, React, JavaScript" />
        <meta property="og:title" content="Martin Linden - Front-End Developer" />
      </Helmet>

      <div>
        <Background />
        <ProjectPage data={data} />

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default IndexPage;

export const hejQuery = graphql`
  query MyQuery {
    allPrismicProjectList {
      edges {
        node {
          data {
            body {
              ... on PrismicProjectListBodyProjectList {
                items {
                  project_title
                  project_text
                  github_link {
                    url
                  }
                  website_link {
                    url
                  }
                  project_image {
                    fixed {
                      src
                    }
                    alt
                  }
                }
                id
              }
            }
          }
        }
      }
    }
  }
`;
