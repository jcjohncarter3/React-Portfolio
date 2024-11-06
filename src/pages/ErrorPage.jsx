import { useRouteError } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer"
export default function ErrorPage() {
  const error = useRouteError();
  // console.error(error);

  return (
    <>
      <Header />
      <div className = "page"  id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, your page is another castle.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Footer />
    </>
  );
}
