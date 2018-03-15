/**
 * Created by flyjennyetn on 2017/12/25.
 */
import React, {
    PureComponent
} from 'react';
import {
    Card,
    Icon,
    Modal
} from 'antd';
import styles from './style.scss';

export default class extends PureComponent {

    state = {
        parentValue: undefined,
    }

    componentWillMount() {}


    componentDidMount() {}


    render() {
        const {
            visible,
            onCancel,
            onClick
        } = this.props;
        return (
            <Modal
                visible={visible}
                onCancel={onCancel}
                footer={null}
                title="图标"
            >
                <div className={styles.main}>
                    <h2>操作相关</h2>
                    <ul className={`${styles.icon_lists} clear`} style={{paddingLeft: '14px'}}>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-gotop','&#xe684;','返回顶部')}>
                            <i className={"icon Hui-iconfont"}>&#xe684;</i>
                            <div className={"name"}>返回顶部</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-menu','&#xe667;','列表')}>
                            <i className={"icon Hui-iconfont"}>&#xe667;</i>
                            <div className={"name"}>列表</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-jiandao','&#xe64e;','剪切')}>
                            <i className={"icon Hui-iconfont"}>&#xe64e;</i>
                            <div className={"name"}>剪切</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-search2','&#xe665;','搜索2')}>
                            <i className={"icon Hui-iconfont"}>&#xe665;</i>
                            <div className={"name"}>搜索2</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-search1','&#xe709;','搜索1')}>
                            <i className={"icon Hui-iconfont"}>&#xe709;</i>
                            <div className={"name"}>搜索1</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'save','&#xe632;','保存')}>
                            <i className={"icon Hui-iconfont"}>&#xe632;</i>
                            <div className={"name"}>保存</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-chexiao','&#xe66b;','撤销')}>
                            <i className={"icon Hui-iconfont"}>&#xe66b;</i>
                            <div className={"name"}>撤销</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-zhongzuo','&#xe66c;','重做')}>
                            <i className={"icon Hui-iconfont"}>&#xe66c;</i>
                            <div className={"name"}>重做</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-down','&#xe640;','下载')}> 
                            <i className={"icon Hui-iconfont"}>&#xe640;</i>
                            <div className={"name"}>下载</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-slider-right','&#xe63d;','切换器右')}>  
                            <i className={"icon Hui-iconfont"}>&#xe63d;</i>
                            <div className={"name"}>切换器右</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-slider-left','&#xe67d;','切换器左')}>  
                            <i className={"icon Hui-iconfont"}>&#xe67d;</i>
                            <div className={"name"}>切换器左</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-fabu','&#xe603;','发布')}>   
                            <i className={"icon Hui-iconfont"}>&#xe603;</i>
                            <div className={"name"}>发布</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-add2','&#xe604;','添加')}> 
                            <i className={"icon Hui-iconfont"}>&#xe604;</i>
                            <div className={"name"}>添加</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-huanyipi','&#xe68f;','换一批')}> 
                            <i className={"icon Hui-iconfont"}>&#xe68f;</i>
                            <div className={"name"}>换一批</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-dengdai','&#xe606;','等待')}> 
                            <i className={"icon Hui-iconfont"}>&#xe606;</i>
                            <div className={"name"}>等待</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-daochu','&#xe644;','导出')}> 
                            <i className={"icon Hui-iconfont"}>&#xe644;</i>
                            <div className={"name"}>导出</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-daoru','&#xe645;','导入')}> 
                            <i className={"icon Hui-iconfont"}>&#xe645;</i>
                            <div className={"name"}>导入</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-del','&#xe60b;','删除')}>  
                            <i className={"icon Hui-iconfont"}>&#xe60b;</i>
                            <div className={"name"}>删除</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-del2','&#xe609;','删除')}>  
                            <i className={"icon Hui-iconfont"}>&#xe609;</i>
                            <div className={"name"}>删除</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-del3','&#xe6e2;','删除')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6e2;</i>
                            <div className={"name"}>删除</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-shuru','&#xe647;','输入')}> 
                            <i className={"icon Hui-iconfont"}>&#xe647;</i>
                            <div className={"name"}>输入</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-add','&#xe600;','添加')}> 
                            <i className={"icon Hui-iconfont"}>&#xe600;</i>
                            <div className={"name"}>添加</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-jianhao','&#xe6a1;','减号')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6a1;</i>
                            <div className={"name"}>减号</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-edit2','&#xe60c;','编辑')}> 
                            <i className={"icon Hui-iconfont"}>&#xe60c;</i>
                            <div className={"name"}>编辑</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-edit','&#xe6df;','编辑')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6df;</i>
                            <div className={"name"}>编辑</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-manage','&#xe61d;','管理')}> 
                            <i className={"icon Hui-iconfont"}>&#xe61d;</i>
                            <div className={"name"}>管理</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-add3','&#xe610;','添加')}> 
                            <i className={"icon Hui-iconfont"}>&#xe610;</i>
                            <div className={"name"}>添加</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-add4','&#xe61f;','添加')}>  
                            <i className={"icon Hui-iconfont"}>&#xe61f;</i>
                            <div className={"name"}>添加</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-key','&#xe63f;','密码')}>  
                            <i className={"icon Hui-iconfont"}>&#xe63f;</i>
                            <div className={"name"}>密码</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-jiesuo','&#xe605;','解锁')}>  
                            <i className={"icon Hui-iconfont"}>&#xe605;</i>
                            <div className={"name"}>解锁</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-suoding','&#xe60e;','锁定')}> 
                            <i className={"icon Hui-iconfont"}>&#xe60e;</i>
                            <div className={"name"}>锁定</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-close','&#xe6a6;','关闭')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6a6;</i>
                            <div className={"name"}>关闭</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-close2','&#xe706;','关闭2')}> 
                            <i className={"icon Hui-iconfont"}>&#xe706;</i>
                            <div className={"name"}>关闭2</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-xuanze','&#xe6a7;','选择')}>  
                            <i className={"icon Hui-iconfont"}>&#xe6a7;</i>
                            <div className={"name"}>选择</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-weigouxuan2','&#xe608;','未选')}>  
                            <i className={"icon Hui-iconfont"}>&#xe608;</i>
                            <div className={"name"}>未选</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-xuanzhong1','&#xe6a8;','选中')}>  
                            <i className={"icon Hui-iconfont"}>&#xe6a8;</i>
                            <div className={"name"}>选中</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-xuanzhong','&#xe676;','选中')}>
                            <i className={"icon Hui-iconfont"}>&#xe676;</i>
                            <div className={"name"}>选中</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-weixuanzhong','&#xe677;','未选中')}> 
                            <i className={"icon Hui-iconfont"}>&#xe677;</i>
                            <div className={"name"}>未选中</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-gouxuan2','&#xe601;','启用')}> 
                            <i className={"icon Hui-iconfont"}>&#xe601;</i>
                            <div className={"name"}>启用</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-chongqi','&#xe6f7;','重启')}>  
                            <i className={"icon Hui-iconfont"}>&#xe6f7;</i>
                            <div className={"name"}>重启</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-selected','&#xe617;','勾选')}>  
                            <i className={"icon Hui-iconfont"}>&#xe617;</i>
                            <div className={"name"}>勾选</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-shangjia','&#xe6dc;','上架')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6dc;</i>
                            <div className={"name"}>上架</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-xiajia','&#xe6de;','下架')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6de;</i>
                            <div className={"name"}>下架</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-upload','&#xe642;','上传')}> 
                            <i className={"icon Hui-iconfont"}>&#xe642;</i>
                            <div className={"name"}>上传</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-yundown','&#xe641;','下载')}> 
                            <i className={"icon Hui-iconfont"}>&#xe641;</i>
                            <div className={"name"}>下载</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-caiqie','&#xe6bc;','剪裁')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6bc;</i>
                            <div className={"name"}>剪裁</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-xuanzhuan','&#xe6bd;','旋转')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6bd;</i>
                            <div className={"name"}>旋转</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-gouxuan','&#xe615;','启用')}>
                            <i className={"icon Hui-iconfont"}>&#xe615;</i>
                            <div className={"name"}>启用</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-weigouxuan','&#xe6e1;','未勾选')}>
                            <i className={"icon Hui-iconfont"}>&#xe6e1;</i>
                            <div className={"name"}>未勾选</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-luyin','&#xe619;','录音')}> 
                            <i className={"icon Hui-iconfont"}>&#xe619;</i>
                            <div className={"name"}>录音</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-yulan','&#xe695;','预览')}> 
                            <i className={"icon Hui-iconfont"}>&#xe695;</i>
                            <div className={"name"}>预览</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-shenhe-weitongguo','&#xe6e0;','审核不通过')}>  
                            <i className={"icon Hui-iconfont"}>&#xe6e0;</i>
                            <div className={"name"}>审核不通过</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-shenhe-butongguo2','&#xe6dd;','审核不通过')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6dd;</i>
                            <div className={"name"}>审核不通过</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-shenhe-tongguo','&#xe6e1;','审核通过')}>
                            <i className={"icon Hui-iconfont"}>&#xe6e1;</i>
                            <div className={"name"}>审核通过</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-shenhe-tingyong','&#xe631;','停用')}>
                            <i className={"icon Hui-iconfont"}>&#xe631;</i>
                            <div className={"name"}>停用</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-bofang','&#xe6e6;','播放')}>
                            <i className={"icon Hui-iconfont"}>&#xe6e6;</i>
                            <div className={"name"}>播放</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-shangyishou','&#xe6db;','上一首')}>
                            <i className={"icon Hui-iconfont"}>&#xe6db;</i>
                            <div className={"name"}>上一首</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-xiayishou','&#xe6e3;','下一首')}>
                            <i className={"icon Hui-iconfont"}>&#xe6e3;</i>
                            <div className={"name"}>下一首</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-zanting','&#xe6e5;','暂停')}>
                            <i className={"icon Hui-iconfont"}>&#xe6e5;</i>
                            <div className={"name"}>暂停</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-tingzhi','&#xe6e4;','停止')}>
                            <i className={"icon Hui-iconfont"}>&#xe6e4;</i>
                            <div className={"name"}>停止</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-yuedu','&#xe720;','阅读')}>
                            <i className={"icon Hui-iconfont"}>&#xe720;</i>
                            <div className={"name"}>阅读</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-yanjing','&#xe725;','眼睛')}>
                            <i className={"icon Hui-iconfont"}>&#xe725;</i>
                            <div className={"name"}>眼睛</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-power','&#xe726;','电源')}>
                            <i className={"icon Hui-iconfont"}>&#xe726;</i>
                            <div className={"name"}>电源</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-xiangpicha','&#xe72a;','图标2_橡皮擦')}>
                            <i className={"icon Hui-iconfont"}>&#xe72a;</i>
                            <div className={"name"}>图标2_橡皮擦</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-jishiqi','&#xe728;','计时器')}>
                            <i className={"icon Hui-iconfont"}>&#xe728;</i>
                            <div className={"name"}>计时器</div>
                        </li>
                        
                    </ul>
                    <h2>菜单相关</h2>
                    <ul className={`${styles.icon_lists} clear`} style={{paddingLeft: '14px'}}>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-home','&#xe625;','home')}>
                            <i className={"icon Hui-iconfont"}>&#xe625;</i>
                            <div className={"name"}>home</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-home2','&#xe67f;','小箭头')}>
                            <i className={"icon Hui-iconfont"}>&#xe67f;</i>
                            <div className={"name"}>小箭头</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-news','&#xe616;','cmstop新闻')}>
                            <i className={"icon Hui-iconfont"}>&#xe616;</i>
                            <div className={"name"}>cmstop新闻</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-tuku','&#xe613;','图片')}> 
                            <i className={"icon Hui-iconfont"}>&#xe613;</i>
                            <div className={"name"}>图片</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-music','&#xe60f;','音乐')}> 
                        <i className={"icon Hui-iconfont"}>&#xe60f;</i>
                            <div className={"name"}>音乐</div>

                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-tags','&#xe64b;','标签')}> 
                        <i className={"icon Hui-iconfont"}>&#xe64b;</i>
                            <div className={"name"}>标签</div>

                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-yuyin3','&#xe66f;','语音')}> 
                        <i className={"icon Hui-iconfont"}>&#xe66f;</i>
                            <div className={"name"}>语音</div>

                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-system','&#xe62e;','系统')}> 
                        <i className={"icon Hui-iconfont"}>&#xe62e;</i>
                            <div className={"name"}>系统</div>

                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-help','&#xe633;','帮助')}> 
                            <i className={"icon Hui-iconfont"}>&#xe633;</i>
                            <div className={"name"}>帮助</div>

                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-chuku','&#xe634;','出库')}> 
                            <i className={"icon Hui-iconfont"}>&#xe634;</i>
                            <div className={"name"}>出库</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-picture','&#xe646;','图片')}> 
                            <i className={"icon Hui-iconfont"}>&#xe646;</i>
                            <div className={"name"}>图片</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-fenlei','&#xe681;','分类')}> 
                            <i className={"icon Hui-iconfont"}>&#xe681;</i>
                            <div className={"name"}>分类</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-hetong','&#xe636;','合同管理')}> 
                            <i className={"icon Hui-iconfont"}>&#xe636;</i>
                            <div className={"name"}>合同管理</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-quanbudingdan','&#xe687;','全部订单')}> 
                            <i className={"icon Hui-iconfont"}>&#xe687;</i>
                            <div className={"name"}>全部订单</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-renwu','&#xe637;','任务管理')}> 
                            <i className={"icon Hui-iconfont"}>&#xe637;</i>
                            <div className={"name"}>任务管理</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-feedback','&#xe691;','问题反馈')}> 
                            <i className={"icon Hui-iconfont"}>&#xe691;</i>
                            <div className={"name"}>问题反馈</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-feedback2','&#xe692;','意见反馈')}> 
                            <i className={"icon Hui-iconfont"}>&#xe692;</i>
                            <div className={"name"}>意见反馈</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-dangan','&#xe639;','合同')}> 
                            <i className={"icon Hui-iconfont"}>&#xe639;</i>
                            <div className={"name"}>合同</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-log','&#xe623;','日志')}> 
                            <i className={"icon Hui-iconfont"}>&#xe623;</i>
                            <div className={"name"}>日志</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-pages','&#xe626;','列表页面')}> 
                            <i className={"icon Hui-iconfont"}>&#xe626;</i>
                            <div className={"name"}>列表页面</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-file','&#xe63e;','文件')}> 
                            <i className={"icon Hui-iconfont"}>&#xe63e;</i>
                            <div className={"name"}>文件</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-manage2','&#xe63c;','管理')}> 
                            <i className={"icon Hui-iconfont"}>&#xe63c;</i>
                            <div className={"name"}>管理</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-order','&#xe627;','订单')}> 
                            <i className={"icon Hui-iconfont"}>&#xe627;</i>
                            <div className={"name"}>订单</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-yuyin2','&#xe6a4;','语音')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6a4;</i>
                            <div className={"name"}>语音</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-yuyin','&#xe6a5;','语音')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6a5;</i>
                            <div className={"name"}>语音</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-picture1','&#xe612;','图片')}> 
                            <i className={"icon Hui-iconfont"}>&#xe612;</i>
                            <div className={"name"}>图片</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-tuwenxiangqing','&#xe685;','图文详情')}> 
                            <i className={"icon Hui-iconfont"}>&#xe685;</i>
                            <div className={"name"}>图文详情</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-moban-2','&#xe72d;','模版')}>
                            <i className={"icon Hui-iconfont"}>&#xe72d;</i>
                            <div className={"name"}>模版</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-jieri','&#xe727;','节日')}>
                            <i className={"icon Hui-iconfont"}>&#xe727;</i>
                            <div className={"name"}>节日</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-moban','&#xe72b;','随你后台-网站')}>
                            <i className={"icon Hui-iconfont"}>&#xe72b;</i>
                            <div className={"name"}>随你后台-网站</div>
                        </li>
                    </ul>
                    <h2>天气相关</h2>
                    <ul className={`${styles.icon_lists} clear`} style={{paddingLeft: '14px'}}>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-duoyun','&#xe6ac;','多云')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6ac;</i>
                            <div className={"name"}>多云</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-mai','&#xe6ad;','霾')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6ad;</i>
                            <div className={"name"}>霾</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-qing','&#xe6ae;','晴')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6ae;</i>
                            <div className={"name"}>晴</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-wu','&#xe6af;','雾')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6af;</i>
                            <div className={"name"}>雾</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-xue','&#xe6b0;','雪')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6b0;</i>
                            <div className={"name"}>雪</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-yin','&#xe6b1;','阴')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6b1;</i>
                            <div className={"name"}>阴</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-yu','&#xe6b2;','雨')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6b2;</i>
                            <div className={"name"}>雨</div>
                        </li>
                    </ul>
                    <h2>用户相关</h2>
                    <ul className={`${styles.icon_lists} clear`} style={{paddingLeft: '14px'}}>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-user','&#xe62c;','用户')}> 
                            <i className={"icon Hui-iconfont"}>&#xe62c;</i>
                            <div className={"name"}>用户</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-user2','&#xe60d;','用户')}> 
                            <i className={"icon Hui-iconfont"}>&#xe60d;</i>
                            <div className={"name"}>用户</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-avatar','&#xe60a;','用户头像')}> 
                            <i className={"icon Hui-iconfont"}>&#xe60a;</i>
                            <div className={"name"}>用户头像</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-avatar2','&#xe705;','个人中心')}>
                            <i className={"icon Hui-iconfont"}>&#xe705;</i>
                            <div className={"name"}>个人中心</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-add','&#xe607;','添加用户')}> 
                            <i className={"icon Hui-iconfont"}>&#xe607;</i>
                            <div className={"name"}>添加用户</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-userid','&#xe602;','用户ID')}> 
                            <i className={"icon Hui-iconfont"}>&#xe602;</i>
                            <div className={"name"}>用户ID</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-zhizhao','&#xe638;','证照管理')}> 
                            <i className={"icon Hui-iconfont"}>&#xe638;</i>
                            <div className={"name"}>证照管理</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-practice','&#xe70d;','执业证')}>
                            <i className={"icon Hui-iconfont"}>&#xe70d;</i>
                            <div className={"name"}>执业证</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-user-group','&#xe62b;','群组')}> 
                            <i className={"icon Hui-iconfont"}>&#xe62b;</i>
                            <div className={"name"}>群组</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-user-zhanzhang','&#xe653;','站长')}> 
                            <i className={"icon Hui-iconfont"}>&#xe653;</i>
                            <div className={"name"}>站长</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-root','&#xe62d;','管理员')}> 
                            <i className={"icon Hui-iconfont"}>&#xe62d;</i>
                            <div className={"name"}>管理员</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-gongsi','&#xe643;','公司')}> 
                            <i className={"icon Hui-iconfont"}>&#xe643;</i>
                            <div className={"name"}>公司</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-vip-card2','&#xe6b4;','会员卡')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6b4;</i>
                            <div className={"name"}>会员卡</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-vip','&#xe6cc;','会员')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6cc;</i>
                            <div className={"name"}>会员</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-usergroup2','&#xe611;','群组')}> 
                            <i className={"icon Hui-iconfont"}>&#xe611;</i>
                            <div className={"name"}>群组</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-kefu','&#xe6d0;','客服')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6d0;</i>
                            <div className={"name"}>客服</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-banzhu','&#xe72c;','版主')}>
                            <i className={"icon Hui-iconfont"}>&#xe72c;</i>
                            <div className={"name"}>版主</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-huangguan','&#xe6d3;','皇冠')}>
                            <i className={"icon Hui-iconfont"}>&#xe6d3;</i>
                            <div className={"name"}>皇冠</div>
                        </li>
                    </ul>
                    <h2>表情相关</h2>
                    <ul className={`${styles.icon_lists} clear`} style={{paddingLeft: '14px'}}>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face2','&#xe68e;','表情')}> 
                            <i className={"icon Hui-iconfont"}>&#xe68e;</i>
                            <div className={"name"}>表情</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face','&#xe668;','表情')}> 
                            <i className={"icon Hui-iconfont"}>&#xe668;</i>
                            <div className={"name"}>表情</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-weixiao','&#xe656;','微笑')}> 
                            <i className={"icon Hui-iconfont"}>&#xe656;</i>
                            <div className={"name"}>微笑</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-ku','&#xe688;','哭脸')}> 
                            <i className={"icon Hui-iconfont"}>&#xe688;</i>
                            <div className={"name"}>哭脸</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-chijing','&#xe657;','吃惊')}> 
                            <i className={"icon Hui-iconfont"}>&#xe657;</i>
                            <div className={"name"}>吃惊</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-dai','&#xe658;','呆')}> 
                            <i className={"icon Hui-iconfont"}>&#xe658;</i>
                            <div className={"name"}>呆</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-shuaku','&#xe659;','耍酷')}> 
                            <i className={"icon Hui-iconfont"}>&#xe659;</i>
                            <div className={"name"}>耍酷</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-mogui','&#xe65a;','魔鬼')}> 
                            <i className={"icon Hui-iconfont"}>&#xe65a;</i>
                            <div className={"name"}>魔鬼</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-ganga','&#xe65b;','尴尬')}> 
                            <i className={"icon Hui-iconfont"}>&#xe65b;</i>
                            <div className={"name"}>尴尬</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-qin','&#xe65c;','亲')}> 
                            <i className={"icon Hui-iconfont"}>&#xe65c;</i>
                            <div className={"name"}>亲</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-nu','&#xe65d;','怒')}> 
                            <i className={"icon Hui-iconfont"}>&#xe65d;</i>
                            <div className={"name"}>怒</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-zhayan','&#xe65e;','眨眼')}> 
                            <i className={"icon Hui-iconfont"}>&#xe65e;</i>
                            <div className={"name"}>眨眼</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-shengqi','&#xe65f;','生气')}> 
                            <i className={"icon Hui-iconfont"}>&#xe65f;</i>
                            <div className={"name"}>生气</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-ma','&#xe660;','骂')}> 
                            <i className={"icon Hui-iconfont"}>&#xe660;</i>
                            <div className={"name"}>骂</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-bishi','&#xe661;','鄙视')}> 
                            <i className={"icon Hui-iconfont"}>&#xe661;</i>
                            <div className={"name"}>鄙视</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-maimeng','&#xe662;','卖萌')}> 
                            <i className={"icon Hui-iconfont"}>&#xe662;</i>
                            <div className={"name"}>卖萌</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-jingdai','&#xe663;','惊呆')}> 
                            <i className={"icon Hui-iconfont"}>&#xe663;</i>
                            <div className={"name"}>惊呆</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-face-yun','&#xe664;','晕')}> 
                            <i className={"icon Hui-iconfont"}>&#xe664;</i>
                            <div className={"name"}>晕</div>
                        </li>
                    </ul>
                    <h2>社区相关</h2>
                    <ul className={`${styles.icon_lists} clear`} style={{paddingLeft: '14px'}}>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-share2','&#xe666;','分享')}> 
                            <i className={"icon Hui-iconfont"}>&#xe666;</i>
                            <div className={"name"}>分享</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-share','&#xe6aa;','分享')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6aa;</i>
                            <div className={"name"}>分享</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-share-renren','&#xe6d8;','人人网')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6d8;</i>
                            <div className={"name"}>人人网</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-share-tweibo','&#xe6d9;','腾讯微博')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6d9;</i>
                            <div className={"name"}>腾讯微博</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-share-douban','&#xe67c;','豆瓣')}>
                            <i className={"icon Hui-iconfont"}>&#xe67c;</i>
                            <div className={"name"}>豆瓣</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-share-pengyouquan','&#xe693;','朋友圈')}>
                            <i className={"icon Hui-iconfont"}>&#xe693;</i>
                            <div className={"name"}>朋友圈</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-share-weixin','&#xe694;','微信')}>
                            <i className={"icon Hui-iconfont"}>&#xe694;</i>
                            <div className={"name"}>微信</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-share-qq','&#xe67b;','QQ')}>
                            <i className={"icon Hui-iconfont"}>&#xe67b;</i>
                            <div className={"name"}>QQ</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-share-qzone','&#xe6c8;','QQ空间')}>
                            <i className={"icon Hui-iconfont"}>&#xe6c8;</i>
                            <div className={"name"}>QQ空间</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-share-weibo','&#xe6da;','微博')}>
                            <i className={"icon Hui-iconfont"}>&#xe6da;</i>
                            <div className={"name"}>微博</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-share-zhihu','&#xe689;','知乎')}> 
                            <i className={"icon Hui-iconfont"}>&#xe689;</i>
                            <div className={"name"}>知乎</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-gengduo','&#xe715;','更多')}>
                            <i className={"icon Hui-iconfont"}>&#xe715;</i>
                            <div className={"name"}>更多</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-gengduo2','&#xe716;','更多')}>
                            <i className={"icon Hui-iconfont"}>&#xe716;</i>
                            <div className={"name"}>更多</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-engduo3','&#xe6f9;','更多')}>
                            <i className={"icon Hui-iconfont"}>&#xe6f9;</i>
                            <div className={"name"}>更多</div>
                        </li>
                         <li onClick={(e)=>onClick(e,'Hui-iconfont-gengduo4','&#xe717;','更多')}>
                            <i className={"icon Hui-iconfont"}>&#xe717;</i>
                            <div className={"name"}>更多</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-like','&#xe649;','喜欢')}> 
                            <i className={"icon Hui-iconfont"}>&#xe649;</i>
                            <div className={"name"}>喜欢</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-like2','&#xe648;','喜欢')}> 
                            <i className={"icon Hui-iconfont"}>&#xe648;</i>
                            <div className={"name"}>喜欢</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-yiguanzhu','&#xe680;','已关注')}> 
                            <i className={"icon Hui-iconfont"}>&#xe680;</i>
                            <div className={"name"}>已关注</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-comment','&#xe622;','评论')}> 
                            <i className={"icon Hui-iconfont"}>&#xe622;</i>
                            <div className={"name"}>评论</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-leijipingjia','&#xe686;','累计评价')}> 
                            <i className={"icon Hui-iconfont"}>&#xe686;</i>
                            <div className={"name"}>累计评价</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-xiaoxi','&#xe68a;','消息')}> 
                            <i className={"icon Hui-iconfont"}>&#xe68a;</i>
                            <div className={"name"}>消息</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-cang','&#xe61b;','收藏')}> 
                            <i className={"icon Hui-iconfont"}>&#xe61b;</i>
                            <div className={"name"}>收藏</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-cang-selected','&#xe630;','收藏-选中')}> 
                            <i className={"icon Hui-iconfont"}>&#xe630;</i>
                            <div className={"name"}>收藏-选中</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-cang2','&#xe69e;','收藏')}> 
                            <i className={"icon Hui-iconfont"}>&#xe69e;</i>
                            <div className={"name"}>收藏</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-cang2-selected','&#xe69d;','收藏-选中')}> 
                            <i className={"icon Hui-iconfont"}>&#xe69d;</i>
                            <div className={"name"}>收藏-选中</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-more','&#xe68b;','关注-更多操作')}> 
                            <i className={"icon Hui-iconfont"}>&#xe68b;</i>
                            <div className={"name"}>关注-更多操作</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-zan','&#xe66d;','赞扬')}> 
                            <i className={"icon Hui-iconfont"}>&#xe66d;</i>
                            <div className={"name"}>赞扬</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-cai','&#xe66e;','批评')}> 
                            <i className={"icon Hui-iconfont"}>&#xe66e;</i>
                            <div className={"name"}>批评</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-zan2','&#xe697;','点赞')}> 
                            <i className={"icon Hui-iconfont"}>&#xe697;</i>
                            <div className={"name"}>点赞</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-msg','&#xe62f;','通知')}> 
                            <i className={"icon Hui-iconfont"}>&#xe62f;</i>
                            <div className={"name"}>通知</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-email','&#xe63b;','消息管理')}> 
                            <i className={"icon Hui-iconfont"}>&#xe63b;</i>
                            <div className={"name"}>消息管理</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-yiguanzhu1','&#xe6a9;','已关注店铺')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6a9;</i>
                            <div className={"name"}>已关注店铺</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-zhuanfa','&#xe6ab;','转发')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6ab;</i>
                            <div className={"name"}>转发</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-daipingjia','&#xe6b3;','待评价')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6b3;</i>
                            <div className={"name"}>待评价</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-jifen','&#xe6b5;','积分')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6b5;</i>
                            <div className={"name"}>积分</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-xiaoxi1','&#xe6c5;','消息')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6c5;</i>
                            <div className={"name"}>消息</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-read','&#xe70b;','已读')}>
                            <i className={"icon Hui-iconfont"}>&#xe70b;</i>
                            <div className={"name"}>已读</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-feedback1','&#xe70c;','用户反馈')}>
                            <i className={"icon Hui-iconfont"}>&#xe70c;</i>
                            <div className={"name"}>用户反馈</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-dingyue','&#xe6ce;','订阅')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6ce;</i>
                            <div className={"name"}>订阅</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-tishi','&#xe6cd;','提示')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6cd;</i>
                            <div className={"name"}>提示</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-star-o','&#xe702;','star-o')}>
                            <i className={"icon Hui-iconfont"}>&#xe702;</i>
                            <div className={"name"}>star-o</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-star','&#xe6ff;','star')}>
                            <i className={"icon Hui-iconfont"}>&#xe6ff;</i>
                            <div className={"name"}>star</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-star-half','&#xe700;','xe6ff')}>
                            <i className={"icon Hui-iconfont"}>&#xe700;</i>
                            <div className={"name"}>star-half</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-star-halfempty','&#xe701;','star-half-empty')}>
                            <i className={"icon Hui-iconfont"}>&#xe701;</i>
                            <div className={"name"}>star-half-empty</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-comment1','&#xe70a;','我的评价')}>
                            <i className={"icon Hui-iconfont"}>&#xe70a;</i>
                            <div className={"name"}>我的评价</div>
                        </li>
                    </ul>
                    <h2>统计相关</h2>
                    <ul className={`${styles.icon_lists} clear`} style={{paddingLeft: '14px'}}>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-tongji-bing','&#xe621;','数据统计')}> 
                            <i className={"icon Hui-iconfont"}>&#xe621;</i>
                            <div className={"name"}>数据统计</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-ad','&#xe635;','统计管理')}> 
                            <i className={"icon Hui-iconfont"}>&#xe635;</i>
                            <div className={"name"}>统计管理</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-shujutongji','&#xe61e;','数据统计')}> 
                            <i className={"icon Hui-iconfont"}>&#xe61e;</i>
                            <div className={"name"}>数据统计</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-tongji','&#xe61a;','统计')}> 
                            <i className={"icon Hui-iconfont"}>&#xe61a;</i>
                            <div className={"name"}>统计</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-tongji-zhu','&#xe618;','柱状统计')}> 
                            <i className={"icon Hui-iconfont"}>&#xe618;</i>
                            <div className={"name"}>柱状统计</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-tongji-xian','&#xe61c;','线状统计')}> 
                            <i className={"icon Hui-iconfont"}>&#xe61c;</i>
                            <div className={"name"}>线状统计</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-paixingbang','&#xe6cf;','排行榜')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6cf;</i>
                            <div className={"name"}>排行榜</div>
                        </li>
                    </ul>
                    <h2>箭头相关</h2>
                    <ul className={`${styles.icon_lists} clear`} style={{paddingLeft: '14px'}}>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-arrow1-bottom','&#xe678;','向左')}> 
                            <i className={"icon Hui-iconfont"}>&#xe678;</i>
                            <div className={"name"}>向左</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-arrow1-bottom','&#xe674;','向下')}> 
                            <i className={"icon Hui-iconfont"}>&#xe674;</i>
                            <div className={"name"}>向下</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-arrow1-top','&#xe679;','向上')}> 
                            <i className={"icon Hui-iconfont"}>&#xe679;</i>
                            <div className={"name"}>向上</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-arrow1-right','&#xe67a;','向右')}> 
                            <i className={"icon Hui-iconfont"}>&#xe67a;</i>
                            <div className={"name"}>向右</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-arrow2-left','&#xe6d4;','向左')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6d4;</i>
                            <div className={"name"}>向左</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-arrow2-top','&#xe6d6;','向上')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6d6;</i>
                            <div className={"name"}>向上</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-arrow2-right','&#xe6d7;','向右')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6d7;</i>
                            <div className={"name"}>向右</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-arrow2-bottom','&#xe6d5;','向下')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6d5;</i>
                            <div className={"name"}>向下</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-arrow3-left','&#xe69b;','向左')}> 
                            <i className={"icon Hui-iconfont"}>&#xe69b;</i>
                            <div className={"name"}>向左</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-arrow3-top','&#xe699;','向上')}> 
                            <i className={"icon Hui-iconfont"}>&#xe699;</i>
                            <div className={"name"}>向上</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-arrow3-right','&#xe69a;','向右')}> 
                            <i className={"icon Hui-iconfont"}>&#xe69a;</i>
                            <div className={"name"}>向右</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-arrow3-bottom','&#xe698;','向下')}> 
                            <i className={"icon Hui-iconfont"}>&#xe698;</i>
                            <div className={"name"}>向下</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-sanjiao','&#xe67e;','向右')}> 
                            <i className={"icon Hui-iconfont"}>&#xe67e;</i>
                            <div className={"name"}>向右</div>
                        </li>
                    </ul>
                    <h2>电商相关</h2>
                    <ul className={`${styles.icon_lists} clear`} style={{paddingLeft: '14px'}}>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-wuliu','&#xe669;','物流')}> 
                            <i className={"icon Hui-iconfont"}>&#xe669;</i>
                            <div className={"name"}>物流</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-dianpu','&#xe66a;','店铺')}> 
                            <i className={"icon Hui-iconfont"}>&#xe66a;</i>
                            <div className={"name"}>店铺</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-cart2-selected','&#xe670;','购物车')}> 
                            <i className={"icon Hui-iconfont"}>&#xe670;</i>
                            <div className={"name"}>购物车</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-cart2-man','&#xe672;','购物车满')}> 
                            <i className={"icon Hui-iconfont"}>&#xe672;</i>
                            <div className={"name"}>购物车满</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-card2-kong','&#xe673;','购物车空')}> 
                            <i className={"icon Hui-iconfont"}>&#xe673;</i>
                            <div className={"name"}>购物车空</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-cart-selected','&#xe6b8;','购物车-选中')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6b8;</i>
                            <div className={"name"}>购物车-选中</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-cart-kong','&#xe6b9;','购物车')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6b9;</i>
                            <div className={"name"}>购物车</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-jiangjia','&#xe6ba;','降价')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6ba;</i>
                            <div className={"name"}>降价</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-bank','&#xe628;','信用卡还款')}> 
                            <i className={"icon Hui-iconfont"}>&#xe628;</i>
                            <div className={"name"}>信用卡还款</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-liwu','&#xe6bb;','礼物')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6bb;</i>
                            <div className={"name"}>礼物</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-youhuiquan','&#xe6b6;','优惠券')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6b6;</i>
                            <div className={"name"}>优惠券</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-hongbao','&#xe6b7;','红包')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6b7;</i>
                            <div className={"name"}>红包</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-hongbao2','&#xe6ca;','优惠券')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6ca;</i>
                            <div className={"name"}>优惠券</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-money','&#xe63a;','资金')}> 
                            <i className={"icon Hui-iconfont"}>&#xe63a;</i>
                            <div className={"name"}>资金</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-goods','&#xe620;','商品')}> 
                            <i className={"icon Hui-iconfont"}>&#xe620;</i>
                            <div className={"name"}>商品</div>
                        </li>
                    </ul>
                    <h2>编辑器</h2>
                    <ul className={`${styles.icon_lists} clear`} style={{paddingLeft: '14px'}}>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-code','&#xe6ee;','code')}>
                            <i className={"icon Hui-iconfont"}>&#xe6ee;</i>
                            <div className={"name"}>code</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-align-left','&#xe710;','左对齐')}>
                            <i className={"icon Hui-iconfont"}>&#xe710;</i>
                            <div className={"name"}>左对齐</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-align-center','&#xe70e;','居中对齐')}>
                            <i className={"icon Hui-iconfont"}>&#xe70e;</i>
                            <div className={"name"}>居中对齐</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-align-right','&#xe711;','右对齐')}>
                            <i className={"icon Hui-iconfont"}>&#xe711;</i>
                            <div className={"name"}>右对齐</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-align-justify','&#xe70f;','两头对齐')}>
                            <i className={"icon Hui-iconfont"}>&#xe70f;</i>
                            <div className={"name"}>两头对齐</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-font','&#xe6ec;','字体')}>
                            <i className={"icon Hui-iconfont"}>&#xe6ec;</i>
                            <div className={"name"}>字体</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-bold','&#xe6e7;','加粗')}>
                            <i className={"icon Hui-iconfont"}>&#xe6e7;</i>
                            <div className={"name"}>加粗</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-italic','&#xe6e9;','倾斜')}>
                            <i className={"icon Hui-iconfont"}>&#xe6e9;</i>
                            <div className={"name"}>倾斜</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-underline','&#xe6fe;','下划线')}>
                            <i className={"icon Hui-iconfont"}>&#xe6fe;</i>
                            <div className={"name"}>下划线</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-text-height','&#xe6fc;','text-height')}>
                            <i className={"icon Hui-iconfont"}>&#xe6fc;</i>
                            <div className={"name"}>text-height</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-text-width','&#xe6fd;','text-width')}>
                            <i className={"icon Hui-iconfont"}>&#xe6fd;</i>
                            <div className={"name"}>text-width</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-link','&#xe6f1;','link')}>
                            <i className={"icon Hui-iconfont"}>&#xe6f1;</i>
                            <div className={"name"}>link</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-ordered-list','&#xe6f3;','有序列表')}>
                            <i className={"icon Hui-iconfont"}>&#xe6f3;</i>
                            <div className={"name"}>有序列表</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-unordered-list','&#xe6f5;','无序列表')}>
                            <i className={"icon Hui-iconfont"}>&#xe6f5;</i>
                            <div className={"name"}>无序列表</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-cut','&#xe6ef;','剪切')}>
                            <i className={"icon Hui-iconfont"}>&#xe6ef;</i>
                            <div className={"name"}>剪切</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-copy','&#xe6ea;','复制')}>
                            <i className={"icon Hui-iconfont"}>&#xe6ea;</i>
                            <div className={"name"}>复制</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-paste','&#xe6eb;','粘贴')}>
                            <i className={"icon Hui-iconfont"}>&#xe6eb;</i>
                            <div className={"name"}>粘贴</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-new','&#xe6f2;','新建')}>
                            <i className={"icon Hui-iconfont"}>&#xe6f2;</i>
                            <div className={"name"}>新建</div>
                        </li>
                    </ul>
                    <h2>银行、支付相关</h2>
                    <ul className={`${styles.icon_lists} clear`} style={{paddingLeft: '14px'}}>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-pay-alipay-1','&#xe71f;','支付宝支付1')}>
                            <i className={"icon Hui-iconfont"}>&#xe71f;</i>
                            <div className={"name"}>支付宝支付1</div>
                        </li>  
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-pay-alipay-2','&#xe71c;','支付宝支付2')}>
                            <i className={"icon Hui-iconfont"}>&#xe71c;</i>
                            <div className={"name"}>支付宝支付2</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-pay-weixin','&#xe719;','微信支付')}>
                            <i className={"icon Hui-iconfont"}>&#xe719;</i>
                            <div className={"name"}>微信支付</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-zhongguoyinxing','&#xe722;','中国银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe722;</i>
                            <div className={"name"}>中国银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-gongshangyinxing','&#xe71d;','工商银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe71d;</i>
                            <div className={"name"}>工商银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-jiansheyinxing','&#xe6f8;','建设银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe6f8;</i>
                            <div className={"name"}>建设银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-jiaotongyinxing','&#xe71a;','交通银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe71a;</i>
                            <div className={"name"}>交通银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-zhongguonongyeyinxing','&#xe713;','中国农业银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe713;</i>
                            <div className={"name"}>中国农业银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-youzhengyinxing','&#xe721;','邮政银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe721;</i>
                            <div className={"name"}>邮政银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-pufayinxing','&#xe71b;','浦发银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe71b;</i>
                            <div className={"name"}>浦发银行</div>
                        </li>  
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-huaxiayinxing','&#xe71e;','华夏银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe71e;</i>
                            <div className={"name"}>华夏银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-zhaoshangyinxing','&#xe704;','招商银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe704;</i>
                            <div className={"name"}>招商银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-zhongxinyinxing','&#xe723;','中信银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe723;</i>
                            <div className={"name"}>中信银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-shanghaiyinxing','&#xe724;','上海银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe724;</i>
                            <div className={"name"}>上海银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-wenzhouyinxing','&#xe6ed;','温州银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe6ed;</i>
                            <div className={"name"}>温州银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-guangdayinxing','&#xe6f0;','光大银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe6f0;</i>
                            <div className={"name"}>光大银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-minshengyinxing','&#xe6f4;','民生银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe6f4;</i>
                            <div className={"name"}>民生银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-qingdaoyinxing','&#xe6f6;','青岛银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe6f6;</i>
                            <div className={"name"}>青岛银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-beijingyinxing','&#xe6fb;','北京银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe6fb;</i>
                            <div className={"name"}>北京银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-guangdongfazhanyinxing','&#xe703;','广东发展银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe703;</i>
                            <div className={"name"}>广东发展银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-zheshangyinxing','&#xe712;','浙商银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe712;</i>
                            <div className={"name"}>浙商银行</div>
                        </li> 
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-cdbank','&#xe714;','成都银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe714;</i>
                            <div className={"name"}>成都银行</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-hangzhouyinxing','&#xe718;','杭州银行')}>
                            <i className={"icon Hui-iconfont"}>&#xe718;</i>
                            <div className={"name"}>杭州银行</div>
                        </li>
                    </ul>
                    <h2>其他</h2>
                    <ul className={`${styles.icon_lists} clear`} style={{paddingLeft: '14px'}}>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-tel','&#xe6c7;','电话')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6c7;</i>
                            <div className={"name"}>电话</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-tel2','&#xe6a3;','电话')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6a3;</i>
                            <div className={"name"}>电话</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-phone','&#xe696;','iphone手机')}> 
                            <i className={"icon Hui-iconfont"}>&#xe696;</i>
                            <div className={"name"}>iphone手机</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-phone-android','&#xe708;','安卓手机')}>
                            <i className={"icon Hui-iconfont"}>&#xe708;</i>
                            <div className={"name"}>安卓手机</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-pad','&#xe64c;','平板电脑')}> 
                            <i className={"icon Hui-iconfont"}>&#xe64c;</i>
                            <div className={"name"}>平板电脑</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-xianshiqi','&#xe64f;','PC')}> 
                            <i className={"icon Hui-iconfont"}>&#xe64f;</i>
                            <div className={"name"}>PC</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-zhaoxiangji','&#xe650;','照相机')}> 
                            <i className={"icon Hui-iconfont"}>&#xe650;</i>
                            <div className={"name"}>照相机</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-danfanxiangji','&#xe651;','单反相机')}> 
                            <i className={"icon Hui-iconfont"}>&#xe651;</i>
                            <div className={"name"}>单反相机</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-dayinji','&#xe652;','打印机')}> 
                            <i className={"icon Hui-iconfont"}>&#xe652;</i>
                            <div className={"name"}>打印机</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-lunzi','&#xe64d;','轮胎')}> 
                            <i className={"icon Hui-iconfont"}>&#xe64d;</i>
                            <div className={"name"}>轮胎</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-chajian','&#xe654;','插件')}> 
                            <i className={"icon Hui-iconfont"}>&#xe654;</i>
                            <div className={"name"}>插件</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-jieri','&#xe655;','节日')}> 
                            <i className={"icon Hui-iconfont"}>&#xe655;</i>
                            <div className={"name"}>节日</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-paixu','&#xe675;','排序')}> 
                            <i className={"icon Hui-iconfont"}>&#xe675;</i>
                            <div className={"name"}>排序</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-niming','&#xe624;','匿名')}> 
                            <i className={"icon Hui-iconfont"}>&#xe624;</i>
                            <div className={"name"}>匿名</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-pifu','&#xe62a;','换肤')}> 
                            <i className={"icon Hui-iconfont"}>&#xe62a;</i>
                            <div className={"name"}>换肤</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-2code','&#xe6cb;','二维码')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6cb;</i>
                            <div className={"name"}>二维码</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-saoyisao','&#xe682;','扫一扫')}> 
                            <i className={"icon Hui-iconfont"}>&#xe682;</i>
                            <div className={"name"}>扫一扫</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-search','&#xe683;','搜索')}> 
                            <i className={"icon Hui-iconfont"}>&#xe683;</i>
                            <div className={"name"}>搜索</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-zhongtumoshi','&#xe68c;','中图模式')}> 
                            <i className={"icon Hui-iconfont"}>&#xe68c;</i>
                            <div className={"name"}>中图模式</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-datumoshi','&#xe68d;','大图模式')}> 
                            <i className={"icon Hui-iconfont"}>&#xe68d;</i>
                            <div className={"name"}>大图模式</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-bigpic','&#xe6be;','大图模式')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6be;</i>
                            <div className={"name"}>大图模式</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-middle','&#xe6c0;','中图模式')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6c0;</i>
                            <div className={"name"}>中图模式</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-list','&#xe6bf;','列表模式')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6bf;</i>
                            <div className={"name"}>列表模式</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-shijian','&#xe690;','时间')}> 
                            <i className={"icon Hui-iconfont"}>&#xe690;</i>
                            <div className={"name"}>时间</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-more2','&#xe69c;','更多')}> 
                            <i className={"icon Hui-iconfont"}>&#xe69c;</i>
                            <div className={"name"}>更多</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-sim','&#xe629;','SIM卡')}> 
                            <i className={"icon Hui-iconfont"}>&#xe629;</i>
                            <div className={"name"}>SIM卡</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-hot','&#xe6c1;','火热')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6c1;</i>
                            <div className={"name"}>火热</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-paishe','&#xe6c2;','拍摄')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6c2;</i>
                            <div className={"name"}>拍摄</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-hot1','&#xe6c3;','热销')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6c3;</i>
                            <div className={"name"}>热销</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-new','&#xe6c4;','上新')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6c4;</i>
                            <div className={"name"}>上新</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-canshu','&#xe6c6;','产品参数')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6c6;</i>
                            <div className={"name"}>产品参数</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-dingwei','&#xe6c9;','定位')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6c9;</i>
                            <div className={"name"}>定位</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-weizhi','&#xe671;','定位</')}> 
                            <i className={"icon Hui-iconfont"}>&#xe671;</i>
                            <div className={"name"}>定位</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-html','&#xe69f;','HTML')}> 
                            <i className={"icon Hui-iconfont"}>&#xe69f;</i>
                            <div className={"name"}>HTML</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-css','&#xe6a0;','CSS')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6a0;</i>
                            <div className={"name"}>CSS</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-apple','&#xe64a;','苹果')}> 
                            <i className={"icon Hui-iconfont"}>&#xe64a;</i>
                            <div className={"name"}>苹果</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-android','&#xe6a2;','android')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6a2;</i>
                            <div className={"name"}>android</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-github','&#xe6d1;','github')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6d1;</i>
                            <div className={"name"}>github</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-html5','&#xe6d2;','html5')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6d2;</i>
                            <div className={"name"}>html5</div>
                        </li>
                        <li onClick={(e)=>onClick(e,'Hui-iconfont-huangguan','&#xe6d3;','皇冠')}> 
                            <i className={"icon Hui-iconfont"}>&#xe6d3;</i>
                            <div className={"name"}>皇冠</div>
                        </li>
                    </ul>
                </div>
            </Modal>
        )
    }
}