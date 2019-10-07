<script>
  export const TAGS = {
    heading1: "h1",
    heading2: "h2",
    heading3: "h3",
    heading4: "h4",
    heading5: "h5",
    heading6: "h6",
    paragraph: "p",
    preformatted: "pre"
  };

  export let elements;
</script>

{#each elements as element}
  {@html `<${TAGS[element.type]}>${element.text}</${TAGS[element.type]}>`}
{/each}
