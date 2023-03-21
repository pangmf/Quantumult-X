
/*
555影视去广告
*/
[rewrite_local] 
^https:\/\/vip7\.fzwdyy\.cn:8083\/api\/getAdvertInfo url reject-200
^https:\/\/vip7\.fzwdyy\.cn:8083\/api\/getGOOGAdvert url reject-200
[mitm]
hostname = vip7.fzwdyy.cn
