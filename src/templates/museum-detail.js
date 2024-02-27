import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function MuseumPage({ data }) {
  const museum = data.markdownRemark; // Holt die Daten aus der GraphQL-Abfrage, die Markdown-Daten enthält.
  const imageSharp = data.file?.childImageSharp; // Holt Bildverarbeitungsdaten für die angegebene Datei.
  const imageData = imageSharp ? getImage(imageSharp) : null; // Verarbeitet das Bild mit getImage, falls verfügbar.
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-start mt-4">
        {/* Setzt HTML-Inhalt sicher aus Markdown-Daten ein. Wichtig für die Anzeige des Inhalts. */}
        <div className="flex-1" dangerouslySetInnerHTML={{ __html: museum.html }} />
        {/* Überprüft, ob Bild-Daten vorhanden sind und zeigt das Bild an. */}
        {imageData && (
          
          <div className="order-first md:order-none w-full h-64 md:h-auto md:w-1/2 mt-10">
             {/* GatsbyImage-Komponente zur Anzeige des Bildes mit voller Deckung. */}
            <GatsbyImage image={imageData} alt={museum.frontmatter.name} className="w-full h-full object-cover" />
          </div>
        )}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query MuseumPageQuery($slug: String!, $image: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        country
        url
        slug
      }
    }
    file(relativePath: { eq: $image }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

/*
import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

export default function MuseumPage({ data }) {
  const museum = data.markdownRemark;
  const image = museum.frontmatter.image && museum.frontmatter.image.childImageSharp && museum.frontmatter.image.childImageSharp.gatsbyImageData
 & ? getImage(museum.frontmatter.image.childImageSharp.gatsbyImageData)
  : null;

  return (
    <Layout>
      <div>
        <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>
          {museum.frontmatter.name}
        </h1>
        
        {image && <GatsbyImage image={image} alt={museum.frontmatter.name} />}
        <div dangerouslySetInnerHTML={{ __html: museum.html }} />
      </div>
    </Layout>
  );
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        name
        country
        url
        slug
        image 
      }
    }
  }
`;**/