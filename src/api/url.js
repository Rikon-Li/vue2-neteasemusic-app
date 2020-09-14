// export const HOST = 'http://10.36.150.194:8080/api';
export const HOST = 'http://localhost:8080/api';

export const BANNER_API = '/banner';

export const RECOMMEND_LIST_API = '/personalized';

export const SINGERS_API = '/artist/list';

export const RANK_API = '/toplist/detail';

// limit : 返回数量 , 默认为 30
// offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0 initial: 按首字母索引查找参数,如 /artist/list?type=1&area=96&initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列, 热门传-1,#传0

// type 取值:
// -1:全部
// 1:男歌手
// 2:女歌手
// 3:乐队

// area 取值:
// -1:全部
// 7华语
// 96欧美
// 8:日本
// 16韩国
// 0:其他

// 接口地址 : /artist/list
// 调用例子 : /artist/list?type=1&area=96&initial=b /artist/list?type=2&area=2&initial=b