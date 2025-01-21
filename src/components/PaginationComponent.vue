<!-- PaginationComponent.vue -->
<template>
  <a-pagination
    :current="currentPage"
    :total="totalItems"
    :pageSize="pageSize"
    @change="onPageChange"
    :show-total="showTotal"
    :show-quick-jumper="false"
  />
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    showTotal: {
      type: Function,
      default: (total) => `Total ${total} posts`,
    },
  },
  methods: {
    onPageChange(page) {
      this.$emit('pageChange', page);
    },
  },
};
</script>
