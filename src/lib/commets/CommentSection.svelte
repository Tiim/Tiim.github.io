<script>
  import { dev } from "$app/env";
  import { FA } from "../fa.js";
  import CommentForm from "./CommentForm.svelte";
  const url = dev
    ? "http://localhost:8080/comment/"
    : "https://comments.tiim.ch/comment/";

  export let page;
  export let comments;

  let newComments = [];

  let allComments = [];
  $: allComments = [...newComments, ...comments];

  async function getNewComments() {
    const comments = await fetch(url + page.uuid).then((r) => r.json());
    newComments = comments;
  }

  function onNewCommentPosted(event) {
    newComments = [event.detail, ...newComments];
  }

  getNewComments();
</script>

<h2>{allComments.length} Comments</h2>
<CommentForm page={page.uuid} {url} on:newcomment={onNewCommentPosted} />
<ul class="comment-list">
  {#each allComments as comment}
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
  label {
    color: var(--font-color-light);
  }
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
    width: 3.5rem;
    height: 3.5rem;
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
</style>
