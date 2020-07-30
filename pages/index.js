import Head from "next/head";
import Verification from "../components/Verification";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>POSTER</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="./bower_components/react-tageditor/dist/style/default.css"
        ></link>

        <script
          type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsG2hXYBQpoC4FMOjAzkzANW7cNN_hjYE&libraries=places"
        ></script>
      </Head>
      <Verification />
    </div>
  );
}
