import { request } from "./request";

export function getDetail(iid){
    return request({
        url:'/detail',
    params:{
        iid
    }
    })
}


export class Goods{
    // 构造函数
    constructor(itemInfo,columns,services){
        // 用一个类将所有需要请求的对象整合 直接调用
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.price
        this.oldPrice=itemInfo.oldPrice
        this.discount=itemInfo.discountDesc
        this.columns=columns
        this.services=services
        this.realPrice=itemInfo.lowNowPrice
    }
}

export class Shop{
    // 商家信息提取
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo;
        this.name=shopInfo.name;
        this.fans=shopInfo.cFans;
        this.sells=shopInfo.cSells;
        this.score=shopInfo.score;
        this.goodsCount=shopInfo.cGoods
    }
}

export class GoodsParm{
    // 商品详细信息 例如尺码
    constructor(info,rule){
        // images可能没有值
        this.image=info.image ? info.image[0] : ' '
        this.infos=info.set;
        this.sizes=rule.tables
    }
}