import React, {PureComponent} from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
import p from 'assets/images/s.gif';
import logo from 'assets/images/logo.png';
import logoMin from 'assets/images/logo-min.png';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;


const renderMenuItem =
    ({ id, name, icons, url, ...props }) =>
        <Menu.Item
            key={url || id}
            {...props}
        >
            <Link to={url}>
                {icons && <i className={`Hui-iconfont`} style={{paddingLeft: '16px',marginRight:'5px'}}>{icons}</i>}
                <span className="nav-text">{name}</span>
            </Link>
        </Menu.Item>;

const renderSubMenu =
    ({ id, name, icons, url, children, ...props }) =>
        <Menu.SubMenu
            key={url || id}
            title={
                <span>
                    {icons && <i className={`Hui-iconfont`} style={{paddingLeft: '16px',marginRight:'5px'}}>{icons}</i>}
                    <span className="nav-text">{name}</span>
                </span>
            }
            {...props}
        >
            {children && children.map(item => renderMenuItem(item))}
        </Menu.SubMenu>;

const SiderMenu = ({ menus, ...props }) => <Menu {...props}>
    {menus && menus.map(
        item => item.children && item.children.length ?
            renderSubMenu(item) : renderMenuItem(item)
    )}
</Menu>;



export default class extends PureComponent {

    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: '',
        firstHide: true,
        menus:[
            { url: '/app/dashboard/', name: '首页', icons: '', },
            {
                url: '/app/ui', name: 'UI', icons: '',
                children: [
                    { url: '/app/ui/buttons', name: '按钮', icons: '', },
                    { url: '/app/ui/icons', name: '图标', icons: '', },
                    { url: '/app/ui/spins', name: '加载中', icons: '', },
                    { url: '/app/ui/modals', name: '对话框', icons: '', },
                    { url: '/app/ui/notifications', name: '通知提醒框', icons: '', },
                    { url: '/app/ui/tabs', name: '标签页', icons: '', },
                    { url: '/app/ui/banners', name: '轮播图', icons: '', },
                    { url: '/app/ui/wysiwyg', name: '富文本', icons: '', },
                    { url: '/app/ui/drags', name: '拖拽', icons: '', },
                    { url: '/app/ui/gallery', name: '画廊', icons: '', },
                ],
            },
            {
                url: '/app/animation', name: '动画', icons: '',
                children: [
                    { url: '/app/animation/basicAnimations', name: '基础动画', icons: '', },
                    { url: '/app/animation/exampleAnimations', name: '动画案例', icons: '', },
                ],
            },
            {
                url: '/app/table', name: '表格', icons: '',
                children: [
                    { url: '/app/table/basicTable', name: '基础表格', icons: '', },
                    { url: '/app/table/advancedTable', name: '高级表格', icons: '', },
                    { url: '/app/table/asynchronousTable', name: '异步表格', icons: '', },
                ],
            },
            {
                url: '/app/form', name: '表单', icons: '',
                children: [
                    { url: '/app/form/basicForm', name: '基础表单', icons: '', },
                ],
            },
            {
                url: '/app/chart', name: '图表', icons: '',
                children: [
                    { url: '/app/chart/echarts', name: 'echarts', icons: '', },
                    { url: '/app/chart/recharts', name: 'recharts', icons: '', },
                ],
            },
            {
                url: '/sub4', name: '页面', icons: '',
                children: [
                    { url: '/login', name: '登录', icons: '', },
                    { url: '/404', name: '404', icons: '', },
                ],
            },
            {
                url: '/app/auth', name: '权限管理', icons: '',
                children: [
                    { url: '/app/auth/basic', name: '基础演示', icons: '', },
                    { url: '/app/auth/routerEnter', name: '路由拦截', icons: '', },
                ],
            }
        ]
    };
    componentDidMount() {
        this.setMenuOpen(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.onCollapse(nextProps.collapsed);
        this.setMenuOpen(nextProps)

        if(this.props.leftMenuList !== nextProps.leftMenuList){
            let menus = this.state.menus;
            menus.push(...nextProps.leftMenuList)
            this.setState({
                menus:menus
            })
        }

    }

    setMenuOpen = props => {
        const {path} = props;
        this.setState({
            openKey: path.substr(0, path.lastIndexOf('/')),
            selectedKey: path
        });
    };
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            firstHide: collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        const { popoverHide } = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide();
    };
    openMenu = v => {
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };
    render() {
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsed={this.props.collapsed}
                style={{overflowY: 'auto',background:'#fff'}}
            >
                <div className="logo">
                    <img className={`bg-repeat w100`} src={p} 
                        style={{backgroundImage: `url(${this.state.collapsed ? logoMin : logo})`}}/>
                </div>

                <SiderMenu
                    menus={this.state.menus}
                    onClick={this.menuClick}
                    theme="light"
                    mode="inline"
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={this.state.firstHide ? null : [this.state.openKey]}
                    onOpenChange={this.openMenu}
                />

              
                <style>
                    {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
                </style>
            </Sider>
        )
    }
}

