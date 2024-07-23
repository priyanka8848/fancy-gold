import React, { useState } from 'react';
import useProductListing from '../../hooks/ProductListPageHooks/useProductsDataHook';
import HorizontalFilter from './HorizontalFilterList.tsx/HorizontalFilter';
import WebFilters from './FilterView/WebFilters';
import ProductGridViewMaster from './ProductGridView/ProductGridViewMaster';

const ProductListingMaster = () => {
  const {
    productListingData,
    isLoading,
    handlePaginationBtn,
    productListTotalCount,
    sortBy,
    handleSortBy,
    handleFilterSearchFun,
    handleFilterSearchBtn,
    searchFilterValue,
  } = useProductListing();
  const [hideFilterSection, setHideFilterSection] = useState<boolean>(false);

  const handleDisplayOfProductsList = () => {
    return (
      <ProductGridViewMaster
        productListingData={productListingData}
        isLoading={isLoading}
        handlePaginationBtn={handlePaginationBtn}
        productListTotalCount={productListTotalCount}
      />
    );
  };

  return (
    <div>
      <section className="listing-page ">
        <HorizontalFilter sortBy={sortBy} handleSortBy={handleSortBy} />
        <div className="container-fuild">
          <div className="d-flex ps-lg-5 pe-lg-4">
            <div>
              <WebFilters
                searchFilterValue={searchFilterValue}
                handleFilterSearchFun={handleFilterSearchFun}
                handleFilterSearchBtn={handleFilterSearchBtn}
                hideFilterSection={hideFilterSection}
                setHideFilterSection={setHideFilterSection}
              />
            </div>

            <div className="container">
              <div className="row mt-2 product-listing-row">{handleDisplayOfProductsList()}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ProductListingMaster;
