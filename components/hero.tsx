// import NextLogo from "./next-logo";
// import SupabaseLogo from "./supabase-logo";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
    
        {/* <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <NextLogo />
        </a> */}
      </div>
      <h1 className="sr-only"> Your AI-Powered Path to Financial Freedom 🚀</h1>
      <p className="text-3xl lg:text-xl !leading-tight mx-auto max-w-2xl text-center">
      💰 No More Guesswork 🚀<br />Now Make better financial decisions 
     
      </p>
      <h1 className="text-4xl"> ✨ Introducing to your Personal AI Financial Advisor</h1>
       <p className="text-3xl lg:text-xl !leading-tight mx-auto max-w-2xl text-center">
      Your intelligent companion for financial success. Analyze, plan and grow your wealth with AI-powered insights
      </p>
      <p className="text-3xl lg:text-xl !leading-tight mx-auto max-w-2xl text-center">   🤑 Save More. Invest Smarter. Stress Less. 😁</p>
     
      <button>
          Try it now
      </button>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
