import Head from "next/head";

import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Dealer Preperation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article id="welcome-section">
        <section>
          <h1 style={{ fontSize: "48px", textAlign: "center" }}>
            {" "}
            Welcome to New Car Prep &#x1F44B;
          </h1>
        </section>

        <section>
          <h2 style={{ textAlign: "center" }}>
            {" "}
            Next time you go to a dealership, you will be better prepared.
            <br /> I want you to control your buying experience!
          </h2>
          <br />
          <div style={{ textAlign: "center" }}>
            <Link href="/shopperTips" passHref>
              <button className="learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Get Started</span>
              </button>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
