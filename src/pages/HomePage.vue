<template>
  <div class="container">
    <h1>Users</h1>
    <a-table
      :columns="columns"
      :data-source="users"
      row-key="id"
      bordered
      :loading="loading"
      :customRow="customRow"
      :rowClassName="rowClassName"
    />
  </div>
</template>

<script>
import { fetchUsers } from "../services/api";

export default {
  data() {
    return {
      users: [],
      loading: true,
    };
  },
  computed: {
    columns() {
      return [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
      ];
    },
  },
  async created() {
    try {
      console.log("Fetching users...");
      const { data } = await fetchUsers();
      console.log("Fetched users:", data);
      this.users = data;
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      console.log("Finished fetching");
      this.loading = false;
    }
  },
  methods: {
    rowClassName(record, index) {
      return index % 2 === 0 ? "even-row" : "odd-row";
    },
    customRow(record) {
      return {
        onClick: () => {
          this.$router.push({ name: "UserPage", params: { id: record.id } });
        },
      };
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 0;
}
:deep(.ant-table-tbody > tr.even-row) {
  background-color: #f5f5f5 !important;
}

:deep(.ant-table-tbody > tr.odd-row) {
  background-color: #ffffff !important;
}

/* Hover effect for rows */
:deep(.ant-table-tbody > tr:hover) {
  cursor: pointer;
}
</style>
