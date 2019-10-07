<script context="module">
  import PrismicPlainText from "../../components/PrismicPlainText";
  export async function preload({ params, query }) {
    const { results } = await this.fetch(`blog.json`).then(r => r.json());
    return { results };
  }
</script>

<script>
  export let results;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
  {#each results as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.uid}">
        <PrismicPlainText elements={post.data.title} />
      </a>
    </li>
  {/each}
</ul>
