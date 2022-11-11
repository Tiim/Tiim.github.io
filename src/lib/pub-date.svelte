<script>
  export let site;

  $: pub = site.date ? new Date(site.date) : null;
  $: mod =
    site.modified && site.modified !== site.date
      ? new Date(site.modified)
      : null;
</script>

{#if pub}
  <span>
    published on <time
      pubdate
      datetime={pub.toISOString()}
      class="date dt-published"
    >
      {pub.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  </span>
{/if}
{#if mod}
  last updated on <time
    pubdate
    datetime={mod.toISOString()}
    class="date dt-updated"
  >
    {mod.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
  </time>
{/if}
