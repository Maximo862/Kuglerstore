import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export function Stars({ rating }) {
  const stars = [];
  for (let i = 1; i < 6; i++) {
    if (rating >= i) stars.push(<FaStar key={i} color="#ffc107" />);
    else if (rating >= i - 0.5)
      stars.push(<FaStarHalfAlt key={i} color="#ffc107" />);
    else stars.push(<FaRegStar key={i} color="#ffc107" />);
  }
  return <div style={{ display: "flex", gap: "2px" }}>{stars}</div>;
}
