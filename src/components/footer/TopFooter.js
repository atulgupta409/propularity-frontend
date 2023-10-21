import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_SEO_BY_SLUG } from "../../service/CitySeoService";
import { decode } from "html-entities";

function TopFooter() {
  const [seoContent, setSeoContent] = useState([]);
  const pageUrl = window.location.href;
  const slugArr = pageUrl?.split("/");
  const slug = slugArr[slugArr?.length - 1];
  const {
    loading: seoLoading,
    error: seoError,
    data: seoData,
  } = useQuery(GET_SEO_BY_SLUG, {
    variables: { slug: slug === "" ? "home" : slug },
  });

  useEffect(() => {
    if (seoData) {
      setSeoContent(seoData.citySeoContent);
    }
  }, [seoData]);
  // const decodedDescription = decode(seoContent[0]?.footer_description);

  return (
    <>
      {/* {decodedDescription.trim() === "<p></p>/n" ||
      seoContent[0]?.footer_title ? (
        <div className="footer_content_main">
          <div className="container">
            <h2 className="footer_title">{seoContent[0]?.footer_title}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: seoContent[0]?.footer_description,
              }}
              className="footer_content"
            />
          </div>
        </div>
      ) : (
        ""
      )} */}
      <div className="footer_content_main">
        <div className="container">
          <h2 className="footer_title">{seoContent[0]?.footer_title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: seoContent[0]?.footer_description,
            }}
            className="footer_content"
          />
        </div>
      </div>
    </>
  );
}

export default TopFooter;
