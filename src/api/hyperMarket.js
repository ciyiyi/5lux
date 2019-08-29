import http from "@utils/http";

export const hyperMarket=()=>http.get("/shop/catalist")

//商城轮播图
export const hyperMarketCaro=()=>http.get("/shop/slide?mtoken=RjdMcE5IYkNrb1lOYzdZc1JQems4OElZelRSYmZWckpCRzhXZjNpYTd1TU44Z2ZBajBIZkZoQXpRN3VFU0ozQXpKNnRuekM4Z2k4bjFvbjczSDRURlpzMHVFQk15VTNKVGpWVU5zTXVUK3p6S3Bra1grOTBHYk5nZGVERW9OM1czWjVPYmVTbnh4TzFvcnlPbUN6VHlhQklJOVdsdHQxZUI4R1JUWGxRa1RjPQ==")

export const hyperMarketConent=(page=1)=>http.get("/shop/theirchose",{page});