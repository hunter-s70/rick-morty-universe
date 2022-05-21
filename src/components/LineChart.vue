<template>
  <svg class="line-chart" :viewBox="viewBox">
    <g transform="translate(0, 10)">
      <g :transform="`translate(${padding}, 0)`">
        <g ref="yAxis"></g>
      </g>
      <g :transform="`translate(0, ${height - padding})`">
        <g ref="xAxis"></g>
      </g>
      <path class="line-chart__line" :d="line" />
    </g>
  </svg>
</template>

<script>
import * as d3 from "d3";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LineChart",
  props: {
    data: {
      required: true,
      type: Array,
    },
    width: {
      default: 500,
      type: Number,
    },
    height: {
      default: 270,
      type: Number,
    },
  },
  data() {
    return {
      line: "",
      padding: 40,
    };
  },
  computed: {
    rangeX() {
      const width = this.width - this.padding;
      return [this.padding, width];
    },
    rangeY() {
      const height = this.height - this.padding;
      return [0, height];
    },
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },
  },
  methods: {
    getScales() {
      // Create x scale
      const xData = d3
        .scaleLinear()
        .domain(d3.extent(this.data, (d, i) => i))
        .range(this.rangeX);

      // Create y scale
      const yData = d3
        .scaleLinear()
        .domain([0, d3.max(this.data, (d) => d)])
        .range(this.rangeY);

      // Scale x on left axis
      d3.axisBottom().scale(xData);

      // Scale y on top axis
      d3.axisLeft().scale(yData);

      // Create x axis
      const xAxis = d3.axisBottom().scale(xData);
      d3.select(this.$refs.xAxis).call(xAxis);

      // Create y axis
      const yAxis = d3.axisLeft().scale(yData);
      d3.select(this.$refs.yAxis).call(yAxis);

      return {
        xData,
        yData,
        xAxis,
        yAxis,
      };
    },
    calculatePath() {
      const scale = this.getScales();
      const path = d3
        .line()
        .x((d, i) => scale.xData(i))
        .y((d) => scale.yData(d));
      // .curve(d3.curveCardinal)

      this.line = path(this.data);
    },
  },
  mounted() {
    this.calculatePath();
  },
});
</script>

<style lang="scss">
.line-chart {
  margin: 25px;

  &__line {
    fill: none;
    stroke: #76bf8a;
    stroke-width: 3px;
  }
}
</style>
