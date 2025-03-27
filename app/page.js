"use client";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="subtitle">Time for some ...</h2>
      <h1 className="title"><span className="red">T</span><span className="blue">r</span><span className="yellow">i</span><span className="blue">v</span><span className="green">i</span><span className="blue">a</span><span className="espace"></span><span className="red">G</span><span className="yellow">a</span><span className="green">m</span><span className="blue">e</span></h1>
      <Link href={"/quiz"}><button className="button">What are we waiting for?</button></Link>
    </>
  );
}
