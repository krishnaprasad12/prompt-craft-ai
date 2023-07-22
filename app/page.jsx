import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text blue_gradient text-center">
        Ignite Your Creativity
        <br />
        <span className="green_gradient text-center">PromptCraft</span>
      </h1>
      <p className="desc text-center">
      At PromptCraft, we believe that creativity knows no bounds. Our platform is a playground for writers, artists, thinkers, and problem solvers who seek inspiration and fresh ideas.
      </p>
    <Feed />
    </section>
  );
}

export default Home;
