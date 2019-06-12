import React, {PureComponent} from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import p from 'assets/images/s.gif';
import logo from 'assets/images/logo.png';
import logoMin from 'assets/images/logo-min.png';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const renderMenuItem =
    ({ id, name, icon, url, ...props }) =>
        <Menu.Item
            key={url || id}
            {...props}
        >
            <Link to={url}>
                {icon && <Icon type={icon} />}
                <span className="nav-text">{name}</span>
            </Link>
        </Menu.Item>;


const renderSubMenu =
    ({ id, name, icon, url, children, ...props }) =>
        <Menu.SubMenu
            key={url || id}
            title={
                <span>
                    {icon && <Icon type={icon} />}
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
        menus: [ // 菜单相关路由
            { url: '/dashboard', name: '首页', icon: 'mobile', component: 'Dashboard' },
            {
                url: '/example/ui', name: 'UI', icon: 'scan',
                children: [
                    { url: '/example/ui/buttons', name: '按钮', component: 'Buttons'},
                    { url: '/example/ui/icons', name: '图标', component: 'Icons'},
                    { url: '/example/ui/spins', name: '加载中', component: 'Spins'},
                    { url: '/example/ui/modals', name: '对话框', component: 'Modals'},
                    { url: '/example/ui/notifications', name: '通知提醒框', component: 'Notifications'},
                    { url: '/example/ui/tabs', name: '标签页', component: 'Tabs'},
                    { url: '/example/ui/banners', name: '轮播图', component: 'Banners'},
                    { url: '/example/ui/wysiwyg', name: '富文本', component: 'WysiwygBundle'},
                    { url: '/example/ui/draggable', name: '拖拽', component: 'Draggable'},
                    { url: '/example/ui/gallery', name: '画廊', component: 'Gallery'}
                ],
            },
            {
                url: '/example/animation', name: '动画', icon: 'rocket',
                children: [
                    { url: '/example/animation/basicAnimations', name: '基础动画', component: 'BasicAnimations'},
                    { url: '/example/animation/exampleAnimations', name: '动画案例', component: 'ExampleAnimations'},
                ],
            },
            {
                url: '/example/tables', name: '表格', icon: 'copy',
                children: [
                    { url: '/example/tables/basicTable', name: '基础表格', component: 'BasicTable'},
                    { url: '/example/tables/advancedTable', name: '高级表格', component: 'AdvancedTable'},
                    { url: '/example/tables/asynchronousTable', name: '异步表格', component: 'AsynchronousTable'},
                ],
            },
            {
                url: '/example/forms', name: '表单', icon: 'edit',
                children: [
                    { url: '/example/forms/basicForm', name: '基础表单', component: 'BasicForm'},
                ],
            },
            {
                url: '/example/charts', name: '图表', icon: 'area-chart',
                children: [
                    { url: '/example/charts/echarts', name: 'echarts', component: 'Echarts' },
                    { url: '/example/charts/recharts', name: 'recharts', component: 'Recharts' },
                ],
            },
            {
                url: '/example/cssModule', name: 'cssModule', icon: 'star', component: 'Cssmodule'
            }
        ],
    };
    componentDidMount() {
        this.setMenuOpen(this.props);
        this.setMenusData(this.props.leftMenuList)
    }
    componentWillReceiveProps(nextProps) {
        this.onCollapse(nextProps.collapsed);
        this.setMenuOpen(nextProps)

        if(this.props.leftMenuList !== nextProps.leftMenuList){
            this.setMenusData(nextProps.leftMenuList)
        }
    }

    setMenusData = (leftMenuList)=>{
        let menus = this.state.menus;
        menus.push(...leftMenuList);
        this.setState({
            menus:menus
        })
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
                style={{overflowY: 'auto'}}
            >
                <div className="logo">
                    <img src={this.state.collapsed ? logoMin : logo} width="100%" />
                </div>

                <SiderMenu
                    menus={this.state.menus}
                    onClick={this.menuClick}
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

