export async function get(req, res) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;
  const { data } = await req.prismic.api.getByUID("article", slug);

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({ data }));
}
