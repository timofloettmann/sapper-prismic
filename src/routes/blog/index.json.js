import Prismic from "prismic-javascript";

export async function get(req, res) {
  const { results } = await req.prismic.api.query(
    Prismic.Predicates.at("document.type", "article")
  );

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({ results }));
}
