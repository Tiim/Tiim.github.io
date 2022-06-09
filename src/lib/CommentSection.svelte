<script>
  import { FA } from "./fa.js";
  export let comments;
</script>

<h2>Comments</h2>
<div class="comment-input">
  <span class="avatar"><FA icon="user" /></span>
  <div class="comment-input-content">
    <input placeholder="Name (optional)" />
    <textarea placeholder="Comment" />
    <button>Post</button>
  </div>
</div>
<ul class="comment-list">
  {#each comments as comment}
    <li class="comment">
      <span class="avatar"><FA icon="user" /></span>
      <div class="comment-content">
        <h3 id={comment.id}>{comment.name}</h3>
        <span class="time"
          >{comment.timestamp.substring(0, 10) +
            " " +
            new Date(comment.timestamp).toLocaleTimeString()}</span
        >
        <p>{comment.content}</p>
      </div>
    </li>
  {/each}
</ul>

<style>
  h2 {
    margin-top: 3rem;
  }
  .comment-list {
    list-style: none;
    padding: 0;
  }
  .comment {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  .comment:not(:last-child) {
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--line-color);
  }
  .avatar {
    font-size: 1.5rem;
    display: inline-block;
    background-color: var(--background-color-light-2);
    padding: 1rem;
    width: 2rem;
    height: 2rem;
    text-align: center;
    border-radius: 50%;
  }
  .comment h3 {
    display: inline;
  }
  .time {
    color: var(--color-ui-6);
    font-size: 0.9rem;
  }
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
    align-items: flex-end;
  }
  input,
  textarea,
  button {
    color: var(--font-color);
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 0px solid var(--line-color);
    outline: none;
    background-color: var(--color-ui-3);
  }
</style>
