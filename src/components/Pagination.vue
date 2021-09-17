<template>
    <!-- <ul class="pagination" v-if="data.length > 5 || currentPage > 1">
        <li class="pagination-item" title="Первая страница">
          <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
            <i class="fas fa-chevron-left"></i> <i class="fas fa-chevron-left"></i>
          </button>
        </li>

        <li class="pagination-item" title="Предыдущая страница">
          <button type="button" @click="onClickPreviousPage" :disabled="isInFirstPage">
            <i class="fas fa-chevron-left"></i>
          </button>
        </li>

        <li class="pagination-item" v-for="(page, index) in pages" :key="index">
          <button 
          type="button" 
          @click="onClickPage(page.number)" 
          :disabled="page.isDisabled" 
          :class="{ active: isPageActive(page.number) }">
            {{ page.number }}
          </button>
        </li>

        <li class="pagination-item" title="Следующая страница">
          <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
            <i class="fas fa-chevron-right"></i>
          </button>
        </li>
        <li class="pagination-item" title="Последняя страница">
          <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
            <i class="fas fa-chevron-right"></i> <i class="fas fa-chevron-right"></i>
          </button>
        </li>
    </ul> -->
      <ul class="pagination" v-if="allFilteredData.length > 5">
        <li class="page-item" title="Первая страница">
          <button type="button" class="page-link">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>
        </li>

        <li class="page-item" title="Предыдущая страница">
          <button type="button" class="page-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>
        </li>

        <li class="page-item">
          <button 
          type="button"
          class="page-link"
          >
            номер страницы
          </button>
        </li>

        <li class="page-item" title="Следующая страница">
          <button type="button" class="page-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </li>
        <li class="page-item" title="Последняя страница">
          <button type="button" class="page-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </li>
      </ul>
</template>

<script>
import {mapGetters} from "vuex"
export default {
    name: "Pagination",
    computed: mapGetters(["allFilteredData"])
}
</script>

<style>

</style>