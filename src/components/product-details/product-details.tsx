import React, { Fragment } from "react";
import CustomizeProduct from "@/components/product-details/customize-product";
import Add from "@/components/product-details/add";

const ProductDetails = ({}) => {
  /**
   * -------------------
   * ------- JSX -------
   * -------------------
   */
  return (
    <Fragment>
      <h1 className="text-4xl font-medium">Product Name</h1>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium
        ad beatae blanditiis deleniti dignissimos dolor eius laudantium, minus
        molestiae nam, numquam obcaecati praesentium ratione ut vitae voluptate,
        voluptatem voluptatum.
      </p>
      <div className="h-[2px] bg-gray-100" />
      <div className="flex items-center gap-4">
        <h3 className="text-xl text-gray-500 line-through">$95</h3>
        <h2 className="font-medium text-2xl">$40</h2>
      </div>
      <div className="h-[2px] bg-gray-100" />
      {/* Customization */}
      <CustomizeProduct />
      <Add />
      <div className="h-[2px] bg-gray-100" />
      {/* Description of the product */}
      <div className="text-sm">
        <h4 className="font-medium mb-4">Title</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          dolor exercitationem totam! Asperiores atque culpa debitis
          exercitationem incidunt inventore iste iusto minus mollitia nam nihil,
          rerum similique sint sunt tenetur!
        </p>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
