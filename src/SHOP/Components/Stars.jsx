import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export function Stars({ rating }) {
  const stars = [];
  for (let i = 1; i < 6; i++) {
    if (rating >= i) stars.push(<FaStar key={i} />);
    else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} />);
    else stars.push(<FaRegStar key={i} />);
  }
  return <div>{stars}</div>;
}
