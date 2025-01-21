<template>
  <div id="app">
    <!-- Navigation Bar -->
    <a-layout-header class="header">
      <div class="logo">Tightly Case Study</div>
      <a-menu theme="dark" mode="vertical" :default-selected-keys="[selectedKey]">
        <a-menu-item key="1" @click="goToHome">Home</a-menu-item>
      </a-menu>
    </a-layout-header>

    <!-- Main Content -->
    <a-layout-content class="content">
      <router-view />
    </a-layout-content>

    <!-- Footer -->
    <a-layout-footer class="footer">
      © 2025 Tightly Case Study. All rights reserved.
    </a-layout-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedKey: "1",
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
      this.selectedKey = "1";
    },
  },
};
</script>

<style>
/* Root styles */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header styles */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #001529;
  color: white;
  padding: 0 20px;
}

.logo {
  font-size: 18px;
  color: white;
  font-weight: bold;
}

/* Content styles */
.content {
  padding: 24px;
  background: #f5f5f5;
  flex: 1;
}

/* Footer styles */
.footer {
  text-align: center;
  background: #001529;
  color: white;
  padding: 10px 0;
}

/* Responsive styles */
@media (max-width: 768px) {
  .header {
    padding: 0 10px;
  }
  .content {
    padding: 10px;
  }
}
</style>
