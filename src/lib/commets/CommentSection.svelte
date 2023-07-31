<script>
  import { dev } from "$app/environment";
  import { FA } from "../fa.js";
  import CommentForm from "./CommentForm.svelte";
  const url = dev
    ? "http://localhost:8080/comment/"
    : "https://comments.tiim.ch/comment/";

  export let page;
  export let comments;

  let replyComment = null;

  let newComments = [];
  let latestCommentTimestamp;
  $: latestCommentTimestamp = page.latestComment;

  let allComments = [];
  $: allComments = [
    ...newComments,
    ...comments.filter((c) => !newComments.find((nc) => nc.id === c.id)),
  ];

  async function getNewComments() {
    try {
      const comments = await fetch(
        url +
          encodeURIComponent(page.slug) +
          `?since=${encodeURIComponent(latestCommentTimestamp)}`
      ).then((r) => r.json());
      newComments = comments;
    } catch (err) {
      console.warn("Could not fetch comments: ", err.message);
    }
  }

  function onNewCommentPosted(event) {
    newComments = [event.detail, ...newComments];
    replyComment = null;
  }

  function reply(comment) {
    replyComment = comment;
    window.location.href = "#comment-section";
  }

  $: page && getNewComments();
</script>

<h2>{allComments.length} Comments and Interactions</h2>
<span>
  Leave a comment or interact with this page via
  <a href="http://indieweb.org/webmention"> WebMention </a>
</span>
<CommentForm
  reply={replyComment}
  page={page.slug}
  {url}
  on:newcomment={onNewCommentPosted}
  on:unselect-reply={() => (replyComment = null)}
/>
<ul class="comment-list">
  {#each allComments as comment}
    <li class="comment">
      <span class="avatar"><FA icon="user" /></span>
      <div class="comment-card">
        <div class="comment-header">
          <h3 id={comment.id}>{comment.name}</h3>
          <span class="time">
            <a href={comment.url}>
              {comment.timestamp.substring(0, 10) +
                " " +
                new Date(comment.timestamp).toLocaleTimeString()}
            </a>
          </span>
          <span class="reply-notice">
            {#if comment.type === "webmention"}
              <p class="comment-text">Mentioned this post</p>
            {/if}
          </span>
          {#if comment.type === "comment"}
            <span>
              <button on:click={() => reply(comment)}>Reply</button>
            </span>
          {/if}
        </div>
        {#if comment.replyTo}
          <span class="reply-notice">
            In reply to
            <a href={`#${comment.replyTo}`}>
              {allComments.find((c) => c.id === comment.reply_to)?.name}</a
            >
          </span>
        {/if}
        <p class="comment-content">{comment.content}</p>
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
    width: 3.5rem;
    height: 3.5rem;
    text-align: center;
    border-radius: 50%;
  }
  .comment h3 {
    display: inline;
    margin-bottom: 0px;
  }
  .time {
    color: var(--color-ui-6);
    font-size: 0.9rem;
    text-decoration: underline;
  }
  .comment-card {
    width: 100%;
  }
  .comment-content {
    white-space: pre-wrap;
  }
  .comment-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: baseline;
    flex-grow: 1;
    justify-content: baseline;
  }
  button {
    margin-left: 2rem;
    padding: 0.5rem 0rem;
    font-size: 0.8rem;
    color: var(--font-color-light);
  }
  .reply-notice {
    font-size: 0.8rem;
    color: var(--color-ui-6);
  }
</style>
