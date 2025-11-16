export default function Home() {
  const envVars = {
    "App Name": process.env.NEXT_PUBLIC_APP_NAME,
    "API URL": process.env.NEXT_PUBLIC_API_URL,
    "Environment": process.env.NEXT_PUBLIC_ENVIRONMENT,
    "Version": process.env.NEXT_PUBLIC_VERSION,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <main className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              ServerCompass Demo test auto deploy test github actions branch main
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Sample Next.js deployment with environment variables
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              Environment Configuration
            </h2>
            <div className="grid gap-4">
              {Object.entries(envVars).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {key}:
                    </span>
                    <code className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-sm font-mono">
                      {value || "Not set"}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
              About this demo
            </h3>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              This is a sample Next.js application demonstrating environment variable
              usage. The values displayed above are loaded from the .env file and can
              be configured for different deployment environments.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://servercompass.app"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
            >
              Visit ServerCompass
            </a>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium transition-colors"
            >
              Next.js Docs
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
