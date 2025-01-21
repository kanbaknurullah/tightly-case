<!-- UserProfileCard.vue -->
<template>
  <div class="card">
    <img src="../assets/logo.png" alt="User" class="profile-image" />
    <div class="user-info">
      <h2>{{ user.name }}</h2>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Phone:</strong> {{ user.phone }}</p>
      <p>
        <strong>Address:</strong> {{ user.address?.city }},
        {{ user.address?.street }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.profile-image {
  width: 50%;
  padding: 25%;
  border-radius: 8px;
  margin-bottom: 15px;
}
.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
