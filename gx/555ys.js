
/*
555影视去广告
*/
[rewrite_local] 
^https:\/\/vip7\.fzwdyy\.cn:8083\/api\/getAdvertInfo url reject
[mitm]
hostname = vip7.fzwdyy.cn
