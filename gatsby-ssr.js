const React = require("react")

exports.onRenderBody = ({setHeadComponents}, pluginOptions) => {
  const className = pluginOptions.className
    ? pluginOptions.className
    : "gatsbyRemarkImagesGrid"

  return setHeadComponents([
    <style key={`gatsby-remark-images-grid`} type="text/css">
      {`
        .${className} {
          ${pluginOptions.margin ? `margin: ${pluginOptions.margin}` : ""};
          padding-bottom: 30px;
        }

        .${className}-grid {
          display: grid;
          min-height: 0;
          min-width: 0;
          ${pluginOptions.gridGap ? `grid-gap: ${pluginOptions.gridGap}` : ""};
        }

        .${className}-grid .gatsby-resp-image-wrapper {
          width: 100%;
        }

        .${className}-figcaption {
          text-align: left;
        }
      `}
    </style>,
  ])
}
