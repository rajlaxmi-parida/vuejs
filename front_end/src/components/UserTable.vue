<template>
  <b-container>
    <b-row>
      <b-col>
        <vuetable-pagination-info
          ref="paginationInfo"
        ></vuetable-pagination-info>
      </b-col>
      <b-col>
        <vuetable-pagination
          ref="pagination"
          @vuetable-pagination:change-page="onChangePage"
        ></vuetable-pagination>
      </b-col>
    </b-row>
    <div>
      <!-- <div class=""> -->
      <vuetable
        ref="vuetable"
        api-url="https://vuetable.ratiw.net/api/users"
        :fields="fields"
        :sort-order="sortOrder"
        data-path="data"
        :show-sort-icons="true"
        :per-page="5"
        pagination-path=""
        @vuetable:pagination-data="onPaginationData"
      >
        <div slot="gender-slot" slot-scope="props">
          <span v-if="props.rowData.gender === 'M'" class=""
            ><i class=""></i>Male</span
          >
          <span v-else class=""><i class=""></i>Female</span>
        </div>
      </vuetable>
    </div>
  </b-container>
</template>


<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination";
import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo";
import FieldsDef from "./FieldsDef.js";

export default {
  name: "MyVuetable",
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
  },
  data() {
    return {
      fields: FieldsDef,
      sortOrder: [
        {
          field: "name",
          direction: "asc",
        },
      ],
    };
  },
  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
  },
};
</script>

<style>
.pagination {
  margin-top: 15rem;
}

.vuetable-head-wrapper table.vuetable th.sortable {
  cursor: pointer;
}
</style>

