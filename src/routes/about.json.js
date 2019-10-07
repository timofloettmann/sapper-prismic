export async function get(req, res) {
  const { data } = await req.prismic.api.getSingle("about");

  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(JSON.stringify(data));
}
