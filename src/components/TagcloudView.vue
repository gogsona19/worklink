<template>
    <div class="tagclud">
        <div class="tags" v-for="item in georgianJobWords" :key="item">
            <a href="#" class="badge">{{item}}</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            georgianJobWords : [
  "მუშა",
  "კარიერა",
  "ვაკანსია",
  "გამოკითხვა",
  "შემსახურება",
  "კომპანია",
  "პოზიცია",
  "ინტერვიუ",
  "სკილები",
  "განათლება",
  "კურსები",
  "რეკრუტმენტი",
  "HR",
  "სასწორებელი",
  "კომუნიკაცია",
  "CV",
  "ბიზნესი",
  "ფინანსები",
  "ტექნოლოგია",
  "ინჟინრი",
  "დასაქმება",
  "პროექტები",
  "განაცხადება",
  "სერვისები",
  "კარიერის ბაზარი",
  "კოლექტივები",
  "კონფერენცია",
  "რეკომენდაცია",
  "გამოყენება",
  "ტრენინგი",
  "რეკრუტირება",
  "საქმეები",
  "მოწონება",
  "ხარისხი",
  "კარიერის წლები",
  "დროება",
  "ტრანსპორტი",
  "მისაღებები",
  "გენდერი",
  "ბანკები",
  // ... add more words as needed
] 
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
.tags{
    float: left;
    margin: 3px;
}
.tagclud{
    float: left;
    margin: 20px;
    overflow: hidden;
    padding: 10px;
}
a.badge {
    background-color: black;
    text-decoration: none;
}a.badge:hover{
    background-color: darkkhaki;
}
</style>