import { useParams } from "react-router-dom"

export default function PageArticleDetail() {
  const params = useParams();

  return <h1>Page Article {params.id}</h1>
}