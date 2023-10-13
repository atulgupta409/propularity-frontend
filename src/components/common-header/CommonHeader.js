import React from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@apollo/client";
import { GET_SEO_BY_SLUG } from "../../service/CitySeoService";

function CommonHeader() {
  const currentUrl = window.location.href;
  const urlArr = currentUrl.split("/");
  const slug = urlArr[urlArr.length - 1];
  const { data: seoData } = useQuery(GET_SEO_BY_SLUG, {
    variables: { slug: slug },
  });
  const defaultTitle = "Buy residential, commercial and office spaces";
  const defaultDescription =
    "Buy residential, commercial and office spaces with Propularity";

  return (
    <>
      <Helmet>
        <title>{seoData?.citySeoContent[0]?.title || defaultTitle}</title>
        <meta
          name="description"
          content={
            seoData?.citySeoContent[0]?.description || defaultDescription
          }
        />
        <meta name="keywords" content={seoData?.citySeoContent[0]?.keywords} />
        <meta
          property="og:title"
          content={
            seoData?.citySeoContent[0]?.open_graph?.title || defaultTitle
          }
        />
        <meta
          property="og:description"
          content={
            seoData?.citySeoContent[0]?.open_graph?.description ||
            defaultDescription
          }
        />
        <meta
          name="twitter:title"
          content={seoData?.citySeoContent[0]?.twitter?.title || defaultTitle}
        />
        <meta
          name="twitter:description"
          content={
            seoData?.citySeoContent[0]?.twitter?.description ||
            defaultDescription
          }
        />
        <link rel="canonical" href={currentUrl} />
        <meta name="robots" content={seoData?.citySeoContent[0]?.robots} />
        <script type="application/ld+json">
          {seoData?.citySeoContent[0]?.script}
        </script>
      </Helmet>
    </>
  );
}

export default CommonHeader;
