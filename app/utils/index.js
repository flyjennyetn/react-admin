/**
 * Created by flyjennyetn on 2016-10-26.
 */
import moment from "moment";

export const setTitle = (title) => {
  document.title = title
  if (is_IOS) {
    let i = document.createElement('iframe')
    i.src = '/favicon.ico'
    i.style.display = 'none'
    i.onload = () => {
      setTimeout(() => {
        i.remove()
      }, 0)
    }
    document.body.appendChild(i)
  }
}

export const replaceTxt=(str)=>{
    if (str == null || str == '') {
        return '';
    }
    return str.substr(0, 3) + "****" + str.substr(7, 10);
}
//去掉字符串头尾空格
export const trim=(str)=>{
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
/**
 * 功能：判断产品投保年龄是否满足
 参数：出生日期 最小年龄  最大年龄  生效日
 返回值：Boolean
 */
export const calculateAge=(birthday, minAge, maxAge,insuredDate)=>{
    var effectiveDate = '';
    if (insuredDate == null){
        effectiveDate = genTomorrowDate();
    }else {
        effectiveDate = insuredDate
    }
    var age = getCurrentAge(birthday, effectiveDate);//计算多少周岁
    var months = getMonthsFromBirth(birthday, effectiveDate);//计算出生多少月
    var days = getDaysFromBirth(birthday, effectiveDate);//计算出生了多少天
    //最小年龄
    if (minAge.indexOf('Y') > -1) {
        if (age < parseInt(minAge.replace("Y", ""))) {
            return false;
        }
    }
    if (minAge.indexOf('M') > -1) {
        if (months < parseInt(minAge.replace("M", ""))) {
            return false;
        }
    }
    if (minAge.indexOf('D') > -1) {
        if (days < parseInt(minAge.replace("D", ""))) {
            return false;
        }
    }
    //最大年龄
    if (maxAge.indexOf('Y') > -1) {
        if (age > parseInt(maxAge.replace("Y", ""))) {
            return false;
        }
    }
    if (maxAge.indexOf('M') > -1) {
        if (months > parseInt(maxAge.replace("M", ""))) {
            return false;
        }
    }
    if (maxAge.indexOf('D') > -1) {
        if (days > parseInt(maxAge.replace("D", ""))) {
            return false;
        }
    }
    return true;
}
/**
 *根据出生日期计算年龄
 * str : 出生日期
 * insuredDate : 投保生效日  
 */
export const getCurrentAge=(str, insuredDate)=>{
    var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) {
        return false;
    }
    var d = new Date(r[1], r[3] - 1, r[4]);
    var age = 0;
    if (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]) {
        var Y;
        if (insuredDate) {
            var insured = insuredDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            Y = new Date(insured[1], insured[3] - 1, insured[4]);
        } else {
            Y = new Date();
        }
        if (Y.getFullYear() - r[1] <= 0) {
            age = 0;
        } else {
            if (Y.getFullYear() - r[1] == 0) {
                age = 0;
            } else {
                if ((d.getMonth() + 1) > (Y.getMonth() + 1)) {
                    age = Y.getFullYear() - r[1] - 1;
                } else {
                    if ((d.getMonth() + 1) == (Y.getMonth() + 1) && (d.getDate()) > (Y.getDate())) {
                        age = Y.getFullYear() - r[1] - 1;
                    } else {
                        age = Y.getFullYear() - r[1];
                    }
                }
            }
        }
        return ( age <= 0 ? 0 : age);
    }
    return ("输入的日期格式错误！");
};


/**根据出生日期获取 出生多少月  传入yyyy-MM-dd
 /* birthday : 出生日期
 * insuredDate ： 保单生效日
 **/
export const getMonthsFromBirth=(birthday, insuredDate)=>{
    //用-分成数组
    var date1 = birthday.split("-");
    var date2 = insuredDate.split("-");
    //获取年,月数
    var year1 = parseInt(date1[0]),
        month1 = parseInt(date1[1]),
        year2 = parseInt(date2[0]),
        month2 = parseInt(date2[1]),
    //通过年,月差计算月份差
        months = (year2 - year1) * 12 + (month2 - month1);
    return months;
};

/**根据出生日期获取 出生多少天  传入yyyy-MM-dd
 /* day : 出生日期
 * insuredDate ： 保单生效日
 **/
export const getDaysFromBirth=(day, insuredDate)=>{
    if (day) {
        var birthday = new Date(day.replace(/-/g, '/')).getTime();
        var currentTimpstamp;
        if (insuredDate) {
            var insured = insuredDate.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            currentTimpstamp = new Date(insured[1], insured[3] - 1, insured[4]).getTime();
        } else {
            currentTimpstamp = new Date().getTime();
        }
        return ((currentTimpstamp - birthday) / 86400000).toFixed(0);
    } else {
        return 0
    }
};




/**
 * 功能：根据身份证号获得出生日期
 参数：身份证号 psidno
 返回值：
 出生日期*/
export const GetBirthday = (psidno)=>{              //返回格式   yyyy - mm - dd
    var birthdayno, birthdaytemp;
    if (psidno.length == 18) {
        birthdayno = psidno.substring(6, 14);
    } else if (psidno.length == 15) {
        birthdaytemp = psidno.substring(6, 12);
        birthdayno = "19" + birthdaytemp;
    } else {
        //alert("错误的身份证号码，请核对！")
        return false;
    }
    var birthday = birthdayno.substring(0, 4) +'-'+  birthdayno.substring(4, 6) +'-'+ birthdayno.substring(6, 8);
    return birthday;
}
/**
 * 功能：根据身份证号获得出生日期
 参数：身份证号 psidno
 返回值：
 出生日期*/
export const GetBirthdays = (psidno)=>{              //返回格式   yyyy - mm - dd
    var birthdayno, birthdaytemp;
    if (psidno.length == 18) {
        birthdayno = psidno.substring(6, 14);
    } else if (psidno.length == 15) {
        birthdaytemp = psidno.substring(6, 12);
        birthdayno = "19" + birthdaytemp;
    } else {
        //alert("错误的身份证号码，请核对！")
        return false;
    }
    var birthday = birthdayno.substring(0, 4) + "-" +birthdayno.substring(4, 6) +"-"+ birthdayno.substring(6, 8);
    return birthday;
}

/**
 * 通过身份证判断是男是女
 * @param idCard 15/18位身份证号码
 * @return 'female'-女、'male'-男
 * @return '1'-女、'0'-男
 */
export const maleOrFemalByIdCard=(idCard)=> {
    if (!idCard) {
        return "";
    }
    // 对身份证号码做处理。包括字符间有空格。
    idCard = trim(idCard.replace(/ /g, ""));
    if (idCard.length == 15) {
        if (idCard.substring(14, 15) % 2 == 0) {
            return '1';
        } else {
            return '0';
        }
    } else if (idCard.length == 18) {
        if (idCard.substring(14, 17) % 2 == 0) {
            return '1';
        } else {
            return '0';
        }
    } else {
        return null;
    }
}
// 获取时间
export function getHms() {
    const t = new Date();
    let h = t.getHours() + '';
    let m = t.getMinutes() + '';
    let s = t.getSeconds() + '';
    if (h < 10) {
        h = '0' + h
    }
    if (m < 10) {
        m = '0' + m
    }
    if (s < 10) {
        s = '0' + s
    }
    return h + m + s
}
//生成当前日期
export const genCurrentDate=()=>{
    var tomorrow = new Date();
    var month = tomorrow.getMonth() + 1;
    var date = tomorrow.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (date < 10) {
        date = "0" + date;
    }
    return tomorrow.getFullYear() + '' + month + '' + date;
};

//审核状态
export const auditStatus=(num)=>{
    switch(num)
    {
        case '0':
            return '已取消';
            break;
        case '1':
            return '审核通过';
            break;
        case '':
            return '审核中';
            break;
        case null:
            return '审核中';
            break;
        default:

    }
};
//判断保单的状态
export const getBirthday=(num)=>{
    return num.toString().substring(0,4)+'-'+num.toString().substring(4,6)+'-'+num.toString().substring(6,8)
};

//四舍五入保留2位小数（不够位数，则用0替补）
export const keepTwoDecimalFull = (num) =>{
    var result = parseFloat(num);
    if (isNaN(result)) {
        return false;
    }
    result = Math.round(num * 100) / 100;
    var s_x = result.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
    }
    return s_x;
}
//格式化数字
//str
//size-每隔几个字符进行分割 默认3
//delimiter-分割符 默认','
export const formatText = (str,size,delimiter)=>{
    var _str=str.toString();
    var _size=size||3,_delimiter=delimiter||',';
    /*
     如果_size是3
     "\d{1,3}(?=(\d{3})+$)"
     */
    var regText='\\d{1,'+_size+'}(?=(\\d{'+_size+'})+$)';
    /*
     /\d{1,3}(?=(\d{3})+$)/g     这个正则的意思：匹配连续的三个数字，但是这些三个数字不能是字符串的开头1-3个字符
     */
    var reg=new RegExp(regText,'g');
    /*
     (-?) 匹配前面的-号   (\d+)匹配中间的数字   ((\.\d+)?)匹配小数点后面的数字
     //$0-匹配结果，$1-第一个括号返回的内容----(-?)    $2,$3如此类推
     */
    return _str.replace(/^(-?)(\d+)((\.\d+)?)$/, function ($0, $1, $2, $3) {
        return $1 + $2.replace(reg, '$&,') + $3;
    })
}