<script context="module">
  import PrismicTitle from "../components/PrismicTitle";
  import PrismicHTML from "../components/PrismicHTML";

  export async function preload({ query, params }) {
    const res = await this.fetch(`about.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let data;
</script>

<svelte:head>
  <PrismicTitle elements={data.title} />
</svelte:head>

<div class="content">
  <PrismicHTML elements={data.content} />
</div>
