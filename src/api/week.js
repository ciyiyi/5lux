import http from "@utils/http"


//store_list
export const store_list=()=>http.get("/api/good/storelist")

//arrival_right
export const arrival_right=()=>http.get("/api/good/storelist?mtoken=&is_bespeak=1")

//hot_search
export const hot_search=(id=185)=>http.get("/api/search/recommend_list",{id})

//brand-list
export const brand_list=()=>http.get("/api/good/filter_brand")

///overseas
export const overseas=()=>http.get("/api/overseas/buttons_info")
//overseas_person
export const overseas_person=()=>http.get("/api/overseas/overseas_index")
//resultList  根据具体id跳转不同页面
export const resultList=(id=185,sort)=>http.get("/api/good/brand_detail",{
    id,
    sort,
    
})

//排序

export const topApi=()=>http.get("/api/list_new",{
    id: 185,
   
  
})


//搜索   模糊查询

export const search_api=(pid=2,search)=>http.get("/rpcsearchnew/getkey",{
    pid,
    search
})


