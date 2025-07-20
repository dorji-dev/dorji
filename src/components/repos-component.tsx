interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
}

async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    const originalRepos = repos.filter((repo) => !repo.fork);

    const priorityRepoNames = ["next-app-i18n", "ig-clone-app"];

    const starredRepos = originalRepos
      .filter((repo) => repo.stargazers_count > 0)
      .sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return (
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
      });

    const selectedRepos: GitHubRepo[] = [...starredRepos];

    if (selectedRepos.length < 4) {
      const alreadySelectedNames = selectedRepos.map((repo) => repo.name);

      for (const priorityName of priorityRepoNames) {
        if (selectedRepos.length >= 4) break;

        const priorityRepo = originalRepos.find(
          (repo) =>
            repo.name === priorityName &&
            !alreadySelectedNames.includes(repo.name)
        );

        if (priorityRepo) {
          selectedRepos.push(priorityRepo);
        }
      }
    }

    if (selectedRepos.length < 4) {
      const alreadySelectedNames = selectedRepos.map((repo) => repo.name);
      const remainingRepos = originalRepos
        .filter(
          (repo) =>
            !alreadySelectedNames.includes(repo.name) && repo.description
        )
        .sort(
          (a, b) =>
            new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );

      const neededCount = 4 - selectedRepos.length;
      selectedRepos.push(...remainingRepos.slice(0, neededCount));
    }

    return selectedRepos.slice(0, 4);
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export default async function ReposComponent() {
  const repos = await fetchGitHubRepos("dorji-dev");

  const displayRepos = repos.length > 0 ? repos : [];

  return (
    <section id="repos" className="py-16 bg-gray-50">
      <div className="max-w-[700px] mx-auto px-6">
        <h2 className="text-xl font-semibold mb-8 text-gray-900 font-mono">
          github repositories
        </h2>
        {repos.length === 0 ? (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm text-yellow-800">
            Unable to fetch GitHub repositories at the moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {displayRepos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 group h-full"
              >
                <div className="flex flex-col h-full">
                  {/* Top section with title and stars */}
                  <div className="flex justify-between mb-3">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-700">
                      {repo.name}
                    </h3>
                    <div className="flex items-center h-fit space-x-1 text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm">{repo.stargazers_count}</span>
                    </div>
                  </div>

                  {/* Description section - grows to fill available space */}
                  <div className="flex-1 mb-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {repo.description || "No description available"}
                    </p>
                  </div>
                  {/* Bottom section - always at bottom */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-gray-500">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm">View on GitHub</span>
                    </div>
                    {repo.language && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                        {repo.language}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
