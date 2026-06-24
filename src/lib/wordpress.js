export async function getPosts() {
  const response = await fetch(
    "http://localhost/wordpress/wp-json/wp/v2/posts"
  );

  console.log(response.status);

  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return data;
}