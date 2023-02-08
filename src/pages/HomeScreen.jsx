import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch"

export default function HomeScreen() {
  const {
    data: articles,
    isPending,
    error,
} = useFetch('http://localhost:8000/articles')
  return (
    <>
    <div className="content">
      <h1>Welcome...</h1>
      <p>Quality Clothing for Quality Mofoes</p>
      <img src="https://via.placeholder.com/1200x200" alt="site banner" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima animi
        nulla eveniet. At non consequuntur perferendis id voluptatem sapiente
        dolor animi exercitationem, commodi officiis eveniet laudantium quidem
        dolore labore sit.
      </p>
    </div>
    <div className="home">
    <h2>Articles</h2>
    {isPending && <h3>Loading...</h3>}
    {error && <h2>{error}</h2>}
    {
        articles?.map((article) => (
            <div key={article.id} className="card">
                <h3>{article.title}</h3>
                <p>{article.author}</p>
                <Link to={`articles/${article.id}`}>Read more...</Link>
            </div>
        ))
    }
</div>
</>
  );
}
