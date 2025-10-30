<script>
  import { FA } from "../fa.js";
  import { createEventDispatcher } from "svelte";

  export let url;
  export let page;
  export let reply;
  const dispatch = createEventDispatcher();

  let name;
  let email;
  let comment;
  let notify;

  let error = null;

  async function postComment() {
    name = name?.trim();
    comment = comment?.trim();
    email = email?.trim();
    if (!name) {
      error = "Please enter a name";
      return;
    }
    if (!comment) {
      error = "Please enter a comment";
      return;
    }
    if (!email && notify) {
      error = "Please enter an email if you want to be notified of replies";
      return;
    }
    if (email && !email.includes("@")) {
      error = "Please enter a valid email";
      return;
    }

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
        notify,
        reply_to: (reply && reply.id) || undefined,
      }),
    });
    if (res.ok) {
      const nc = await res.json();
      dispatch("newcomment", nc);
      error = null;
      comment = "";
    } else {
      const err = await res.text();
      console.error(err);
      error = err;
    }
  }
</script>

<div class="comment-form-wrap">
  <div id="comment-section" class="comment-input">
    <span class="avatar"><FA icon="user" /></span>
    <div class="comment-input-content">
      <label for="comment-input-name">Name</label>
      <input
        bind:value={name}
        id="commentName"
        type="text"
        placeholder="Name"
      />
      <div class="comment-input-content">
        <label for="comment-input-email">E-mail</label>
        <div class="horizontal">
          <input
            bind:value={email}
            id="commentEmail"
            type="email"
            placeholder="Email (optional)"
          />
          <div class="checkbox">
            <input
              bind:checked={notify}
              type="checkbox"
              id="comment-input-notify"
            />
            <label for="comment-input-notify">Notify me on replies</label>
          </div>
        </div>
      </div>
      {#if reply}
        <div>
          <span class="reply-to">
            <span>
              Replying to
              <b>{reply.name}</b>
            </span>
            <span>
              <button on:click={() => dispatch("unselect-reply")}>X</button>
            </span>
          </span>
          <blockquote>
            {reply.content}
          </blockquote>
        </div>
      {/if}
      <label for="commentContent">Comment</label>
      <textarea
        bind:value={comment}
        id="commentContent"
        placeholder="Comment"
      ></textarea>
      <button on:click|preventDefault={postComment}>Post</button>
      {#if error}
        <div class="error">{error}</div>
      {/if}
    </div>
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
  .error {
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
    color: var(--color-ui-9);
    background-color: var(--background-color-light-2);
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
  .horizontal {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }
  .checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--font-color-light);
  }
  .checkbox input {
    width: 30px;
  }
  .reply-to {
    color: var(--font-color-light);
    display: flex;
  }
  blockquote {
    white-space: pre-wrap;
  }
  .reply-to button {
    width: 100%;
    margin-left: 1rem;
    padding: 0.25rem;
  }
</style>
