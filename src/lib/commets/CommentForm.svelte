<script>
  import { FA } from "../fa.js";
  import { createEventDispatcher } from "svelte";

  export let url;
  export let page;
  const dispatch = createEventDispatcher();

  let name;
  let email;
  let comment;

  let error = null;

  async function postComment() {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        content: comment,
        page,
      }),
    });
    if (res.ok) {
      const nc = await res.json();
      dispatch("newcomment", nc);
      error = null;
      name = "";
      email = "";
      comment = "";
    } else {
      const err = await res.text();
      console.error(err);
      error = err;
    }
  }
</script>

<div class="comment-input">
  <span class="avatar"><FA icon="user" /></span>
  <div class="comment-input-content">
    <label for="comment-input-name">Name</label>
    <input bind:value={name} id="commentName" type="text" placeholder="Name" />
    <label for="comment-input-email">E-mail</label>
    <input
      bind:value={email}
      id="commentEmail"
      type="email"
      placeholder="Email (optional)"
    />
    <label for="commentContent">Comment</label>
    <textarea bind:value={comment} id="commentContent" placeholder="Comment" />
    <button on:click|preventDefault={postComment}>Post</button>
    {#if error}
      <div>{error}</div>
    {/if}
  </div>
</div>

<style>
  .comment-input {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
  }
  .comment-input .avatar {
    background-color: var(--color-ui-6);
  }
  .comment-input-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
    flex-grow: 1;
  }
  textarea {
    resize: vertical;
    min-height: 10rem;
  }
  .avatar {
    font-size: 1.5rem;
    display: inline-block;
    background-color: var(--background-color-light-2);
    padding: 1rem;
    width: 3.5rem;
    height: 3.5rem;
    text-align: center;
    border-radius: 50%;
  }
</style>
