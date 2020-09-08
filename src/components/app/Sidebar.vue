<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
import localezeFilter from '@/filters/localize.filter';

export default {
  props: ['value'],
  data: () => ({
    links: [
      { title: localezeFilter('Menu_Bill'), url: '/', exact: true },
      { title: localezeFilter('Menu_History'), url: '/history' },
      { title: localezeFilter('Menu_Planning'), url: '/planning' },
      { title: localezeFilter('Menu_Record'), url: '/record' },
      { title: localezeFilter('Menu_Category'), url: '/categories' },
    ],
  }),
};
</script>
