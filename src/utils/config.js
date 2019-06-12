/**
 * Created by flyjennyetn on 2016-10-26.
 */
//服务器配置 前面项目名字首拼 JYH 后面是项目启动日期 171229


function configPro (data){
    switch (process.env.NODE_ENV){
        case "dev":
            return data.dev;
            break;
        case "uat":
            return data.uat;
            break;
        case "production":
            return data.production;
            break;
        default :
            return data.dev;
    }
}

//平台管理
export const PTGL180116 = {
    API_HOST: configPro({
        dev:'http://10.1.21.1:8016/tianrong-portal-web/',
        uat:'http://10.1.21.1:8016/tianrong-portal-web/',
        production:'http://10.1.21.1:8016/tianrong-portal-web/'
    }),
    APPID: configPro({
        dev:'SJPT-PC',
        uat:'SJPT-PC',
        production:'SJPT-PC'
    }),
    APPKEY: configPro({
        dev:'u4y8qxg18v',
        uat:'u4y8qxg18v',
        production:'u4y8qxg18v'
    })
};

//开放平台
export const KFPT180124 = {
    API_HOST: configPro({
        dev:'http://10.1.21.1:8016/tianrong-open-web/',
        uat:'hhttp://10.1.21.1:8016/tianrong-open-web/',
        production:'http://10.1.21.1:8016/tianrong-open-web/'
    }),
    APPID: configPro({
        dev:'SJPT-PC',
        uat:'SJPT-PC',
        production:'SJPT-PC'
    }),
    APPKEY: configPro({
        dev:'u4y8qxg18v',
        uat:'u4y8qxg18v',
        production:'u4y8qxg18v'
    })
};

//图片配置  显示服务器图片静态地址 /static/
export const REQUESTIMG = {
    API_HOST: configPro({
        dev:'http://test.jklife.com:8888/rear-ms',
        uat:'http://test.jklife.com:8888/rear-ms',
        production:'http://test.jklife.com:8888/rear-ms'
    })
};
