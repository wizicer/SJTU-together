<template>
  <div class="config">
    <el-form ref="form" label-position="top">
      <el-form-item label="Config">
        <el-input type="textarea" v-model="config" rows="20"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveData">Save</el-button>
        <el-button @click="loadData">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Config extends Vue {
  private config = "";
  mounted() {
    this.loadData();
  }

  public loadData() {
    this.config = window.localStorage.getItem("config") || "{}";
  }

  public saveData() {
    try {
      JSON.parse(this.config);
    } catch (err) {
      this.$notify({
        type: "error",
        title: "Error",
        message: "Failed to save due to: " + err,
      });
      return;
    }

    window.localStorage.setItem("config", this.config);
    this.loadData();
    this.$notify({
      type: "success",
      title: "Success",
      message: "Success Saved",
    });
  }
}
</script>
