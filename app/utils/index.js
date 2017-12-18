import moment from "moment";
import {Modal,Message} from 'antd';

export const  modalTis = (message,type = 'error')=>{
    let obj = {title: '提示',content: message}
    switch(type){
        case 'success':
            Modal.success(obj)
            break;    
        case 'error':
            Modal.error(obj)
            break;    
        case 'warning':
            Modal.warning(obj)
            break;
        default:
            Modal.info(obj)
    }
}

export const  messageTis = (message,type = 'error')=>{
    switch(type){
        case 'success':
            Message.success(message)
            break;    
        case 'error':
            Message.error(message)
            break;    
        case 'warning':
            Message.warning(message)
            break;        
        case 'loading':
            Message.loading(message)
            break;
        default:
            Message.info(message)
    }
}


// 获取url的参数
export const queryString = () => {
    let _queryString = {};
    const _query = window.location.search.substr(1);
    const _vars = _query.split('&');
    _vars.forEach((v, i) => {
        const _pair = v.split('=');
        if (!_queryString.hasOwnProperty(_pair[0])) {
            _queryString[_pair[0]] = decodeURIComponent(_pair[1]);
        } else if (typeof _queryString[_pair[0]] === 'string') {
            const _arr = [ _queryString[_pair[0]], decodeURIComponent(_pair[1])];
            _queryString[_pair[0]] = _arr;
        } else {
            _queryString[_pair[0]].push(decodeURIComponent(_pair[1]));
        }
    });
    return _queryString;
};

//距离你的位置还有多少
export const distance_format = (value) => (value > 1000 ? (value / 1000).toFixed(1) + '公里' : value.toFixed(1) + '米')

//格式化时间
export const date_format = (datetime, format) => moment(datetime).format(format)

export const date_obj = (datetime) => {
  const date = moment(datetime)
  const cdate = moment()
  if (date.isSame(cdate, 'day')) {
    return ({
      first_time: '',
      secend_time: date.format('HH:mm')
    })
  }
  if (date.isSame(cdate.subtract(1, 'days'), 'day')) {
    return ({
      first_time: '昨天',
      secend_time: date.format('HH:mm')
    })
  }
  if (date.isSame(cdate, 'month')) {
    return ({
      first_time: date.format('DD日'),
      secend_time: date.format('HH:mm')
    })
  }
  if (date.isSame(cdate.subtract(1, 'months'), 'month')) {
    return ({
      first_time: date.format('MM-DD'),
      secend_time: date.format('HH:mm')
    })
  }
  if (date.isSame(cdate, 'year')) {
    return ({
      first_time: '今年',
      secend_time: date.format('MM-DD')
    })
  }
  if (date.isSame(cdate.subtract(1, 'years'), 'year')) {
    return ({
      first_time: '去年',
      secend_time: date.format('MM-DD')
    })
  }
  return ({
    first_time: date.format('E'),
    secend_time: date.format('MM-DD')
  })
}


export const timeValue = (datetime) => {
  const diff = Math.abs(moment().diff(datetime))

  const leave1 = diff % (24 * 3600 * 1000)
  const leave2 = leave1 % (3600 * 1000)
  const leave3 = leave2 % (60 * 1000)
  const dateDiff = {
    days: Math.floor(diff / (24 * 3600 * 1000)), //日
    hours: Math.floor(leave1 / (3600 * 1000)), //小时
    minutes: Math.floor(leave2 / (60 * 1000)), //分
    seconds: Math.round(leave3 / 1000)
  }

  if (dateDiff.days >= 1) {
    return [`${dateDiff.days}天`]
  } else {
    return [dateDiff.hours, dateDiff.minutes, dateDiff.seconds]
  }
}

export const number_format = (s) => {
  var s1 = +s;
  if (!s1) return 0;
  var s2 = s1.toFixed(2);
  if (s2.substr(-1) !== '0') {
    return s2
  } else if (s2.substr(-2, 1) !== '0' && s2.substr(-1) === '0') {
    return s1.toFixed(1)
  } else {
    return s1.toFixed(0)
  }
}

export const is_IOS = typeof window !== 'undefined' && /(iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent)
export const is_Android = typeof window !== 'undefined' && /(Android)/i.test(window.navigator.userAgent)



export const showToast = (str)=> {
  Toast.info(str, 2);
}

export const setInsureInfo = (productId,obj)=>{
  cache.set(productId,_.merge(cache.get(productId),obj));
}

export const getInsureInfo = (productId,str)=>{
  return _.get(cache.get(productId), str);
}



//生成大写金额
export const getCapitalPrem=(num)=>{

    let strOutput = "";
    let strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
    num += "00";
    let intPos = num.indexOf('.');
    if (intPos >= 0)
        num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
    strUnit = strUnit.substr(strUnit.length - num.length);
    for (let i=0; i < num.length; i++)
        strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i,1),1) + strUnit.substr(i,1);
    let result = strOutput.replace(/零角零分$/, '零角零分').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元").split("");
    let length1 = result.length;
    if(length1<20){
        for(let j=0;j<20-length1;j++){
            result.unshift('');
        }
    }
    let length2 = result.length;
    let newResult = []
    for(let j=0;j<20;j++){
        if(j%2==0){
            newResult.push(result[j])
        }
    }
    return newResult
};



//去掉字符串头尾空格
export const trim=(str)=>{
    return str.replace(/(^\s*)|(\s*$)/g, "");
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
