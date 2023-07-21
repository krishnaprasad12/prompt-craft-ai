import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Ignite Your Creativity
        <br />
        <span className="orange_gradient text-center">PromptCraftAI</span>
      </h1>
      <p className="desc text-center">
      At PromptCraftAI, we believe that creativity knows no bounds. Our platform is a playground for writers, artists, thinkers, and problem solvers who seek inspiration and fresh ideas.
      </p>
    <Feed />
    </section>
  );
}

export default Home;
