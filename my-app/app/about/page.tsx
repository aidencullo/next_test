export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="max-w-2xl text-center">
        <p className="text-lg mb-4">
          Welcome to our Next.js application! This is a simple about page created using the App Router.
        </p>
        <p className="text-lg mb-4">
          We&apos;re building modern web applications with the latest technologies and best practices.
        </p>
        <p className="text-lg">
          Feel free to explore and learn more about what we do.
        </p>
      </div>
    </div>
  );
}
