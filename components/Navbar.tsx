export default function Navbar() {
  return (
    <div className="p-6">
      <div>
        <div>
          <h1 className="text-3xl hidden md:flex font-bold text-left">
            Sidharth's Blog
          </h1>
          <h2>Student | Developer </h2>
        
          <div className="flex justify-center items-center my-4 space-x-4">
            <a href="/" className="nav-link">
              Home
            </a>
            <a
              href="https://psidh.vercel.app"
              target="/topics"
              className="nav-link"
            >
              Topics
            </a>
            <a
              href="https://psidh.vercel.app"
              target="Portfolio"
              className="nav-link"
            >
              Portfolio
            </a>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
