import { request } from "./request";

export function getCategoryGoods(){
    return request({
        url:'/subcategory?maitKey=3627'
    })
}