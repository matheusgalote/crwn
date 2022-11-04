import { useParams } from "react-router-dom";

const ShopCategorie = () => {
  const { params } = useParams();
  console.log(params, '<<<<<<<<');

  return <div>ShopCategorie</div>;
};

export default ShopCategorie;
