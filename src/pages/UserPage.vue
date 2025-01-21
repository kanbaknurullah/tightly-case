<template>
  <div class="container">
    <a-row gutter="16">
      <!-- User Details -->
      <a-col :xs="24" :md="6">
        <UserProfileCard :user="user" />
      </a-col>

      <!-- Posts -->
      <a-col :xs="24" :md="18">
        <!-- Add Post -->
        <div class="card">
          <h3>Add a New Post</h3>
          <a-input
            :value="newPost.title"
            @input="onTitleChange"
            placeholder="Post Title"
            class="input-field"
          />
          <a-textarea
            :value="newPost.body"
            @input="onBodyChange"
            placeholder="Post Content"
            rows="4"
            class="input-field"
          />
          <a-button type="primary" block @click="addPost"> Add Post </a-button>
        </div>
        <div class="card">
          <h2>Posts</h2>
          <PostCard
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @delete="deletePost"
          />
          <PaginationComponent
            :currentPage="postPage + 1"
            :totalItems="totalPosts"
            :pageSize="3"
            @pageChange="loadPosts"
          />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import {
  fetchUserDetails,
  fetchUserPosts,
  addPost,
  deletePost,
} from "../services/api";
import UserProfileCard from "../components/UserProfileCard.vue";
import PostCard from "../components/PostCard.vue";
import PaginationComponent from "../components/PaginationComponent.vue";

export default {
  components: {
    UserProfileCard,
    PostCard,
    PaginationComponent,
  },
  data() {
    return {
      user: {},
      posts: [],
      newPost: { title: "", body: "" },
      postPage: 0,
      totalPosts: 0,
      pageSize: 3,
    };
  },
  async created() {
    const userId = this.$route.params.id;
    await Promise.all([this.loadUserDetails(userId), this.loadPosts(1)]);
  },
  methods: {
    onTitleChange(event) {
      this.newPost.title = event.target.value;
      console.log("Title typed:", this.newPost.title);
    },
    onBodyChange(event) {
      this.newPost.body = event.target.value;
      console.log("Body typed:", this.newPost.body);
    },
    async loadUserDetails(id) {
      try {
        const { data } = await fetchUserDetails(id);
        this.user = data;
      } catch (error) {
        this.$message.error("Failed to load user details");
      }
    },
    async loadPosts(page) {
      const start = (page - 1) * this.pageSize;
      const { data, headers } = await fetchUserPosts(
        this.$route.params.id,
        start
      );
      this.posts = data;
      this.totalPosts = parseInt(headers["x-total-count"], 10) || 0;
      this.postPage = page - 1;
    },
    async addPost() {
      if (!this.newPost.title || !this.newPost.body) {
        this.$message.error("Both title and content are required.");
        return;
      }
      const { data } = await addPost({
        ...this.newPost,
        userId: this.$route.params.id,
      });
      if (data) {
        this.posts.unshift(data);
        this.newPost = { title: "", body: "" };
      } else {
        this.$message.error("Failed to add post");
      }
    },
    async deletePost(id) {
      await deletePost(id);
      this.posts = this.posts.filter((post) => post.id !== id);
    },
  },
};
</script>

<style scoped>
h2 {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 5px;
}
.profile-image {
  width: 100%;
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
.post-card {
  border-bottom: 1px solid #f0f0f0;
  padding: 15px 0;
}
.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-field {
  margin-bottom: 10px;
}
</style>
