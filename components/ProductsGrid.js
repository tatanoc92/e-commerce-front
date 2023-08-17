import { styled } from "styled-components";
import ProductBox from "./ProductBox";

export default function ProductsGrid({ products }) {
  const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding-top: 30px;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  `;

  return (
    <StyledProductsGrid>
      {products?.length > 0 &&
        products.map((products) => (
          <ProductBox {...products} key={products._id}>
            {products.title}
          </ProductBox>
        ))}
    </StyledProductsGrid>
  );
}
