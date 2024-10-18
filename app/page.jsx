import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Prompts</span>
        <p className="desc text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi at optio itaque veritatis odio consequatur, qui incidunt! Praesentium quod impedit tempore odit sit dolorum distinctio, voluptas nisi eaque deserunt nobis?
        </p>
        </h1>
        <Feed/>
    </section>
  )
}

export default Home