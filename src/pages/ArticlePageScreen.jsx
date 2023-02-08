import { useParams,useNavigate} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

export default function ArticlePageScreen() {
  const { id } = useParams(); //params.id -- And what this does is, it give us a parameter object and on that object will be any route parameters from the URL on this specific page. So it will look at the URL and it will see that we have an ID parameter.
  const url = `http://localhost:8000/articles/${id}`;
  const { data: article, isPending, error } = useFetch(url);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       history.push("/");
  //     }, 2000);
  //   }
  // }, [error, history]);

  return (
    <>
      {isPending && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <div>Article - {id}</div>
      {article && (
    <div>
        <h2>{article.title}</h2>
        <p>By {article.author}</p>
        <p>{article.body};;;;;;;;;;;;;;</p>
        <button onClick={() => navigate("/products")}>See our Products</button>
    </div>
)}
    </>
  )
}
