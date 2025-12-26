import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  views: number;
  likes: number;
  readTime: string;
  author: {
    name: string;
    image: string;
  };
}

function getReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

async function getAllBlogPosts(): Promise<BlogPost[]> {
  const BLOG_DIRECTORY = path.join(process.cwd(), "content/blog");

  try {
    // Check if the blog directory exists
    if (!fs.existsSync(BLOG_DIRECTORY)) {
      console.error("Blog directory not found:", BLOG_DIRECTORY);
      return [];
    }

    const files = fs.readdirSync(BLOG_DIRECTORY);

    if (!files || files.length === 0) {
      return [];
    }

    const posts = await Promise.all(
      files.map(async (filename) => {
        try {
          const id = filename.replace(/\.(mdx|md|json)$/, "");
          const filePath = path.join(BLOG_DIRECTORY, filename);

          if (filename.endsWith(".json")) {
            const fileContents = fs.readFileSync(filePath, "utf8");
            const data = JSON.parse(fileContents);
            return {
              ...data,
              id,
              readTime: getReadingTime(data.content),
            };
          } else {
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(fileContents);

            // Validate required fields
            if (
              !data.title ||
              !data.excerpt ||
              !data.image ||
              !data.date ||
              !data.category ||
              !data.author
            ) {
              console.error(`Missing required fields in ${filename}`);
              return null;
            }

            return {
              id,
              title: data.title,
              excerpt: data.excerpt,
              image: data.image,
              date: data.date,
              readTime: getReadingTime(content),
              category: data.category,
              views: data.views || 0,
              likes: data.likes || 0,
              author: data.author,
            };
          }
        } catch (error) {
          console.error(`Error processing file ${filename}:`, error);
          return null;
        }
      })
    );

    // Filter out any null posts (from errors) and sort by date
    const validPosts = posts.filter(
      (post): post is NonNullable<typeof post> => post !== null
    );
    const sortedPosts = validPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return sortedPosts;
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  const featuredPost = posts[0]; // First post is featured
  const categories = Array.from(
    new Set(posts.map((post) => post.category))
  ).sort();

  if (!featuredPost) {
    return (
      <div className="min-h-screen py-20">
        <div className="container">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">No blog posts found</h2>
            <p className="text-text-slate">
              Check back later for new articles and updates.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-navy-darkest">
      {/* Featured Post Hero */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={featuredPost.image}
            alt={featuredPost.title}
            fill
            className="object-cover"
            priority
            // width={500}
            // height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-darkest via-navy-darkest/80 to-navy-darkest/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <span className="text-green-tint mb-4 font-mono">Featured Story</span>

          <h1 className="text-6xl md:text-8xl font-bold text-text-lightest-slate mb-6">
            {featuredPost.title}
          </h1>

          <p className="text-xl text-text-slate max-w-2xl mb-8">
            {featuredPost.excerpt}
          </p>

          <div className="flex items-center gap-6">
            <Link
              href={`/blog/${featuredPost.id}`}
              className="px-8 py-4 bg-green-tint/10 text-green-tint rounded-lg hover:bg-green-tint/20 transition-colors"
            >
              Read Article
            </Link>
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-green-tint/20">
                <Image
                  src={featuredPost.author.image}
                  alt={featuredPost.author.name}
                  fill
                  className="object-cover"
                  // width={500}
                  // height={500}
                />
              </div>
              <div>
                <p className="text-text-light-slate font-medium">
                  {featuredPost.author.name}
                </p>
                <p className="text-text-slate text-sm">
                  {featuredPost.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-8 space-y-8">
              {/* Clean Modern Search Box */}
              <div className="relative">
                <div className="relative flex items-center bg-[#112240] rounded-xl border-2 border-green-tint/20 hover:border-green-tint/40 transition-colors">
                  {/* Command Key */}
                  <div className="absolute left-4 h-5 w-5 flex items-center justify-center rounded bg-navy-darker">
                    <span className="text-xs font-mono text-green-tint">/</span>
                  </div>

                  <input
                    type="text"
                    placeholder="Type to search..."
                    className="w-full bg-transparent text-text-lightest-slate rounded-xl pl-12 pr-24 py-3 focus:outline-none placeholder:text-text-slate/50"
                  />

                  {/* Keyboard Shortcut */}
                  <div className="absolute right-4 hidden md:flex items-center gap-1">
                    <kbd className="px-1.5 h-5 inline-flex items-center text-[10px] font-medium font-mono rounded bg-navy-darker text-text-slate border border-text-slate/20">
                      ⌘
                    </kbd>
                    <kbd className="px-1.5 h-5 inline-flex items-center text-[10px] font-medium font-mono rounded bg-navy-darker text-text-slate border border-text-slate/20">
                      K
                    </kbd>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="relative overflow-hidden rounded-2xl bg-navy-darker border-2 border-green-tint/20">
                <div className="p-6">
                  <h3 className="text-text-lightest-slate font-bold mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-tint"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 text-text-slate hover:text-text-lightest-slate hover:bg-green-tint/5"
                      >
                        <span className="w-2 h-2 rounded-full bg-text-slate" />
                        {category}
                        <span className="ml-auto text-sm text-text-slate">
                          {
                            posts.filter((post) => post.category === category)
                              .length
                          }
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="relative overflow-hidden rounded-2xl bg-navy-darker border-2 border-green-tint/20">
                <div className="p-6">
                  <h3 className="text-text-lightest-slate font-bold mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-green-tint"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Blog Stats
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-green-tint/5 border border-green-tint/10">
                      <span className="text-text-slate">Total Articles</span>
                      <span className="text-green-tint font-mono">
                        {posts.length}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-green-tint/5 border border-green-tint/10">
                      <span className="text-text-slate">Total Views</span>
                      <span className="text-green-tint font-mono">
                        {posts.reduce((sum, post) => sum + post.views, 0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Articles Grid */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 gap-8">
              {posts.slice(1).map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
                      <Image
                        src={
                          post.image.startsWith("http")
                            ? post.image
                            : post.image.startsWith("/")
                            ? post.image
                            : `/${post.image}`
                        }
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        // width={500}
                        // height={500}
                      />
                    </div>

                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-2.5 py-1 bg-green-tint/10 text-green-tint rounded-full text-xs border border-green-tint/20">
                          {post.category}
                        </span>
                        <span className="text-text-slate text-xs">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-text-lightest-slate mb-2 group-hover:text-green-tint transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-sm text-text-slate mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-4 mt-auto text-sm text-text-slate">
                        <div className="flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          {post.views}
                        </div>
                        <span>·</span>
                        <div className="flex items-center gap-1.5">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
