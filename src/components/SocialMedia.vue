<template>
  <div>
    <div class="columns has-text-centered" v-for="row in cols" :key="row.id">
      <div class="column" v-for="c in row" :key="c.id">
        <a target="_blank" :href="c.l">
          <font-awesome-icon v-if="c.ico" :icon="c.ico"/>
          {{c.t}}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  data: () => ({
    cols: [
      [
        {
          t: 'Twitter',
          l: 'https://twitter.com/TiimB',
          ico: ['fab', 'twitter'],
        },
        {
          t: 'Instagram',
          l: 'https://instagram.com/tiim.ba',
          ico: ['fab', 'instagram'],
        },
        { t: 'E-Mail', l: 'mailto:tim.bachmann96@gmail.com', ico: 'at' },
        { t: 'Github', l: 'https://github.com/Tiim', ico: ['fab', 'github'] },
        { t: 'Website', l: 'https://tiimb.work', ico: 'external-link-alt' },
      ],
    ],
  }),
};
</script>
