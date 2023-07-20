import '@styles/globals.css';

export const metadata = {
    title: "PromptCraftAI",
    description: "Our platform is a playground for writers, artists, thinkers, and problem solvers who seek inspiration and fresh ideas. Powered by cutting-edge artificial intelligence, we dynamically generate prompts that will spark your imagination and fuel your creative journey."
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
            <div className='gradient'></div>
        </div>

        <main className='app'>
            {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
