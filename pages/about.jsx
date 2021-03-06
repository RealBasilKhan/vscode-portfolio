const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <br />
      <h3>
        I'm Basil, a software engineer and React web developer. I do what I
        love: building things online.
      </h3>
      <br />
      <p>
        As a result, I started with eCommerce and slowly transitioned into SaaS.
        My interests are varied, but they all revolve around the internet in
        some way or another. My favorite types of projects involve designing and
        launching new products that help people automate mundane tasks and save
        more time. TypeSkip is my latest venture- an AI app that allows you to
        generate ad copy and content such as Facebook ads, Google ads, product
        descriptions, blog posts, and more without having to worry about
        writer's block, grammar mistakes or typos! P.S This bio was generated by
        TypeSkip.
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
