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
    <div className="space-y-12">
      <h2 className="text-2xl font-bold text-foreground font-mono">
        github repositories
      </h2>
      {repos.length === 0 ? (
        <div className="p-4 text-sm text-muted-foreground">
          Unable to fetch GitHub repositories at the moment.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayRepos.map((repo) => (
            <div
              key={repo.id}
              className="group relative bg-card rounded-lg border border-border p-4 hover:bg-muted/50 transition-colors duration-200"
            >
              <div className="flex items-start gap-x-4 justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  {repo.name}
                </h3>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-muted-foreground group-hover:text-primary transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
              {repo.description && (
                <p className="text-muted-foreground mt-2 line-clamp-3">
                  {repo.description}
                </p>
              )}
              <div className="flex items-center mt-3 space-x-3">
                {repo.language && (
                  <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <div className="flex items-center space-x-1.5">
                    <svg
                      className="w-4 h-4 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.697 1.456 1.405 1.006l4.963-2.636 4.963 2.636c.708.45.999-.193 1.404-1.006l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382L10.868 2.884z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-muted-foreground">
                      {repo.stargazers_count} stars
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
