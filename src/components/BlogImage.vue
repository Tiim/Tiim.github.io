<template>
  <div>
    <canvas
      v-if="!article.cover_image"
      class="canvas"
      ref="canvas"
      width="1064"
      height="588"
    ></canvas>
    <img :src="article.cover_image" v-else :alt="article.title" />
  </div>
</template>
<script>
const width = 1064;
const height = 588;

export default {
  name: 'BlogImage',
  props: {
    article: Object,
  },
  data() {
    return {
      width,
      height,
    };
  },
  mounted() {
    const canvas = this.$refs.canvas;
    if (!canvas) return;
    const date = new Date(this.article.published_at);
    const month = date.toLocaleString('en-us', { month: 'short' });
    const year = date.getFullYear();
    const dateText = `${month} ${year}`;
    renderCanvas(canvas, {
      title: this.article.title,
      author: this.article.user.name,
      date: dateText,
      pic: this.article.user.profile_image_90,
    });
  },
};

function renderCanvas(canvas, { title, date, author, pic }) {
  const ctx = canvas.getContext('2d');
  const textHeight = 80;
  const textHeightS = 45;
  const rect = 20;
  const shadow = 15;
  const textOffset = 40;
  const imgsize = 80;

  //ctx.strokeRect(0, 0, width, height);

  ctx.fillStyle = '#004378';
  ctx.strokeStyle = '#004378';
  ctx.lineWidth = 5;
  ctx.fillRect(
    rect + shadow,
    rect + shadow,
    width - 2 * rect,
    height - 2 * rect
  );
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(rect, rect, width - 2 * rect, height - 2 * rect);
  ctx.strokeRect(rect, rect, width - 2 * rect, height - 2 * rect);

  ctx.fillStyle = '#004378';
  ctx.font = `bold ${textHeight}px sans-serif`;

  //Bounding box
  //ctx.strokeRect(80, 80, width - 160, height - 160);
  //ctx.fillText(title, 80, 80 + textHeight);
  getLines(ctx, title, width - 160).forEach((v, i) => {
    ctx.fillText(v, 2 * rect, 2 * rect + (i + 1) * (textHeight + 10));
  });

  var myImg = new Image();
  myImg.onload = function() {
    ctx.beginPath();
    ctx.arc(
      2 * rect + imgsize / 2,
      height - (imgsize / 2 + 2 * rect + 5),
      imgsize / 2,
      0,
      2 * Math.PI
    );
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(
      myImg,
      2 * rect,
      height - (imgsize + 2 * rect + 5),
      imgsize,
      imgsize
    );
    ctx.restore();
  };
  myImg.src = pic;

  ctx.font = `${textHeightS}px sans-serif`;
  ctx.fillStyle = '#000000';
  ctx.fillText(
    author,
    2 * rect + textOffset + imgsize,
    height - (2 * rect + imgsize / 2) + textHeightS / 2
  );
  const dateX =
    ctx.measureText(author).width + 2 * rect + 2 * textOffset + imgsize;
  ctx.fillText(
    date,
    dateX,
    height - (2 * rect + imgsize / 2) + textHeightS / 2
  );
}

function getLines(ctx, text, maxWidth) {
  var words = text.split(' ');
  var lines = [];
  var currentLine = words[0];

  for (var i = 1; i < words.length; i++) {
    var word = words[i];
    var width = ctx.measureText(currentLine + ' ' + word).width;
    if (width < maxWidth) {
      currentLine += ' ' + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
}
</script>
<style>
.canvas {
  width: 100%;
}
</style>
