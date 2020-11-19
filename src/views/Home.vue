<template>
  <div class="home">
    <div class="block">
      <span class="demonstration"
        >{{ weekStart | dateFormat("YYYY-MM-DD") }} ~
        {{ weekEnd | dateFormat("YYYY-MM-DD") }}</span
      >
      <el-slider
        v-model="week"
        @input="updateTable"
        :min="1"
        :max="18"
      ></el-slider>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="'hello'"
      size="mini"
    >
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column prop="time" label="Time" width="180"> </el-table-column>
      <el-table-column prop="monday" label="Monday"> </el-table-column>
      <el-table-column prop="tuesday" label="Tuesday"> </el-table-column>
      <el-table-column prop="wednesday" label="Wednesday"> </el-table-column>
      <el-table-column prop="thursday" label="Thursday"> </el-table-column>
      <el-table-column prop="friday" label="Friday"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  public week = 3;
  public weekStart = new Date();
  public weekEnd = new Date();
  private timeTable = [
    { name: "第1节   ", time: "08:00~08:45" },
    { name: "第2节   ", time: "08:55~09:40" },
    { name: "第3节   ", time: "10:00~10:45" },
    { name: "第4节   ", time: "10:55~11:40" },
    { name: "🥗第5节 ", time: "12:00~12:45" },
    { name: "第6节   ", time: "12:55~13:40" },
    { name: "第7节   ", time: "14:00~14:45" },
    { name: "第8节   ", time: "14:55~15:40" },
    { name: "第9节   ", time: "16:00~16:45" },
    { name: "🥗第10节", time: "16:55~17:40" },
    { name: "第11节  ", time: "18:00~18:45" },
    { name: "第12节  ", time: "18:55~19:40" },
    { name: "第13节  ", time: "19:41~20:20" },
  ];
  private memberTimes: any[] = [];
  public tableData: any[] = [];
  constructor() {
    super();
  }

  mounted() {
    this.updateTable();
    const diff = (+new Date() - +new Date(2020, 9 - 1, 7)) / 3600 / 24 / 1000;
    this.week = Math.ceil(diff / 7);
    this.memberTimes = JSON.parse(
      window.localStorage.getItem("config") || "{}"
    );
  }

  public updateTable() {
    this.weekStart = new Date(2020, 9 - 1, 7);
    this.weekEnd = new Date(2020, 9 - 1, 7);
    this.weekStart.setDate(this.weekStart.getDate() + (this.week - 1) * 7);
    this.weekEnd.setDate(this.weekEnd.getDate() + this.week * 7 - 1);
    this.tableData = [];
    for (let i = 0; i < this.timeTable.length; ++i) {
      this.tableData.push({
        name: this.timeTable[i].name,
        time: this.timeTable[i].time,
        monday: this.getNameByWeekday("monday", i),
        tuesday: this.getNameByWeekday("tuesday", i),
        wednesday: this.getNameByWeekday("wednesday", i),
        thursday: this.getNameByWeekday("thursday", i),
        friday: this.getNameByWeekday("friday", i),
      });
    }
  }
  private getNameByWeekday(weekday: string, slot: number): string[] {
    return this.memberTimes
      .filter((member : any) =>
        member.classes.some(
          (cls : any) =>
            cls.weekday == weekday &&
            cls.start <= this.week &&
            cls.end >= this.week &&
            cls.slots.some((s : any) => s === slot + 1)
        )
      )
      .map((_) => _.name);
  }
}
</script>
