<!-- PostCard.vue -->
<template>
  <div class="post-card">
    <div class="post-header">
      <h3>{{ post.title }}</h3>
      <a-button type="primary" danger @click="deletePost(post.id)">
        Delete
      </a-button>
    </div>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: Object,
  },
  methods: {
    deletePost(id) {
      this.$emit('delete', id);
    },
  },
};
</script>

<style scoped>
.post-card {
  border-bottom: 1px solid #f0f0f0;
  padding: 15px 0;
  margin-bottom: 5px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
