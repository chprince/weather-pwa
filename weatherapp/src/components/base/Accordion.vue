<template>
  <div class="accordion">
    <button
      @click="toggleAccordion"
      class="accordion__toggle"
      :aria-expanded="state.isOpen"
      :aria-controls="`collapse${_uid}`"
    >
      <h3 class="accordion__title"><slot name="title" /></h3>
      <svg
        class=""
        :class="{
          'rotate-180': state.isOpen,
          'rotate-0': !state.isOpen,
        }"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 10"
        aria-hidden="true"
      >
        <path
          d="M15 1.2l-7 7-7-7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <div v-show="state.isOpen" :id="`collapse${_uid}`">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Accordion",
  data() {
    // return {
    //   isOpen: false,
    // };
  },

  methods: {
    // toggleAccordion() {
    //   this.isOpen = !this.isOpen;
    // },
  },
  setup() {
    const state = reactive({
      isOpen: false,
    });

    const toggleAccordion = () => {
      state.isOpen = !state.isOpen;
    };

    return {
      state,
      toggleAccordion,
    };
  },
};
</script>

<style lang="scss">
.accordion {
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  + .accordion {
    border-top: none;
  }

  &__toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  &__title {
    font-size: 1.5em;
  }

  svg {
    width: 24px;

    &.rotate-180 {
      transform: rotate(180deg);
    }
  }
}
</style>