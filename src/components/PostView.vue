<template>
  <div>
    <div>
      <div class="filter">
        <div class="container text-center">
          <!--ფილტრაციის ადგილი-->

          <div class="row">
            <div class="col">
              <!-- Filter by Title -->

              <label for="titleFilter">საძიებო სიტყვა</label>

              <input
                class="form-control form-select-lg mb-3"
                type="text"
                v-model="titleFilter"
                id="titleFilter"
              />
            </div>

            <div class="col">
              <label for="select1">კატეგორია</label>
              <select
                class="form-select form-select-lg mb-3"
                aria-label="Large select example"
                id="select1" v-model="category">
                <option value="">ყველა</option>
                <option value="IT-პროგრამირება">IT-პროგრამირება</option>

                <option value="ლოჯისტიკა">ლოჯისტიკა </option>

                <option value="დასუფთავება">დასუფთავება</option>

                <option value="option4">Option 4</option>

                <option value="option5">Option 5</option>
              </select>
            </div>

           <!-- <div class="col">
              <label for="select2">აირჩიე სფერო</label>

              <select
                class="form-select form-select-lg mb-3"
                aria-label="Large select example"
                id="select2"
                v-model="selectedOption2"
                :disabled="!select2Enabled"
                @change="handleSelectChange('selectedOption2', 'options2')"
              >
                <option value="subOption1">Sub-option 1</option>

                <option value="subOption2">Sub-option 2</option>
              </select>
            </div>-->

            <div class="col">
              <!-- Filter by Price -->
              <label for="location">რეგიონი</label>
              <select
                class="form-select form-select-lg mb-3"
                v-model="location"
                id="location">
                <option value="">ყვეკა</option>
                <option value="თბილისი">თბილისი</option>
                <option value="ქუთაისი">ქუთაისი</option>
                <option value="ახმეტა">ახმეტა</option>
                <option value="საჩხერე">საჩხერე</option>
                <!-- Add more options as needed -->
              </select>
            </div>

            <div class="col">
              <!-- Filter by Price -->
              <label for="priceFilter">ანაზღაურება</label>
              <select
                class="form-select form-select-lg mb-3"
                v-model="selectedPriceFilter"
                id="priceFilter">
                <option value="">ყველა</option>
                <option value="₾100">₾100</option>
                <option value="₾110">₾110</option>
                <option value="₾120">₾120</option>
                <option value="₾150">₾150</option>
                <!-- Add more options as needed -->
              </select>
            </div>

            <div class="col">
              <label for="select3">გამოქვეყნდა</label>
              <select class="form-select form-select-lg mb-3"
                aria-label="Large select example" id="select3"
                v-model="data">
                <option value="">ყველა</option>
                <option value="24">ბოლო 24 საათი</option>
                <option value="3">ბოლო 3 დღე</option>
                <option value="7">ბოლო 7 დღე</option>
                <option value="8">ბოლო 8 დღე</option>
              </select>
            </div>
          </div>
        </div>

        <!--ფილტრაციის ადგილი-->
      </div>
    </div>

    <div class="post_container">
      <div class="posts">
        <!-- Display Filtered Posts -->
        <div class="post" v-for="post in paginatedPosts" :key="post.id" v-on:click="psotgetid" :data-att="post.id">
            <!--<a class="pos" :href="'post/' + post.id + '/' + post.title.toLowerCase()">-->
            <a class="pos"  >
          <div class="post_main_title" >
            <p>{{ post.title }}</p>
            <div>
              <span
                class="badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill"
                >{{ post.price }}-150,000 დღე<i class="bi bi-check2"></i>
              </span>
              <span
                class="badge bg-secondary-subtle text-secondary-emphasis rounded-pill">8 საათი
                <span>+1</span>
              </span>
            </div>
          </div>

          <div class="main_pos_com_info_bx" :data-att="post.id">
            <p>Tbilisi Marriott Hotel</p>

            <div class="btn-group">
              <button type="button" class="btn btn-outline-secondary btn-sm">
                <i class="bi bi-star-fill"></i>
              </button>

              <button type="button" class="btn btn-outline-secondary btn-sm">
                <i class="bi bi-star-half"></i>
              </button>

              <button type="button" class="btn btn-outline-secondary btn-sm">
                <i class="bi bi-star"></i>
              </button>
            </div>

            <span
              class="badge d-flex align-items-center p-1 text-dark-emphasis bg-light-subtle border border-dark-subtle rounded-pill btn-sm"
            >
              <img
                class="rounded-circle me-1"
                width="24"
                height="24"
                src="https://jobs.ge/data/clients/logo_icon/1199_marriott_tbilisi_4443247.gif"
                alt=""
              />
              <i class="bi bi-ui-checks"></i>
              Verified
            </span>
          </div>

          <div class="">
            03 დეკემბერი<br/>
            <span
              class="badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill"
              >Full-time
              <i class="bi bi-check2"></i>
            </span>

            <br />
            <span
              class="badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill"
              >Part-time
              <i class="bi bi-check2"></i>
            </span>
          </div>

          <div class="">03 იანვარი<br /></div>

          <div class="">
            <span
              class="badge bg-light-subtle border border-light-subtle text-light-emphasis rounded-pill"
            >
              <i class="bi bi-pin-map-fill"></i>
              {{ post.location }}</span
            >

            <br />

            <br />

            <i class="bi bi-qr-code-scan"></i>

            <i class="bi bi-suitcase-fill"></i>

            <i class="bi bi-file-earmark-word-fill"></i>
            <i class="bi bi-toggle-on"></i>

            <i class="bi bi-envelope-paper"></i>

            <i class="bi bi-telephone-outbound-fill"></i>
          </div>
            </a>
        </div>
  
        <!-- Pagination Controls -->
        <div>
          <button @click="previousPage" :disabled="currentPage === 1">
            წინა გვერდი
          </button>
          <span>{{ currentPage }}/{{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage === totalPages">
            შემდეგი გვერდი
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped="scoped">
.post_container {
  width: 100%;
  min-height: 200px;
  /*height: 690px;*/
  padding: 20px;
  float: left;
  overflow: scroll;
}

::-webkit-scrollbar {
  width: 5px;
}

.post {
  width: 100%;
  height: 100px;
  padding-top: 2px;
  /*background:#f0eff3;*/
  border-radius: 20px;
  margin-bottom: 20px;
  display: grid;
  border: 1px solid #09166166;
  background: white;
  grid-template-columns: auto auto auto auto auto;
}

.post:hover {
  background-color: #e8f0fd;
}

button.btn.btn-outline-secondary.btn-sm {
  padding: 0 5px;
  margin: 1px !important;
}

i.bi.bi-star {
  font-size: 12px;
  padding: 0 !important;
  margin: 0 !important;
}

.main_pos_com_info_bx p {
  margin-bottom: 0;
}

span.badge.d-flex.align-items-center.p-1.text-dark-emphasis.bg-light-subtle.border.border-dark-subtle.rounded-pill.btn-sm {
  padding: 0 5px !important;
  width: max-content;
  margin: 5px auto;
}

i.bi.bi-toggle-on {
  color: green;
}

i.bi.bi-telephone-outbound-fill {
  color: #1e51d3;
}

.border-dark-subtle {
  border-color: white !important;
}

a.pos span.badge.bg-success-subtle.border.border-success-subtle.text-success-emphasis.rounded-pill {
  border-radius: 4px !important;
  border: 0 !important;
  letter-spacing: 0.08em;
  font-family: cursive;
  font-weight: 500;
  font-size: 11px;
}

button.btn.btn-outline-secondary.btn-sm {
  border: 0;
}

span.badge.bg-secondary-subtle.text-secondary-emphasis.rounded-pill {
  border-radius: 4px !important;
  margin-left: 2px;
}

.post_main_title {
  padding: 10px 0;
  text-align: left;
  padding-left: 5%;
}

i.bi.bi-star-fill {
  color: #75e575;
}

i.bi.bi-star-half {
  color: #115ed6;
}

i.bi.bi-star {
  font-size: 14px;
  color: #115ed6;
}
a.pos{
    display: contents;
    color: rebeccapurple;
}
option{
  font-weight: 100;
}
</style>
<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "ვებ დეველოპერი",
          description: "საქმე აქტიურად მორბებული თბილისის ცენტრში.",
          price: "₾100",
          location: "თბილისი",
          data: '1011',
          post_type: 'ვაკანსია',
          category: 'IT-პროგრამირება',
            sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 2,
          title: "ვებ დეველოპერი",
          description: "კუთაისის უსაფრთხოების ზონაში.",
          price: "₾110",
          location: "ქუთაისი",
          data: '3',
          post_type: 'ვაკანსია',
          category: 'რამე',
            sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 3,
          title: "ფრონტ-ენდ დეველოპერი",
          description: "უსაფრთხოების ზონაში უსაფრთხო ბათუმის ფონირსი.",
          price: "₾120",
          location: "ბათუმი",
          data: '7',
          post_type: 'ვაკანსია',
          category: 'ლოჯისტიკა',
            sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 4,
          title: "ვებ დეველოპერი",
          description: "კომფორტულად და სახელმწიფო მდებარეობში.",
          price: "₾130",
          location: "რუსთავი",
          data: '1011',
          post_type: 'ვაკანსია',
          category: 'IT-პროგრამირება',
            sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 5,
          title: "ვებ დეველოპერი",
          description: "მზის და ზღვაარის მხარეს.",
          price: "₾90",
          location: "სამტრედია",
          data: '1011',
          post_type: 'ვაკანსია',
          category: 'ლოჯისტიკა',
            sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 6,
          title: "ბექ-ენდ დეველოპერი",
          description: "ბორჯომის უსაფრთხოებში, გაზაფხული კურორტის მხარეს.",
          price: "₾110",
          location: "ბორჯომი",
          data: '1011',
          post_type: 'ვაკანსია',
          category: 'დასუფთავება',
            sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 7,
          title: "ფულ-სტეკინგ დეველოპერი",
          description: "დუშეთის საკურორტო რაიონში.",
          price: "₾140",
          location: "დუშეთი",
          data: '1011',
          post_type: 'ვაკანსია',
          category: 'IT-პროგრამირება',
            sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 8,
          title: "ფულ-სტეკინგ დეველოპერი",
          description: "ულამაზეს კავკასიის მხარეს.",
          price: "₾95",
          location: "ზუგდიდი",
          data: '8',
          post_type: 'ვაკანსია',
          category: 'დასუფთავება',
        sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 9,
          title: "ბექ-ენდ დეველოპერი",
          description: "ხაშურის საკურორტო ზონაში.",
          price: "₾105",
          location: "ხაშური",
          data: '8',
          post_type: 'ვაკანსია',
          category: 'დასუფთავება',
        sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 10,
          title: "ფულ-სტეკინგ დეველოპერი",
          description: "გორის მზის და ზღვაარის მხარეს.",
          price: "₾125",
          location: "გორი",
          data: '24',
          post_type: 'ვაკანსია',
          category: 'რამე',
        sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        // Additional posts
        {
          id: 11,
          title: "UI/UX დიზაინერი",
          description: "უსაფრთხოებში სვანეთის მთავარ მოედანზე.",
          price: "₾80",
          location: "სვანეთი",
          data: '7',
          post_type: 'ვაკანსია',
          category: 'რამე',
            sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 12,
          title: "პროდუქტ მენეჯერი",
          description: "ფოთის მზის მხარეს, უსაფრთხო მნეული ქალაქი.",
          price: "₾115",
          location: "ფოთი",
          data: '7',
          post_type: 'ვაკანსია',
          category: 'რამე',
        sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 13,
          title: "ბექ-ენდ დეველოპერი",
          description: "ახალქალაქის შემოსავლელში.",
          price: "₾135",
          location: "ახალქალაქი",
          data: '3',
          post_type: 'ვაკანსია',
          category: 'რამე',
         sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 14,
          title: "ფრონტ-ენდ დეველოპერი",
          description: "საჩხერეს სამსახური ზონაში.",
          price: "₾125",
          location: "საჩხერე",
          data: '24',
            post_type: 'ვაკანსია',
            category: 'რამე',
            sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'

        },
        {
          id: 15,
          title: "ვებ დეველოპერი",
          description: "კოჯორის საკურორტო რაიონში.",
          price: "₾90",
          location: "კოჯორი",
          data: '3',
          post_type: 'ვაკანსია',
          category: 'რამე',
          sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 16,
          title: "ბექ-ენდ დეველოპერი",
          description: "წყალტუბოს უსაფრთხოებში, თეთრი კავკასიის მხარეს.",
          price: "₾110",
          location: "წყალტუბო",
          data: '3',
          post_type: 'ტენდერი',
          category: 'რამე',
          sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        {
          id: 17,
          title: "პროდუქტ მენეჯერი",
          description: "ახმეტის სამსახური ზონაში.",
          price: "₾105",
          location: "ახმეტა",
          data : '3',
          post_type: 'ვაკანსია',
          category: 'რამე',
          sub_category: 'ფრონტ-ენდ დეველოპერი',
          time_option: 'part-time',
          company_info: 'tbilisi marriot hotel'
        },
        // Add more posts as needed
      ],
      titleFilter: "",
      selectedPriceFilter: "",
      location: "",
      data: '',
      category: '',
      pageSize: 50, // Number of posts per page
      currentPage: 1,
    };
  },
  computed: {
    filteredPosts() {
      const titleFilter = this.titleFilter.toLowerCase();
      const priceFilter = this.selectedPriceFilter;
      const locmatch = this.location;
      const datatime = this.data
      const categ = this.category

      return this.posts.filter((post) => {
        const titleMatch = post.title.toLowerCase().includes(titleFilter);
        const priceMatch = !priceFilter || post.price === priceFilter;
        const locmatchs = post.location.includes(locmatch);
        const datat = post.data.includes(datatime)
        const cat = post.category.includes(categ)

        return titleMatch && priceMatch && locmatchs && datat && cat;
      });
    },

    totalPages() {
      return Math.ceil(this.filteredPosts.length / this.pageSize);
    },
    paginatedPosts() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.filteredPosts.slice(startIndex, endIndex);
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    psotgetid(event){
      const clickedDiv = event.target.getAttribute('data-att');
      //const divClass = clickedDiv.classList.value;
      console.log(clickedDiv)
      
    }
  },
  mounted(){
    
  }
};
</script>